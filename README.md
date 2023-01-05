# what-browser-am-i

Library for client-side web browser judgment. It has been developed to work with a wide range of DHTML browsers, both old and new.

Prior to August 7, 2020, [development was done at itozyun/web-doc-base](https://github.com/itozyun/web-doc-base/commit/0fc3de23cc6c073efe5959ffb9e5381635f89811).

![Prime Minister Abe nearly loses the name of the school's chairman, who was told by Mrs. Akie that "his enthusiasm was wonderful".](maybe-kagoike.jpg "Is it Kagoike-san?")

Prime Minister Abe nearly loses the name of the school's chairman, who was told by Mrs. Akie that "his enthusiasm was wonderful". [TV TOKYO](https://www.tv-tokyo.co.jp/genre_biz/), [source (e.g. quotation)](https://twitter.com/jucnag/status/842259402321145856)

## Index

1. [Features](#Features)
2. [Folders](#Folders)
3. [Test Page](#Test_Page)
4. [Usage](#Usage)
   1. [Properties](#Properties)
   2. [Method](#Method)
      1. conpare(v1, v2)
5. [Development](#Development)
   1. [Preparation](#Preparation)
   2. [Development](#Development)
   3. [Distribute](#Distribute)
   4. [Include what-browser-am-i as a submodule in your project](#Include_what-browser-am-i_as_a_submodule_in_your_project)
6. [License](#License)

## 1. Features

1. Even if the visitor has checked "Request desktop site" and the UA is spoofed, the correct engine will be retrieved. In addition, you can detect the viewer's intention to "Prefer desktop version".
    * For your reference [『「デスクトップ版を表示する」にチェックを付けると平然とUAを偽装するAndroid用標準ブラウザの判定をムキになってしてみます』](//outcloud.blogspot.com/2017/10/uaDetector.html)
2. Third-party browsers for Android and iOS use the same WebView but have different viewport behavior, such as address bar behavior. Therefore, retrieve the brand name.
    * For your reference [『尋常でないレベルでブラウザを判定するライブラリ、what-browser-am-iをnpmに公開しました』](//outcloud.blogspot.com/2020/08/what-browser-am-i.html)
3. It works on IE4 or later because `in` operator and `instanceof` operator and `try~catch` statements are not used. Also, it works on mobile IE4 because it does not use regular expressions.

## 2. Folders

| Directories | Sub Direcories | Description               |
|:------------|:---------------|:--------------------------|
| dist/       |                | Placement of built files. |
| docs/       |                | The index.html file for executing the browser judgment is placed, but not attached to the npm package. If necessary, the contents can be found on [github pages](https://itozyun.github.io/what-browser-am-i/) . |
| src/        | js             | source codes              |
|             | js-externs     | Variable and property names to be protected from renaming by specifying them in [externs](https://developers.google.com/closure/compiler/docs/externs-and-exports#externs) of the Closure Compiler. |

## 3. Test Page

* [Test page](https://itozyun.github.io/what-browser-am-i/) (or [bit.ly/39Wvkct](https://bit.ly/39Wvkct))
* [HTTP version](http://my-http-proxy-856.appspot.com/itozyun.github.io/what-browser-am-i/) (or [bit.ly/3ft54YC](http://bit.ly/3ft54YC))

## 4. Usage

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
### 4.1. Properties

| Property           | Data type        | Example       |
|:-------------------|:-----------------|:--------------|
| `PLATFORM`         | `string`         |               |
| `PLATFORM_VERSION` | `string\|object` |               |
| `ENGINE`           | `string`         |               |
| `ENGINE_VERSION`   | `string\|object` |               |
| `BRAND`            | `string`         |               |
| `BRAND_VERSION`    | `string\|object` |               |
| `DEVICE`           | `string`         |               |
| `DEVICE_VERSION`   | `string\|object` |               |
| `PCSITE_REQUESTED` | `boolean`        | `true`        |
| `DEVICE_TYPE`      | `number`         |               |

### 4.2. Method

#### 4.2.1 conpare(v1, v2)

Compares the size of the version number(string). 
The last `0` is ignored, so `"2.0.0"` and `2` are considered equal.

~~~js
// Firefox 3.5<=
isFirefoxGte35 = whatBrowserAmI.Gecko && 0 <= whatBrowserAmI.conpare(whatBrowserAmI.ENGINE_VERSION, '1.9.1');
~~~

##### Arguments

| Name     | Data type        | Example          |
|:---------|:-----------------|:-----------------|
| v1       | `string\|number` | `"1.9.1"`, `1.9` |
| v2       | `string\|number` | `"1.9.1"`, `1.9` |

##### Return Value

| Value     | Description | Example               |
|:----------|:------------|:----------------------|
| `1`       | v1 > v2     | `"1.9.1"` > `1.9`     |
| `0`       | v1 == v2    | `"1.9.0"` == `1.9`    |
| `-1`      | v1 < v2     | `"1.9.1"` < `"1.9.2"` |

## 5. Development

### 5.1 Preparation

~~~
git clone https://github.com/itozyun/what-browser-am-i
npm install
~~~

### 5.2 Development

After making the changes under `./src/`, execute the following command.
Then browse docs/index.html with a browser to check.

~~~
gulp docs
~~~

### 5.3 Distribute

Update the distribution files `./dist/index.js` and `./dist/whatBrowserAmI.js` with the following command.

~~~
gulp dist
~~~

### 5.4 Include what-browser-am-i as a submodule in your project

[web-doc-base/gulpfile.js](https://github.com/itozyun/web-doc-base/blob/master/gulpfile.js) is helpful.

#### 5.4.1 Use optimization option

1. Compile with `DEFINE_WHAT_BROWSER_AM_I__MINIFY=true`.
2. All properties and names are provided numerically. This constant is located in `./src/js/0_global/*.js`.
3. [web-doc-base/src/js-inline/dynamicViewPort.js](https://github.com/itozyun/web-doc-base/blob/master/src/js-inline/dynamicViewPort.js), etc., to obtain the required values.

#### 5.4.2 Build options

Closure Compiler `@define`.

| Variable                                             | Data type | Default value | Note              |
|:-----------------------------------------------------|:----------|:--------------|:------------------|
| `DEFINE_WHAT_BROWSER_AM_I__MINIFY`                   | `boolean` | `false`       | Since version 0.6 |
| `DEFINE_WHAT_BROWSER_AM_I__BRAND_ENABLED`            | `boolean` | `true`        |                   |
| `DEFINE_WHAT_BROWSER_AM_I__PCSITE_REQUESTED_ENABLED` | `boolean` | `true`        |                   |
| `DEFINE_WHAT_BROWSER_AM_I__IOS_DEVICE_ENABLED`       | `boolean` | `true`        |                   |
| `DEFINE_WHAT_BROWSER_AM_I__DEVICE_TYPE_ENABLED`      | `boolean` | `true`        |                   |

## 6. License

what-browser-am-i is licensed under [MIT License](https://opensource.org/licenses/MIT).

(C) 2021-2023 [itozyun](https://github.com/itozyun)([outcloud.blogspot.com](//outcloud.blogspot.com/))