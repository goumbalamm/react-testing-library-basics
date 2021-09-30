const Select = ({optionsArray, onChange, value}) => {
    return (
        <select className="select" onChange={onChange} value={value}>
            {
                optionsArray.map((opt, idx) => (
                    <option key={idx} value={opt}>
                        {opt}
                    </option>
                ))
            }
        </select>
    );
}

export default Select;