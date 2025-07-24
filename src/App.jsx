import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <h1>
        Calisthenics
    </h1>
    <div className="con">
        <div className="left">
            <img src="images/Planche.jpg" alt=""/>
        </div>
        <div className="right">
            <div className="wrap">
                Calisthenics is a form of exercise that uses body weight to build strength, flexibility, and endurance.
                It
                includes movements like push-ups, pull-ups, squats, and dips. Calisthenics can be done almost anywhere,
                without the need for equipment. It’s popular for improving overall fitness, gaining muscle, and
                developing
                body control. Many people enjoy calisthenics because it’s simple, effective, and adaptable for all skill
                levels.
            </div>
        </div>
    </div>
    <div className="con">
        
        <div className="left">
            <div className="wrap">
                Calisthenics not only helps you build muscle and burn fat but also improves balance, mobility, and body
                control. It’s a natural and functional way to train, and many people enjoy it for its freedom,
                creativity, and the sense of progress it brings.
            </div>
        </div>
        <div className="right">
            <img src="images\outdoor-pull-ups-royalty-free-image-1681208481.avif" alt=""/>
        </div>
    </div>
    <div className="himg">
        <h1>Calisthenics</h1>
    </div>
    </>
  )
}

export default App
