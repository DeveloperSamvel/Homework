class University {
    constructor(teachers = [], students = []) {
        this.teachers = teachers;
        this.students = students;
    }

    addMember(member) {
        if (member instanceof Teacher) {
            this.teachers = [...this.teachers, member];
        } else {
            this.students = [...this.students, member];
        }
    }
    removeMember(member) {
        if (member instanceof Teacher) {
            this.teachers = this.teachers.filter((item) => item !== member);
        } else {
            this.students = this.students.filter((item) => item !== member);
        }
    }
    startLesson() {
        this.teachers.forEach((item) => {
            if(item.energy >= 5){
                item.energy -= 5;
            }
            else {
                item.energy = 0;
            }
        });
        this.students.forEach((item) => {
            if(item.energy >= 2){
                item.energy -= 2;
            }
            else {
                item.energy = 0;
            }
        });
    }
}

class UniversityMember {
    constructor(name, age, role , energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role; 
        this.energy = energy;
    }

    info() {
        return `Name: ${this.name}, age: ${this.age}, role: ${this.role}, energy: ${this.energy}`;
    }
}

class Teacher extends UniversityMember {
    constructor(name, age) {
        super(name, age, "teacher");
    }
}

class Student extends UniversityMember {
    constructor(name, age) {
        super(name, age, "student");
    }
}

const teacher1 = new Teacher("Vahag", 33);
const student1 = new Student("Aram", 26);
const teacher2 = new Teacher("Mane", 24);
const student2 = new Student("Anahit", 19);

const university =  new University();
university.addMember(teacher1);
university.addMember(student1);
university.addMember(teacher2);
university.addMember(student2);

console.log(teacher1.info());
console.log(student1.info());
console.log(teacher2.info());
console.log(student2.info());

console.log();
university.startLesson();

console.log(teacher1.info());
console.log(student1.info());
console.log(teacher2.info());
console.log(student2.info());

// university.removeMember(teacher1);
// university.removeMember(student1);
// university.removeMember(teacher2);
// university.removeMember(student2);

// console.log(university);