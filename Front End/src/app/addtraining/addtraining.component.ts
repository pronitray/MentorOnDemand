import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Training } from '../models/training.model';
import { Mentor } from '../models/mentor.model';
import { Technology } from '../models/technology.model';
import { Skill } from '../models/skill.model';
import { AddTrainingService} from './addtraining.service';
@Component({
  selector: 'app-addtraining',
  templateUrl: './addtraining.component.html',
  styleUrls: ['./addtraining.component.css']
})
export class AddtrainingComponent implements OnInit {
  trainings: Training[];
  training: Training = new Training();
  mentors: Mentor[];
  technologies: Technology[];
  skills: Skill[];
  constructor(private router: Router, private addTrainingService: AddTrainingService) { }

  ngOnInit() {

    this.addTrainingService.getMentors().subscribe(data => {
      this.mentors = data;
    })

    this.addTrainingService.getTechnologies().subscribe(data => {
      this.technologies = data;
    } )

    this.addTrainingService.getSkills().subscribe(data => {
      this.skills = data;
      console.log(this.skills);
      
    })
  }

  createTraining(train: Training): void {
    console.log(train);
    
    this.addTrainingService.createTraining(train).subscribe(data => {
      alert("Training Created Successfully!");

      
    })
  }

}
