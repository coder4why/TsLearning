
/*
    export 为可外部调用
    showMessage : 函数名称
    job:不带问号且无默认值的为必传参数
    isWork：不带问号的有默认值的为非必传参数
    args: ?代表非必传参数 
    string : 返回值类型
*/
export function showMessage(job:string,isWork:boolean = false,args?:string[]):string{
    console.log(`\n做什么工作？${job}`);
    console.log(isWork ? '上班':'不上班');
    return args == undefined ? 'summer' : args.join(':');
}

let whichJj = showMessage('程序员');
console.log(whichJj);

let whatJj = showMessage('搬砖',true,['上海','夏天']);
console.log(whatJj);

/*
    剩余参数
    有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。

    剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
*/

function useMoreObjs(args?:string[],...names:string[]):string{
    return names.join(",");
}

let allNames = useMoreObjs(undefined,'曹操','孙权','刘备');
console.log(allNames);

//匿名函数:没有函数名称
let showAddress = function():string{
    return '上海市徐汇区宜山路700号';
}
let address = showAddress();
console.log(address);

/*
    匿名函数自调用
    匿名函数自调用在函数后使用 () 即可：
*/
(function(){
    console.log('下雨');
})();

/*
    Lambda 函数
    Lambda 函数也称之为箭头函数。

    箭头函数表达式的语法比函数表达式更短。
*/
let showLocation = (longtitude:number,latitude:number,address?:string):string => {
    return `经度为：${longtitude},纬度为：${latitude},详细地址：${address}`
}

console.log(showLocation(121.1,31.2,'上海市徐汇区枫林科创产业园'));

/*
    函数重载
    重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

    每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。
*/