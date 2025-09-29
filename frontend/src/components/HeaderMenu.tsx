import Logo from '../../public/logo.svg'
import '../styles/HeaderStyle.css'

export default function HeaderMenu() {
  return(
    <>
      <div className="header-menu">
        <div className="header-logo">
          <img src={Logo} alt="Логотип Swipe"/>
        </div>
        <div className="header-links">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Team</a>
          <a href="#">FAQ</a>
          <a href="#">Feedback</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="header-button">
          <button>Buy Now</button>
        </div>
      </div>
    </>
  )
}