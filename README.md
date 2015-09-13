phosphor-sectionlist
====================

[![Build Status](https://travis-ci.org/phosphorjs/phosphor-sectionlist.svg)](https://travis-ci.org/phosphorjs/phosphor-sectionlist?branch=master)
[![Coverage Status](https://coveralls.io/repos/phosphorjs/phosphor-sectionlist/badge.svg?branch=master&service=github)](https://coveralls.io/github/phosphorjs/phosphor-sectionlist?branch=master)

A data structure for a collection of variable sized sections.

A section list is well suited to managing row heights in virtually
scrolling list controls. In these controls, most rows are uniform
height while a handful of rows are variable sized. A pair of lists
can be used to efficiently manage a virtually scrolling data grid.

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
npm install --save-dev browserify
browserify myapp.js -o mybundle.js
```


Usage Examples
--------------

**Note:** This module is fully compatible with Node/Babel/ES6/ES5. Simply
omit the type declarations when using a language other than TypeScript.

```typescript
import { SectionList } from 'phosphor-sectionlist';


// Create a new list with 100 sections of size 10
var list = new SectionList();
list.insert(0, 100, 10);

// Prepend 20 sections of size 50
list.insert(0, 20, 50);

// Append 10 sections of size 20
list.insert(120, 10, 20);

// Insert 5 sections of size 5 in the middle
list.insert(65, 5, 5);


// Query the total count and size
list.size;   // 2225
list.count;  // 135


// Query for the index of various offsets
list.indexOf(0);     // 0
list.indexOf(2224);  // 134
list.indexOf(155);   // 3
list.indexOf(1035);  // 23
list.indexOf(2003);  // 122
list.indexOf(2038);  // 125
list.indexOf(-100);  // -1
list.indexOf(5000);  // -1


// Query for the offset of various indices
list.offsetOf(0);     // 0
list.offsetOf(134);   // 2205
list.offsetOf(21);    // 1010
list.offsetOf(68);    // 1465
list.offsetOf(125);   // 2025
list.offsetOf(-100);  // -1
list.offsetOf(5000);  // -1


// Query for the size of various indices
list.sizeOf(0);     // 0
list.sizeOf(134);   // 20
list.sizeOf(21);    // 10
list.sizeOf(68);    // 5
list.sizeOf(125);   // 20
list.sizeOf(-100);  // -1
list.sizeOf(5000);  // -1


// Remove 10 sections starting at index 50
list.remove(50, 10);
list.size;   // 2125
list.count;  // 125


// Resize the first 20 sections to 1
list.resize(0, 20, 1);
list.size;        // 1145
list.count;       // 125
list.sizeOf(0);   // 1
list.sizeOf(19);  // 1
list.sizeOf(20);  // 10
```
