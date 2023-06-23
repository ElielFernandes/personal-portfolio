export default class Coordinate  
{
    x: number;
    y: number;

    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    public distanceFromPoint(x : number, y: number)
    {
        return Math.sqrt(Math.pow( x - this.x , 2) + Math.pow( y - this.y , 2));
    }

    public coordinateDistance(coordinate: Coordinate)
    {
        return Math.sqrt(Math.pow( coordinate.x - this.x , 2) + Math.pow( coordinate.y - this.y , 2));
    }
}