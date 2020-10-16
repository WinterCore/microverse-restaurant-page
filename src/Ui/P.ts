import UiComponent from "./UiComponent";
import Tag from "./Tag";

export default class H1 implements UiComponent {
    constructor(private body?: UiComponent,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {
        new Tag(
            "p",
            this.body,
            this.attrs,
        ).appendTo(entry);
    }
}
