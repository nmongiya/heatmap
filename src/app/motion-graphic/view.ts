export class view {

    camera;

    constructor()
    {
        this.camera = {
            focus: 400,
            self: {
                x: 0,
                y: 0,
                z: 0
            },
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            up: {
                x: 0,
                y: 1,
                z: 0
            },
            zoom: 1,
            display: {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                z: 0
            }
        };
    }
    point(p)
    {
        return {
            x: p.x - this.camera.self.x,
            y: p.y - this.camera.self.y,
            z: p.z - this.camera.self.z
        }
    }

    x(p)
    {
        return {
            x: p.x,
            y: p.y * Math.cos(this.dtr(this.camera.rotate.x)) - p.z * Math.sin(this.dtr(this.camera.rotate.x)),
            z: p.y * Math.sin(this.dtr(this.camera.rotate.x)) + p.z * Math.cos(this.dtr(this.camera.rotate.x))
        }
    }

    y(p)
    {
        return {
            x: p.x * Math.cos(this.dtr(this.camera.rotate.y)) + p.z * Math.sin(this.dtr(this.camera.rotate.y)),
            y: p.y,
            z: p.x * -Math.sin(this.dtr(this.camera.rotate.y)) + p.z * Math.cos(this.dtr(this.camera.rotate.y))
        }
    }

    viewReset(p)
    {
        return {
            x: p.x - this.camera.self.x,
            y: p.y - this.camera.self.y,
            z: p.z - this.camera.self.z
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