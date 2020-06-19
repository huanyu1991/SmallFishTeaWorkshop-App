var stringVal="hello";
var result=stringVal.concat("world");
alert(result);
alert(stringVal);
var result1=stringVal.slice(2,5);
var result2=stringVal.substring(2,5);
var result3= stringVal.substr(2,5);
alert(result1);
alert(result2);
alert(result3);
var person={};
Object.defineProperty(person,"age",{writable:false,value:18});
Object.defineProperty(person,"name",{configurable:false,vaue:"baiquan"});
delete person.name;
// _用于表示只能通过对象方法访问的属性
var book={
    _year:2004,
    edition:1
};
Object.defineProperty(book,"year",{
    get: function(params) {
        return this._year;
    },
    set:function (newValue) {
        if(newValue>2004){
            this._year=newValue;
            this.edition+=newValue-2004
        }
    }
});
book.year=2005;

var desciptor1=Object.getOwnPropertyDescriptor(person,"name");
function creatPerson(name,age,job) {
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function sayName() {
        alert(this.name);
    }
 return o;   
}
//构造函数始终都以大写字母开头
function Person(name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function sayName() {
        alert(this.name);
    }
}
var person1=new Person("baiquan",26,"coder");
var person2=new Person("yawei",28,"software engineer")
alert(person1.constructor==Person);
alert(person1 instanceof Object);
alert(person1 instanceof Person);
alert(person1.sayName=person2.sayName) //false
Person.prototype.sayHello=function sayHello(){
    alert("Hi"+this.name+",How are you");
};
alert(person1.sayHello==person2.sayHello)// true
//prototype and constructor
function Student(name,num,sex){
    this.name=name;
    this.num=num;
    this.sex=sex;
    this.course=["english","math"];
}
Student.prototype={
    constructor:Student,
    learnCourse:function(){
        alert("learn english");
    }
}
var student1=new Student("baiquan","101","man");
var student2=new Student("yawei","102","man");
var item1=student1.course.shift();//get first item
var item2=student1.course.unshift("chemistry","physical")
alert(student1.course);
alert(student2.course);
//原型链和借用构造函数实现继承（组合继承），解决单独引用类型存在的问题，即当父类中存在引用类型时，子类对该引用类型的修改会导致父类引用类型value发生改变，所有继承父类原型的子类也将随之变更。
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
    }
    SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
//继承属性
SuperType.call(this, name);
this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29
var instance2 = new SubType("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27