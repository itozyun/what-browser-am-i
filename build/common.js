const pkg             = require( '../package.json' ),
      moduleName      = pkg.name,
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      copyright       = moduleName + '@' + pkg.version + '\n' +
                       '(c) 2021-' + (new Date).getFullYear() + ' ' + pkg.author + '(' + pkg.homepage + '), ' + pkg.license + '.',
      { src, dest }   = require( 'gulp' ),
      ClosureCompiler = require( 'google-closure-compiler' ).gulp(),
      postProcessor   = require( 'es2-postprocessor' ),
      fs              = require( 'fs' ),
      globalVariables = 'document,navigator,screen,parseFloat,Number',
      funcConpare     = fs.readFileSync( './src/js/iAm/conpare.js', 'utf8' ).split( 'iAm.conpare = ' )[ 1 ];

module.exports.tempDir = tempDir;
module.exports.copyright = copyright;
module.exports.getEnumValues =
    function( cb ){
        function getValue(){
            const category = categories.shift();

            if( category ){
                fs.readFile(
                    './src/js/iAm/CONST/Enum' + category + '.js',
                    function( error, buffer ){
                        if( !error ){
                            enums[ category ] = [ true, false ];
                            enums[ category ].forEach(
                                ( minify, index, values ) => {
                                    values[ index ] = eval(
                                        '(' +
                                            buffer.toString()
                                                .split( 'iAm.Enum' + category + ' =' )[ 1 ]
                                                .split( 'iAm.DEFINE.MINIFY' ).join( '' + minify )
                                                .split( 'iAm.UNKNOWN_VALUE' ).join( minify ? '0' : '""' )
                                                .split( '};' ).join( '}' ) +
                                        ')'
                                    );
                                }
                            );
                            getValue();
                        };
                    }
                );
            } else {
                cb( enums );
            };
        };
        const enums = {};
        const categories = [ 'Platform', 'Device', 'DeviceType', 'Engine', 'Brand' ];

        getValue();
    };

module.exports.compileWho = function( isGoogModule, isNodeModule, minify, uaObjectName, fileName ){
    if( isGoogModule && isNodeModule ){
        throw 'error!';
    };
    return function(){
        return src(
                [
                    './.submodules/es2-json/src/closure-primitives/base.js',
                    './.submodules/es2-json/.submodules/es2-core/src/js/**/*.js',
                    './src/js/**/*.js'
                ]
            ).pipe(
                ClosureCompiler(
                    {
                        dependency_mode   : 'PRUNE',
                        entry_point       : 'goog:who.all',
                        compilation_level : 'ADVANCED',
                        define            : [
                            'iAm.DEFINE.MINIFY=' + minify
                        ],
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        js_output_file    : fileName,
                        output_wrapper    :
`${isGoogModule ? 'goog.provide("' + uaObjectName + '")' : ''}

/** @suppress {checkVars} */
var ${uaObjectName} = ${minify ? '[]' : '{}'};

/** @suppress {checkVars|deprecated} */
${uaObjectName}.conpare = ${funcConpare};

/** @suppress {checkTypes|deprecated} */
(function(ua, window, ${globalVariables}){
%output%
})(${uaObjectName}, this, ${globalVariables});
${!isNodeModule ? '' : 'module.export=' + uaObjectName}
`
                    }
                )
            ).pipe(
                dest( tempDir )
            );
    };
};

module.exports.finalize = function( isBrowser, isPrettify, outputDir, fileName ){
    const language = isBrowser ? 'ECMASCRIPT3' : 'ECMASCRIPT6';

    return function(){
        return src( tempDir + '/' + fileName
            ).pipe(
                postProcessor.gulp(
                    {
                        hoist : true
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        warning_level : 'QUIET',
                        language_in   : language,
                        language_out  : language
                    }
                )
            ).pipe(
                postProcessor.gulp(
                    {
                        minIEVersion    : 5,
                        minOperaVersion : 7,
                        minGeckoVersion : 0.6
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        compilation_level : 'WHITESPACE_ONLY',
                        warning_level     : 'QUIET',
                        formatting        : isPrettify ? 'PRETTY_PRINT' : 'SINGLE_QUOTES',
                        js_output_file    : fileName,
                        output_wrapper    : '/* ' + copyright + ' */\n' + '%output%'
                    }
                )
            ).pipe(
                dest( outputDir )
            );
    };
};