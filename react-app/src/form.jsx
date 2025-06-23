function defForm({fname, handle}){
    return (
        <div>
        <label>Enter first name: 
        <input type='text' value={fname} onChange={handle} />
        </label>
        </div>
    )
}

export default defForm;