import Crater from "./Crater";
import { Entity } from "./Entity/Entity";
import { PositionComponent } from "./Components/PositionComponent";
import { SpriteComponent } from "./Components/SpriteComponent";
import frame0 from "url:../img/pixil-frame-0.png";
import frame1 from "url:../img/pixil-frame-1.png";
import frame2 from "url:../img/pixil-frame-2.png";
import frame3 from "url:../img/pixil-frame-3.png";
import frame4 from "url:../img/pixil-frame-4.png";
import box from "url:../img/idle.png";
import { RenderSystem } from "./Systems/RenderSystem";
import { PlayerComponent } from "./Components/PlayerComponent";
import { EventSystem } from "./Systems/EventSystem";
import { VelocityComponent } from "./Components/VelocityComponent";
import { AnimationSystem } from "./Systems/AnimationSystem";
import { DirectionComponent } from "./Components/DirectionComponent";
import testMap from "../rooms/test.json";

function resizeWindow(canvas) {
  if (!canvas) {
    return;
  }

  const parent = canvas.parentNode;

  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;
}

window.onresize = () => {
  resizeWindow(document.querySelector("#canvas"));
};

window.onload = () => {
  const canvas: HTMLCanvasElement = document.querySelector("#canvas");

  resizeWindow(canvas);

  const crater = new Crater(canvas);
  const player = new Entity()
    .addComponent(new PositionComponent(32, 20))
    .addComponent(new SpriteComponent({ movement: [frame0, frame1, frame2, frame3, frame4], idle: [] }))
    .addComponent(new DirectionComponent())
    .addComponent(new VelocityComponent(0.2, 0.2))
    .addComponent(new PlayerComponent());

  const levels = testMap.layers
    .flatMap((layer) => {
      if (!layer.visible) {
        return null;
      }

      let y = 0;
      let x = 0;

      return layer.data.map((item, index) => {
        if (index % layer.width === 0) {
          y++;
          x = 0;
        }

        x++;

        if (item === 0) {
          return null;
        }

        return new Entity()
          .addComponent(new PositionComponent(x * 32, y * 32))
          .addComponent(new SpriteComponent({ movement: [box], idle: [] }));
      });
    })
    .filter(Boolean);

  const systems = [new AnimationSystem(), new RenderSystem(), new EventSystem()];
  const entities = [player, ...levels];
  console.log(entities);

  crater.run(systems, entities);
};
