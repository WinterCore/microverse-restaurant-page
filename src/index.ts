import Div from "./Ui/Div";
import ComponentsList from "./Ui/ComponentsList";
import Home from "./Components/Home";
import Nav from "./Ui/Nav";
import Header from "./Ui/Header";
import Img from "./Ui/Img";
import TextNode from "./Ui/TextNode";
import Menu from "./Components/Menu";

const $root: HTMLElement = document.querySelector("#content");

(new Header(
    new ComponentsList([
        new Div(
            new Img("img/logo.png", { class: "logo" })
        ),
        new Nav(
            new ComponentsList([
                new Div(new TextNode("Home"), { class: "tab-button", "data-tab": 1 }),
                new Div(new TextNode("Menu"), { class: "tab-button", "data-tab": 2 }),
                new Div(new TextNode("About"), { class: "tab-button", "data-tab": 3 })
            ]),
            { class: "flex" }
        ),
        new Div(null, { style: "width: 100px" })
    ]),
    { class: "flex justify-between align-center" }
)).appendTo($root);


const TABS = [Home, Menu];

(new TABS[0]()).appendTo($root);

document.querySelectorAll("header nav .tab-button").forEach((item) => {
    item.addEventListener("click", function onTabButtonClick() {
        document.querySelector("#content .tab").remove();
        (new TABS[+this.dataset.tab - 1]()).appendTo($root);
    });
});