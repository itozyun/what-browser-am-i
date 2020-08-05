# what-browser-am-i

クライアントサイド専用の Web ブラウザ判定用ライブラリです。広範な DHTML ブラウザでの動作を目標に開発しています。

![明恵夫人から「熱意が素晴らしい」と聞いていた学園理事長の名前を失念しかける安倍首相](maybe-kagoike.jpg "籠池さんかな？")

明恵夫人から「熱意が素晴らしい」と聞いていた学園理事長の名前を失念しかける安倍首相 [出典](https://twitter.com/jucnag/status/842259402321145856)

## テストページ

[test page](https://itozyun.github.io/what-browser-am-i/) or [bit.ly/39Wvkct](https://bit.ly/39Wvkct), 
[http version](http://my-http-proxy-856.appspot.com/itozyun.github.io/what-browser-am-i/) or [bit.ly/3ft54YC](http://bit.ly/3ft54YC)

## 特徴

1. デスクトップ版を表示する、にチェックして UA 偽装されていても正しいブラウザエンジンを取得します。併せて、ユーザーのデスクトップ版を表示して欲しい、という意図も検出します。
2. ブランドの判定 Android, iOS 用ブラウザでは同一の WebView を使いつつも、アドレスバーの動作等のビューポートの挙動が異なるため、ブランド名を取得します。
3. 正規表現を使わない、ES3 の `"hoge" in obj` in 構文と `instanceof` を使用していない為、IE4.01 以降、モバイル IE4 でも動作します


## How to build

1. プロジェクトフォルダにサブモジュールとして追加します。
2. [./gulpfile.js](./gulpfile.js) を参考に gulp タスク等を作成します。ミニファイには Closure Compiler を使用します。

### build options 



## links

* https://github.com/heeroluo/uadetector
* https://wiki.mozilla.org/Compatibility/UADetectionLibraries#JavaScript_2