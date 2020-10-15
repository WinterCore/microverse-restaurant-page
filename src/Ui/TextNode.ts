  import UiComponent from './UiComponent';

export default class TextNode implements UiComponent {
    constructor(private text: string) {}

    appendTo(entry: HTMLElement): void {
        entry.appendChild(document.createTextNode(this.text));
    }
}