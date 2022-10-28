import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import { useState } from 'react'
import Chart from 'react-apexcharts'
const Parser = require('expr-eval').Parser;
var igraph = []
var xgraph = []

class Onepoint extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {X:'',ErrorApox:'',func:'',
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
            data: xgraph
          }      
        ]
      };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    OnepointCalcFunction(X,ErrorApox,Funct)
    {
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }

        var i = 0;
        var x = parseFloat(X);
        var y;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        if(x!=null && Funct!=null && inputerrorapox!=null)
        {
        while(ErrorApox_Answer>inputerrorapox && i!==100)//exit when more than iteration #100 prevent to cause inf loop
        {
            y=fx(x);
            ErrorApox_Answer = Math.abs((y-x)/y)*100;
            i++
            igraph.push(i);
            xgraph.push(x)
            console.log("XL = "+x)   //console log for debugging
            console.log("Errorapox = "+ErrorApox_Answer)
            render("X = "+x.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)//calc wont re-render so i stuck at this
            x = y;
        }
        return "X="+x+" at Iteration = "+i;
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
            <h3>&emsp; Value of XM is = {xgraph[xgraph.length-1]} </h3>
          </div>
        </div>
      );
    }


    handleSubmit(event){
        const {X,ErrorApox,Funct} = this.state
        const xm = this.OnepointCalcFunction(X,ErrorApox,Funct)
        const showgraph = this.graph();
        event.preventDefault()
        console.log("X = "+X)   //console log for debugging
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(xm)
        if(X!=null&&ErrorApox!=null&&Funct!=null)
        {
          render(showgraph);
          igraph.splice(0,igraph.length)
          xgraph.splice(0,xgraph.length)
        }
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
                <h1>&emsp;One-point Iteration Method&emsp;</h1>
              <label htmlFor='X'>&emsp;X :&emsp;</label>
              <input 
                name='X'
                placeholder='Starting X' 
                value = {this.state.X}
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



export default Onepoint