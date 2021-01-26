interface DropdownProps {
    name: string
    skillLevel: number
    setSkillLevel: (skillLevel: number) => void
}

const Dropdown: React.FC<DropdownProps> = ({name, skillLevel, setSkillLevel}) => {
    return (
        <label>
            {name}
            <select
                className={"custom-select"}
                value={skillLevel}
                onChange={event => setSkillLevel(parseInt(event.target.value))}
            >
                <option value={0}>0</option>
                <option value={1}>I</option>
                <option value={2}>II</option>
                <option value={3}>III</option>
                <option value={4}>IV</option>
                <option value={5}>V</option>
            </select>
        </label>
    )
};

export default Dropdown;
