import MainNumbers from "./MainNumbers";
import '../styles/MainStyle.css'
import MainBlockTwo from "./MainBlockTwo";
import MainVideo from "./MainVideo";

export default function Main(){
    return(
        <div>
            <section>
                <MainNumbers />
            </section>
            <section>
                <MainBlockTwo />
            </section>
            <section>
                <MainVideo />
            </section>
        </div>
    )
}