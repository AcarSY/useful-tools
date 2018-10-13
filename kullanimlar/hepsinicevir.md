# hepsiniçevir fonksiyonu için örnek kullanım

```js
const useful = require('useful-tools')

const yazı = 'Merhaba mERHABA sizi seviyorum!'
const eski = 'Merhaba'
const yeni = 'Hello'
const sor = true // Büyük harfler es geçilsin mi?
console.log(useful.hepsiniçevir(yazı, eski, yeni, sor))

// Örnek Çıkış: Hello Hello sizi seviyorum!
```

# hepsiniçevir fonksiyonu için diğer örnek kullanım

```js
const useful = require('useful-tools')

const yazı = 'Merhaba merhaba sizi seviyorum!'
const eski = 'Merhaba'
const yeni = 'Hello'
console.log(useful.hç(yazı, eski, yeni))

// Örnek Çıkış: Hello merhaba sizi seviyorum!
```
