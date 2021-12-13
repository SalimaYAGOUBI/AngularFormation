import { SalarieProjet } from "../SalarieProjet/salarie-projet";
import { BonDeLivraison } from "../BonDeLivraison/bon-de-livraison";
import { Facture } from "../Facture/facture";
import { Phase } from "../Phase/phase";
import { Depense } from "../Depense/depense";

export class Projet {

    idpr : string;
    nompr : string;
    budget : number;
    montantpaye : number;
    datecreation : Date ;
    type : string;
    proprietaire : string;
    description : string;
    etatpr : string;
    bonDeLivraison : BonDeLivraison;
    facture : Facture;
    salarieProjet : Array<SalarieProjet>;
    phases : Array<Phase>;
    depenses : Array<Depense>;

    constructor(idpr : string, nompr : string, budget : number, montantpaye : number,
        datecreation : Date , type : string, proprietaire : string, description : string,
        etatpr : string, bonDeLivraison : BonDeLivraison, facture : Facture,
        salarieProjet : Array<SalarieProjet>, phases : Array<Phase>, depenses : Array<Depense>)
        {
            this.idpr = idpr;
            this.nompr = nompr;
            this.budget = budget;
            this.montantpaye = montantpaye;
            this.datecreation =datecreation;
            this.type = type;
            this.proprietaire = proprietaire;
            this.description =description;
            this.etatpr = etatpr;
            this.bonDeLivraison = bonDeLivraison;
            this.facture = facture;
            this.salarieProjet = salarieProjet;
            this.phases = phases;
            this.depenses = depenses;
        }
}
