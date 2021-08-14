function generateUniqueId(id = 0) {
    return function () {
        return id++;
    }
}(0);

type Component = {
    type: string;
};

export class Entity {
    public id = generateUniqueId();
    #components: Component[] = [];

    public addComponent(component: Component) {
        this.#components.push(component);
    }

    public getComponents() {
        return this.#components;
    }
}