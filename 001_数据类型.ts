
//使用 tsc .ts文件，会生成对应的.js文件，将ts文件编译成js文件;
//TypeScript中的数据类型：
//1.布尔类型：只有使用true和false表示，不能使用0和1；
let isDone:boolean = false;

//2.Number类型
let twoNum:number = 0b1011; //二进制
let eightNum:number = 0o15; //八进制
let sixteenNum:number = 0x1; //十六进制
let tenNum:number = 1009; //十进制
console.log(isDone,twoNum,eightNum,sixteenNum,tenNum);

let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;
let nan = Number.NaN;
console.log('最大最小:',max,min,nan,typeof nan);

//3.字符串类型
let userName:string = 'shanghai';
let weather:string = `Summer`;
let city = `${userName}-${weather}`;
let shangHai = userName+','+weather;

let shanghaiMsg = `I am in ${city} city, the weather is ${weather}`;
console.log(userName,city,shanghaiMsg);
console.log(shangHai);

//4.数组
let numberList:number[] = [1,2,3];
let numberList1:Array<number> = [4,5,6];
let anyList:any[] = [1,'001',1000,{name:"huxiansheng"}];

let stringList:string[] = ['1','100'];

console.log(numberList,numberList1,anyList,stringList);

//定义后只读的数组：不可修改的数组
let readonlyArray:ReadonlyArray<string> = ['1','2'];

//5.元祖
let tuple:[string,number] = ['Typescript',10];
console.log(tuple[0],tuple[1]);

let tuple1:[string,number,string] = ['Typescript',10,'Hello'];
console.log(tuple1[0],tuple1[1],tuple1[2]);
console.log(...tuple1);

//6.枚举类型: 默认情况下，枚举值的元素编号从0开始
enum ThemeColor {yellow  = 100,black = 200,blue = 400};
let color = ThemeColor.black;
console.log(color)

let blackColor = ThemeColor[200];
console.log(blackColor,typeof blackColor,'测试')

//7.任意类型
let anyObj:any = 21;
anyObj = 'not sure type';
console.log(anyObj);
