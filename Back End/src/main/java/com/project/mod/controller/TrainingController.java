package com.project.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.mod.model.Training;
import com.project.mod.service.TrainingService;

@RestController
@CrossOrigin
@RequestMapping({"/trainings"})
public class TrainingController {
	
	@Autowired
	private TrainingService trainingService;
	
	@PostMapping
	public Training create(@RequestBody Training training) {
		return trainingService.create(training);
	}

	
	@GetMapping(path = {"/{id}"})
	public Training findOne(@PathVariable("id") int id) {
		return trainingService.findById(id);
	}
	
	@PutMapping(path = {"/{id}"})
    public Training update(@PathVariable("id") int id, @RequestBody Training training){
        training.setId(id);
        return trainingService.update(training);
    }

    @DeleteMapping(path ={"/{id}"})
    public Training delete(@PathVariable("id") int id) {
        return trainingService.delete(id);
    }

    @GetMapping
    public List<Training> findAll(){
        return trainingService.findAll();
    }
    
//    @GetMapping({"/user"})
//    public List<Training> findAllByUsers(){
//        return trainingService.findAll();
//    }
    
    @GetMapping("/findTrainingByMentorId/{mentorId}")
    public List < Training > getTrainingsByMentor(@PathVariable(value = "mentorId") Integer mentorId) {
        return trainingService.findTrainingByMentorId(mentorId);
    }
    
    @GetMapping("/findTrainingByUserId/{userId}")
    public List < Training > getTrainingsByUser(@PathVariable(value = "userId") Integer userId) {
        return trainingService.findTrainingByUserId(userId);
    }
    
    //    @GetMapping("/findTrainingByIdAndUserId/{id}/{userId}")
//    public Training getTrainingsByIdAndUserId(@PathVariable(value = "id") Integer id, @PathVariable(value = "userId") Integer userId) {
//        return trainingService.findByIdAndUserId(id, userId);
//    }
//    
//    @GetMapping("/findTrainingByIdAndMentorId/{id}/{mentorId}")
//    public Training getTrainingsByIdAndMentorId(@PathVariable(value = "id") Integer id, @PathVariable(value = "mentorId") Integer mentorId) {
//        return trainingService.findByIdAndMentorId(id, mentorId);
//    }
}
