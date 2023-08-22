import { useState } from "react"

function Form(){

    const [textForm, setTextForm] = useState("")

    const [areaForm, setAreaForm] = useState("")

    const [selectForm, setSelectForm] = useState("option1")

    const dataToStore = JSON.stringify({ text: textForm, area: areaForm, select: selectForm });
    
    localStorage.setItem("formData", dataToStore);
    
    const changeText = (e) => setTextForm(e.target.value);

    const changeArea = (e) => setAreaForm(e.target.value);

    const changeSelect = (e) => setSelectForm(e.target.value);

    return(
       
        <form>

            <input type="text" id="champTexte" name="champTexte" value={textForm} onChange={changeText} />

            <textarea id="zoneTexte" name="zoneTexte" value={areaForm} onChange={changeArea}/>

            <select id="selectOptions" name="selectOptions" value={selectForm} onChange={changeSelect}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select> 

        </form>
        
    )

}





export default Form