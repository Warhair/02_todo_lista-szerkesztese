class Urlap{
    #adat = {};
    constructor(adat, szuloelem){
        this.szuloElem = szuloelem;
        console.log(szuloelem);
        this.szuloElem.html("<form>");
        this.fromElem = this.szuloElem.children("form");
        this.#adat = adat;
        this.#urlapLetrehozasa();
        this.submitGomb = this.fromElem.children("div").children("#submit");
        console.log(this.submitGomb);
        this.submitGomb.on("click",(event)=>{
            event.preventDefault()
            this.#adatGyujt();
            this.#esemenyTrigger("újAdatHozzaAdas");
        });
        
    }
    #urlapLetrehozasa(){
        let txt = "";
        for (const key in this.#adat) {
            txt += `<div class="form-group">
                <label for="${key}"     > ${this.#adat[key]}</label>
                <imput type="text" class="from-control" id="${key}" name="${key}" value="${this.#adat[key]}">
            </div>`;
        }
        txt +=  `<div>
                    <input type="submit" class="btn btn-primary" id="submit" value="Hozzáad">
                </div>`;
        console.log(txt)
        this.fromElem.html(txt);
    }
    #adatGyujt(){
        for (const key in this.#adat) {
            this.#adat[key] = $(`#${key}`).val();
        }
    }
    #esemenyTrigger() {
        const esemenyem = new CustomEvent("torles", { detail: this.#adat });
        window.dispatchEvent(esemenyem);
    }
   
}
export default Urlap;