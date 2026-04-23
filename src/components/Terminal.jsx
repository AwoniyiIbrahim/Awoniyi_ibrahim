import { useState, useEffect } from 'react'
import './Terminal.css'

export default function Terminal({ lines }) {
  const [done, setDone]           = useState([])      // fully typed lines
  const [lineIndex, setLineIndex] = useState(0)       // which line we're on
  const [charIndex, setCharIndex] = useState(0)       // how far into that line

  useEffect(() => {
    if (lineIndex >= lines.length) return

    const currentLine = lines[lineIndex]

    if (charIndex < currentLine.length) {
      // still typing the current line — add one character
      const timer = setTimeout(() => setCharIndex(c => c + 1), 28)
      return () => clearTimeout(timer)
    } else {
      // finished typing — move to next line after a short pause
      const timer = setTimeout(() => {
        setDone(d => [...d, currentLine])
        setLineIndex(l => l + 1)
        setCharIndex(0)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [lineIndex, charIndex, lines])

  return (
    <div className="terminal">

      {/* top bar with traffic light dots */}
      <div className="terminal-bar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="bar-title">ibrahim@dev ~ </span>
      </div>

      {/* output area */}
      <div className="terminal-body">
        {done.map((line, i) => (
          <p key={i} className="terminal-line">{line}</p>
        ))}

        {lineIndex < lines.length && (
          <p className="terminal-line">
            {lines[lineIndex].slice(0, charIndex)}
            <span className="cursor-block">█</span>
          </p>
        )}
      </div>

    </div>
  )
}
