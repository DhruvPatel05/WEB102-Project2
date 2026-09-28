import { useState } from 'react'

function Flashcard({ question, answer, difficulty, image }) {  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div
      className={`flashcard ${difficulty}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div>
        <span className="difficulty">
          {difficulty.toUpperCase()}
        </span>
          {image && !isFlipped && (
        <img
             src={image}
             alt="Flashcard clue"
             className="card-image"
        />
)}
        <h2>{isFlipped ? answer : question}</h2>

        <p className="flip-hint">
          {isFlipped ? "Click to see question" : "Click to reveal answer"}
        </p>
      </div>
    </div>
  )
}

export default Flashcard