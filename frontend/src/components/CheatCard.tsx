import {CheatSheet} from "../model/CheatSheet";
import "../components/CheatCard.css"

type CheatCardProps = {
    cheat: CheatSheet;
    delete: (id:string) => void
}

export default function CheatCard(props: CheatCardProps) {
    return (

        <div className={"cheatCard"}>
            <p><span>Name:</span><br/>{props.cheat.name}</p>
            <p><span>Befehl:</span><br/> {props.cheat.command}</p>
            <p><span>Kategorie:</span><br/> {props.cheat.category}</p>
            <p><span>Beschreibung:</span><br/> {props.cheat.description}</p>

            <button type={"button"} onClick={() => props.delete(props.cheat.id)}>Delete</button>
        </div>
    )
}