
//泛型函数
function showDescription<T>(object:T):void{
    console.log(object);
}

//泛型：类的使用
class SuperModel<T>{
    descript:T
    showMe(what:T):void{
        console.log(what,this.descript);
    }
    constructor(descript:T) {
        this.descript = descript;
    }
}

//泛型：接口的使用
interface MusicInterface<T>{
    songUrl:string
    songInfo:T
    showMessage(info:T):void;
}

showDescription('Hello,泛型!')

let superModel:SuperModel<string> = new SuperModel('我是泛型')
let descriptModel:SuperModel<number> = new SuperModel(10);
superModel.showMe("你好");
descriptModel.showMe(1001);

let musicObj:MusicInterface<Object> = {
    songUrl:'https://www.baidu.com',
    songInfo:{'author':'周杰伦'},
    showMessage:(infoObj:Object):void=>{
        console.log(infoObj);
    }
};

musicObj.showMessage({"name":"不能说的秘密"});

//多个泛型
function descriptMe<T,U>(first:T,second:U):void{
    console.log(first,second);
}

descriptMe('我是上海的','上海嘉定的');

/*
    多种类型
    string | number : 表示类型为string 或者 number
*/
function showScore(name:string,score:string | number):void{
    console.log(`考生${name}，高考分数为:${score}}`);
}

showScore('胡先生',691);
showScore('邓先生','710');
