import Crater from "./Crater";
import { Rectangle } from "./Shapes";
import { Keyboard } from "./Events/Keyboard";

window.onload = () => {
    const canvas: HTMLCanvasElement = document.querySelector("#canvas");

    const rect = new Rectangle({
        x: 20,
        y: 20,
        height: 20,
        width: 20,
        fillColor: "pink"
    });
    const ct = new Crater(canvas);
    ct.add(rect);
    const speed = 3;

    ct.runEventLoop((events) => {
        const x = rect.get<number>("x");
        const y = rect.get<number>("y");

        if (events.isKeyDown(Keyboard.d)) {
            rect.set("x", x + speed);
        }
        if (events.isKeyDown(Keyboard.a)) {
            rect.set("x", x - speed);
        }
        if (events.isKeyDown(Keyboard.w)) {
            rect.set("y", y - speed);
        }
        if (events.isKeyDown(Keyboard.s)) {
            rect.set("y", y + speed);
        }
    });
}