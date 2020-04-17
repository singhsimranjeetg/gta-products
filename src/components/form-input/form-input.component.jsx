import React from "react"
import "./form-input.styles.scss"

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className = "group">
        <input className = "form-input" onChange = {handleChange} {...otherProps} />
        {  //we will always has the form-inut lable class but the shrink class will only apply when user start typing something
            label ?
            (<label className = {`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
              {label}
            </label>)
            :null
        }

    </div>
)

export default FormInput