import { Point } from './point';

export class Cloth {
    
    points = [];
    
    physics_accuracy = 3;
    ctx;
   


    constructor(canvas, cloth_width, cloth_height, spacing, start_y) {

        this.ctx = canvas.getContext('2d');

        let start_x = canvas.width / 2 - cloth_width * spacing / 2;
        for (var y = 0; y <= cloth_height; y++) {

            for (var x = 0; x <= cloth_width; x++) {

                let p = new Point(start_x + x * spacing, start_y + y * spacing,this.ctx);

                x != 0 && p.attach(this.points[this.points.length - 1]);
                y == 0 && p.pin(p.x, p.y);
                y != 0 && p.attach(this.points[x + (y - 1) * (cloth_width + 1)])

                this.points.push(p);
            }
        }
        
    }

    update(){

        var i = this.physics_accuracy;

        while (i--) {
            var p = this.points.length;
            while (p--) this.points[p].resolve_constraints();
        }

        i = this.points.length;
        while (i--) this.points[i].update(.016);

    }

    draw()
    {
        this.ctx.beginPath();

        var i = this.points.length;
        while (i--) this.points[i].draw();

        this.ctx.stroke();
    }

    
}
