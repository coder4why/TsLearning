

//prototype属性是函数所独有的
(Function().prototype.showMe = ():void => {
    console.log('prototype属性是函数所独有的');
})();


function doSomething(){}
console.log(doSomething.prototype);

doSomething.prototype.foo = 'eat';
console.log(doSomething.prototype);