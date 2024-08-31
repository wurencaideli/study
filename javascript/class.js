class A {
    /** 公共属性 */
    a = 1;
    b = 2;
    constructor(a) {
        console.log(this.a);
        console.log(this.b);
        this.a = a;
    }
    af() {
        this.pri
        console.log('a-af', this.b);
        console.log('a-af');
    }
    static saf() {
        console.log(this);
    }
    aa() { }
}

new A(1);

class B extends A {
    b = 1;
    constructor() {
        super(3);
        console.log(this.b);
    }
    af() {
        this.pr;
        console.log(this, Object.getPrototypeOf(this));
        super.af();
        console.log('b-af');
    }
    bf() { }
    static sbf() {
        this.saf();
    }
}

B.sbf();

class C extends B {
    c = 1;
    get g() {
        return this.c;
    }
    constructor() {
        super();
        console.log(this.a);
    }
    cf() { }
    bf() { }
}

// let a = new A(2);
// let b = new B();
let c = new C();
c.af();