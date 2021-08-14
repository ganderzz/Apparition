import { Component } from "../Components/Types";
import { generateUniqueId } from "../Utils/Utils";

export class Entity {
    public id = generateUniqueId();

    #components: Component[] = [];

    public addComponent(component: Component): this {
        this.#components.push(component);

        return this;
    }

    public removeComponent(componentType: string) {
      this.#components = this.#components.filter(item => item.type !== componentType);
    }

    public get getComponents() {
        return this.#components;
    }

    public getComponent<T extends Component>(component: string): T | undefined {
      return this.#components.find(c => c.type === component) as T | undefined;
    }
}