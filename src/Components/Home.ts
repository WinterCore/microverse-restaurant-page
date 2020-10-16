import UiComponent from "../Ui/UiComponent";
import Div from "../Ui/Div";
import TextNode from "../Ui/TextNode";
import H1 from "../Ui/H1";

export default class Home implements UiComponent {
    appendTo(entry: HTMLElement): void {
        (new Div(
            new H1(
                new TextNode("Fresh And Delicious Food For Your Health"),
                { class: "title" }
            ),
            { class: "tab home flex justify-center align-center" }
        )).appendTo(entry);
    }
}
