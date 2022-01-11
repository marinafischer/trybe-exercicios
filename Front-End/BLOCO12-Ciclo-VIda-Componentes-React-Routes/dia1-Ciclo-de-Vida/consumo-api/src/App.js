import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.renderUser = this.renderUser.bind(this);
    this.state = {
      user: undefined,
      loading: true,
    }
  }

  async fetchUser(){
    this.setState(
      {loading: true}, 
      async()=>{
        const requestReturn = await fetch('https://api.randomuser.me/');
        const requestObject = await requestReturn.json();
        this.setState({
          user: requestObject.results[0],
          loading: false
        })
      }
    )
  }

  componentDidMount(){
    this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState){
    console.log(nextState)
    if ( nextState.user === undefined || nextState.user.dob.age <= 50) {
      return true;
    }
    return false;
  }

  renderUser() {
    const { name, email, picture, dob } = this.state.user
    return(
      <div>
        <h1>New User</h1>
        <img src={picture.thumbnail} alt={name.first} />
        <h3>{name.first + " " + name.last}</h3>
        <h5>{email}</h5>
        <div>{dob.age}</div>
      </div>
    )
  }

  render(){
    const {loading} = this.state;
    return (
      <>
       {loading
       ? <p>loading...</p>
       : this.renderUser()
        }
      </>
    );
  }
}

export default App;
