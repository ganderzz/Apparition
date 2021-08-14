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
}