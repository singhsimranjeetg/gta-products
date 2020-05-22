import React from "react"
import "./sign-up.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
//import {auth, createUserProfileDocument } from "../../firebase/firebase.utils" 
import {signUpStart} from "../../redux/user/users.actions"

import {connect} from "react-redux"



class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber: ""

        }

    }
     handleSubmit = event => {   //didn't get why this method defined outside the construcotr and has obj destructuring 
        event.preventDefault()

        const {displayName,email, password, confirmPassword} = this.state
        const {signUpStart} =this.props
        if (password !== confirmPassword){
        alert("passwords don't match")
        
        return
    }
    signUpStart({email, password, displayName})
    /*
    try{

       const {user} = await auth.createUserWithEmailAndPassword(email,password)  //hover over to see fx

       await createUserProfileDocument(user, {displayName})   //we are creating a new user in the db

       this.setState({email: "" , password: "", displayName: "", confirmPassword: "", phoneNumber: ""})

    }
    catch(err){
        console.log(err)

    }*/
        
        
     }

     handleChange = event => {
         const {value, name} = event.target
         this.setState({[name]: value})
     }


    render()
    {
        //const {signUpStartProp} = this.props
        return (
            <div className = "sign-up">
                <h2 className= "title">Don't have an account yet ?</h2>
                <span>Sign up for new account.</span>

                <form onSubmit = {this.handleSubmit}>
                <FormInput name = "displayName"
                     value ={this.state.displayName} 
                     type="text" 
                     handleChange = {this.handleChange}
                     autoComplete = "on"
                     label = 'Full Name'
                      required />

                    <FormInput name = "email"
                     value ={this.state.email} 
                     type="email" 
                     handleChange = {this.handleChange}
                     autoComplete = "on"
                     label = 'Email'
                      required />
                    


                    <FormInput type="password"
                     name = "password" 
                     value = {this.state.password} 
                     autoComplete = "off"
                     handleChange = {this.handleChange}
                     label = "Password"
                      required />

                      <FormInput name = "confirmPassword"
                     value ={this.state.confirmPassword} 
                     type="password" 
                     handleChange = {this.handleChange}
                     autoComplete = "on"
                     label = 'Confirm Password'
                      required />

                      <FormInput name = "phoneNumber"
                     value ={this.state.phoneNumber} 
                     type="phone" 
                     handleChange = {this.handleChange}
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
}  //so by default isgooglesignin will pass the true value to the custom button

const mapDispatchToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)