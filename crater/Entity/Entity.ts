import { Component } from "../Components/Types";
import { generateUniqueId } from "../Utils/Utils";

export class Entity {
  public id = generateUniqueId();

  #components: Component[] = [];

  public addComponent(component: Component): this {
    this.#components[component.constructor.type] = component;

    return this;
  }

  public removeComponent(componentType: string) {
    this.#components = this.#components.filter((item) => component.constructor.type !== componentType);
  }

  public get getComponents() {
    return this.#components;
  }

  public getComponent<T extends Component>(componentType: number): T | undefined {
    return this.#components[componentType] as T | undefined;
  }
}
