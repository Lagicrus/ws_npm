_ = require('./node_modules/underscore');

function range(array){
    //let biggest = Math.max(...array);
    //let smallest = Math.min(...array);
    let biggest = _.max(array);
    let smallest = _.min(array);
    return biggest - smallest;
}

module.exports.range = range;