import Context from "../Context/Context";
import { Entity } from "../Entity/Entity";
import { KeyboardHandler } from "../Events/KeyboardHandler";

export type System = {
  run: (entities: Entity[], options: { context: Context, keyboard: KeyboardHandler }) => void;
};