
type TypeDropdownProps = {
    type: (selected:string) => void
    showAllSelector: boolean
}
export default function TypeDropdown(props: TypeDropdownProps) {
    return (
        <label>
            <select
                className={"input-style"}
                onChange={(value) => {
                    props.type(value.target.value)
                }}
                defaultValue={""}
            >

                {props.showAllSelector || <option value={""} disabled={true}>Select Catagory</option>}
                {props.showAllSelector && <option value={""}>Alle</option>}
                <option value={"Java"}>Java</option>
                <option value={"JavaScript"}>JavaScript</option>
                <option value={"zsh-console"}>zsh-console</option>
                <option value={"css"}>CSS</option>
                <option value={"react"}>React</option>
                <option value={"html"}>HTML</option>
                <option value={"axios"}>Axios</option>
                <option value={"mavenplugins"}>Maven Plugins</option>
                <option value={"docker"}>Docker</option>

            </select>
        </label>
    )
}