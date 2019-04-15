import React, { Component } from 'react';
import Header from "./components/Header";
import Branding from "./components/Branding";

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {

        };
      };

      /*Pre loader stuff */
        authenticate(){
          return new Promise(resolve => setTimeout(resolve, 1000))
        }
        componentDidMount(){
          this.authenticate().then(() => {
            const ele = document.getElementById('ipl-progress-indicator');
            if(ele){
              // fade out
              ele.classList.add('available');
              setTimeout(() => {
                // remove from DOM
                ele.outerHTML = ''
              }, 1000)
            }
          })
        }
        /* Pre loader stuff */

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Branding/>
      </React.Fragment>
    );
  }
}

export default App;
