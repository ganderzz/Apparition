import { Component } from "./Types";

export class PositionComponent implements Component {
  public static type = 1;
  public x: number;
  public y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
