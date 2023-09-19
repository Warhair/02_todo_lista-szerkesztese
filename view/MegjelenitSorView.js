class MegjelenitSor {
    #adat = {};
    #index;
    constructor(adat, szuloElem, index) {
        this.#adat = adat;
        this.#index = index;
        this.tablaElem = szuloElem;

        this.#sor();
        /** eseménykezelők a kész és a törlés gombokhoz */
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.torolElem = this.sorElem.children("td").children(".torol");
        this.megseElem = this.sorElem.children("td").children(".megse");
        /* this.megseElem.css("visibility", "hidden"); */
        this.megseElem.css("display", "none");
        //console.log(this.keszElem);
        this.keszElem.on("click", () => {
            this.sorElem.css("background-color", "lightgreen");
            /*  this.megseElem.css("visibility", "visible");
            this.keszElem.css("visibility", "hidden"); */
            this.megseElem.css("display", "inline");
            this.keszElem.css("display", "none");
        });
        this.megseElem.on("click", () => {
            this.sorElem.css("background-color", "white");
            /*  this.keszElem.css("visibility", "visible");
            this.megseElem.css("visibility", "hidden"); */
            this.keszElem.css("display", "inline");
            this.megseElem.css("display", "none");
        });
        this.torolElem.on("click", () => {
            this.sorElem.remove();

            this.#esemenyTrigger();
        });
    }
    #sor() {
        let txt = "";

        txt += "<tr>";
        for (const key in this.#adat) {
            if (Object.hasOwnProperty.call(this.#adat, key)) {
                const element = this.#adat[key];
                txt += `<td>${element}</td>`;
            }
        }
        txt += `<td><span class="kesz">✔️</span> <span class="megse">❌</span><span class="torol">🗑</span></td>`;
        txt += "</tr>";

        this.tablaElem.append(txt);
    }
    #esemenyTrigger() {
        const esemenyem = new CustomEvent("torles", { detail: this.#index });
        window.dispatchEvent(esemenyem);
    }
}
export default MegjelenitSor;
