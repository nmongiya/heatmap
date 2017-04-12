import { affine } from './affine';
import { camera } from './camera';

export class vertex3d {
    affineIn;
    affineOut;
    camera:camera;
    affine: affine;

    constructor(param) {
        this.affineIn = new Object;
        this.affineOut = new Object;

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

        this.affine = new affine(this.camera);

        if (param.vertex !== undefined) {
            this.affineIn.vertex = param.vertex;
        } else {
            this.affineIn.vertex = { x: 0, y: 0, z: 0 };
        };
        if (param.size !== undefined) {
            this.affineIn.size = param.size;
        } else {
            this.affineIn.size = { x: 1, y: 1, z: 1 };
        };
        if (param.rotate !== undefined) {
            this.affineIn.rotate = param.rotate;
        } else {
            this.affineIn.rotate = { x: 0, y: 0, z: 0 };
        };
        if (param.position !== undefined) {
            this.affineIn.position = param.position;
        } else {
            this.affineIn.position = { x: 0, y: 0, z: 0 };
        };
    }

    vertexUpdate(affineIn) {
        if (affineIn !== undefined && affineIn!== null)
        {
            this.affineOut = this.affine.process(affineIn.vertex,
                affineIn.size,
                affineIn.rotate,
                affineIn.position,
                this.camera.display);
        }

       
    }

}