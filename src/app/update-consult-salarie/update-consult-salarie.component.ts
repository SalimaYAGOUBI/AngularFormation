import { Component, OnInit } from '@angular/core';
import { Salarie } from 'app/Models/Salarie/salarie';
import { SalarieService } from 'app/services/salarie/salarie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'update-consult-salarie',
  templateUrl: './update-consult-salarie.component.html',
  styleUrls: ['./update-consult-salarie.component.css']
})
export class UpdateConsultSalarieComponent implements OnInit {

  salarie : Salarie;

  constructor(private salarieService: SalarieService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.salarieService.getById(this.route.snapshot.paramMap.get('id')).subscribe(res =>{
      this.salarie = res;
    });
    
  }
}
