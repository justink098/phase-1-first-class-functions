function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function () {
        return returnsAnAnonymousFunction();
      };
}
function returnsAnAnonymousFunction(){
    return function () {
        console.log("Stretch! Work that core!");
      };
}
