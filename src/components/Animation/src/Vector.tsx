export default class Vector 
{
    x: number;
    y: number;

    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    public mod() 
    {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow( this.y, 2));
    }

    public zero() 
    {
        this.x = 0;
        this.y = 0;
    }
    
    public multiply(value : number) 
    {
        this.x = this.x * value;
        this.y = this.y * value;

        return this;
    }
    
    public divide(value : number)
    {
        this.x = this.x / value;
        this.y = this.y / value;

        return this;
    }
}