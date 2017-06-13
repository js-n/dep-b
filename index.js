const random = require('random-item')
const dinosaurs = require('dinosaurs')

module.exports = () => `i'm a ${random(dinosaurs)}!!!`
