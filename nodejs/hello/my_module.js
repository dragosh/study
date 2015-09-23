
exports.test = function(){
    console.log('My module')
}


//public
var foo = function(){
    console.log('Foo public');
}
//public
var bar = function(){

}

//private
var baz = function() {

}

exports.foo = foo;
exports.bar = bar;
