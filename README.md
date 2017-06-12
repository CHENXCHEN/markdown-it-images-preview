# markdown-it-images-preview
A markdown-it plugin to preview local images.
## Install
```javascript
npm install markdown-it-images-preview --save
```
## Use
```javascript
var md = require('markdown-it')();
var miip = require('markdown-it-images-preview');
md.use(miip);
```
how to add image:
```javascript
md.image_add('./123', file_binary);
// file_binary = "data:image/png;base64,iVBORw0KGgoA......"
```
how to preview image:
```javascript
md.render('![image](./123)');
```
how to delete image:
```javascript
md.image_del('./123');
```
