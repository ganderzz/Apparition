import { PlayerComponent } from "../Components/PlayerComponent";
import { PositionComponent } from "../Components/PositionComponent";
import { VelocityComponent } from "../Components/VelocityComponent";
import { Entity } from "../Entity/Entity";
import { Keyboard } from "../Events/Keyboard";
import { System } from "./Types";

const gravity = 0.1;

export class EventSystem implements System {
  public run(entities: Entity[], { delta, keyboard }): void {
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const player = entity.getComponent<PlayerComponent>("player");

      if (!player) {
        continue;
      }

      const position = entity.getComponent<PositionComponent>("position");
      const velocity = entity.getComponent<VelocityComponent>("velocity");

      if (!position || !velocity) {
        return;
      }

      if (keyboard.isKeyDown(Keyboard.d)) {
        velocity.x = player.movementSpeed;
        player.facing = "right";
      }
      else if (keyboard.isKeyDown(Keyboard.a)) {
        velocity.x = -player.movementSpeed;
        player.facing = "left";
      }
      else {
        velocity.x = 0;
      }

      if (player.isOnGround && keyboard.isKeyDown(Keyboard.w)) {
        velocity.y -= 0.4;
        player.isOnGround = false;
      } else if (position.y > 160) {
        velocity.y = 0;
        player.isOnGround = true;
      } else if (!player.isOnGround) {
        velocity.y += 0.05;
      }

      velocity.x += player.acceleration.x * delta;
      velocity.y += player.acceleration.y * delta * gravity;

      position.x += Math.floor(velocity.x * delta);
      position.y += Math.floor(velocity.y * delta);
    }
  }
}