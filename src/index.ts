function sum(x: number, y: number) {
  return x + y;
}
let a = 5;
let b = 3;

let ans = sum(a, b);
console.log(ans);

//primitive datatypes
let name: string = "aman";
const num: number = 23;
const isTrue: boolean = true;

function greet(name: string): string {
  return "hello" + name;
}
function sumStr(num1: number, num2: number): string {
  return `your number is ${num1} ${num2} and sum is ${num1 + num2}`;
}
greet("legaceee");
sumStr(3, 5);

//interfaces are used to make custom types
interface Address {
  city: string;
  country: string;
  pinCode: number;
}
interface User {
  name: string;
  age: number;
  address?: Address;
} //? means optional in ts

interface OfficeAddress {
  address?: Address;
}
function legal(user: User): boolean {
  if (user.age > 18) return true;
  else {
    return false;
  }
}

const user: User = {
  name: "aman",
  age: 21,
  address: {
    city: "ratnagiri",
    country: "india",
    pinCode: 334509,
  },
};
legal(user);

//without interface
const userDet: {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
    code: number;
  };
} = {
  name: "legaceee",
  age: 23,
  address: {
    city: "mum",
    country: "ind",
    code: 345213,
  },
};
function greet2(details: {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
    code: number;
  };
}): boolean {
  return true;
}

interface People {
  name: string;
  age: number;
  isLegal(): boolean;
}

class Manager implements People {
  //minimum People feild chaiye hogi mtlb name aur age uske baad aur bhi kuch add kr skte h woh humare pe h
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  isLegal() {
    return this.age > 18;
  }
}
let user3 = new Manager("john", 30);
// we cannot do union intersection in instance

//types
//we cannot do implements in class in types

type Person = {
  name: string;
  age: number;
};
type Father = {
  name: string;
  children: boolean;
};

///union of two types

type Married = Person & Father;
let legaceee: Married = {
  name: "legaceee",
  age: 45,
  children: true,
};
function wDablus(user: Person): boolean {
  return user.age > 18;
}
//intersection of two types

type GoodUser = {
  name: string;
  gift: string;
};

type BadUser = {
  name: string;
  ip: string;
};
type Avguser = GoodUser | BadUser;

const hero: Avguser = {
  name: "legaceee",
  gift: "yes",
  ip: "dfjdfsdfh",
};

//arrays
interface Workers {
  name: string;
  age: number;
}

function legally(people: Workers[]): Workers[] {
  let arr = people.filter((p) => p.age > 18);
  return arr;
}
let aman: Workers[] = [
  {
    name: "aman",
    age: 24,
  },
  {
    name: "wwe",
    age: 12,
  },
  {
    name: "smrithi",
    age: 24,
  },
  {
    name: "mayank",
    age: 17,
  },
  {
    name: "yoo",
    age: 26,
  },
];

legally(aman);
