# tarih fonksiyonu için örnek kullanım

```js
const useful = require('useful-tools')

const tarih = new Date()
console.log(useful.tarih(tarih))

// Örnek Çıkış: 11 Ekim 2018 Perşembe 18:09:28
```

# tarih fonksiyonu için diğer örnek kullanım

```js
const useful = require('useful-tools')

const tarih = new Date()
console.log(useful.tarih(tarih, 'G A Y g S:D:s'))

// Örnek Çıkış: 11 Ekim 2018 Perşembe 18:09:28
```

| Format | Açıklama |
| ------ | ------ |
| G | Günü sayılı bir şekilde belirtir. |
| A | Ayı belirtir. |
| Y | Yıl belirtir. |
| g | Günü yazılı bir şekilde belirtir. |
| S | Saati belirtir. |
| D | Dakikayı belirtir. |
| s | Saniyeyi belirtir. |
