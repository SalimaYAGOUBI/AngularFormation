import { Division } from "../Division/division";
import { Service } from "../Service/service";
import { SalarieProjet } from "../SalarieProjet/salarie-projet";
export class Salarie {

    idSal: string;
    nom : string;
    prenom : string;
    email : string;
    cnss : string;
    adresse : string;
    tel : string;
    statue : string;
    genre : string;
    rib : number;
    nomBanque : string;
    cin : string;
    dateNaissance : Date;
    profile : string;
    cv : string;
    dateEmploi : Date;
    salaire : number;
    typeContrat : string;
    dureContart : number;
    etat : string;
    role : string;
    service : Service;
    division : Division;
    salarieProjet : Array<SalarieProjet>;

    constructor( idSal: string, nom : string, prenom : string, email : string, cnss : string, adresse : string, tel : string, statue : string, genre : string,
        rib : number,nomBanque : string, cin : string, dateNaissance : Date, profile : string, cv : string, dateEmploi : Date, salaire : number,typeContrat : string,
        DureContart : number, Etat : string, role : string){
            this.idSal = idSal;
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.cnss = cnss;
            this.adresse = adresse;
            this.tel = tel;
            this.statue = statue;
            this.genre = genre;
            this.rib = rib;
            this.nomBanque = nomBanque;
            this.cin = cin;
            this.dateNaissance = dateNaissance;
            this.profile = profile;
            this.cv = cv;
            this.dateEmploi = dateEmploi;
            this.salaire = salaire;
            this.typeContrat =typeContrat;
            this.dureContart = DureContart;
            this.etat = Etat;
            this.role = role;
            
        }
}
