import { IShape } from "../Shapes";

export default class Context {
    public constructor(readonly context: CanvasRenderingContext2D) {}

    public add(shape: IShape) {
        shape.draw(this.context);
    }

    public clearScreen() {
        const canvas =this.context.canvas;
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
}