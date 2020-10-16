import UiComponent from "./UiComponent";
import Div from "./Div";
import ComponentsList from "./ComponentsList";
import Img from "./Img";
import TextNode from "./TextNode";
import H2 from "./H2";
import P from "./P";

export default class MenuItem implements UiComponent {
    constructor(private name: string,
                private description: string,
                private price: number,
                private image: string,
                private attrs?: {[key: string]: any}) {
    }

    appendTo(entry: HTMLElement): void {
        (new Div(
            new ComponentsList([
                new Div(
                    new Img(this.image),
                    { class: "menu-item-thumb" }
                ),
                new Div(
                    new ComponentsList([
                        new H2(new TextNode(this.name)),
                        new P(new TextNode(this.description)),
                        new Div(new TextNode(`$${this.price}`), { class: "price" }),
                    ]),
                    { class: "menu-item-data" }
                )
            ]),
            Object.assign({ class: "menu-item" }, this.attrs || {})
        )).appendTo(entry);
    }
}
