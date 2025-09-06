import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Intro from './components/Intro.jsx'
import Wrapper from './components/Wrapper.jsx'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'

function App() {
  const [count, setCount] = useState(0)
  const profile = [{name:"john doe", description:"Leader", image: image1},
  {name:"jane doe", description:"Engineer", image: image2}];

  return (
    <>
    <Wrapper><Header/></Wrapper>
    <Wrapper><Intro/></Wrapper>
    <div>
      {profile.map((profile,index) => (
        <Wrapper>
        <Card key={index} name={profile.name} description={profile.description} image={profile.image}/>
        </Wrapper>

      ))
    }
    </div>


    </>
  )
}

export default App;
