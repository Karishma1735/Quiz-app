import { useEffect, useState } from 'react'
import './App.css'
import Startpage from './components/startpage'
import { BrowserRouter ,  Route, Routes } from 'react-router-dom'
import Quiz from './components/Quiz'
import Questioncard from './components/Questioncard'



function App() {

let [username,setusername]=useState([])
let [score,setScore]= useState(0)
let [userScores,setUserScores]=useState([])

useEffect(() => {
  const storedScores = JSON.parse(localStorage.getItem('UserScores')) || [];
  setUserScores(storedScores);
}, []);


 useEffect(() => {
  if (username && score >= 0) {

    const entryExists = userScores.some(
      (entry) => entry.username === username && entry.score === score
    );

    if (!entryExists) {
      const newEntry = { username, score };
      const updatedScores = [...userScores, newEntry];
      setUserScores(updatedScores);

      localStorage.setItem('UserScores', JSON.stringify(updatedScores));
      console.log("Updated localStorage with:", updatedScores);
    } else {
      console.log("Entry already exists, not adding again:", { username, score });
    }
  }
}, [username, score]);

// useEffect(() => {
//   if (username && score >= 0 && !userScores(entry => entry.username === username && entry.score === score)) {
//     const updatedScores = [...userScores, { username, score }];
//     setUserScores(updatedScores);
//     localStorage.setItem('UserScores', JSON.stringify(updatedScores));
//   }
// }, [username, score, userScores]);


// useEffect(()=>{

//   localStorage.setItem('Scores',JSON.stringify(score))
// },[score])
// useEffect(()=>{
// //  let username = JSON.parse(localStorage.getItem('username'))
// //  if (username){
// //   setItem(username)
// //  }


// localStorage.setItem('Names',JSON.stringify(username))
// },[username])





  return (
    <BrowserRouter>
      <div>
       <Routes>
          <Route path="/"  element={<Startpage setusername={setusername} username={username} score = {score} userScores={userScores} />}/>
          <Route path="/quize" element={<Quiz username = {username}  score={score} setScore={setScore} userScores ={userScores} setUserScores={setUserScores}/>}/>
          <Route path='/questioncard' element = {<Questioncard/>}/>
       </Routes>
      </div>
    </BrowserRouter>
  
   

 
   
  
  )
}

export default App;



