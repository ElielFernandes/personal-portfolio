import Coordinate from "./Coordinate";
import Item from "./Item";
import Vector from "./Vector";

export default class itemFactory
{
    public static create(
        width: number, 
        height: number,
        size: number = 3.5, 
        quantityItems: number = 50, 
        minimumSpeed: number = 0.3,
        maximumSpeed: number = 0.8,
        borderPosition: boolean = true
    ): Item[]
    {
        let itens: Item[] = [];

        for(let i = 0; i < quantityItems; i++)
            itens[i] = itemFactory.generateItem(width, height, size,  minimumSpeed, maximumSpeed, borderPosition);
    
        return itens;
    }

    public static genarete(
        width: number, 
        height: number, 
        size: number = 3.5, 
        minimumSpeed: number = 0.3,
        maximumSpeed: number = 0.8, 
        borderPosition: boolean = true
    ): Item
    {
        return itemFactory.generateItem(width, height, size, minimumSpeed, maximumSpeed, borderPosition);
    }

    private static generateItem(
        width: number, 
        height: number,
        size: number = 3.5,         
        minimumSpeed: number = 0.3,
        maximumSpeed: number = 0.8,  
        borderPosition: boolean = true
    )
    {
        let initial_y :number  , initial_x :number , final_x :number , final_y :number ;

        let lineInitial: number = itemFactory.random(4);
        let lineFinal: number   = itemFactory.random(4, lineInitial);

        switch(lineInitial) { 
            case 1: { 
                initial_y = itemFactory.random(height);
                initial_x = borderPosition ? 0 : itemFactory.random(width);
                break; 
            } 
            case 2: { 
                initial_y = itemFactory.random(height);
                initial_x = borderPosition ? width : itemFactory.random(width);
                break; 
            } 
            case 3: { 
                initial_x = itemFactory.random(width);
                initial_y = borderPosition ? 0 : itemFactory.random(width);
                break; 
            }
            case 4: { 
                initial_x = itemFactory.random(width); 
                initial_y = borderPosition ? height : itemFactory.random(width);
                break; 
            }
            default: { 
                initial_y = itemFactory.random(height);
                initial_x = borderPosition ? 0 : itemFactory.random(width);
                break; 
            } 
        } 

        switch(lineFinal) { 
            case 1: { 
                final_y = itemFactory.random(height);
                final_x = 0;
                break; 
            } 
            case 2: { 
                final_y = itemFactory.random(height);
                final_x = width 
                break; 
            } 
            case 3: { 
                final_x = itemFactory.random(width);
                final_y = 0;
                break; 
            }
            case 4: { 
                final_x = itemFactory.random(width);
                final_y = height;
                break; 
            }
            default: { 
                final_x = itemFactory.random(width);
                final_y = height;
                break; 
            } 
        } 

        let speed : number = itemFactory.randomIntFromInterval(minimumSpeed, maximumSpeed);
        let speedVector = new Vector(final_x - initial_x, final_y - initial_y);

        speedVector.divide(speedVector.mod()).multiply(speed);

        return new Item(new Coordinate(initial_x, initial_y), speedVector, size);
    }


    private static randomIntFromInterval(min:number, max :number) 
    {
        if(min > max)
            return Math.random() * (min - max + 1) + max;
        return Math.random() * (max - min + 1) + min;
    }

    private static random( interval: number, different :number = 0): number
    {
        let value: number = Math.round(Math.random() * interval);

        if(value === different && different !== 0)
            value = itemFactory.random(interval,different);
        
        return value;
    }
}