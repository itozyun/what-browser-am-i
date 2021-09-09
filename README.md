# what-browser-am-i

クライアントサイド専用の Web ブラウザ判定用ライブラリです。新旧を問わず、広範な DHTML ブラウザでの動作を目標に開発しています。2020年8月7日以前は、開発は [itozyun/web-doc-base で行われていました](https://github.com/itozyun/web-doc-base/commit/0fc3de23cc6c073efe5959ffb9e5381635f89811)。

![明恵夫人から「熱意が素晴らしい」と聞いていた学園理事長の名前を失念しかける安倍首相](maybe-kagoike.jpg "籠池さんかな？")

明恵夫人から「熱意が素晴らしい」と聞いていた学園理事長の名前を失念しかける安倍首相 [TV TOKYO](https://www.tv-tokyo.co.jp/genre_biz/), [出典](https://twitter.com/jucnag/status/842259402321145856)

## Index

1. [特徴](#特徴)
2. [フォルダ構造](#フォルダ構造)
3. [テストページ](#テストページ)
4. [links](#links)
5. [License](#License)
6. ビルド済の javascript を使う
   1. [使用法](dist/README.md#使用法)
   2. [メソッド](dist/README.md#メソッド)
   3. [プロパティ](dist/README.md#プロパティ)
7. テスト・開発・最適化ビルド
   1. [開発環境を用意する](docs/README.md#開発環境を用意する)
   2. [what-browser-am-i をサブモジュールとしてプロジェクトに組み込む](docs/README.md#what-browser-am-iをサブモジュールとしてプロジェクトに組み込む)
      1. [最適化オプションを使ってプロジェクトで使用する](docs/README.md#最適化オプションを使ってプロジェクトで使用する)
      2. [ビルドオプション](docs/README.md#ビルドオプション)

## 特徴

1. デスクトップ版を表示する、にチェックして UA 偽装されていても正しいエンジンを取得します。併せて、ユーザーのデスクトップ版を表示して欲しい、という意図も検出します。
    * 参照 [『「デスクトップ版を表示する」にチェックを付けると平然とUAを偽装するAndroid用標準ブラウザの判定をムキになってしてみます』](//outcloud.blogspot.com/2017/10/uaDetector.html)
2. Android, iOS 用ブラウザでは同一の WebView を使いつつも、アドレスバーの動作等のビューポートの挙動が異なるため、ブランド名を取得します。
    * 参照 [『尋常でないレベルでブラウザを判定するライブラリ、what-browser-am-iをnpmに公開しました』](//outcloud.blogspot.com/2020/08/what-browser-am-i.html)
3. `"hoge" in obj` 構文と `instanceof`, `try{}catch(){}` を使用していない為、IE4 以降で動作します。併せて、正規表現を使っていない為、モバイル IE4 以降で動作します。

## フォルダ構造

| directories | description          |
|:------------|:------------------------------|
| [dist/](dist/README.md)       | ビルド済ファイルを配置しています。 |
| [docs/](docs/README.md)       | ブラウザ判定実行用の index.html を配置しています。npm パッケージには添付しまん。必要であれば内容は [github pages](https://itozyun.github.io/what-browser-am-i/) で確認します。 |
| [src/](src/README.md)        | ソースファイル |
| gulpfile.js |  |

## テストページ

* [Test page](https://itozyun.github.io/what-browser-am-i/) (or [bit.ly/39Wvkct](https://bit.ly/39Wvkct))
* [http version](http://my-http-proxy-856.appspot.com/itozyun.github.io/what-browser-am-i/) (or [bit.ly/3ft54YC](http://bit.ly/3ft54YC))

## links

* https://github.com/heeroluo/uadetector
* https://wiki.mozilla.org/Compatibility/UADetectionLibraries#JavaScript_2

## License

[MIT License](https://opensource.org/licenses/MIT)