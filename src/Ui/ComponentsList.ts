import UiComponent from './UiComponent';

export default class ComponentsList implements UiComponent {
    constructor(private components: UiComponent[]) {
    }

    appendTo(entry: HTMLElement): void {
        this.components.forEach((c) => c.appendTo(entry))
    }
}