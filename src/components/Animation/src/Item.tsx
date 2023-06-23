import Coordinate from "./Coordinate";
import Vector from "./Vector";

export default class Item 
{
    position: Coordinate;
    speed: Vector;
    size: number = 3.5;

    constructor(position: Coordinate, speed: Vector, size: number = 3.5)
    {
        this.position = position;
        this.speed    = speed;
        this.size     = size;
    }
}