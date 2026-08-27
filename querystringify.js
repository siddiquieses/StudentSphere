const queystring = require('querystring');

const str = 'name=Ali&age=23&city=karachi';
const parse = queystring.parse(str);
console.log(parse)
console.log(parse.name)

const obj={name:'sara',age:'20',city:'karachi'}
const stringify = queystring.stringify(obj)
console.log(stringify)