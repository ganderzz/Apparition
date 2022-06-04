import { Component } from "./Types";

function loadImage(url): Promise<HTMLImageElement> {
  return new Promise((r) => {
    let i = new Image();
    i.onload = () => r(i);
    i.src = url;
  });
}

export class SpriteComponent implements Component {
  public static type = 2;

  #movementImages: HTMLImageElement[] = [];
  #idleImages: HTMLImageElement[] = [];
  #frame = 0;

  public constructor(frames: { movement: string[]; idle: string[] }) {
    this.loadAssets(frames);
  }

  public async loadAssets(frames: { movement: string[]; idle: string[] }) {
    for (let i = 0; i < frames.movement.length; i++) {
      const img = await loadImage(frames.movement[i]);

      this.#movementImages.push(img);
    }
  }

  public get first() {
    return this.#movementImages[0];
  }

  public get currentFrame() {
    return this.#movementImages[this.#frame];
  }

  public set frame(frame: number) {
    this.#frame = frame;
  }

  public incrementFrame() {
    this.#frame = this.#frame < this.#movementImages.length - 1 ? this.#frame + 1 : 0;
  }
}
