
import React from 'react';
import './App.css';
import  {commonContext}  from './Components/commonContext';
import Main from './Components/Main';
import UpdateButton from './Components/UpdateButton';
import Header from './Components/Header';
import Footer from './Components/Footer';


class App extends React.Component {
  constructor(){
    super()
    this.updateColor=(color)=>{
      this.setState({
        color:color
      })
    }

    this.state={
      color:"yellow",
      updateColor:this.updateColor
     }
   
  }
  render() {
    return(
      <div className="App">
      <commonContext.Provider value={this.state}>
        <Header />
        <h1>Example of Context API</h1>
        <Main />
        
        <UpdateButton />
        <Footer />
      </commonContext.Provider>
    </div>
    )
}
}

export default App;