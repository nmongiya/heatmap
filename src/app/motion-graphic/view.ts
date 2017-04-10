export class view {
    point(p)
    {
        return {
            x: p.x - camera.self.x,
            y: p.y - camera.self.y,
            z: p.z - camera.self.z
        }
    }

    x(p)
    {
        return {
            x: p.x,
            y: p.y * Math.cos(this.dtr(camera.rotate.x)) - p.z * Math.sin(this.dtr(camera.rotate.x)),
            z: p.y * Math.sin(this.dtr(camera.rotate.x)) + p.z * Math.cos(this.dtr(camera.rotate.x))
        }
    }

    y(p)
    {
        return {
            x: p.x * Math.cos(this.dtr(camera.rotate.y)) + p.z * Math.sin(this.dtr(camera.rotate.y)),
            y: p.y,
            z: p.x * -Math.sin(this.dtr(camera.rotate.y)) + p.z * Math.cos(this.dtr(camera.rotate.y))
        }
    }

    viewReset(p)
    {
        return {
            x: p.x - camera.self.x,
            y: p.y - camera.self.y,
            z: p.z - camera.self.z
        }
    }

    righthandedReversal(p)
    {
        return {
            x: p.x,
            y: -p.y,
            z: p.z,
        }
    }

    dtr(v) {
        return v * Math.PI / 180;
    }
}