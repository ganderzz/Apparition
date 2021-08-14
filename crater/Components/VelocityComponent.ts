import { Component } from "./Types";

export class VelocityComponent implements Component
{
  public type = "velocity";
  public x: number;
  public y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}