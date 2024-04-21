const pkg             = require('./package.json'),
      gulp            = require('gulp'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      postProcessor   = require( 'es2-postprocessor' );
      fs              = require('fs'),
      JSDOM           = require('jsdom').JSDOM,
      externsJs       = './src/js-externs/externs.js',
      moduleName      = pkg.name,
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'document,navigator,screen,parseFloat,Number',
      copyright       = moduleName + '@' + pkg.version + '\n' +
                       '(c) 2021-' + (new Date).getFullYear() + ' ' + pkg.author + '(' + pkg.homepage + '), ' + pkg.license + '.';

let minify       = false;
let uaObjectName = 'whatBrowserAmI';
let fileName     = 'whatBrowserAmI.js';
let outputDir    = './test';
let formatting   = 'PRETTY_PRINT';

gulp.task( 'dist', gulp.series(
    function(){
        const funcConpare = fs.readFileSync( './src/js-global/conpare.js' ).toString();

        return gulp
            .src(
                [ './src/closure-primitives/base.js', './src/cjs/**/*.js' ]
            ).pipe(
                ClosureCompiler(
                    {
                        dependency_mode  : 'PRUNE',
                        entry_point       : 'goog:allfeatures',
                        externs           : [ externsJs ],
                        compilation_level : 'ADVANCED',
                        define            : [
                            'whatBrowserAmI.DEFINE.MINIFY=' + minify
                        ],
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    :
                            'var ' + uaObjectName + '=' + ( minify ? '[]' : '{}' ) + ';' +
                            funcConpare.split( 'ua.conpare' ).join( uaObjectName + '.conpare' ) +
                            '(function(ua, window, ' + globalVariables + '){\n' +
                                '%output%\n' +
                            '})(' + uaObjectName + ', this, ' + globalVariables + ');'
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        externs        : [ externsJs ],
                        warning_level  : 'QUIET',
                        language_in    : 'ECMASCRIPT3',
                        language_out   : 'ECMASCRIPT3'
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
                        formatting        : formatting,
                        js_output_file    : fileName,
                        output_wrapper    : '\/* ' + copyright + ' *\/\n' + '%output%',
                    }
                )
            ).pipe(
                gulp.dest( outputDir )
            );
    }
));

gulp.task( 'docs', gulp.series(
    function( cb ){
        uaObjectName = 'ua';
        fileName     = tempJsName;
        outputDir    = tempDir;
        formatting   = 'SINGLE_QUOTES';
        cb();
    },
    'dist',
    function( cb ){
        fs.readFile( tempDir + '/' + tempJsName,
            function( error, buffer ){
                if( error ){
                    throw error;
                };
                var js = buffer.toString();

                fs.readFile( './docs/index.html',
                    function( error, buffer ){
                        if( error ){
                            throw error;
                        };
                        var htmlString = buffer.toString(),
                            jsdom      = new JSDOM( htmlString ),
                            document   = jsdom.window.document,
                            script     = document.getElementsByTagName( 'script' )[ 1 ];
                        
                        script.textContent = js;
                        fs.writeFile( './docs/index.html', jsdom.serialize(),
                            function( error ){
                                if( error ){
                                    throw error;
                                };
                                cb();
                            }
                        );
                    }
                );
            }
        );
    }
));