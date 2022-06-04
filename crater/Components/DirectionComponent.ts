import { Component } from "./Types";

type Direction = "left" | "right";

export class DirectionComponent implements Component {
  public static type = 5;
  public facing: Direction = "right";

  public constructor(initialFacing: Direction = "right") {
    this.facing = initialFacing;
  }
}
