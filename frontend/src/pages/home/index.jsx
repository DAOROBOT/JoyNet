import "./css/Home.css"
import Post from "./components/Post"
import MessageOverlay from "../../components/MessageOverlay"
export default function Home() {
    return (
        <div className={"container"}>
            <div className={"child"} style={{"backgroundColor": "red"}}>
            </div>
            <div className={"child"} style={{"backgroundColor": "green", "flex": 3}}>
            </div>
            <MessageOverlay/>
        </div>
    )
}
