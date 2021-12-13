import { Division } from "../Division/division";
import { Salarie } from "../Salarie/salarie";
export class Service {
    
    idS : number;
    nomS : string;
    divisionService : Division;
    salarie : Salarie;

    constructor(idS : number, nomS : string, divisionService : Division,salarie : Salarie){
        this.idS = idS;
        this.nomS = nomS;
        this.divisionService = divisionService;
        this.salarie = this.salarie;
    }

}
