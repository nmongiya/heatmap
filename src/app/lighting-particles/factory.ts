export class Factory {
    x;
    y;
    rad;
    rgba;
    vx;
    vy;
    colors = ['#f35d4f', '#f36849', '#c0d988', '#6ddaf1', '#f1e85b'];
    constructor(w,h)
    {
        this.x = Math.round(Math.random() * w);
        this.y = Math.round(Math.random() * h);
        this.rad = Math.round(Math.random() * 1) + 1;
        this.rgba = this.colors[Math.round(Math.random() * 3)];
        this.vx = Math.round(Math.random() * 3) - 1.5;
        this.vy = Math.round(Math.random() * 3) - 1.5;
    }
}
