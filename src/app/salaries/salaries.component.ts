import { Component, OnInit } from '@angular/core';
import { Salarie } from 'app/Models/Salarie/salarie';
import { SalarieService } from 'app/services/salarie/salarie.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  salarieList : Salarie[];

  constructor(private salarieService: SalarieService,private router: Router,private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.salarieService.getAll().subscribe(res => {
      this.salarieList = res;
      
    });
  }

  editAndConsultSalarieRedirection(salarie: Salarie) {
    this.router.navigate(['/salaries',salarie.idSal]);
  }

}
