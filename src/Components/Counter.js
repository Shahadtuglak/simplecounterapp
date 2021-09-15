import React, { Component } from 'react';


class Counter extends Component {

    

    constructor(props) {
        super(props)
       
        this.state = {
            count :0
             
        }
    }

   

    increase(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrease(){
        this.setState({
            count: this.state.count -1
        })
    }

    reset(){
        this.setState({
            count: this.state.count = 0
        })
    }
   


    render() {
        return (
            <div className="counterBorder">
               <h1> {this.state.count}</h1> 
               
               <button onClick = {() => this.increase()}>+</button>
               <button onClick = {() => this.decrease()}>-</button>
               <button onClick = {() => this.reset()}>Reset</button>
                
            </div>
        )
    }
}

export default Counter
