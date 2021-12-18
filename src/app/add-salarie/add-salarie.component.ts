import { Component, OnInit } from '@angular/core';
import { Salarie } from 'app/Models/Salarie/salarie';
import {ActivatedRoute, Router} from '@angular/router';
import { SalarieService } from 'app/services/salarie/salarie.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { now } from 'moment';

@Component({
  selector: 'add-salarie',
  templateUrl: './add-salarie.component.html',
  styleUrls: ['./add-salarie.component.css']
})
export class AddSalarieComponent implements OnInit {

  salarie : Salarie;
  newSalarie : Salarie;
  AddForm : FormGroup;
  
  constructor(private fb: FormBuilder, private salarieService: SalarieService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.AddForm = this.fb.group({
      salarie : this.fb.group({
        idSal: ['', Validators.required],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        genre: ['', Validators.required],
        dateNaissance: ['', Validators.required],
        etat: ['', Validators.required],
        tel: ['', Validators.required],
        email: ['', Validators.required],
        adresse: ['', Validators.required],
        cin: ['', Validators.required],
        nomBanque: ['', Validators.required],
        rib: ['', Validators.required],
        cv: ['', Validators.required],
        profile: ['', Validators.required],
        statue: ['', Validators.required],
        cnss: ['', Validators.required],
        dateEmploi: ['', Validators.required],
        salaire: ['', Validators.required],
        typeContrat: ['', Validators.required],
        dureContart: ['', Validators.required],
        role: ['', Validators.required]
      })
    });
  }

  onSubmit(addform : FormGroup) {
    //this.salarie = new Salarie("salarie 3 ", "lahlal", "khadija","email 3", "cnss 3", "adresse 3","0625144585","statue3",25631,"banque 3","cin 3",new Date(now), "profile 3","cv 3",new Date(now),12543,"typeContrat 3",12,"etat 3","role3");
    console.log("add salarie = "+addform);
    /*this.salarieService.addSalarie(this.salarie).subscribe(res => {
      this.newSalarie = res;
    })*/
  }
}
