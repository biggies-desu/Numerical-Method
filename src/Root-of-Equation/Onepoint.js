import React,{ Component } from 'react'
import { useState } from 'react'
import ApexCharts from 'apexcharts'
const math = require('mathjs');
var xarray = [];
var iarray = [];
//refactor code from class component to functional component

const Onepoint = () => {
    var Funct,ErrorApox,X;

    const [getFunct, setFunct] = useState('')
    const [getErrorApox, setErrorApox] = useState('')
    const [getX, setX] = useState('')
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
            text: 'One-point Iteration Graph',
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
        X = getX;
        
        console.log(X);
        console.log(ErrorApox);
        console.log(Funct);
        iarray.splice(0,iarray.length) //clear array everytime user click calculate
        xarray.splice(0,xarray.length)
        
        NewtonCalcFunction(X,ErrorApox,Funct)
    }

    function NewtonCalcFunction(X,ErrorApox,Funct)
    {
        var i = 0;
        var x = parseFloat(X);;
        var y;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        let text = "";
        let finalanswer = "===>";

        function fx(input) //if this x = 3
        {
            const exprfx = math.parse(Funct) //turning this from string into math expression
            return exprfx.evaluate({x: input}); //replace any x in math expression with input(x)
        }

        if(x!=null && Funct!=null && inputerrorapox!=null && i!==100){//bisection function
            while(ErrorApox_Answer>inputerrorapox)
            {
                y=fx(x)
                ErrorApox_Answer = Math.abs((y-x)/x)*100;
                i++
                xarray.push(x.toFixed(6));
                iarray.push(i) //push to store in array (use for render graph)
                console.log("X = "+x)
                console.log("Errorapox = "+ErrorApox_Answer)
                text = text+"At Iteration #"+i+" XM = "+x.toFixed(6)+" with Errorapox of "+ErrorApox_Answer.toFixed(6)+"<br>"    //for show every iteration with xm value and errorapox
                x = y
        }
        finalanswer = finalanswer+"XM value is "+x.toFixed(6)+" at Iteration #"+i+"<br>";

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
                <h1>&emsp;One-point Iteration Method&emsp;</h1>
              <label htmlFor='X'>&emsp;X :&emsp;</label>
              <input 
                name='X'
                placeholder='Starting X' 
                value = {getX}
                onChange={event => setX(event.target.value)}
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


export default Onepoint