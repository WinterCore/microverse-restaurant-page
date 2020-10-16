import UiComponent from "../Ui/UiComponent";
import Div from "../Ui/Div";
import TextNode from "../Ui/TextNode";
import H1 from "../Ui/H1";
import ComponentsList from "../Ui/ComponentsList";
import IFrame from "../Ui/IFrame";

export default class About implements UiComponent {
    appendTo(entry: HTMLElement): void {
        (new Div(
            new ComponentsList([
                new Div(
                    new H1(
                        new TextNode("Contact"),
                        { class: "title" }
                    ),
                    { class: "about-heading flex justify-center align-center" }
                ),
                new Div(
                    new ComponentsList([
                        new IFrame(
                            "https://www.google.com/maps/embed/v1/place?q=paris&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
                            { id: "map" }
                        ),
                        new Div(
                            new ComponentsList([
                                new Div(
                                    new ComponentsList([
                                        new Div(new TextNode("Paris, France")),
                                        new Div(new TextNode("Potato Road 91770"))
                                    ])
                                ),
                                new Div(
                                    new ComponentsList([
                                        new Div(new TextNode("+1 253 565 2365")),
                                        new Div(new TextNode("Mon to Fri 9am to 6pm"))
                                    ])
                                ),
                                new Div(
                                    new ComponentsList([
                                        new Div(new TextNode("support@colorlib.com")),
                                        new Div(new TextNode("Send us your query anytime!"))
                                    ])
                                )
                            ]),
                            { class: "about-info flex justify-between" }
                        )
                    ]),
                    { class: "about-container" }
                )
            ]),
            { class: "tab about" }
        )).appendTo(entry);
    }
}
