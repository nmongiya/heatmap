export class Constraint {

    p1;
    p2;
    length;

    tear_distance;
    ctx;

    constructor(p1, p2, ctx)
    {
        this.p1 = p1;
        this.p2 = p2;
        this.length = 7;
        this.ctx = ctx;
    }

    resolve()
    {
        let diff_x = this.p1.x - this.p2.x;
        let diff_y = this.p1.y - this.p2.y;
        let dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
        let diff = (this.length - dist) / dist;

        if (dist > this.tear_distance) this.p1.remove_constraint(this);

        var px = diff_x * diff * 0.5;
        var py = diff_y * diff * 0.5;

        this.p1.x += px;
        this.p1.y += py;
        this.p2.x -= px;
        this.p2.y -= py;
    }

    draw()
    {
        this.ctx.moveTo(this.p1.x, this.p1.y);
        this.ctx.lineTo(this.p2.x, this.p2.y);
    }
}
