import {CheatSheet} from "../model/CheatSheet";
import CheatCard from "./CheatCard";
import AddCommands from "./AddCommands";
import "./CheatGallery.css"
import {useState} from "react";
import TypeDropdown from "./TypeDropdown";

type CheatGalleryProps = {
    commands: CheatSheet[]
    addCommand: (toAdd: CheatSheet) => void
    delete: (id: string) => void

}

export default function CheatGallery(props: CheatGalleryProps) {


    const [search, setSearch] = useState("");
    const [searchType, setSearchType] = useState("");

    const filteredCharacters = props.commands.filter((command) => {
        return (command.name.toLowerCase().includes(search.toLowerCase())
                || command.command.toLowerCase().includes(search.toLowerCase())
                || command.description.toLowerCase().includes(search.toLowerCase()))
            && command.category.includes(searchType)
    })

    return (
        <>
            {/*field for adding new Commands*/}
            <AddCommands addCommand={props.addCommand}/>

            {/*input for filter existing commands*/}
            <div className={"filter"}>
                <input className={"input-style"}
                       type={"text"}
                       placeholder={"Search"}
                       onChange={(event) => setSearch(event.target.value)}
                       value={search}
                />
                <TypeDropdown showAllSelector={true} type={(type) => setSearchType(type)}/>
                <button
                    onClick={() => {
                        setSearchType("");
                        setSearch("");
                    }}
                >
                    Filter zurücksetzen
                </button>
            </div>

            {/*display of the cards*/}
            <div className={"cards"}>
                {filteredCharacters.map((command) => {
                    return <div className={"card"} key={command.id}>

                        <CheatCard cheat={command} delete={props.delete}/>

                    </div>
                })}
            </div>

        </>
    )
}