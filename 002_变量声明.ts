
//ts实现let代替var:var存在一些弊端
let a:number = 100;
a = 1001;
console.log(a);

//const声明的变量不可重新赋值
const b:number = 200;
// b = 300; 

const insObj = {
    name:'shangHai',
    weather:'summer'
}

//可修改const修饰的对象的子属性
insObj.name = 'beijing'; 
console.log(insObj);

