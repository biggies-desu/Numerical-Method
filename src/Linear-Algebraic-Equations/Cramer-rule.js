import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import { useState } from 'react'
class Cramer extends Component {
    constructor(props){
      super(props);
      this.state = {
        array1 : [],
        array2 : [],
        col1: null,
        row1 : null,
  
      }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }
  
    createMatrix(Row,Column)
    {
            let myarr = [];
            for(let i=0; i < Row; i++){
              let row = []
              for(let j=-1; j < Column; j++){
                let col = "-"
                row.push(col);
              }
              myarr.push(row);
              
              render(row)
              render(<div>
                {
                  console.log("ok this is epic")
                }
              </div>)
            }
            console.log(myarr)
            
            return myarr;
    }


    
    calculatematrix(event)
    {
        event.preventDefault()
        console.log("CAL!!!!!")
        render("NICE DICK")
    }

    handleChange(event)
        {this.setState({
        [event.target.name] : event.target.value
        })
    }

    
    handleSubmit(event){
        const {Row,Column} = this.state
        
        const rendermatrix = this.createMatrix(Row,Column)
        event.preventDefault()
        console.log("Row = "+Row)   //console log for debugging
        console.log("Column = "+Column)
        render(rendermatrix) //same here at line 53 i literally stuck at re-rendering
        render
            (<form onSubmit={this.calculatematrix}>&emsp;<p></p><button>Calculate</button></form>)
            
        };

    
  
      render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <div>
                <h1>&emsp;Matrix Calculator&emsp;</h1>
              <label htmlFor='Row'>&emsp;Row :&emsp;</label>
              <input 
                name='Row'
                placeholder='Row' 
                value = {this.state.Row}
                onChange={this.handleChange}
                size='8'
              />
              <label htmlFor='Column'>&emsp;Column :&emsp;</label>
              <input
                name='Column' 
                placeholder='Column'
                value={this.state.Column}
                onChange={this.handleChange}
                size='8'
              />
              &emsp;<button>Submit</button>
            </div>
            
          </form>
        )
      }
    }


export default Cramer;