import Context from "./Context/Context";
import { Entity } from "./Entity/Entity";
import { KeyboardHandler } from "./Events/KeyboardHandler";
import { System } from "./Systems/Types";

export default class Crater {
  public constructor(canvas: HTMLCanvasElement) {
    this._context = new Context(canvas.getContext("2d"));
    this._keyboard = new KeyboardHandler();
  }

  /**
   * Start and handle a render loop
   */
  public run = (
    systems: System[],
    entities: Entity[]
  ) => {
    requestAnimationFrame(() =>
      this.runAllEvents(systems, entities)
    );
  };

  private runAllEvents = (
    systems: System[],
    entities: Entity[]
  ) => {
    requestAnimationFrame(() => this.runAllEvents(systems, entities));

    const now = Date.now();
    const delta = now - this.previousTime;

    if (delta > this.interval) {
      this.previousTime = now - delta % this.interval;    
      
      for (let i = 0; i < systems.length; i++) {
        systems[i].run(entities, { delta, context: this._context, keyboard: this._keyboard });
      }
    }
  };

  private readonly _context: Context;
  private readonly _keyboard: KeyboardHandler;

  private previousTime: number = Date.now();
  private interval: number = 1000 / 30; // 30 frames per second
}
