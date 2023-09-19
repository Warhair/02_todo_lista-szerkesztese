import MegjelenitSor from "./MegjelenitSorView.js";

class Megjelenit {
    #list = [];
    constructor(list, szuloElem) {
        this.#list = list;
        szuloElem.append('<table class="table table-bordered table-striped ">');
        this.tablaElem = szuloElem.children("table");
        console.log(this.tablaElem);
        this.tablazatbaIr();
       
    }
    tablazatbaIr() {
        this.#list.forEach((elem, index) => {
            new MegjelenitSor(elem, this.tablaElem, index);
        });
    }
}
export default Megjelenit;
