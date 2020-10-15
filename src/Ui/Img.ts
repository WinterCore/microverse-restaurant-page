import UiComponent from './UiComponent';
import Tag from './Tag';

export default class Img implements UiComponent {
    constructor(private src: string,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {
        new Tag(
            "img",
            null,
            Object.assign({ src: this.src }, this.attrs),
        ).appendTo(entry);
    }
}