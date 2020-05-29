import React, {useState} from "react"
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
//import {auth} from "../../firebase/firebase.utils"


import {googleSignInStart, emailSignInStart} from "../../redux/user/users.actions"
import {connect} from "react-redux"



const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [ userCredentials, setCredentials ] = useState({email: "", password: ""})
  


    const {email, password} = userCredentials

     const handleSubmit = event => {   //didn't get why this method defined outside the construcotr and has obj destructuring 
      event.preventDefault()     
      emailSignInStart(email,password) 
      }      

     const handleChange = (event) => {
         const {value, name} = event.target
         setCredentials({...userCredentials, [name]: value})
     }
        return (
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {handleSubmit}>
                    <FormInput
                     name = "email"
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
    
                    <div className = "buttons">
                    <CustomButton type="submit" >SIGN IN 
                        </CustomButton>
                    <CustomButton type = "button" onClick = {googleSignInStart} isGoogleSignIn  >SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                
                </form>
            </div>
            //in case of cus
        )//used onClick mehtod to call signinwithgoogle fx from other folder
    }  //used </CustomButton> bcz wanna use the children prop of that in custom button comp.
  //so by default isgooglesignin will pass the true value to the custom button

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)

/*   this code before using saga.
       try{
           await auth.signInWithEmailAndPassword(email,password)
           this.setState({email: "" , password: ""})


       }
       catch(err) {
           console.log(err)

       }  */