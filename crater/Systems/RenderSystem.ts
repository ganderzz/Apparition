import { PlayerComponent } from "../Components/PlayerComponent";
import { PositionComponent } from "../Components/PositionComponent";
import { SpriteComponent } from "../Components/SpriteComponent";
import { VelocityComponent } from "../Components/VelocityComponent";
import { Entity } from "../Entity/Entity";
import { System } from "./Types";

export class RenderSystem implements System {
  public run(entities: Entity[], { context, delta }): void {
    context.clearScreen();

    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const sprite = entity.getComponent<SpriteComponent>("sprite");

      if (!sprite) {
        continue;
      }

      const position = entity.getComponent<PositionComponent>("position");
      const player = entity.getComponent<PlayerComponent>("player");

      if (!player) {
        return;
      }

      context.addImage(sprite.currentFrame, position.x ?? 0, position?.y, player?.facing === "left");
    }
  }
}