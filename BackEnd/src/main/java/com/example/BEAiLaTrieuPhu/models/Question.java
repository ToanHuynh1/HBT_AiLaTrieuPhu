package com.example.BEAiLaTrieuPhu.models;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "data_question")
public class Question {

    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId _id;

    private String question;

    private List<Answer> answers;
}
