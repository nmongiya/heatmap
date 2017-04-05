import { Constraint } from './constraint';
export class Point {

    

    pin_x;
    pin_y;

    vx;
    vy;

    x;
    y;

    physics_accuracy = 3;
    mouse_influence = 20;
    mouse_cut = 5;
    gravity = 1200;
    cloth_height = 30;
    cloth_width = 50;
    start_y = 20;
    spacing = 7;
    tear_distance = 60;

    px;
    py;

    nx;
    ny;

    boundsx;
    boundsy;

    constraints:Constraint[] = [];
    ctx;

    mouse = {
        down: false,
        button: 1,
        x: 0,
        y: 0,
        px: 0,
        py: 0
    };

    constructor(x, y,ctx)
    {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.px = x;
        this.py = y;
        this.vx = 0;
        this.vy = 0;
        this.pin_x = null;
        this.pin_y = null;

        this.constraints = [];
    }

    update(delta)
    {
        if (this.mouse.down) {

            let diff_x = this.x - this.mouse.x;
            let diff_y = this.y - this.mouse.y;
            let dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

            if (this.mouse.button == 1) {

                if (dist < this.mouse_influence) {
                    this.px = this.x - (this.mouse.x - this.mouse.px) * 1.8;
                    this.py = this.y - (this.mouse.y - this.mouse.py) * 1.8;
                }

            } else if (dist < this.mouse_cut) this.constraints = [];
        }

        this.add_force(0, this.gravity);

        delta *= delta;
        this.nx = this.x + ((this.x - this.px) * .99) + ((this.vx / 2) * delta);
        this.ny = this.y + ((this.y - this.py) * .99) + ((this.vy / 2) * delta);

        this.px = this.x;
        this.py = this.y;

        this.x = this.nx;
        this.y = this.ny;

        this.vy = this.vx = 0
    }

    draw()
    {
        if (!this.constraints.length) return;
        var i = this.constraints.length;
        while (i--) this.constraints[i].draw();
    }

    resolve_constraints()
    {
        if (this.pin_x != null && this.pin_y != null) {

            this.x = this.pin_x;
            this.y = this.pin_y;
            return;
        }

        var i = this.constraints.length;
        while (i--) this.constraints[i].resolve();

        this.x > this.boundsx ? this.x = 2 * this.boundsx - this.x : 1 > this.x && (this.x = 2 - this.x);
        this.y < 1 ? this.y = 2 - this.y : this.y > this.boundsy && (this.y = 2 * this.boundsy - this.y);
    }

    
    remove_constraint(constraint)
    {
        this.constraints.splice(this.constraints.indexOf(constraint), 1);
    }

    pin(pinx, piny) {
        this.pin_x = pinx;
        this.pin_y = piny;
    }

    add_force(x, y) {

        this.vx += x;
        this.vy += y;
    };

    attach(point) {

        this.constraints.push(new Constraint(this, point, this.ctx));
    };
}
