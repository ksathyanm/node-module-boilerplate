# node-module-boilerplate

> Boilerplate to kickstart creating a Node.js module

This is what I use for [my own modules](https://www.npmjs.com/~ksathyanm).


## Getting started

**Click the "Use this template" button.**

Alternatively, create a new directory and then run:

```
$ curl -fsSL https://github.com/ksathyanm/node-module-boilerplate/archive/master.tar.gz | tar -xz --strip-components=1
```

---

**Remove everything from here and above**

---

# module-name [![Build Status](https://dev.azure.com/ksathyanm/GitHub/_apis/build/status/ksathyanm.module-name?branchName=master)](https://dev.azure.com/ksathyanm/GitHub/_build/latest?definitionId=1&branchName=master)

> My awesome module

## Install

```
$ npm install module-name
```

## Usage

```js
const unicornFun = require("module-name");

unicornFun("unicorns");
//=> "unicorns & rainbows"
```

## API

### unicornFun(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`<br>
Default: `rainbows`

Lorem ipsum.
