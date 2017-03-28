export class RGB {

    private color: any;
    private red: number;
    private green: number;
    private blue: number;

    
    public Hex(){
        return this.color
    }

    public static RGB(r: number = 0, g: number = 0, b: number = 0) {
        // Red(r);
        // this.Green = g;
        // this.Blue = b;
    }

    public getHex(r: number, g: number, b: number): any {
        return (r << 16) | (g << 8) | b;
    }


    set Red(Value: number) {
        this.red = (Value > 255) ? 255 : ((Value < 0) ? 0 : Value);
        this.color = this.getHex(this.red, this.green, this.blue);
    }
    set Green(Value: number) {
        this.green = (Value > 255) ? 255 : ((Value < 0) ? 0 : Value);
        this.color = this.getHex(this.red, this.green, this.blue);
    }
    set Blue(Value: number) {
        this.blue = (Value > 255) ? 255 : ((Value < 0) ? 0 : Value);
        this.color = this.getHex(this.red, this.green, this.blue);
    }

    get Red(): number {
        return this.color >> 16;
    }
    get Green(): number {
        return (this.color >> 8) & 0xFF;
    }
    get Blue(): number {
        return this.color & 0x00FF;
    }
}