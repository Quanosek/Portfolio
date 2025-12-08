import { useMemo, useState, useEffect } from 'react'

const TypewriterComponent = ({
  text,
  typingSpeed = 100,
  pauseTime = 1500,
  loop = false,
  className = '',
}: {
  text: string | string[]
  typingSpeed?: number
  pauseTime?: number
  loop?: boolean
  className?: string
}) => {
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text])
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentText = texts[textIndex]
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex])
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayText('')
        setCharIndex(0)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }, pauseTime)

      return () => clearTimeout(timeout)
    }
  }, [charIndex, textIndex, texts, typingSpeed, pauseTime, loop])

  return <span className={className}>{displayText}</span>
}

export default TypewriterComponent
