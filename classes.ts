class Person{
    public firstName: string;
    public lastName: string;
    public email: string;
    private age: number;

    constructor(
        fn: string,
        ln: string,
        email: string,
        age: number
    ){
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }

    greetMe() {
        console.log(`Hello ${this.firstName}`); 
    }
}

let p = new Person('Jesse', 'Liberty', 'examplename@gmail.com', 21);
p.greetMe();