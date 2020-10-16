import UiComponent from "./UiComponent";
import Tag from "./Tag";

export default class IFrame implements UiComponent {
    constructor(private src: string,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {
        new Tag(
            "iframe",
            null,
            Object.assign({ src: this.src }, this.attrs || {}),
        ).appendTo(entry);
    }
}
