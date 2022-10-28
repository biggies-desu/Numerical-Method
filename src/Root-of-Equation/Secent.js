import React,{ Component } from 'react'
import { useState } from 'react'
import ApexCharts from 'apexcharts'
const math = require('mathjs');
var xarray = [];
var iarray = [];
//refactor code from class component to functional component

const Secent = () => {
    var Funct,ErrorApox,X0,X1;

    const [getFunct, setFunct] = useState('')
    const [getErrorApox, setErrorApox] = useState('')
    const [getX0, setX0] = useState('')
    const [getX1, setX1] = useState('')
    var xgraph = xarray;
    var igraph = iarray;

    var options = { //graph related
        chart: {
          type: 'line',
          width: '750'
        },
        series: [{
          name: "X value",
          data: xgraph
        }],
        xaxis: {
          categories: igraph
        },
        grid: {
            row: {
                colors: ['#e5e5e5', 'transparent'],
                opacity: 0.5
            }, 
            column: {
                colors: ['#f8f8f8', 'transparent'],
            }, 
            xaxis: {
              lines: {
                show: true
              }
            }
          },
          title: {
            text: 'Secent Graph',
            align: 'cebter',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false
        }
      }
      
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render(); //render chart (every time that state change)


    var getValue = e => {//hale input event and pass value to function
        e.preventDefault();
        Funct = getFunct
        ErrorApox = getErrorApox;
        X0 = getX0;
        X1 = getX1;
        
        console.log(X0);
        console.log(X1);
        console.log(ErrorApox);
        console.log(Funct);
        iarray.splice(0,iarray.length) //clear array everytime user click calculate
        xarray.splice(0,xarray.length)
        
        NewtonCalcFunction(X0,X1,ErrorApox,Funct)
    }

    function NewtonCalcFunction(X0,X1,ErrorApox,Funct)
    {
        var i = 0;
        var x0 = parseFloat(X0);
        var x1 = parseFloat(X1);
        var deltaX;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        let text = "";
        let finalanswer = "===>";

        function fx(input) //if this x = 3
        {
            const exprfx = math.parse(Funct) //turning this from string into math expression
            console.log("exprfx = "+exprfx)
            console.log(exprfx.evaluate({x: input}));
            return exprfx.evaluate({x: input}); //replace any x in math expression with input(x)
        }
        
        if(x0!=null && x1!=null && Funct!=null && inputerrorapox!=null && i!==100){//bisection function
            while(ErrorApox_Answer>inputerrorapox)
             {
                console.log("x0 = "+x0)
                console.log("x1 = "+x1)
                deltaX = (-(fx(x1))*(x0-x1))/(fx(x0)-(fx(x1)));
                x0 = x1;
                x1 = x1+deltaX;
                ErrorApox_Answer = Math.abs((deltaX)/x1)*100;
                i++;
                igraph.push(i);
                xgraph.push(x0.toFixed(6));
                console.log("X0 = "+x0)
                console.log("Errorapox = "+ErrorApox_Answer) 
                text = text+"At Iteration #"+i+" XM = "+x0.toFixed(6)+" with Errorapox of "+ErrorApox_Answer.toFixed(6)+"<br>"    //for show every iteration with xm value and errorapox
                }
                finalanswer = finalanswer+"XM value is "+x0.toFixed(6)+" at Iteration #"+i+"<br>";

        document.getElementById("finalans").innerHTML = finalanswer
        console.log(finalanswer)
        console.log(xarray)
        console.log(iarray)
        document.getElementById("finaltext").innerHTML = text
        document.getElementById("finalx").innerHTML = xarray //pass elementID
      }
    }

    return(<body>
        <div>
          <form onSubmit={getValue}>
            <div>
                <h1>&emsp;Secent Method&emsp;</h1>
              <label htmlFor='X0'>&emsp;X0 :&emsp;</label>
              <input 
                name='X0'
                placeholder='Starting X0' 
                value = {getX0}
                onChange={event => setX0(event.target.value)}
                size='8'
              />
              <label htmlFor='X1'>&emsp;X1 :&emsp;</label>
              <input
                name='X1'
                placeholder='Starting X1' 
                value = {getX1}
                onChange={event => setX1(event.target.value)}
                size='8'
              />
              <label htmlFor='ErrorApox'>&emsp;Error approximation :&emsp;</label>
              <input
                name='ErrorApox' 
                placeholder='ErrorApox'
                value={getErrorApox}
                onChange={event => setErrorApox(event.target.value)}
                size='5'
              />
              </div>
              <p></p>
              <div>
              <label htmlFor='Funct'>&emsp;Function :&emsp;</label>
              <input
                name='Funct' 
                placeholder='Input function here!'
                value={getFunct}
                onChange={event => setFunct(event.target.value)}
                size='30'
              />
            </div>
            <p></p>
            <p>
            <div>
            &emsp;<button>Calculate</button>
            </div>
            </p>
            <h2><p id = 'finalans'></p></h2>
            <p id = 'chart'></p>
            <p id = 'finaltext'></p>
          </form>
          </div>
          </body>
    )
}


export default Secent