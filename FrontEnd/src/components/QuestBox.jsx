import React, { useState, useEffect } from "react"
import useSound from "use-sound"
import play from "../sounds/play.mp3"
import correct from "../sounds/correct.mp3"
import wrong from "../sounds/wrong.mp3"

const QuestBox = ({ data, setTimeOut, questionNumber, setQuestionsNumber }) => {
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState("answer")
  const [letPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  useEffect(() => {
    letPlay()
  }, [letPlay])

  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])

  const delay = (duration, callback) => {
    setTimeOut(() => {
      callback()
    }, duration)
  }

  const handleClick = (a) => {
    setSelectedAnswer(a)
    setClassName("answer active")
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })
    delay(5000, () => {
      if (a.correct) {
        correctAnswer()
        delay(1000, () => {
          setQuestionsNumber((prev) => prev + 1)
          setSelectedAnswer(null)
        })
      } else {
        wrongAnswer()
        delay(1000, () => {
          setTimeOut(true)
        })
      }
    })
    //setTimeOut(() => {
    //  setClassName(a.correct ? "answer correct" : "answer wrong")
    //}, 3000)
  }

  return (
    <div className='box'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((a) => {
          return (
            <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>
              {a.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestBox
