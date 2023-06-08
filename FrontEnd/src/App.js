import React, { useState, useEffect } from "react"
import "./App.css"
import QuestBox from "./components/QuestBox"
import Timer from "./components/Timer"
import Start from "./components/Start"
import axios from 'axios'

const App = () => {
  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionsNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [earned, setEarned] = useState("$ 0")
  const [data, setData] = useState([])

  const getDataFromServer = async () => {
    const response = await axios.get("http://localhost:8081/api/v1/getAll");

    setData(response.data);
  }

  useEffect(() => {
    getDataFromServer()
  }, [])


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
              <div className="name-member">Hi {username}</div>
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
                {moneyPyramid.map((m, index) => {
                  return (
                    <li key={index} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
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
