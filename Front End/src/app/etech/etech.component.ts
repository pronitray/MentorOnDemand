import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Technology } from '../models/technology.model';
import { EtechService } from './etech.service';
declare const hideShowTech: any;
@Component({
  selector: 'app-etech',
  templateUrl: './etech.component.html',
  styleUrls: ['./etech.component.css']
})
export class EtechComponent implements OnInit {
  techs: Technology[];
  tech: Technology = new Technology();
  constructor(private router: Router, private etechService: EtechService) { }

  ngOnInit() {

    this.etechService.getTechs()
    .subscribe( data => {
      this.techs = data;
      console.log(this.techs);
      
    });
  }
  onchange() {
    hideShowTech();
  }


  createTech(): void {
    this.etechService.createTech(this.tech).subscribe(data => {
      alert("Technology added successfully!");
    })
  }

  getTechs(): void {
    this.etechService.getTechs().subscribe(data => {
      this.techs = data;
    })
  }

  deleteSkill(tech: Technology): void {
    this.etechService.deleteTech(tech)
      .subscribe( data => {
        this.techs = this.techs.filter(u => u !== tech);
      })
  };

  prompt(techId): void {
    var fees = prompt("Enter Fees: ");
    this.etechService.getTech(techId).subscribe(data => {
      this.tech  = data;
      console.log(data);
      data.price = fees;
      this.etechService.updateTech(this.tech).subscribe(data => {
        alert("Fees changed successfully! Reloading the page!");
        window.location.reload();
      })
      
    })
  }
}
