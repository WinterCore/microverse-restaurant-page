import UiComponent from "./UiComponent";
import Tag from "./Tag";

export default class Div implements UiComponent {
    constructor(private body?: UiComponent,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {
        new Tag(
            "div",
            this.body,
            this.attrs,
        ).appendTo(entry);
    }
}
