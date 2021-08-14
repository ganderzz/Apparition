import { Component } from "./Types";

function loadImage(url): Promise<HTMLImageElement> {
  return new Promise(r => { 
    let i = new Image(); 
    i.onload = (() => r(i)); i.src = url; 
  });
}

export class SpriteComponent implements Component
{
  public type = "sprite";

  #images: HTMLImageElement[] = [];
  #frame = 0;

  public constructor(frames: string[]) {
    this.loadAssets(frames);
  }

  public async loadAssets(frames: string[]) {
    for (let i = 0; i < frames.length; i++) {
      const img = await loadImage(frames[i]);
      
      this.#images.push(img);
    }
  }

  public get first() {
    return this.#images[0];
  }

  public get currentFrame() {
    return this.#images[this.#frame];
  }

  public set frame(frame: number) {
    this.#frame = frame;
  }

  public incrementFrame() {
    this.#frame = this.#frame < this.#images.length -1 ? this.#frame + 1 : 0;
  }
}