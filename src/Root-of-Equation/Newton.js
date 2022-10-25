import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import { useState } from 'react'
import Chart from 'react-apexcharts'
const math = require('mathjs');
var igraph = []
var xmgraph = []

class Newton extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {X0:'',ErrorApox:'',func:'',
        options: {
          chart: {
            id: "bar"
          },
          xaxis: {
            categories: igraph //iteration
          }
        },
        series: [
          {
            name: "X value", //xm of iteration 'n'
            data: xmgraph
          }      
        ]
      };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    NewtonCalcFunction(X0,ErrorApox,Funct)
    {
        function fx(x) //if this x = 3
        {
            const exprfx = math.parse(Funct) //turning this from string into math expression
            console.log("test = "+exprfx.evaluate({x: x})); 
            return exprfx.evaluate({x: x}); //replace any x in math expression with input(x)
        }
        function fxprime(x)
        {
            const exprfxprime  = math.derivative(math.parse(Funct), 'x')

            console.log("test = "+exprfxprime.evaluate({x: x}));
            return exprfxprime.evaluate({x: x});
        }

        var i = 0;
        var x0 = parseFloat(X0);
        var deltaX;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)

        
        
        if(x0!=null && Funct!=null && inputerrorapox!=null)
        {
          render("fx = "+math.parse(Funct))
          render("gx = "+math.derivative(math.parse(Funct),'x'))
          while(ErrorApox_Answer>inputerrorapox)
          {
            
            deltaX = ((-fx(x0))/(fxprime(x0)));
            x0 = x0+deltaX;
            ErrorApox_Answer = Math.abs((deltaX)/x0)*100;
            i++;
            igraph.push(i);
            xmgraph.push(x0.toFixed(6));
            render("X = "+x0.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)
          }
          return "X="+x0+" at Iteration = "+i;
        }
        return "Input X,ErrorApox and Function first!!"
    }
    graph()
    {
      console.log("igraph  =  " +igraph)
      return (
        <div className="app">
          <h1>&emsp;Graph</h1>
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="750"
              />
            </div>
          </div>
        </div>
      );
    }


    handleSubmit(event){
        const {X0,ErrorApox,Funct} = this.state
        
        const xm = this.NewtonCalcFunction(X0,ErrorApox,Funct)
        const showgraph = this.graph()
        event.preventDefault()
        console.log("X = "+X0)   //console log for debugging
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(xm)
        render(showgraph)
        

    }

    handleChange(event)
    {this.setState({
        [event.target.name] : event.target.value
        })
    }

    render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <div>
                <h1>&emsp;Newton-Raphson Method&emsp;</h1>
              <label htmlFor='X'>&emsp;X :&emsp;</label>
              <input 
                name='X0'
                placeholder='Starting X0' 
                value = {this.state.X0}
                onChange={this.handleChange}
                size='8'
              />
              <label htmlFor='ErrorApox'>&emsp;ErrorApox :&emsp;</label>
              <input
                name='ErrorApox' 
                placeholder='ErrorApox'
                value={this.state.ErrorApox}
                onChange={this.handleChange}
                size='5'
              />
              </div>
              <p></p>
              <div>
              <label htmlFor='Funct'>&emsp;Funct :&emsp;</label>
              <input
                name='Funct' 
                placeholder='Input function here!'
                value={this.state.Funct}
                onChange={this.handleChange}
                size='30'
              />
            </div>
            <p></p>
            <div>
            &emsp;<button>Calculate</button>
            </div>
          </form>
        )
      }
    }



export default Newton