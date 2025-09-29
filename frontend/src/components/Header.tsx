import '../styles/HeaderStyle.css'
import HeaderMenu from "./HeaderMenu.tsx";
import HeaderContent from "./HeaderContent.tsx";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <HeaderMenu />
          <HeaderContent />
        </div>
      </div>
    </>
  )
}