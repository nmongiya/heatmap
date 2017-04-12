import { rotate } from './rotate';


export class world
{
    rotate:rotate;

    constructor()
    {
        this.rotate = new rotate();
    }
    
    size(p, size)
    {
        return {
            x: p.x * size.x,
            y: p.y * size.y,
            z: p.z * size.z
        }
    }

    position(p, position)
    {
        return {
            x: p.x + position.x,
            y: p.y + position.y,
            z: p.z + position.z
        }
    }
}