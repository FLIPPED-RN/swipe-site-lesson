export default function HeaderContent(){
  return (
    <>
      <div className="header-content">
        <div className="header-content__block-one">
          <h1 className="block-one__h1">Accessible way to start your business</h1>
          <p>Simple. Customizable. Stylish.</p>
          <div>
            <button>Get demo for free</button>
          </div>
        </div>
        <div className="content__link">
          <div className="link__watch-video">
            <div className="square"></div>
            <a href="">Watch full video</a>
          </div>
          <div className="content__links">
            <a href="#">
              <img src="/twitter.svg" alt=""/>
            </a>
            <a href="#">
              <img src="/instagram.svg  " alt=""/>
            </a>
            <a href="#">
              <img src="/facebook.svg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}