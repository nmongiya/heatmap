import { world } from './world';
import { view } from './view';

export class affine
{
    world:world;
    view:view;
    camera;

    constructor(camera)
    {
        this.world = new world();
        this.view = new view();
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

    process(model, size, rotate, position, display)
    {
        let ret = this.world.size(model, size);
        ret = this.world.rotate.x(ret, rotate);
        ret = this.world.rotate.y(ret, rotate);
        ret = this.world.rotate.z(ret, rotate);
        ret = this.world.position(ret, position);
        ret = this.view.point(ret);
        ret = this.view.x(ret);
        ret = this.view.y(ret);
        ret = this.view.viewReset(ret);
        ret = this.view.righthandedReversal(ret);
        ret = this.perspective(ret);
        ret = this.display(ret, display);
        return ret;
    }

    display(p, display)
    {
        return {
            x: p.x + display.x,
            y: p.y + display.y,
            z: p.z + display.z,
            p: p.p,
        }
    }

    perspective(p)
    {
        return {
            x: p.x * ((this.camera.focus - this.camera.self.z) / ((this.camera.focus - this.camera.self.z) - p.z)) * this.camera.zoom,
            y: p.y * ((this.camera.focus - this.camera.self.z) / ((this.camera.focus - this.camera.self.z) - p.z)) * this.camera.zoom,
            z: p.z * ((this.camera.focus - this.camera.self.z) / ((this.camera.focus - this.camera.self.z) - p.z)) * this.camera.zoom,
            p: ((this.camera.focus - this.camera.self.z) / ((this.camera.focus - this.camera.self.z) - p.z)) * this.camera.zoom,
        }
    }
}