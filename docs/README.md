[../](../README.md), [github](https://github.com/itozyun/waht-browser-am-i/), [npm](https://www.npmjs.com/package/what-browser-am-i)

---

# テスト・開発・最適化ビルド

この階層には、ブラウザ判定実行用の index.html を配置しています。

## 開発環境を用意する

node.js と git をインストールします。続いて `git clone` します。

~~~
git clone https://github.com/itozyun/what-browser-am-i
~~~

依存パッケージをインストールします。./node_modules/ 下にパッケージが追加されます。

~~~
npm i
~~~

./src/ 以下の内容を変更した後に、次のコマンドを実行します。

~~~
gulp docs
~~~

docs/index.html をブラウザで閲覧して動作確認します。

次のコマンドでディストリビューション ./dist/index.js, ./dist/whatBrowserAmI.js を更新します。

~~~
gulp dist
~~~

## what-browser-am-iをサブモジュールとしてプロジェクトに組み込む

[web-doc-base/gulpfile.js](https://github.com/itozyun/web-doc-base/blob/master/gulpfile.js) が参考になります。

### 最適化オプションを使ってプロジェクトで使用する

1. `DEFINE_WHAT_BROWSER_AM_I__MINIFY` を使ってビルドします
2. プロパティ及び名称は全て数値で提供されます。この定数は `./src/js_globals/**/*.js` に記述されています。
3. [web-doc-base/src/js-inline/dynamicViewPort.js](https://github.com/itozyun/web-doc-base/blob/master/src/js-inline/dynamicViewPort.js) 等を参考にして、必要な値を取得します。

### ビルドオプション

Closure Compiler の `@define` です。

| property                                           | data type | default value | node |
|:---------------------------------------------------|:----------|:--------------|:-----|
| DEFINE_WHAT_BROWSER_AM_I__MINIFY                   | boolean   | `false`       | Since version 0.6 |
| DEFINE_WHAT_BROWSER_AM_I__BRAND_ENABLED            | boolean   | `true`        | |
| DEFINE_WHAT_BROWSER_AM_I__PCSITE_REQUESTED_ENABLED | boolean   | `true`        | |
| DEFINE_WHAT_BROWSER_AM_I__IOS_DEVICE_ENABLED       | boolean   | `true`        | |
| DEFINE_WHAT_BROWSER_AM_I__DEVICE_TYPE_ENABLED      | boolean   | `true`        | |