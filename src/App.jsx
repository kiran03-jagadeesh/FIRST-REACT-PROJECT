import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
            <div class="logo">SCOFT SAVEETHA</div>
            <ul class="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">PEOPLE</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <div class="search-container">
                <input type="text" placeholder="Enter to Search"/>
                <button>Search</button>
            </div>
        </nav>
    </header>
    <div class="main-content">
        <h1>"Driving progress through precision engineering and boundless creativity."</h1>
        <div class="buttons">
            <a href="#" class="login">Log In</a>
            <a href="#" class="signup">Sign Up</a>
        </div>
    </div>
    <footer>
        DESIGNED AND DEVELOPED BY KIRAN J
    </footer>
    </>
  )
}

export default App
