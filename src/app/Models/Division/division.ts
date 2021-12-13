import { Service } from "../Service/service";
import { Salarie } from "../Salarie/salarie";
export class Division {

    idD : number;
    name : string;
    service : Array<Service>;
    salarie : Salarie;

    constructor(idD : number, name : string, service : Array<Service>, salarie : Salarie){
        this.idD = idD;
        this.name = name;
        this.service = service;
        this.salarie = salarie;
    }
}
