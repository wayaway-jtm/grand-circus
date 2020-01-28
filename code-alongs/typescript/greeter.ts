const greeter = (person : IPerson) => `Hello ${person.firstName}`;
// comment
const user =  "Ivan";


interface IPerson {
    firstName: string;
    lastName: string;
}


class Student implements IPerson {
    private fullName: string;

    constructor( public firstName: string, public middleInitial: string, public lastName: string) {
     this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }

    getFullName() {
        return this.fullName;
    }
}

import add from './add';
console.log(add(1, 2))


console.log(greeter(new Student('Ivan', 'J', 'Drago')));
console.log(greeter(new Student('Rocky', 'T', 'Balboa')));