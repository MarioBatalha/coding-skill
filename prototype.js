function Students (name, age, level) {
    this.name = name;
    this.age = age;
    this.level = level;
}

var students1 = new Students("Mario", "23", "graduation");
Students.prototype.year = 2;

console.log(students1.name + " is " + students1.age + " years old");