"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var greeter = function (person) { return "Hello " + person.firstName; };
var user = "Ivan";
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + ". " + lastName;
    }
    Student.prototype.getFullName = function () {
        return this.fullName;
    };
    return Student;
}());
var add_1 = __importDefault(require("./add"));
console.log(add_1.default(1, 2));
console.log(greeter(new Student('Ivan', 'J', 'Drago')));
console.log(greeter(new Student('Rocky', 'T', 'Balboa')));
