import Vector from "../../../../src/components/Animation/src/Vector";

test("module test", async function () {
    let vector = new Vector(3,4);

    expect(5).toBe(vector.mod());

    vector.zero();
    expect(0).toBe(vector.x);
    expect(0).toBe(vector.y);
})

test("multiply test", async function () {
    let vector = new Vector(3,4);

    vector.multiply(2);
    expect(6).toBe(vector.x);
    expect(8).toBe(vector.y);
})

test("division test", async function () {
    let vector = new Vector(3,4);

    vector.divide(2);
    expect(1.5).toBe(vector.x);
    expect(2).toBe(vector.y);
})