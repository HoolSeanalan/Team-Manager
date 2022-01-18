const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

test('Makes and tests an Employee', () => {
    const testEmployee = new Employee("John Doe", 1, "JohnDoe@gmail.com");

    expect(testEmployee.getName()).toBe("John Doe");
    expect(testEmployee.getId()).toBe(1);
    expect(testEmployee.getEmail()).toBe("JohnDoe@gmail.com");
    expect(testEmployee.getRole()).toBe("Employee");
});

test('Makes and tests a manager', () => {
    const testManager = new Manager("John Manager Doe", 4, "ManagerDoe@gmail.com", 100);

    expect(testManager.getName()).toBe("John Manager Doe");
    expect(testManager.getId()).toBe(4);
    expect(testManager.getEmail()).toBe("ManagerDoe@gmail.com");
    expect(testManager.getOfficeNumber()).toBe(100);
    expect(testManager.getRole()).toBe("Manager");
});

test('Makes and tests an Engineer', () => {
    const testEngineer = new Engineer("John Engineer Doe", 2, "EngineerDoe@gmail.com", "EngineerDoe");

    expect(testEngineer.getName()).toBe("John Engineer Doe");
    expect(testEngineer.getId()).toBe(2);
    expect(testEngineer.getEmail()).toBe("EngineerDoe@gmail.com")
    expect(testEngineer.getGitHub()).toBe("EngineerDoe");
    expect(testEngineer.getRole()).toBe("Engineer");
});

test('Makes and tests an Intern', () => {
    const testIntern = new Intern("John Intern Doe", 3, "InternDoe@gmail.com", "UC Berkeley");

    expect(testIntern.getName()).toBe("John Intern Doe");
    expect(testIntern.getId()).toBe(3);
    expect(testIntern.getEmail()).toBe("InternDoe@gmail.com");
    expect(testIntern.getSchool()).toBe("UC Berkeley");
    expect(testIntern.getRole()).toBe("Intern");
});