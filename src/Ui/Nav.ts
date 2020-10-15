import UiComponent from './UiComponent';
import Tag from './Tag';

export default class Nav implements UiComponent {
    constructor(private body?: UiComponent,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {
        new Tag(
            "nav",
            this.body,
            this.attrs,
        ).appendTo(entry);
    }
}