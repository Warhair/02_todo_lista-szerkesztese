import Model from "../model/Model.js";
import Megjelenit from "../view/MegjelenitView.js";
import Urlap from "../view/UrlapView.js";
class Controller{
    constructor(){
    const szuloELEM = $(".tarolo");
    const szuloELEM2 = $(".ujadat");
    const MODEL = new Model()
    new Megjelenit(MODEL.getList(), szuloELEM);
    new Urlap({tevekenyseg: "", hatarido: ""}, szuloELEM2)
    $(window).on("torles", (event) => {
        console.log(event.detail);
    });
    $(window).on("ujAdatHozzaAdas", (event)=>{
        console.log(event.detail)
        MODEL.ujAdat(event.detail)
        szuloELEM.empty()
        new Megjelenit(MODEL.getList(), szuloELEM)
    });
}
}
export default Controller