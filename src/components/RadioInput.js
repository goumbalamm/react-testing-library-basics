const RadioInput = ({ optionsArray, onChange }) => {
    return optionsArray.map((opt, idx) => (
        <div key={idx}>
            <input
            type="radio" id={'radio-input' + idx}
            name="radio-input" value={opt}
            onChange={onChange}
            />
            <label htmlFor={'radio-input' + idx}>{opt}</label><br/>
        </div>
    ));
}

export default RadioInput;