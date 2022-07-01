import {Degree} from "./004_接口";

class BaseModel{
    name:string = ''
    constructor(name:string){
        this.name = name;
    }
}

class PeopleModel extends BaseModel{
    height:number = 0;
    getDegree():Degree{
        return Degree.boshi
    }
    constructor(name:string,height:number){
        super(name);
        this.height = height;
    }
}

/*
    类只能继承一个父类
    类可以继承多个接口（协议）
    协议可以继承多个类
*/
class StudentModel extends PeopleModel{

    grade:number = 10;
    constructor(name:string,grade:number,height:number){
        super(name,height);
        [this.grade,this.height] = [grade,height];
    }
    showMe():void{
        console.log(`${this.name}-${this.height}-${this.grade}-${this.getDegree()}`);
    }

}

let studentModel:StudentModel = new StudentModel('胡先生',14,185);
studentModel.showMe();
console.log(studentModel.getDegree());