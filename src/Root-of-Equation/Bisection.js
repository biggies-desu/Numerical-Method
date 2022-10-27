import React,{ Component } from 'react'
import { useState } from 'react'
import ApexCharts from 'apexcharts'
const math = require('mathjs');
var xmarray = [];
var iarray = [];
//refactor code from class component to functional component

const Bisection = () => {
    var Funct,ErrorApox,XL,XR;

    const [getFunct, setFunct] = useState('')
    const [getErrorApox, setErrorApox] = useState('')
    const [getXL, setXL] = useState('')
    const [getXR, setXR] = useState('')
    var xmgraph = xmarray;
    var igraph = iarray;

    var options = { //graph related
        chart: {
          type: 'line',
          width: '750'
        },
        series: [{
          name: "XM_value",
          data: xmgraph
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
            text: 'Bisection Graph',
            align: 'cebter',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false
        }
      }
      
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render(); //render chart (every time that state change)


    var getValue = e => {//handle input event and pass value to function
        e.preventDefault();
        Funct = getFunct
        ErrorApox = getErrorApox;
        XL = getXL;
        XR = getXR;
        
        console.log(getXL);
        console.log(XL);
        console.log(XR);
        console.log(ErrorApox);
        console.log(Funct);
        iarray.splice(0,iarray.length) //clear array everytime user click calculate
        xmarray.splice(0,xmarray.length)
        
        BisectionCalcFunction(XL,XR,ErrorApox,Funct)
    }

    function BisectionCalcFunction(XL,XR,ErrorApox,Funct)
    {
        var i = 0;
        var xl = parseFloat(XL);
        var xr = parseFloat(XR);
        var xm,xold;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        let text = "";
        let finalanswer = "===>";

        function fx(input)
        {
            const exprfx = math.parse(Funct) //parse to math expression
            return exprfx.evaluate({x: input});//eval the expression to input for example if function is x^2-7 -> input^2-7
        }
        

        if(xl!=null && xr!=null && Funct!=null && inputerrorapox!=null && i!==100){//bisection function
        while(ErrorApox_Answer>inputerrorapox)
            {   
                xm=(xl+xr)/2;
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
            xmarray.push(xm.toFixed(6));
            iarray.push(i) //push to store in array (use for render graph)
            console.log("XL = "+xl)   //console log for debugging
            console.log("XM = "+xm)
            console.log("XR = "+xr)
            console.log("Errorapox = "+ErrorApox_Answer) 
            text = text+"At Iteration #"+i+" XM = "+xm.toFixed(6)+" with Errorapox of "+ErrorApox_Answer.toFixed(6)+"<br>"    //for show every iteration with xm value and errorapox
        }
        finalanswer = finalanswer+"XM value is "+xm.toFixed(6)+" at Iteration #"+i+"<br>";

        document.getElementById("finalans").innerHTML = finalanswer
        console.log(finalanswer)
        console.log(xmarray)
        console.log(iarray)
        document.getElementById("finaltext").innerHTML = text
        document.getElementById("finalxm").innerHTML = xmarray //pass elementID
      }
    }

    return(<body>
        <div>
          <form onSubmit={getValue}>
            <div>
                <h1>&emsp;Bisection Method&emsp;</h1>
              <label htmlFor='XL'>&emsp;XL :&emsp;</label>
              <input 
                name='XL'
                placeholder='Starting XL' 
                value = {getXL}
                onChange={event => setXL(event.target.value)}
                size='8'
              />
              <label htmlFor='XR'>&emsp;XR :&emsp;</label>
              <input
                name='XR' 
                placeholder='Starting XR'
                value={getXR}
                onChange={event => setXR(event.target.value)}
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


export default Bisection