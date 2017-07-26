export class Sprite {
    spriteObject: any;
    // { context: any, width: number, height: number, image: string }
    frameIndex = 0;
    tickCount = 0;
    ticksPerFrame = 1;
    numberOfFrames = 8;
    loop;
    currentX = 0;
    currentY = 0;
    vx = 2;
    vy = 2;

    constructor(options) {

        this.spriteObject = {};
        this.spriteObject['context'] = options.context;
        this.spriteObject['width'] = options.width;
        this.spriteObject['height'] = options.height;
        this.spriteObject['image'] = options.image;

    }


    render() {

        // this.spriteObject.context.clearRect(0, 0, this.spriteObject['width'], this.spriteObject['height']);
        this.spriteObject.context.clearRect(0, 0, 800, 800);
        this.spriteObject.context.drawImage(
            this.spriteObject.image,
            this.frameIndex * this.spriteObject['width'] / this.numberOfFrames,
            0,
            this.spriteObject['width'] / this.numberOfFrames,
            this.spriteObject.height,
            0,
            0,
            this.spriteObject['width'] / this.numberOfFrames,
            this.spriteObject.height);


    }

    update() {

        this.tickCount += 1;

        if (this.tickCount > this.ticksPerFrame) {

            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                // Go to the next frame
                this.frameIndex += 1;
            } else {
                this.frameIndex = 0;
            }

        }



        // if ((this.currentX + this.vx + this.spriteObject.width > 500) || (this.currentX + this.vx + this.spriteObject.width < 0)) {
        //     this.vx = - this.vx;
        // }

        // if ((this.currentY + this.vy + this.spriteObject.height > 100) || (this.currentY + this.vy + this.spriteObject.height < 0)) {
        //     this.vy = - this.vy;
        // }
        // this.currentX += this.vx;
        // this.currentY += this.vy;

        // this.spriteObject.context.translate(this.currentX, this.currentY);
    };

}

