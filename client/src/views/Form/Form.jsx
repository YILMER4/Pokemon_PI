import { useState } from "react";

const Form = ()=>{

    const [form, setForm] = useState({
        name:"",
        hp:"",
        atack:""
    });

    const changeHandler=(event)=>{
        const property= event.target.name;
        const value= event.target.value;

        setForm({
            ...form, 
            [property]:value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        alert("datos enviados con exito")
    }


    return(
        
            <form onSubmit= {submitHandler} >
                <div>
                    <label>Name: </label>
                    <input type="text" value={form.name} onChange ={changeHandler} name="name" />
                </div>
                <div>
                    <label>Hp: </label>
                    <input type="text" value={form.hp}  onChange={changeHandler} name="hp" />
                </div>
                <div>
                    <label>Atack: </label>
                    <input type="text"  value={form.atack}  onChange={changeHandler} name="atack" />
                </div>

                <button type="submit" >SUBMIT</button>
            </form>
        

    )
}

export default Form;