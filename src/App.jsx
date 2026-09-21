import { useState } from 'react'
import Section1 from "./components/Section1/Section1.jsx"
import Section2 from "./components/Section2/Section2.jsx"
import Section3 from "./components/Section3/Section3.jsx"
import Section4 from "./components/Section4/Section4.jsx"
import Section5 from "./components/Section5/Section5.jsx"
import Section6 from "./components/Section6/Section6.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./App.scss"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='all_sections'>
        <div className='fs_sections'>
          <Section1/>
            <Section2/>
        </div>
            <Section3/>
              <Section4/>
                <Section5/>
                  <Section6/>
                    <Footer/>
      </div>
    </>
  )
}

export default App
