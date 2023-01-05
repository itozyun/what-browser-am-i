const gulp            = require('gulp'),
      gulpDPZ         = require('gulp-diamond-princess-zoning'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      fs              = require('fs'),
      JSDOM           = require('jsdom').JSDOM,
      externsJs       = './src/js-externs/externs.js',
      moduleName      = 'what-browser-am-i',
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'document,navigator,screen,parseFloat,Number',
      copyright       = '(c) 2021-2023 itozyun, https://github.com/itozyun/what-browser-am-i, MIT License.';

      gulp.task('dist', gulp.series(
        function(){
            return gulp.src( './src/js/**/*.js' )
                .pipe(
                    gulpDPZ(
                        {
                            labelGlobal        : 'global',
                            labelPackageGlobal : '*',
                            packageGlobalArgs  : [ 'ua,window,' + globalVariables + ',undefined', 'ua,window,' + globalVariables + ',void 0' ],
                            basePath           : './src/js'
                        }
                    )
                ).pipe(
                    ClosureCompiler(
                        {
                            externs           : [ externsJs ],
                            compilation_level : 'ADVANCED',
                            warning_level     : 'VERBOSE',
                            language_in       : 'ECMASCRIPT3',
                            language_out      : 'ECMASCRIPT3',
                            output_wrapper    :
                                '/** ' + copyright + ' */\n' +
                                'whatBrowserAmI={};(function(ua){\n%output%\n})(whatBrowserAmI);',
                            js_output_file    : 'whatBrowserAmI.js'
                        }
                    )
                ).pipe(gulp.dest( './dist' ));
        },
        function(){
            return gulp.src( './src/js/**/*.js' )
                .pipe(
                    gulpDPZ(
                        {
                            labelGlobal        : 'global',
                            labelPackageGlobal : '*',
                            packageGlobalArgs  : [ 'ua,window,' + globalVariables + ',undefined', 'ua,window,' + globalVariables + ',void 0' ],
                            basePath           : './src/js'
                        }
                    )
                ).pipe(
                    ClosureCompiler(
                        {
                            externs           : [ externsJs ],
                            compilation_level : 'ADVANCED',
                            warning_level     : 'VERBOSE',
                            language_in       : 'ECMASCRIPT3',
                            language_out      : 'ECMASCRIPT3',
                            output_wrapper    :
                                '/** ' + copyright + ' */\n' +
                                'var ua={};%output%;' +
                                'module.export=ua;',
                            js_output_file    : 'index.js'
                        }
                    )
                ).pipe(gulp.dest( './dist' ));
        }
    ));

gulp.task('docs', gulp.series(
    function(){
        return gulp.src( './src/js/**/*.js' )
            .pipe(
                gulpDPZ(
                    {
                        labelGlobal        : 'global',
                        labelPackageGlobal : '*',
                        packageGlobalArgs  : [ 'ua,window,' + globalVariables + ',undefined', 'ua,this,' + globalVariables + ',void 0' ],
                        basePath           : './src/js'
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [ externsJs ],
                        compilation_level : 'ADVANCED',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    : 'ua={};%output%',
                        js_output_file    : tempJsName
                    }
                )
            ).pipe(gulp.dest( tempDir ));
    },
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