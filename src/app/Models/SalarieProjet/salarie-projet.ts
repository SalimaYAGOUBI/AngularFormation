import { Salarie } from "../Salarie/salarie";
import { Projet }from "../Projet/Projet";
import { SalarieProjetId } from "../SalarieProjetId/salarie-projet-id";
export class SalarieProjet {

    id : SalarieProjetId;
    roleSP : string;
    salaries : Salarie;
    projets : Projet;

    constructor(id : SalarieProjetId, roleSP : string, salaries : Salarie, projets : Projet){
        this.id = id;
        this.roleSP = roleSP;
        this.salaries = salaries;
        this.projets = projets;
    }
}
