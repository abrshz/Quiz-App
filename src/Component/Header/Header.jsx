import React from 'react'
import LogoImg from "../../assets/Image/quiz-logo.png"

function Header() {
  return (
    <header>
        <img src={LogoImg} alt="Image of Logo" />
        <h1>React Quiz</h1>
    </header>
  )
}

export default Header