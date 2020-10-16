import UiComponent from "./UiComponent";

export default class Tag implements UiComponent {
    constructor(private name: string,
                private body?: UiComponent,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {

        let element = document.createElement(this.name);

        if (this.attrs) {
            for (let attrKey in this.attrs) {
                let attr = document.createAttribute(attrKey);
                attr.value = this.attrs[attrKey];
                element.attributes.setNamedItem(attr);
            }
        }

        if (this.body) {
            this.body.appendTo(element);
        }

        entry.appendChild(element);
    }
}
