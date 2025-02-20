const { src, dest, series }  = require( 'gulp' ),
      ClosureCompiler        = require('google-closure-compiler').gulp(),
      postProcessor          = require( 'es2-postprocessor' );
      fs                     = require('fs'),
      globalVariables        = 'document,navigator,screen,parseFloat,Number',
      { tempDir, copyright } = require('./common.js');

let minify     = false;
let isPrettify = false;
let outputDir  = './dist';
let funcConpare;

function compile( isBrowser, uaObjectName, fileName ){
    const language = isBrowser ? 'ECMASCRIPT3' : 'ECMASCRIPT6';

    return function(){
        return src(
                [
                    './src/closure-primitives/base.js',
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
                        language_in       : language,
                        language_out      : language,
                        output_wrapper    :
                            'var ' + uaObjectName + '=' + ( minify ? '[]' : '{}' ) + ';' +
                            uaObjectName + '.conpare = ' + funcConpare + ';\n' +
                            '(function(ua, window, ' + globalVariables + '){\n' +
                                '%output%\n' +
                            '})(' + uaObjectName + ', this, ' + globalVariables + ');' +
                            ( isBrowser ? '' : 'module.export=' + uaObjectName )
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
                        output_wrapper    : '\/* ' + copyright + ' *\/\n' + '%output%'
                    }
                )
            ).pipe(
                dest( outputDir )
            );
    };
};

module.exports = series(
    function( cb ){
        fs.readFile( './src/js/iAm/conpare.js',
            function( err, buffer ){
                if( !err ){
                    funcConpare = buffer.toString().split( 'iAm.conpare = ' )[ 1 ];
                    cb();
                };
            }
        )
    },
    compile( true, 'whatBrowserAmI', 'whatBrowserAmI.js' ),
    compile( false, 'ua', 'index.js' )
);