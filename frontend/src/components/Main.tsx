import MainNumbers from "./MainNumbers";
import '../styles/MainStyle.css'
import MainBlockTwo from "./MainBlockTwo";

export default function Main(){
    return(
        <div>
            <section>
                <MainNumbers />
            </section>
            <section>
                <MainBlockTwo />
            </section>
        </div>
    )
}