 
enum Degree {
    xueshi = '学士学位',
    suoshi = '硕士研究生',
    boshi = '博士研究生'
}

//接口：一个需要遵循的协议
interface ParamsObj{
    //必传字段
    name:string,
    age:number,
    //可选类型，非必要字段
    city?:string,
    degree?:Degree

    //函数不能使用readonly修饰
    //非必须实现的函数
    showDescription?():void;
    //必须实现的函数:
    showMyself():void;

}

function showMsgOfStudent(paramsObj:ParamsObj){
    let {name,age,city = '上海',degree = Degree.xueshi} = paramsObj;
    paramsObj.showMyself();
    console.log(`姓名:${name},年龄:${age},所在城市:${city},学位：${degree.toString()}}`);   
}

let paramsObj:ParamsObj = {
    name:"胡先生",
    age:20,
    showMyself: ():void=>{
        console.log('必须实现的参数');
    }
};

showMsgOfStudent(paramsObj);

interface ShapeObj{
    width:number,
    //readonly修饰属性类型为只读属性，在对象声明赋值后不可再次修改
    readonly height:number,

    //形状描述：非必传
    type?:string

}

//{area:number} 为返回值类型
function showShapeMsg(shapeObj:ShapeObj) : {area:number}{
    let {width,height} = shapeObj;
    return {area:width* height};
}

let shapeObj:ShapeObj = {
    width:200,
    height:300
}
//width属性为可读可写
shapeObj.width = 500;
// shapeObj.height = 20; //不可修改只读属性的值
let areaObj = showShapeMsg(shapeObj);
console.log(areaObj);

 export {Degree}