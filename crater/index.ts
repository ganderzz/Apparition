import Crater from "./Crater";
import { Entity } from "./Entity/Entity";
import { PositionComponent } from "./Components/PositionComponent";
import { SpriteComponent } from "./Components/SpriteComponent";
import frame0 from "url:../img/pixil-frame-0.png";
import frame1 from "url:../img/pixil-frame-1.png";
import frame2 from "url:../img/pixil-frame-2.png";
import frame3 from "url:../img/pixil-frame-3.png";
import frame4 from "url:../img/pixil-frame-4.png";
import { RenderSystem } from "./Systems/RenderSystem";
import { PlayerComponent } from "./Components/PlayerComponent";
import { EventSystem } from "./Systems/EventSystem";
import { VelocityComponent } from "./Components/VelocityComponent";

window.onload = () => {
    const canvas: HTMLCanvasElement = document.querySelector("#canvas");

    const player = new Entity()
      .addComponent(new PositionComponent(5, 20))
      .addComponent(new SpriteComponent([frame0, frame1, frame2, frame3, frame4]))
      .addComponent(new VelocityComponent(0.2, 0.2))
      .addComponent(new PlayerComponent());

    const crater = new Crater(canvas);

    const renderSystem = new RenderSystem();
    const eventSystem = new EventSystem();

    const systems = [renderSystem, eventSystem];
    const entities = [player];

    crater.run(systems, entities);
}