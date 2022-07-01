//对象解构
let response = {
    data:'你好，我是后台返回的报文，请查收',
    resultCode:200,
    resultMsg:"操作成功"
}
//解构
let {data,resultCode} = response;
console.log('测试:',data,resultCode);

//属性重命名
let {data:res} = response;
let {data:res1,resultCode:code} = response;
let result = response;
console.log(res,res1,code);
console.log(result);

let responseBody = {
    code1:200,
    result1:{
        name:'胡先生',
        age:20
    },
    message1:'操作成功'
}
//msg为除了result1以外的key组成的大对象
let {result1,...msg} = responseBody;
console.log(result1,'测试1',typeof msg,msg);

//数组解构
let listArray:any[] = ['Shanghai','Summer',2500];
let [cityName,cityWeather,amount] = listArray;
console.log(cityName,cityWeather,amount);

//使用默认值
function useDefault(paramsObj:{a?:string,b?:string}){
    //即使 b 为 undefined ， useDefault 函数的变量 paramsObj 的属性 a 和 b 都会有值。
    const {a = "天气预报",b = 100} = paramsObj;
    console.log(a,b);
}

let useObj = {
    a:"上海下雨",
}

useDefault(useObj);

let newResponse = {
    newCode:200,
    newResult: undefined, //"今天下了大暴雨",
    newMessage:"操作成功"
}; 

//使用默认值：如果解构对象属性值是undefined，那么newRes将使用默认值
const {newResult:newRes = '下大了'} = newResponse;
console.log(newRes);

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search);

