class Card extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const left = document.createElement('div')
        componentRoot.appendChild(left)

        return componentRoot;
    }
    style(){}
}

customElements.define('card-test', Card);