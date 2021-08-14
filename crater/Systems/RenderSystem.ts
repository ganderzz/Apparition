import { PositionComponent } from "../Components/PositionComponent";
import { SpriteComponent } from "../Components/SpriteComponent";
import { Entity } from "../Entity/Entity";
import { System } from "./Types";

export class RenderSystem implements System {
  public run(entities: Entity[], { context }): void {
    context.clearScreen();

    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const render = entity.getComponent<SpriteComponent>("sprite");

      if (!render) {
        continue;
      }

      const position = entity.getComponent<PositionComponent>("position");

      context.addImage(render.first, position.x, position.y);
    }
  }
}