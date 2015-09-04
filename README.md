tap.js
=======================================

A custom 'tap' event JavaScript plugin for mobile and tablet web browsers, which eliminates the 300ms delay between a physical 'tap' and the firing of a 'click' event. Uses mouse events as a fallback for browsers that don't support touch. Forked from
[tap.js](https://github.com/alexgibson/tap.js/)

- Do not fire tap if the end target is not the same as the starting target
- Do not fire tap if there is a move between the starting event and the end event greater than 10px
- Do not fire tap if there is more than 500ms between the start event and the end event

Installation
---------------------------------------

```bash
npm i --save xtap-event
```

Setup
---------

```javascript
// enable it on the document element (or any other element or selector)
var evt = require('xtap-event').enableOn(document);
```

Using it
```javascript
var selector = document.querySelector('#selector');
selector.addEventListener('tap', function (e) {
  console.log('tap event');
});
```