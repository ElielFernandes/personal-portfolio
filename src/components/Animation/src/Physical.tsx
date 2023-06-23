import Coordinate from "./Coordinate";
import Item from "./Item";
import Vector from "./Vector";

export default class Physical
{
    public static calculateCollision(item1: Item, item2: Item)
    {
        let n = new Vector(item1.position.x - item2.position.x, item1.position.y - item2.position.y);

        let un = new Vector(n.x / n.mod(), n.y / n.mod());
        let pos = new Coordinate(item2.position.x + (un.x * item1.size * 2), item2.position.y + ( un.y * item1.size * 2));
        let ut = new Vector(-un.y, un.x);

        let v1n = (un.x * item2.speed.x) + (un.y * item2.speed.y);
        let v1t = (ut.x * item2.speed.x) + (ut.y * item2.speed.y);
        let v2n = (un.x * item1.speed.x) + (un.y * item1.speed.y);
        let v2t = (ut.x * item1.speed.x) + (ut.y * item1.speed.y);

        let v1nTag = new Vector(un.x * v2n, un.y * v2n);
        let v1tTag = new Vector(ut.x * v1t, ut.y * v1t);
        let v2nTag = new Vector(un.x * v1n, un.y * v1n);
        let v2tTag = new Vector(ut.x * v2t, ut.y * v2t);

        let v1 = new Vector(v1nTag.x + v1tTag.x, v1nTag.y + v1tTag.y);
        let v2 = new Vector(v2nTag.x + v2tTag.x, v2nTag.y + v2tTag.y);

        item2.speed = v1;
        item1.speed = v2;
        item1.position = pos;

        return { "item1": item1 ,"item2": item2 };
    }

    public static isPositionValidated (item: Item, width: number, height: number): boolean {
        return item.position.x >= 0 
            && item.position.x <= width
            && item.position.y >= 0 
            && item.position.y <= height;
    }
}