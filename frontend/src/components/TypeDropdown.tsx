
type TypeDropdownProps = {
    type: (selected:string) => void
}
export default function TypeDropdown(props: TypeDropdownProps) {
    return (
        <label>
            <select className={"input-style"} defaultValue={""}>
                <option value={""} disabled={true}>Select Catagory</option>
                <option
                    value={"Java"}
                    onClick={(value: any) => props.type(value.target.value)}
                >
                    Java
                </option>
                <option
                    value={"JavaScript"}
                    onClick={(value: any) => props.type(value.target.value)}
                >
                    JavaScript
                </option>
                <option
                    value={"zsh-console"}
                    onClick={(value: any) => props.type(value.target.value)}
                >
                    zsh-console
                </option>
                <option
                    value={"css"}
                    onSelect={(value: any) => props.type(value.target.value)}
                >
                    CSS
                </option>
                <option
                    value={"react"}
                    onClick={(value: any) => {
                        props.type(value.target.value)
                        console.log(value.target.value);
                    }}
                >
                    React
                </option>
                <option
                    value={"html"}
                    onClick={(value: any) => props.type(value.target.value)}
                >
                    HTML
                </option>
                <option
                    value={"axios"}
                    onClick={(value: any) => props.type(value.target.value)}
                >
                    Axios
                </option>
                <option
                    value={"mavenplugins"}
                    onClick={(value: any) => props.type(value.target.value)}
                >
                    Maven Plugins
                </option>
                <option
                    value={"docker"}
                    onClick={(value: any) => props.type(value.target.value)}
                >
                    Docker
                </option>
            </select>
        </label>
    )
}