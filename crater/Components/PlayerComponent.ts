import { Component } from "./Types";

export class PlayerComponent implements Component {
  public static type = 0;
  public movementSpeed = 0.1;
  public acceleration = { x: 0, y: 0 };
  public mass = 0.2;
  public radius = 15;
  public isOnGround = false;
}
