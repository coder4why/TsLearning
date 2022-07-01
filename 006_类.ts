

//类
class Fairyland{
    //成员变量（属性）
    name:string
    address:string
    //只读属性:赋值后不可修改
    readonly empolyCount:number
    readonly isBig?:boolean
    //
    readonly ceoName?:string

    //类的私有属性
    private location:string = '';
    //构造函数
    constructor(name:string,address:string,empolyCount:number){
        //数组结构赋值
        [this.name,this.address,this.empolyCount,this.isBig,this.ceoName] = [name,address,empolyCount,true,'隔壁老杨'];
    }

    //实例对象暴露给外部方法
    public showMe():void{
        console.log(`公司名称:${this.name},地址:${this.address},员工数:${this.empolyCount},是否大公司：${this.isBig}}`);
        // this.showMessage();
    }

    //实例对象私有方法：仅可在当前类内部调用
    private showMessage():void{
        console.log(`输入：公司名称:${this.name},地址:${this.address},员工数:${this.empolyCount}}`);
    }
}

let fairyland:Fairyland = new Fairyland('上海复深蓝软件股份有限','上海市徐汇区宜山路700号',4000);
fairyland.showMe();
console.log(fairyland.name,fairyland.isBig,fairyland.ceoName);


interface AmimalObj{
    name:string
    age:number
    height?:number
    showMyself():void;
    showDescription?():void;
}

class HumanObj implements AmimalObj{
    name: string
    age: number
    showMyself(){
        console.log(`打印我自己:${this.name},${this.age}`);
    }
    showDescription(){
        console.log('实现接口定义的方法');
    }
    constructor(name:string,age:number){
        [this.name = 'HuXianSheng',this.age = 18] = [name,age];
    }
}

let humanObj:HumanObj = new HumanObj('胡先生',20);
humanObj.showDescription();
humanObj.showMyself();


