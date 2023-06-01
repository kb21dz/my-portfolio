import Social from "./Social"
import Navbar from "./Navbar"

function Header() {
  return (
    <>
    <div className='header'>
      <Navbar />
      <h1>Hi, I am Kader B.</h1>
      <p>A FullStack Developper & UX/UI Designer</p>
      <button className='projectbutton'><a href="">Projects</a></button>
      <Social />
    </div>
    
    </>
  )
}

export default Header