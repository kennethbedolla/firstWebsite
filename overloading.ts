function person(name: string): string;
function person(age: number): string;
function person(isMarried: boolean): string;
function person(value: (string | number | boolean)) : string {
  switch (typeof value){
    case "string":
    return `my name is ${value}`;  // template string
    case "number":
    return `my age is ${value}`;
    case "boolean":
    return value ? "I'm married": "I'm not married";
  }
}

console.log(person('Jesse'));
console.log(person(21));
console.log(person(true));


