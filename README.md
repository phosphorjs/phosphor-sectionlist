phosphor-sectionlist
====================

[![Build Status](https://travis-ci.org/phosphorjs/phosphor-sectionlist.svg)](https://travis-ci.org/phosphorjs/phosphor-sectionlist?branch=master)
[![Coverage Status](https://coveralls.io/repos/phosphorjs/phosphor-sectionlist/badge.svg?branch=master&service=github)](https://coveralls.io/github/phosphorjs/phosphor-sectionlist?branch=master)

A data structure for a collection of variable sized sections.

A section list is commonly used to manage row heights in virtually
scrolling list controls. In such a control, most rows are uniform
height while a handful of rows are variable sized.

A section list has guaranteed `O(log n)` worst-case performance for
most operations, where `n` is the number of variable sized sections.

[API Docs](http://phosphorjs.github.io/phosphor-sectionlist/api/)


Package Install
---------------

**Prerequisites**
- [node](http://nodejs.org/)

```bash
npm install --save phosphor-sectionlist
```


Source Build
------------

**Prerequisites**
- [git](http://git-scm.com/)
- [node](http://nodejs.org/)

```bash
git clone https://github.com/phosphorjs/phosphor-sectionlist.git
cd phosphor-sectionlist
npm install
```

**Rebuild**
```bash
npm run clean
npm run build
```


Run Tests
---------

Follow the source build instructions first.

```bash
npm test
```


Build Docs
----------

Follow the source build instructions first.

```bash
npm run docs
```

Navigate to `docs/index.html`.


Supported Runtimes
------------------

The runtime versions which are currently *known to work* are listed below.
Earlier versions may also work, but come with no guarantees.

- Node 0.12.7+
- IE 11+
- Firefox 32+
- Chrome 38+


Bundle for the Browser
----------------------

Follow the package install instructions first.

```bash
npm install --save-dev browserify browserify-css
browserify -g browserify-css myapp.js -o mybundle.js
```


Usage Examples
--------------

**Note:** This module is fully compatible with Node/Babel/ES6/ES5. Simply
omit the type declarations when using a language other than TypeScript.
