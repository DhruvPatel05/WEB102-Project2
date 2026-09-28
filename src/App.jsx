import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'
import grandCanyon from './assets/images/grand-canyon.jpeg'
function App() {
  const flashcards = [
  {
    question: "Which state is home to the Grand Canyon?",
    answer: "Arizona 🌵",
    difficulty: "easy",
    image: grandCanyon

  },
  {
    question: "Which state is famous for Hollywood?",
    answer: "California 🎬",
    difficulty: "easy"
  },
  {
    question: "Which state is known as the Sunshine State?",
    answer: "Florida ☀️",
    difficulty: "easy"
  },
  {
    question: "Which state is home to New York City?",
    answer: "New York 🗽",
    difficulty: "easy"
  },
  {
    question: "Which state is famous for the city of Las Vegas?",
    answer: "Nevada 🎰",
    difficulty: "medium"
  },
  {
    question: "Which state is known for Mount Rushmore?",
    answer: "South Dakota 🗿",
    difficulty: "medium"
  },
  {
    question: "Which state is home to the city of Seattle?",
    answer: "Washington ☕",
    difficulty: "medium"
  },
  {
    question: "Which state is famous for Waikiki Beach?",
    answer: "Hawaii 🌺",
    difficulty: "medium"
  },
  {
    question: "Which state is home to the city of Austin?",
    answer: "Texas 🤠",
    difficulty: "hard"
  },
  {
    question: "Which state is famous for the Rocky Mountains and Denver?",
    answer: "Colorado 🏔️",
    difficulty: "hard"
  }
]

  const [currentCard, setCurrentCard] = useState(0)
  const getRandomCard = () => {
  let randomIndex = Math.floor(Math.random() * flashcards.length)

  while (randomIndex === currentCard) {
    randomIndex = Math.floor(Math.random() * flashcards.length)
  }

  setCurrentCard(randomIndex)
}

  return (
    <div className="App">

      <h1>🇺🇸 Guess the U.S. State</h1>

      <h2>How well do you know the United States?</h2>

      <p>
        Test your knowledge of U.S. states, landmarks, and famous places
        using these flashcards!
      </p>
  <p>Total Cards: {flashcards.length}</p>

  <p className="card-counter">
      Card {currentCard + 1} of {flashcards.length}
  </p>     
  <Flashcard
  key={currentCard}
  question={flashcards[currentCard].question}
  answer={flashcards[currentCard].answer}
  difficulty={flashcards[currentCard].difficulty}
  image={flashcards[currentCard].image}

/>
  <button className="next-button" onClick={getRandomCard}>
  Next Card →
</button> 
    </div>
  )
}

export default App