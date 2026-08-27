const {URL}= require('url');
const myurl = new URL('http://example.com:5000/products?id=5&category=shoes&product=basket');

console.log(myurl.hostname)
console.log(myurl.pathname)
console.log(myurl.searchParams.get('id'))
console.log(myurl.searchParams.get('category'))


console.log(myurl.searchParams.has('id'))
console.log(myurl.searchParams.has('product'))
console.log(myurl.searchParams.has('category'))

myurl.searchParams.set('id','15')

console.log(myurl.searchParams.get('id'))

myurl.searchParams.set('price','1500')
console.log(myurl.searchParams.get('price'))


console.log(myurl.searchParams.toString())

myurl.searchParams.delete('category')

console.log(myurl.searchParams.toString())


