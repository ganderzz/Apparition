import { SpriteComponent } from "../Components/SpriteComponent";
import { VelocityComponent } from "../Components/VelocityComponent";
import { Entity } from "../Entity/Entity";
import { System } from "./Types";

export class AnimationSystem implements System {
  public run(entities: Entity[]): void {
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const sprite = entity.getComponent<SpriteComponent>(SpriteComponent.type);

      if (!sprite) {
        return;
      }

      const velocity = entity.getComponent<VelocityComponent>(VelocityComponent.type);

      if (velocity?.x !== 0) {
        sprite.incrementFrame();
      } else {
        sprite.frame = 0;
      }
    }
  }
}
