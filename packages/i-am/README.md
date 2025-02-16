# i-am

1. ブラウザ×バージョン判定結果(@what-browser-am-i/who)を元に、使用するコードを切り替える

2. Closure Compiler でのコンパイル(ビルド)時にブラウザとバージョン(レンジ)を指定して最適化する

~~~js

if(iAm.Trident.Lt(9)){
    // for IE ~8
} else {
    // for IE 9+ and Other Browsers
};
~~~