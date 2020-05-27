import React, {useState} from "react"
import "./contactPage.styles.scss"
import {ContactPageContainer, FormOptions } from "./contactPage.styles"
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from "../../components/custom-button/custom-button.component"
import {createUserMessages} from "../../firebase/firebase.utils"


const ContactPage = () => {
 
  const [useCredentials, setCredentials] = useState({senderName : "",
  email : "",
  message : "",
  responseMessage: ""})

  const {senderName, email, message, responseMessage} = useCredentials



 const handleSubmit = async event =>  {
    event.preventDefault()
   // console.log("fvsfd")
    //const {senderName, email, message} = this.state
   
   
    try{
      await createUserMessages(useCredentials)
      setCredentials({email: "" , senderName: "", message: "", responseMessage: "Message Sent ! Our team will contact you as soon as possible "})
   
   
    }catch(error){
      console.log(error.message)
    }
  }

 const handleChange = event => {
    const {name, value } = event.target
    setCredentials({...useCredentials, [name] : value})
  }
  
 
    return(
    <ContactPageContainer>
        <h1>Contact Us</h1>
       <FormOptions onSubmit = {handleSubmit}>

                    <FormInput type="text"
                     name = "senderName" 
                     value = {senderName} 
                     autoComplete = "off"
                     handleChange = {handleChange}
                     label = "Name"
                      required />

                    <FormInput
                     name = "email"
                     value ={email} 
                     type="email" 
                     handleChange = {handleChange}
                     autoComplete = "on"
                     label = 'Email'
                      required />
                    

                    <FormInput type="text"
                     name = "message" 
                     value = {message} 
                     autoComplete = "off"
                     handleChange = {handleChange}
                     label = "Message"
                      required />

                    <h3>{responseMessage}</h3>

                     
    
                    <CustomButton  type="submit" >SEND
                        </CustomButton>
                        </FormOptions>
    </ContactPageContainer>
  

    )}

export default ContactPage

  /*
    <div style = {{display: "hidden"}} className = "contact-page">
        <img style = {{width: "380px", height: "300px"}} src="https://i.ibb.co/34RXBHP/ceo.jpg" alt="CEO"/><br/>
        <span style = {{color: "#55f562", fontSize: "20px", fontWeight: "bold"}} className = "title">Simranjeet Singh, President & CEO</span><br/><br/>
        <span className = "description">Mr. Singh is founder and CEO of the GTA PRODUCTS. He is from village Chakda which is near to Nissing, Karnal </span>
    </div>



    import React, {useState, useEffect} from "react"
import "./contactPage.styles.scss"
import {ContactPageContainer, FormOptions } from "./contactPage.styles"
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from "../../components/custom-button/custom-button.component"
import {createUserMessages} from "../../firebase/firebase.utils"


export class ContactPage extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    senderName : "",
    email : "",
    message : ""
  }
}

  handleSubmit = async event =>  {
    event.preventDefault()
   // console.log("fvsfd")
    //const {senderName, email, message} = this.state
  
   
    try{
      await createUserMessages(this.state)
      this.setState({email: "" , senderName: "", message: ""})
   
   
    }catch(error){
      console.log(error.message)
    }
  }

  handleChange = event => {
    const {name, value } = event.target
    this.setState({[name] : value})
  }
  
  render (){
    return(
    <ContactPageContainer>
        <h1>Contact Us</h1>
       <FormOptions onSubmit = {this.handleSubmit}>

                    <FormInput type="text"
                     name = "senderName" 
                     value = {this.state.senderName} 
                     autoComplete = "off"
                     handleChange = {this.handleChange}
                     label = "Name"
                      required />

                    <FormInput
                     name = "email"
                     value ={this.state.email} 
                     type="email" 
                     handleChange = {this.handleChange}
                     autoComplete = "on"
                     label = 'Email'
                      required />
                    

                    <FormInput type="text"
                     name = "message" 
                     value = {this.state.message} 
                     autoComplete = "off"
                     handleChange = {this.handleChange}
                     label = "Message"
                      required />

                     
    
                    <CustomButton  type="submit" >SEND
                        </CustomButton>
                        </FormOptions>
    </ContactPageContainer>
  

    )}}

export default ContactPage

  /*
    <div style = {{display: "hidden"}} className = "contact-page">
        <img style = {{width: "380px", height: "300px"}} src="https://i.ibb.co/34RXBHP/ceo.jpg" alt="CEO"/><br/>
        <span style = {{color: "#55f562", fontSize: "20px", fontWeight: "bold"}} className = "title">Simranjeet Singh, President & CEO</span><br/><br/>
        <span className = "description">Mr. Singh is founder and CEO of the GTA PRODUCTS. He is from village Chakda which is near to Nissing, Karnal </span>
    </div>*/