const pkg             = require('./package.json'),
      gulp            = require('gulp'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      postProcessor   = require( 'es2-postprocessor' );
      fs              = require('fs'),
      // externsJs       = './src/js-externs/externs.js',
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
let funcConpare;

gulp.task( 'dist', gulp.series(
    function( cb ){
        fs.readFile( './src/js/who/conpare.js',
            function( err, buffer ){
                if( !err ){
                    funcConpare = 'var ' + uaObjectName + '=' + ( minify ? '[]' : '{}' ) + ';' +
                                  uaObjectName + '.conpare' +
                                  buffer.toString().split( 'who.conpare' )[ 1 ];
                    cb();
                };
            }
        )
    },
    function(){
        return gulp
            .src(
                [ './src/closure-primitives/base.js', './src/js/**/*.js' ]
            ).pipe(
                ClosureCompiler(
                    {
                        dependency_mode  : 'PRUNE',
                        entry_point       : 'goog:allfeatures',
                        // externs           : [ externsJs ],
                        compilation_level : 'ADVANCED',
                        define            : [
                            'iAm.DEFINE.MINIFY=' + minify
                        ],
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    :
                            funcConpare +
                            '(function(ua, window, ' + globalVariables + '){\n' +
                                '%output%\n' +
                            '})(' + uaObjectName + ', this, ' + globalVariables + ');'
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        // externs        : [ externsJs ],
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
                        output_wrapper    : '\/* ' + copyright + ' *\/\n' + '%output%'
                    }
                )
            ).pipe(
                gulp.dest( outputDir )
            );
    }
));
