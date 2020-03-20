## tsc

### es2020

```
npx tsc -p target_es2020
```

dist

```js
"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _field;
class A {
    constructor() {
        _field.set(this, 1);
    }
    something() { return __classPrivateFieldGet(this, _field); }
}
_field = new WeakMap();
```

### esnext

```
npx tsc -p target_esnext
```

dist

```
"use strict";
class A {
    constructor() {
        this.#field = 1;
    }
    #field;
    something() { return this.#field; }
}
```

## Webpack

### ts-loader -> babel-loader

```
{
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage",
          "debug": true,
          "corejs": { "version": 3, "proposals": true }
          // "corejs": 3, // es2020 で変換した場合
        }
      ]
    ],
    // esnext で変換した場合
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

- webpack.config.js の `output.path` の切り替え
- tsconfig.json の `compilerOptions.target` を `esnext` か `es2020` に切り替え
- exnext の場合には上述のように babelrc に plugin の追加が必要

```
npx webpack
```

### @babel/typescript

```
{
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage",
          "debug": true,
          "corejs": 3, // es2020 で変換した場合
        }
      ],
      "@babel/typescript"
    ],
    "plugins": ["@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"]
}
```

```
npx webpack --config webpack-typescript.config.js
```

