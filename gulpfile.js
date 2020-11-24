const gulp            = require('gulp'),
      gulpDPZ         = require('gulp-diamond-princess-zoning'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      Cheerio         = require('gulp-cheerio'),
      externsJs       = './src/__externs.js',
      moduleName      = 'what-browser-am-i',
      tempJsName      = 'temp.js',
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      globalVariables = 'ua,window,document,navigator,screen,parseFloat,Number',
      copyright       = '@preserve Copyright 2020 itozyun, https://github.com/itozyun/what-browser-am-i, MIT License.';

      gulp.task('dist', gulp.series(
        function(){
            return gulp.src( [ './src/**.js', '!' + externsJs ] )
                .pipe(
                    gulpDPZ(
                        {
                            labelGlobal        : 'global',
                            labelPackageGlobal : '###',
                            labelModuleGlobal  : '###',
                            packageGlobalArgs  : globalVariables,
                            basePath           : 'src'
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
                                '/** ' + copyright + ' */' +
                                'whatBrowserAmI={};(function(ua){\n%output%\n})(whatBrowserAmI)',
                            js_output_file    : '_' + tempJsName
                        }
                    )
                )
                .pipe(
                    ClosureCompiler(
                        {
                            externs           : [ externsJs ],
                            language_in       : 'ECMASCRIPT3',
                            language_out      : 'ECMASCRIPT3',
                            js_output_file    : 'whatBrowserAmI.js'
                        }
                    )
                )
                .pipe(gulp.dest( './' ));
        },
        function(){
            return gulp.src( [ './src/**.js', '!' + externsJs ] )
                .pipe(
                    gulpDPZ(
                        {
                            labelGlobal        : 'global',
                            labelPackageGlobal : '###',
                            labelModuleGlobal  : '###',
                            packageGlobalArgs  : globalVariables,
                            basePath           : 'src'
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
                                '/** ' + copyright + ' */' +
                                'var ua={};\n%output%\n' +
                                'module.export=ua;',
                            js_output_file    : '_' + tempJsName
                        }
                    )
                )
                .pipe(
                    ClosureCompiler(
                        {
                            externs           : [ externsJs ],
                            language_in       : 'ECMASCRIPT5',
                            language_out      : 'ECMASCRIPT5',
                            js_output_file    : 'index.js'
                        }
                    )
                )
                .pipe(gulp.dest( './' ));
        }
    ));

gulp.task('docs', gulp.series(
    function(){
        return gulp.src( [ './src/**.js', '!' + externsJs ] )
            .pipe(
                gulpDPZ(
                    {
                        labelGlobal        : 'global',
                        labelPackageGlobal : '###',
                        labelModuleGlobal  : '###',
                        packageGlobalArgs  : globalVariables,
                        basePath           : 'src'
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
                        output_wrapper    : 'ua={};\n%output%\n',
                        js_output_file    : '_' + tempJsName
                    }
                )
            )
            .pipe(
                ClosureCompiler(
                    {
                        externs           : [ externsJs ],
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        js_output_file    : tempJsName
                    }
                )
            )
            .pipe(gulp.dest( tempDir ));
    },
    function( cb ){
        const minjs = require('fs').readFileSync( tempDir + '/' + tempJsName ).toString().replace( '\n', '' );
        console.log(minjs.length + 'bytes.');

        return gulp.src('./docs/index.html')
            .pipe(
                Cheerio(
                    {
                        run : function($){
                            $('script').eq(1).text( minjs );
                        } //, parserOptions: { xmlMode: true }
                    }
                )
            ).pipe(gulp.dest('./docs'));
    }
));