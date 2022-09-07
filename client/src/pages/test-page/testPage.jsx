import React from 'react'

const SmallApp = () => {


  return (
    <div className="">
      <h1>Small App</h1>
      <Users />
    </div>
  )
}

export default SmallApp;

class Users extends React.Component {
   constructor(props) {
     super()
     this.state = {users: []}
   }
   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log('users',json)
      this.setState({users: json})
    })
    
   }

   render(){
     return (
       <>
         <h5>Users</h5>
         {this.state.users.map(user => (
           <User key={user.id} user={user} />

         ))}
         </>
     )

   }
}

const User = ({user}) => {
   let {name} = user

  return(
    <div className="">
      <p className="">{name}</p>
    </div>
  )
}