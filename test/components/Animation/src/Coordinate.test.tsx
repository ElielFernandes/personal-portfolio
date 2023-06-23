import Coordinate from "../../../../src/components/Animation/src/Coordinate";

test("module test", async function () {
    let coordinate = new Coordinate(0,0);

    expect(1).toBe(coordinate.distanceFromPoint(0,1));

    let coordinate2 = new Coordinate(0,2);

    expect(2).toBe(coordinate.coordinateDistance(coordinate2));
})