import React from "react"
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {auth,SignInWithGoogle} from "../../firebase/firebase.utils"


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""

            

        

        }

    }
     handleSubmit = async event => {   //didn't get why this method defined outside the construcotr and has obj destructuring 
        event.preventDefault()

       const {email, password} = this.state

       try{
           await auth.signInWithEmailAndPassword(email,password)
           this.setState({email: "" , password: ""})


       }
       catch(err) {
           console.log(err)

       }  
        
     }

     handleChange = event => {
         const {value, name} = event.target
         this.setState({[name]: value})
     }


    render(){
        return (
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
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
    
                    <div className = "buttons">
                    <CustomButton type="submit" >SIGN IN
                        </CustomButton>
                    <CustomButton onClick = {SignInWithGoogle} isGoogleSignIn  >SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )//used onClick mehtod to call signinwithgoogle fx from other folder
    }  //used </CustomButton> bcz wanna use the children prop of that in custom button comp.
}  //so by default isgooglesignin will pass the true value to the custom button


export default SignIn