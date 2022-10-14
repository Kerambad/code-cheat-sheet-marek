import {CheatSheet} from "../model/CheatSheet";
import {useState} from "react";
import "./AddCommands.css"

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

            <label>
                <select className={"input-style"} defaultValue={""}>
                    <option value={""} disabled={true} >Select Catagory</option>
                    <option value={"Java"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        Java
                    </option>
                    <option value={"JavaScript"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        JavaScript
                    </option>
                    <option value={"zsh-console"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        zsh-console
                    </option>
                    <option value={"css"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        CSS
                    </option>
                    <option value={"react"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        React
                    </option>
                    <option value={"html"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        HTML
                    </option>
                    <option value={"axios"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        Axios
                    </option>
                    <option value={"mavenplugins"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        Maven Plugins
                    </option>
                    <option value={"docker"} onClick={
                        (value:any) => setCommand((old) => ({...old, category: value.target.value}))} >
                        Docker
                    </option>
                </select>
            </label>

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