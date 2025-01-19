function greeter(person: string | string[]) {
    if (Array.isArray(person)) {
        return "Hello, " + person.join(" ");
    } else {
        return "Hello, " + person;
    }
}

let user = ["Jane", "Doe"];

console.log(greeter(user));
console.log(greeter("Jane"));