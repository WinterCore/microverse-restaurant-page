import UiComponent from "./UiComponent";
import Tag from "./Tag";

export default class H2 implements UiComponent {
    constructor(private body?: UiComponent,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {
        new Tag(
            "h2",
            this.body,
            this.attrs,
        ).appendTo(entry);
    }
}
