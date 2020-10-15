import Div from "./Ui/Div";
import ComponentsList from "./Ui/ComponentsList";
import Home from "./Components/Home";
import Nav from "./Ui/Nav";
import Header from "./Ui/Header";
import Img from "./Ui/Img";
import TextNode from "./Ui/TextNode";

const $root: HTMLElement = document.querySelector("#content");

(new Header(
    new ComponentsList([
        new Div(
            new Img("img/logo.png", { class: "logo" })
        ),
        new Nav(
            new ComponentsList([
                new Div(new TextNode("Home")),
                new Div(new TextNode("Menu")),
                new Div(new TextNode("About"))
            ]),
            { class: "flex" }
        ),
        new Div(null, { style: "width: 100px" })
    ]),
    { class: "flex justify-between align-center" }
)).appendTo($root);

(new Home()).appendTo(document.querySelector("#content"));