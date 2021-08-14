import Crater from "./Crater";
import { Entity } from "./Entity/Entity";
import { PositionComponent } from "./Components/PositionComponent";
import { SpriteComponent } from "./Components/SpriteComponent";
import frame0 from "url:../img/pixil-frame-0.png";
import frame3 from "url:../img/pixil-frame-3.png";
import { RenderSystem } from "./Systems/RenderSystem";
import { PlayerComponent } from "./Components/PlayerComponent";
import { EventSystem } from "./Systems/EventSystem";

window.onload = () => {
    const canvas: HTMLCanvasElement = document.querySelector("#canvas");

    const player = new Entity()
      .addComponent(new PositionComponent(5, 20))
      .addComponent(new SpriteComponent([frame0]))
      .addComponent(new PlayerComponent());

    const enemy = new Entity()
      .addComponent(new PositionComponent(200, 150))
      .addComponent(new SpriteComponent([frame3]));

    const crater = new Crater(canvas);

    const renderSystem = new RenderSystem();
    const eventSystem = new EventSystem();

    const systems = [renderSystem, eventSystem];
    const entities = [player, enemy];

    crater.run(systems, entities);
}