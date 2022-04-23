const Employee = require("../lib/employee");


describe("Employee", () => {
    it("Baseline employee class"), () => {
        const e =new Employee();
        expect(new Employee(e)).toBe("object");
    }
})