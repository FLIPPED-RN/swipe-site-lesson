import Video from "../assets/video.jpg"

export default function MainVideo(){
    return(
        <div className="main-video__block">
            <h2>Watch video to discover advantages</h2>
            <img src={Video} alt="" />
        </div>
    )
}