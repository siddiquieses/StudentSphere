const path = require("path")
const filepath = '/user/noman/docments/report.pdf';
console.log(path.basename(filepath));
console.log(path.basename(filepath,'.pdf'))
console.log(path.dirname(filepath))
console.log(path.extname(filepath))
 
const pathjoin = path.join('folder','subfolder','file.txt')
console.log(pathjoin)

const joinwithdots = path.join('/users','../admin','./setting.json')
console.log(joinwithdots)

console.log(path.resolve('folder','file.txt'))

console.log(path.isAbsolute('/users/noman'))
console.log(path.isAbsolute('documents/file'))

console.log(path.parse(filepath))
