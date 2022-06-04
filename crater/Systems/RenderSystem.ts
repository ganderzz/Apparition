import { DirectionComponent } from "../Components/DirectionComponent";
import { PositionComponent } from "../Components/PositionComponent";
import { SpriteComponent } from "../Components/SpriteComponent";
import { Entity } from "../Entity/Entity";
import { System } from "./Types";

export class RenderSystem implements System {
  public run(entities: Entity[], { context, delta }): void {
    context.clearScreen();

    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const sprite = entity.getComponent<SpriteComponent>(SpriteComponent.type);

      if (!sprite) {
        continue;
      }

      const position = entity.getComponent<PositionComponent>(PositionComponent.type);
      const direction = entity.getComponent<DirectionComponent>(DirectionComponent.type);

      context.addImage(sprite.currentFrame, position.x ?? 0, position?.y, direction?.facing === "left" ?? false);
    }
  }
}
