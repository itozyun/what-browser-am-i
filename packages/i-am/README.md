# i-am

1. ブラウザ×バージョン判定結果(@what-browser-am-i/who)を元に、使用するコードを切り替える

2. Closure Compiler でのコンパイル(ビルド)時にブラウザとバージョン(レンジ)を指定して最適化する

## Cross Browser Library

~~~js
goog.require('iAm.all');

if (iAm.AnyTrident.lt(9)) {
    // for IE ~8
} else {
    // for IE 9+ and Other Browsers
};
~~~

~~~js
const minify = true;
const iAm = require('what-browser-am-i')(minify);

const { series, parallel } = require('gulp');

function createTask( engine, gteVersion, ltVersion ){
    return (done) => {
        src()
        .pipe(
            ClosureCompiler(
                {
                    compilation_level : 'ADVANCED',
                    define            : [
                        'iAm.DEFINE.MINIFY=' + minify,
                        'iAm.DEFINE.ASSUME_ENGINE=' + engine,
                        'iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION=' + gteVersion
                        'iAm.DEFINE.ASSUME_LT__ENGINE_VERSION=' + ltVersion
                        /* 'iAm.DEFINE.ASSUME_PLATFORM=' +
                        'iAm.DEFINE.ASSUME_GTE_PLATFORM_VERSION=' +
                        'iAm.DEFINE.ASSUME_LT__PLATFORM_VERSION=' +
                        'iAm.DEFINE.ASSUME_DEVICE=' +
                        'iAm.DEFINE.ASSUME_GTE_DEVICE_VERSION=' +
                        'iAm.DEFINE.ASSUME_LT__DEVICE_VERSION=' +
                        'iAm.DEFINE.ASSUME_DEVICE_TYPE=' + */
                    ],
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3'
                }
            )
        ).dest();
    };
};

const VERSION_TICK = [ 0.1, 1, 4, 10, 28, 100 ];
const tasks = [];

for (i=0; get = VERSION_TIC[i];) {
    lt = VERSION_TIC[++i] || Number.MAX_SAFE_INTEGER;

    tasks.push( createTask( iAm.EnumEngine.Chromium, gte, lt ) );
};

exports.default = series.apply( null, tasks );

~~~
