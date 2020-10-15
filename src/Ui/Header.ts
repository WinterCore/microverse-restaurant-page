import UiComponent from './UiComponent';
import Tag from './Tag';

export default class Header implements UiComponent {
    constructor(private body?: UiComponent,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {
        new Tag(
            "header",
            this.body,
            this.attrs,
        ).appendTo(entry);
    }
}