//一个接口可以继承多个接口
interface VihicleObj{
    wheels?:number
    weight?:number
}

interface CarObj extends VihicleObj{
    brand:string
}

//一个接口继承多个接口
interface MotorcycleObj extends VihicleObj,CarObj{
    getMaxSpeed():number;
    secondTo100meters?():number
}

interface PriceObj {
    price:number
}

//一个类可以遵循多个协议
class BMWMotorObj implements MotorcycleObj,PriceObj{
    wheels?:number
    weight?:number
    brand:string
    price:number

    constructor(brand:string,price:number){
        [this.brand,this.price] = [brand,price];
    }

    getMaxSpeed():number{
        return 380;
    }
    secondTo100meters():number{
        return 3.2;
    }

    showMeself():void{
        console.log(`车辆品牌:${this.brand},最高时速:${this.getMaxSpeed()}km/h`);
    }
    
}

let bmwObj:BMWMotorObj = new BMWMotorObj('宝马',240000);
bmwObj.showMeself();


class HondaObj{
    name:string = ''
    maxSpeed():number{
        return 430;
    }
    speed100Meters():number{
        return 3.1;
    }
}

class HW{
    whichGame:string = ''
}

//接口可以继承多个类
interface HondaMotorObj extends HondaObj,HW{
    price:number
    showMe():void;
}

//继承类的接口对象必须实现类的全部属性和实例方法
let hondaMotorObj:HondaMotorObj = {
    price: 2000,
    showMe: (): void => {
        console.log('输出一下');
    },
    name: '胡先生',
    maxSpeed: (): number => {
        return 300;
    },
    speed100Meters: (): number => {
        return 4.5;
    },
    whichGame: "和平精英"
};

let speed = hondaMotorObj.speed100Meters();
console.log(speed,hondaMotorObj.whichGame);
