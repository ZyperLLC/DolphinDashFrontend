import { useEffect, useState } from 'react'
import logo from './assets/logo.jpg'
import background1 from './assets/background1.jpg'
import './index.css'
import WelcomePopup from './components/WelcomePopup'
import TimerCard from './components/TimerCard'
import DolphinGrid from './components/DolphinGrid'
import Navbar from './components/Navbar'
import dolphin1 from './assets/dolphins/dolphin1.jpg'
import dolphin2 from './assets/dolphins/dolphin2.jpg'
import dolphin3 from './assets/dolphins/dolphin3.jpg'

const dolphins = [
  dolphin1, dolphin2, dolphin3,
  dolphin2, dolphin3, dolphin1,
  dolphin3, dolphin1, dolphin2,
  dolphin1, dolphin2, dolphin3,
]

function Home() {
  const [timer, setTimer] = useState(0)
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('dolphin_timer_start')
    let start = saved ? parseInt(saved) : Date.now()
    if (!saved) localStorage.setItem('dolphin_timer_start', `${start}`)

    const interval = setInterval(() => {
      const now = Date.now()
      const elapsed = Math.floor((now - start) / 1000)
      if (elapsed >= 86400) {
        start = Date.now()
        localStorage.setItem('dolphin_timer_start', `${start}`)
        setTimer(0)
      } else {
        setTimer(elapsed)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="page" style={{ backgroundImage: `url(${background1})` }}>
      <img src={logo} alt="Logo" className="page-logo" />

      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
      <TimerCard timer={timer} />
      <DolphinGrid dolphins={dolphins} />
      <Navbar />
    </div>
  )
}

export default Home;
