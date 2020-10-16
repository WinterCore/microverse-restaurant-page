import { menuItems } from "../data";
import ComponentsList from "../Ui/ComponentsList";
import Div from "../Ui/Div";
import H2 from "../Ui/H2";
import MenuItem from "../Ui/MenuItem";
import TextNode from "../Ui/TextNode";
import UiComponent from "../Ui/UiComponent";

export default class Menu implements UiComponent {
    appendTo(entry: HTMLElement): void {
        (new Div(
            new ComponentsList([
                new H2(
                    new TextNode("Delicious Food For You"),
                    { class: "title" }
                ),
                new Div(
                    new ComponentsList(
                        menuItems.map(({ name, price, description, image }) => (
                            new MenuItem(
                                name,
                                description,
                                price,
                                image
                            )
                        ))
                    ),
                    { class: "menu-items-outer" }
                )
            ]),
            { class: "tab menu flex align-center column" }
        )).appendTo(entry);
    }
}
