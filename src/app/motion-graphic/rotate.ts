export class rotate {
    x(p, rotate) {
        return {
            x: p.x,
            y: p.y * Math.cos(this.dtr(rotate.x)) - p.z * Math.sin(this.dtr(rotate.x)),
            z: p.y * Math.sin(this.dtr(rotate.x)) + p.z * Math.cos(this.dtr(rotate.x))
        }
    }

    y(p, rotate) {
        return {
            x: p.x * Math.cos(this.dtr(rotate.y)) + p.z * Math.sin(this.dtr(rotate.y)),
            y: p.y,
            z: -p.x * Math.sin(this.dtr(rotate.y)) + p.z * Math.cos(this.dtr(rotate.y))
        }
    }

    z(p, rotate) {
        return {
            x: p.x * Math.cos(this.dtr(rotate.z)) - p.y * Math.sin(this.dtr(rotate.z)),
            y: p.x * Math.sin(this.dtr(rotate.z)) + p.y * Math.cos(this.dtr(rotate.z)),
            z: p.z
        }
    }

    dtr(v)
    {
        return v * Math.PI / 180;
    }
}