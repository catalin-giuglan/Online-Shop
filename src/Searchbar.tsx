import './App.css'

function CreateSearch({placeholder, state, setState}: {placeholder: string, state: any, setState: any}) {
    return <input type="text" placeholder={placeholder} onChange={setState} value={state} style={{width: '180px'}}/>;
}

export default CreateSearch