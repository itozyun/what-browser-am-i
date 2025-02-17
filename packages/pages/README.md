# front

実装状況と列挙のされ方でブラウザを判定できるようにする

1. バージョン情報などの表示、修正フォーム
2. 全プロパティを集める
   * Object.getOwnPropertyNames が未実装の環境でほとんどの API が列挙されない件…
   * カタログで調べるしかない…
3. HTML 要素の属性の初期値 
4. HTML 要素の style
   * ユーザー style で変わる?
5. img タグに埋め込んでサーバに送信

['undefined'], ['NaN'], ['Infinity'], ['-Infinity'], ['Symbol@'], ['RegExp@']