## 学习class类

`new` 关键字相当于用一个新对象去调用`constructor` 方法。
```javascript
class A {
    /** 公共属性 */
    b = 2;
    constructor(a) {
        this.a = a;
    }
    f(){
        console.log(2);
    }
}
function A_(a){
    this.b = 2;
    this.a = a;
}
A_.prototype = {
    constructor:A_,
    f(){
        console.log(2);
    },
};
console.log(A == A.prototype.constructor);  //true
let a_ = Object.create(A_.prototype);
A_.call(a_);
let a = new A();
//此处a相当于a_，只不过不允许直接调用A的构造方法。
```

调用之前先赋值公共属性，赋值到新对象上。
```javascript
class A {
    /** 公共属性 */
    b = 2;
    constructor(a) {
        /** 代码块 */
        this.a = a;
    }
}
//相当于
class A_ {
    constructor(a) {
        /** 公共属性 */
        this.b = 2;
        /** 代码块 */
        this.a = a;
    }
}
```

子类调用`new` 关键词，依次从最顶上父类上调用`constructor` 方法，子类上的`constructor` 中的`super` 方法调用之后赋值公共属性到新对象上，保证子类属性的优先级，`super` 关键字相当于父类的原型对象。`super.f()` 方法相当于父类原型上的`A.prototype.f.call(this)`。super只是语法糖。
```javascript
class A {
    /** 公共属性 */
    b = 2;
    constructor(a) {
        this.a = a;
    }
}
class B extends A {
    /** 公共属性 */
    b = 1;
    constructor() {
        super(3);
        /** 代码块 */
        console.log(this.b);
    }
}
//相当于
class B_ extends A {
    constructor(a) {
        super(3);
        /** 公共属性 */
        this.b = 1;
        /** 代码块 */
        console.log(this.b);
    }
}
```

类中的方法直接挂载到类的原型对象上，所以new出的子对象可以访问到类中定义的方法。

而静态方法挂载到类自身上，子类的原型指向父类上，所以子类可以访问到父类上的静态方法。在静态方法中，super 指向父类，而不是父类的实例。

`new` 出的新对象的原型指向类的原型对象，子类的原型对象的原型指向父类的原型对象。