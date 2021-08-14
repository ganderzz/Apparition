import { PlayerComponent } from "../Components/PlayerComponent";
import { PositionComponent } from "../Components/PositionComponent";
import { Entity } from "../Entity/Entity";
import { Keyboard } from "../Events/Keyboard";
import { System } from "./Types";

export class EventSystem implements System {
  public run(entities: Entity[], { keyboard }): void {
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const player = entity.getComponent<PlayerComponent>("player");

      if (!player) {
        continue;
      }

      const position = entity.getComponent<PositionComponent>("position");

      if (keyboard.isKeyDown(Keyboard.d)) {
        position.x += 2;
      }
      if (keyboard.isKeyDown(Keyboard.a)) {
        position.x -= 2;
      }
      if (keyboard.isKeyDown(Keyboard.s)) {
        position.y += 2;
      }
      if (keyboard.isKeyDown(Keyboard.w)) {
        position.y -= 2;
      }
    }
  }
}