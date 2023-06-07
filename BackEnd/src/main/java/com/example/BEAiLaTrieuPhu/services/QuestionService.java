package com.example.BEAiLaTrieuPhu.services;


import com.example.BEAiLaTrieuPhu.models.Question;
import com.example.BEAiLaTrieuPhu.repo.QuestionRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    public List<Question> getAllQuestion() {
        return questionRepository.findAll();
    }

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    public List<Question> saveManyQuestion(List<Question> questionList) {
        return questionRepository.saveAll(questionList);
    }

    public void deleteQuestionService(ObjectId id) {
        questionRepository.deleteById(id);
    }

    public Optional<Question> getDetailQuestionService(ObjectId id) {
        return questionRepository.findById(id);
    }

    public Question updateQuestionService(ObjectId id, Question question) {
        Question existingQuestion = questionRepository.findById(id).orElse(null);

        if (existingQuestion != null) {
            existingQuestion.setQuestion(question.getQuestion());
            existingQuestion.setAnswers(question.getAnswers());
            return questionRepository.save(existingQuestion);
        }

        return null;
    }
}
