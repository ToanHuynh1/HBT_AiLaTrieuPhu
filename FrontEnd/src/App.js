import React, { useState, useEffect } from "react"
import "./App.css"
import QuestBox from "./components/QuestBox"
import Timer from "./components/Timer"
import Start from "./components/Start"

const App = () => {
  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionsNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which one is the first search engine in internet",
      answers: [
        {
          text: "Internet Explorer",
          correct: false,
        },
        {
          text: "Mosaic",
          correct: false,
        },
        {
          text: "Mozilla",
          correct: false,
        },
        {
          text: "Nexus",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following programming language is used to create programs like applets?",
      answers: [
        {
          text: "COBOL",
          correct: false,
        },
        {
          text: "C Language",
          correct: false,
        },
        {
          text: "Java",
          correct: true,
        },
        {
          text: "BASIC",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "First computer virus is known as?",
      answers: [
        {
          text: "Rabbit",
          correct: false,
        },
        {
          text: "Creeper Virus",
          correct: true,
        },
        {
          text: "Elk Cloner",
          correct: false,
        },
        {
          text: "SCA Virus",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which one programming language is exclusively used for artificial intelligence?",
      answers: [
        {
          text: "C",
          correct: false,
        },
        {
          text: "Java",
          correct: false,
        },
        {
          text: "J2EE",
          correct: false,
        },
        {
          text: "Prolog",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Firewall in computer is used for?",
      answers: [
        {
          text: "Security",
          correct: true,
        },
        {
          text: "Data Transmission",
          correct: false,
        },
        {
          text: "Authentication",
          correct: false,
        },
        {
          text: "Monitoring",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "A dual layer Blue-ray Disc can store data upto?",
      answers: [
        {
          text: "20GB",
          correct: false,
        },
        {
          text: " 35 GB",
          correct: false,
        },
        {
          text: "12 GB",
          correct: false,
        },
        {
          text: "50 GB",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which of the following is not an operating system?",
      answers: [
        {
          text: "DOS",
          correct: false,
        },
        {
          text: "Mac",
          correct: false,
        },
        {
          text: "C",
          correct: true,
        },
        {
          text: "Linux",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which of the following is not a database management software?",
      answers: [
        {
          text: "MySQL",
          correct: false,
        },
        {
          text: "Oracle",
          correct: false,
        },
        {
          text: "Sybase",
          correct: false,
        },
        {
          text: "COBOL",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Number of layers in the OSI (Open Systems Interconnection) Model?",
      answers: [
        {
          text: "9",
          correct: false,
        },
        {
          text: "3",
          correct: true,
        },
        {
          text: "7",
          correct: false,
        },
        {
          text: "11",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "1024 bit is equal to how many byte?",
      answers: [
        {
          text: "1 Byte",
          correct: false,
        },
        {
          text: "128 Byte",
          correct: true,
        },
        {
          text: "32 Byte",
          correct: false,
        },
        {
          text: "64 Byte",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Mac Operating System is developed by which company?",
      answers: [
        {
          text: "IBM",
          correct: false,
        },
        {
          text: "Apple",
          correct: true,
        },
        {
          text: "Microsoft",
          correct: false,
        },
        {
          text: "Samsung",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Where is the headquter of Microsoft office located?",
      answers: [
        {
          text: "Texas",
          correct: false,
        },
        {
          text: "NewYork",
          correct: false,
        },
        {
          text: "California",
          correct: false,
        },
        {
          text: "Washington",
          correct: true,
        },
      ],
    },
  ]

  const moneyPyramid = [
    { id: 1, amount: "$ 1,000" },
    { id: 2, amount: "$ 2,000" },
    { id: 3, amount: "$ 3,000" },
    { id: 4, amount: "$ 5,000" },
    { id: 5, amount: "$ 10,000" },
    { id: 6, amount: "$ 20,000" },
    { id: 7, amount: "$ 40,000" },
    { id: 8, amount: "$ 80,000" },
    { id: 9, amount: "$ 160,000" },
    { id: 10, amount: "$ 320,000" },
    { id: 11, amount: "$ 640,000" },
    { id: 12, amount: "$ 1,250,000" },
    { id: 13, amount: "$ 2,500,000" },
    { id: 14, amount: "$ 5,000,000" },
    { id: 15, amount: "$ 10,000,000" },
  ].reverse()

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [questionNumber, moneyPyramid])

  return (
    <>
      <div className='app'>
        {username ? (
          <>
            <div className='main'>
              {timeOut ? (
                <h1 className='endText'>You earned : {earned}</h1>
              ) : (
                <>
                  <div className='top'>
                    <div className='timer'>
                      <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
                    </div>
                  </div>
                  <div className='bottom'>
                    <QuestBox data={data} setTimeOut={setTimeOut} questionNumber={questionNumber} setQuestionsNumber={setQuestionsNumber} />
                  </div>
                </>
              )}
            </div>
            <div className='pyramid'>
              <ul className='moneyList'>
                {moneyPyramid.map((m) => {
                  return (
                    <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                      <span className='moneylistItemNumber'>{m.id}</span>
                      <span className='moneylistAmout'>{m.amount}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        ) : (
          <Start setUsername={setUsername} />
        )}
      </div>
    </>
  )
}

export default App
