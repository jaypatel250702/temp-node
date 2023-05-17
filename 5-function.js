
const names = require('./4-names')
const sayHi = require('./module')
const data = require('./6-Alternative-flavour')

require('./7-mind-grenade')

console.log(data)

sayHi('Susan')
sayHi(names.peter)
sayHi(names.john)

