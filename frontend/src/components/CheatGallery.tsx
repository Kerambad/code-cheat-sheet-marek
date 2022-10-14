import {CheatSheet} from "../model/CheatSheet";
import CheatCard from "./CheatCard";
import AddCommands from "./AddCommands";
import "./CheatGallery.css"
import {useState} from "react";

type CheatGalleryProps = {
    commands: CheatSheet[]
    addCommand: (toAdd: CheatSheet) => void
}

export default function CheatGallery(props: CheatGalleryProps){

    //const outputCard = props.commands.map((command) => <CheatCard cheat={command} key={command.id}/>)

    const [search, setSearch] = useState("");
    const filteredCharacters = props.commands.filter((command) => command.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
            <AddCommands addCommand={props.addCommand}/>

            <>
                <form>
                    <input className={"input-style"} type={"text"} placeholder={"Search"} onChange={(event) => setSearch(event.target.value)}/>
                </form>
            </>

            <div className={"cards"}>
                {filteredCharacters.map((command) =>
                <div className={"card"}>
                <CheatCard cheat={command}/>
                </div>)}
            </div>

        </>
    )
}