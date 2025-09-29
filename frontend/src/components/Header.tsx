import '../styles/HeaderStyle.css'
import HeaderMenu from "./HeaderMenu.tsx";
import HeaderContent from "./HeaderContent.tsx";
import HeaderBottom from './HeaderBottom.tsx';

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <HeaderMenu />
          <HeaderContent />
          <HeaderBottom />
        </div>
      </div>
    </>
  )
}