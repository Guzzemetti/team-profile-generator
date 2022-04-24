const Employee = require("../lib/employee");


describe("Employee", () => {
    it("Baseline employee class"), () => {
        const e =new Employee();
        expect(new Employee(e)).toBe("object");
    }
})

const billy = new Employee("Billy", 12, "bill");


function tester(){
console.log(billy);
}

tester();