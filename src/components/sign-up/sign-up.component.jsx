import React, {useState} from "react"
import "./sign-up.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
//import {auth, createUserProfileDocument } from "../../firebase/firebase.utils" 
import {signUpStart} from "../../redux/user/users.actions"

import {connect} from "react-redux"



const SignUp = ({signUpStart}) => {
    const [userCredentials , setCredentials] = useState({displayName: "",email: "", password: "", confirmPassword: "", phoneNumber: ""})

    const {displayName,email, password, confirmPassword, phoneNumber} = userCredentials
    const handleSubmit = event => { 
        event.preventDefault()
        if (password !== confirmPassword){
        alert("passwords don't match")
        
        return
    }
    signUpStart({email, password, displayName})
    
        
     }

    const handleChange = event => {
         const {value, name} = event.target
         setCredentials({...userCredentials, [name]: value})
     }
     
     
        return (
            <div className = "sign-up">
                <h2 className= "title">Don't have an account yet ?</h2>
                <span>Sign up for new account.</span>

                <form onSubmit = {handleSubmit}>
                <FormInput name = "displayName"
                     value ={displayName} 
                     type="text" 
                     handleChange = {handleChange}
                     autoComplete = "on"
                     label = 'Full Name'
                      required />

                    <FormInput name = "email"
                     value ={email} 
                     type="email" 
                     handleChange = {handleChange}
                     autoComplete = "on"
                     label = 'Email'
                      required />
                    


                    <FormInput type="password"
                     name = "password" 
                     value = {password} 
                     autoComplete = "off"
                     handleChange = {handleChange}
                     label = "Password"
                      required />

                      <FormInput name = "confirmPassword"
                     value ={confirmPassword} 
                     type="password" 
                     handleChange = {handleChange}
                     autoComplete = "on"
                     label = 'Confirm Password'
                      required />

                      <FormInput name = "phoneNumber"
                     value ={phoneNumber} 
                     type="phone" 
                     handleChange = {handleChange}
                     autoComplete = "on"
                     label = 'Mobile Number'
                       />
    
                    <div className = "buttons">
                    <CustomButton type="submit" >SIGN UP
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )//used onClick mehtod to call signinwithgoogle fx from other folder
    }  //used </CustomButton> bcz wanna use the children prop of that in custom button comp.
 //so by default isgooglesignin will pass the true value to the custom button

const mapDispatchToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)

/*
    try{

       const {user} = await auth.createUserWithEmailAndPassword(email,password)  //hover over to see fx

       await createUserProfileDocu.ment(user, {displayName})   //we are creating a new user in the db

       this.setState({email: "" , password: "", displayName: "", confirmPassword: "", phoneNumber: ""})

    }
    catch(err){
        console.log(err)

    }*/
        