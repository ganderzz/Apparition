import { IShape } from "../Shapes";

export default class Context {
    public constructor(readonly context: CanvasRenderingContext2D) {}

    public add(shape: IShape) {
        shape.draw(this.context);
    }

    public addImage(image: HTMLImageElement, x: number = 0, y: number = 0, flipX = false) {
      if (!image) {
        return;
      }

 
      this.context.save();
      this.context.translate(x + (flipX ? image.width : 0), y);
      if (flipX) {
        this.context.scale(-1, 1);
      }
      this.context.drawImage(image, 0, 0);
      this.context.restore();
    }

    public clearScreen() {
        const canvas = this.context.canvas;
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
}