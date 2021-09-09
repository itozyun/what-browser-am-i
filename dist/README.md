[../](../README.md), [github](https://github.com/itozyun/waht-browser-am-i/), [npm](https://www.npmjs.com/package/what-browser-am-i)

---

# ビルド済の javascript を使う

## 使用法

~~~js
const whatBrowserAmI = require('what-browser-am-i');

console.log(whatBrowserAmI.ENGINE); // Trident
console.log(whatBrowserAmI.ENGINE_VERSION); // 8
~~~

or

~~~html
<html>
<script src="./whatBrowserAmI.js"></script>
<script>
console.log(whatBrowserAmI.ENGINE); // Gecko
console.log(whatBrowserAmI.ENGINE_VERSION); // "1.9.1"
</script>
~~~

## メソッド

### conpare( v1, v2 )

バージョン番号(文字列)の大小を比較をします。後ろの `0` は無視するので、`"2.0.0"` と `2` はイコールと判定します。

~~~js
// Firefox 3.5<=
isFirefoxGte35 = whatBrowserAmI.Gecko && 0 <= whatBrowserAmI.conpare(whatBrowserAmI.ENGINE_VERSION, '1.9.1');
~~~

#### 引数

| name     | data type        | example          |
|:---------|:-----------------|:-----------------|
| v1       | string \| number | `"1.9.1"`, `1.9` |
| v2       | string \| number | `"1.9.1"`, `1.9` |

#### 戻り値

| value     | description | example               |
|:----------|:------------|:----------------------|
| `1`       | v1 > v2     | `"1.9.1"` > `1.9`     |
| `0`       | v1 == v2    | `"1.9.0"` == `1.9`    |
| `-1`      | v1 < v2     | `"1.9.1"` < `"1.9.2"` |

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
| PCSITE_REQUESTED | boolean          | `true`        |
| DEVICE_TYPE      | number           |               |