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
3. `"hoge" in obj` in 構文と `instanceof` を使用していない為、IE4 以降で動作します。併せて、正規表現を使っていない為、モバイル IE4 移行で動作します。 

## プロパティ

| property         | data type        | example       |
|:-----------------|:-----------------|:--------------|
| PLATFORM         | string           |               |
| PLATFORM_VERSION | string \| object |               |
| ENGINE           | string           |               |
| ENGINE_VERSION   | string \| object |               |
| BRAND            | string           |               |
| BRAND_VERSION    | string \| object |               |
| DEVICE           | string           |               |
| DEVICE_VERSION   | string \| object |               |
| PCSITE_MODE      | boolean          | true          |
| DEVICE_TYPE      | number           |               |

## How to build

1. プロジェクトフォルダにサブモジュールとして追加します。
2. [./gulpfile.js](./gulpfile.js) を参考に gulp タスク等を作成します。ミニファイには Closure Compiler を使用します。

### To build ./index.js

~~~bat
gulp dist
~~~

### To build ./docs/index.html

~~~bat
gulp docs
~~~


### build options 

| property                                     | data type | default value |
|:---------------------------------------------|:----------|:--------------|
| WHAT_BROWSER_AM_I_DEFINE_BRAND_ENABLED       | boolean   | true          |
| WHAT_BROWSER_AM_I_DEFINE_PCSITE_MODE_ENABLED | boolean   | true          |
| WHAT_BROWSER_AM_I_DEFINE_IOS_DEVICE_ENABLED  | boolean   | true          |
| WHAT_BROWSER_AM_I_DEFINE_DEVICE_TYPE_ENABLED | boolean   | true          |

## links

* https://github.com/heeroluo/uadetector
* https://wiki.mozilla.org/Compatibility/UADetectionLibraries#JavaScript_2