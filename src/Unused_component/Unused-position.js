import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import { useState } from 'react'
import Chart from 'react-apexcharts'

const Parser = require('expr-eval').Parser;
var xmgraph = []
var igraph = []

class Falseposition extends React.Component
{
  constructor(props)
  {
      super(props)
      this.state = {XL:'',XR:'',ErrorApox:'',func:'',
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
          name: "XM value", //xm of iteration 'n'
          data: xmgraph
        }
      ]
    };
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)    
  }
          


    FalsePositionCalcFunction(XL,XR,ErrorApox,Funct)
    {
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }

        var i = 0;
        var xl = parseFloat(XL);
        var xr = parseFloat(XR);
        var xm,xold;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        if(xl!=null && xr!=null && Funct!=null && inputerrorapox!=null){
        while(ErrorApox_Answer>inputerrorapox)
            {
                xm=((xl*fx(xr))-(xr*fx(xl)))/(fx(xr)-fx(xl));
                if(fx(xm)*fx(xr)<0)
                {
                    xold=xl
                    xl=xm
                }
                if(fx(xm)*fx(xr)>0)
                {
                    xold=xr
                    xr=xm
                }
                ErrorApox_Answer = Math.abs((xm-xold)/xm)*100
            i++
            xmgraph.push(xm.toFixed(6));
            
            igraph.push(i)
            console.log("XL = "+xl)   //console log for debugging
            console.log("XM = "+xm)
            console.log("XR = "+xr)
            console.log("Errorapox = "+ErrorApox_Answer)
            render("XM = "+xm.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)//calc wont re-render so i stuck at this
        }
        return "XM="+xm+" at Iteration = "+i; //calc wont re-render so i stuck at this
      }
      return "Input XL,XR,ErrorApox and Function first!!"
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
            <h3>&emsp; Value of XM is = {xmgraph[xmgraph.length-1]} </h3>
          </div>
        </div>
      );
    }


    handleSubmit(event){
        const {XL,XR,ErrorApox,Funct} = this.state
        const xm = this.FalsePositionCalcFunction(XL,XR,ErrorApox,Funct)
        const showgraph = this.graph()
        event.preventDefault()
        console.log("XL = "+XL)   //console log for debugging
        console.log("XR = "+XR)
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(xm) //same here at line 53 i literally stuck at re-rendering 
        if(XL!=null&&XR!=null&&ErrorApox!=null&&Funct!=null)
        {
          render(showgraph);
          igraph.splice(0,igraph.length)
          xmgraph.splice(0,xmgraph.length)
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
                <h1>&emsp;False-position Method&emsp;</h1>
              <label htmlFor='XL'>&emsp;XL :&emsp;</label>
              <input 
                name='XL'
                placeholder='Starting XL' 
                value = {this.state.XL}
                onChange={this.handleChange}
                size='8'
              />
              <label htmlFor='XR'>&emsp;XR :&emsp;</label>
              <input
                name='XR' 
                placeholder='Starting XR'
                value={this.state.XR}
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
            <p>
            <div>
            &emsp;<button>Calculate</button>
            </div>
            </p>
          </form>
        )
      }
    }



export default Falseposition