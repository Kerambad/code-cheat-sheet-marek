import {CheatSheet} from "../model/CheatSheet";
import {useState} from "react";
import "./AddCommands.css"
import TypeDropdown from "./TypeDropdown";

type AddCommandsProps = {
    addCommand: (toAdd: CheatSheet) => void
}

export default function AddCommands(props: AddCommandsProps) {

    const emptyCommand: CheatSheet = {
        id: "",
        name: "",
        command: "",
        category: "",
        description: ""
    }

    const [command, setCommand] = useState(emptyCommand);

    console.log(command);

    return (
        <form className={"form-style"} onSubmit={(submit) => {
            props.addCommand(command);
            submit.preventDefault()
            setCommand(emptyCommand)
        }}>
            <h3>Add New Command</h3>
            <input
                type={"text"}
                placeholder={"Name"}
                value={command.name}
                onChange={(value) => setCommand((old) => ({...old, [value.target.name]: value.target.value}))}
                className={"input-style"}
                name={"name"}
            />

            <input
                type={"text"}
                placeholder={"Command"}
                value={command.command}
                onChange={(value) => setCommand((old) => ({...old, [value.target.name]: value.target.value}))}
                className={"input-style"}
                name={"command"}
            />

            <TypeDropdown showAllSelector={false} type={(type) => setCommand((old) => ({...old, category: type}))}/>

            <textarea
                placeholder={"Description"}
                value={command.description}
                onChange={(value) => setCommand((old) => ({...old, [value.target.name]: value.target.value}))}
                className={"input-style-desc"}
                name={"description"}
            />

            <button className={"command-btn-style"} type={"submit"} name={"Add Command"}>Add Command</button>
        </form>
    )
}