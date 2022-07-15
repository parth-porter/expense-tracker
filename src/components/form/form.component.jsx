import { useState } from "react";
import './form-component-styles.css'


const Form = (props) => {

    const {onSubmitHandler,
            formTitle,
            label1text, placeholder1, input1type, input1class,
            label2text, placeholder2, input2type, input2class, input2step,
            buttonText} = props;

    const [formInputs, setFormInputs] = useState({
        input1: "",
        input2: ""
    }) 

    const addingNewTransaction = (event) => {
        event.preventDefault();
        console.log(formInputs)
        setFormInputs({input1: "", input2: ""})
        onSubmitHandler(formInputs.input1, formInputs.input2);
    }

    const onInput1Change = (event) => {
        setFormInputs({...formInputs, input1: event.target.value})
    }

    const onInput2Change = (event) => {
        setFormInputs({...formInputs, input2: event.target.value})
    }




    return (
        <div className="form-component">
            <h3>{formTitle}</h3>
            <hr></hr>
            <div className="form-inputs">
                <form onSubmit={addingNewTransaction}>
                    <label>{label1text}</label>
                    <br />
                    <input  type={input1type}
                            className={`form-input1 ${input1class}`}
                            placeholder={placeholder1}
                            value={formInputs.input1}
                            onChange={onInput1Change}
                    />
                    <br/>
                    
                    <label >{label2text}</label>
                    <br />
                    <input  type={input2type}
                            className={`form-input2 ${input2class}`}
                            placeholder={placeholder2}
                            value={formInputs.input2} 
                            onChange={onInput2Change}
                            step={input2step}
                    />
                    <br />
                    
                    <button type="submit">{buttonText}</button>
                </form>
            </div>
        </div>

    )
}

export default Form;