package com.example.BEAiLaTrieuPhu.controllers;


import com.example.BEAiLaTrieuPhu.models.Question;
import com.example.BEAiLaTrieuPhu.services.QuestionService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionController {


    @Autowired
    private QuestionService questionService;

    @GetMapping("/getAll")
    public List<Question> getAll(){
        return questionService.getAllQuestion();
    }

    @PostMapping("/saveQuestion")
    public Question saveQuestion(@RequestBody Question question){
        return questionService.saveQuestion(question);
    }

    @PostMapping("/saveManyQuestion")
    public List<Question> saveManyQuestion(@RequestBody List<Question> questionList){
        return questionService.saveManyQuestion(questionList);
    }

    @Transactional
    @DeleteMapping("deleteQuestion/{_id}")
    public void deleteQuestion(@PathVariable ObjectId _id){
        questionService.deleteQuestionService(_id);
    }

    @GetMapping("/getDetailQuestion/{_id}")
    public Question getDetailQuestion(@PathVariable ObjectId _id){
        return questionService.getDetailQuestionService(_id).get();
    }

    @Transactional
    @PutMapping("updateQuestion/{_id}")
    public Question updateQuestion(@PathVariable ObjectId _id, @RequestBody Question question) {
        return questionService.updateQuestionService(_id, question);
    }

}
