import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Skill } from '../models/skill.model';
import { EskillsService } from './eskills.service';
declare const hideShowSkills: any;
@Component({
  selector: 'app-eskills',
  templateUrl: './eskills.component.html',
  styleUrls: ['./eskills.component.css']
})
export class EskillsComponent implements OnInit {
  skill: Skill = new Skill();
  skills: Skill[];

  constructor(private router: Router, private eskillsService: EskillsService) { }

  ngOnInit() {

    this.eskillsService.getSkills()
    .subscribe( data => {
      this.skills = data;
    });
  }
  onchange () {
    hideShowSkills();
  }

  createSkill(): void {
    this.eskillsService.createSkill(this.skill).subscribe(data => {
      alert("Skill added successfully!");
    })
  }

  getSkills(): void {
    this.eskillsService.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  deleteSkill(skill: Skill): void {
    this.eskillsService.deleteSkill(skill)
      .subscribe( data => {
        this.skills = this.skills.filter(u => u !== skill);
      })
  };
  
}
