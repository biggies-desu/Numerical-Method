import { render } from "@testing-library/react";
import React from 'react';
const Parser = require('expr-eval').Parser;


function falsepositioncalc(XL,XR,func,errorapox)
{
    const parser = new Parser();
    function fx(x)
    {
        let expr = parser.parse(func)
        console.log("fx = "+expr.evaluate({ x: (x) }))
        return expr.evaluate({ x: (x) })
    }

    var i = 0;
    var xl = parseFloat(XL);
    var xr = parseFloat(XR);
    var xm,xold;
    var ErrorApox=10000000; //set as default
    var inputerrorapox = parseFloat(errorapox)
    while(ErrorApox>inputerrorapox)
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
        ErrorApox = Math.abs((xm-xold)/xm)*100
        i++
        render(("----> Iteration #"+i+" || XL = "+xl.toFixed(6)+" XM = "+xm.toFixed(6)+" XR = "+xr.toFixed(6)))
        render(("***** ErrorApox = "+ErrorApox.toFixed(6)))
    
    }   
    
}


class FP extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      const XL = (event.target.xl.value)
      const XR = (event.target.xr.value)
      const func = (event.target.function.value)
      const errorapox = (event.target.err.value)
      console.log("XL = "+XL)   //console log for debugging
      console.log("XR = "+XR)
      console.log("Function = "+func)
      console.log("Errorapox = "+errorapox)
      falsepositioncalc(XL,XR,func,errorapox)
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <p></p><p>
            &emsp;&emsp;&emsp;&emsp;False-position Method    
            </p>
            <p>
          <label>
          &emsp;XL :&emsp;
            <input
              type="text"
              name="xl"
              size = "6"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <label>
          &emsp;XR :&emsp;
            <input
              type="text"
              name="xr"
              size = "6"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <label>
          &emsp;ErrorApox :&emsp;
            <input
              type="text"
              name="err"
              size = "3"
              ref={node => (this.inputNode = node)}
            />
          </label>
          </p>
          <p>
          <label>
          &emsp;function :&emsp;
            <input
              type="text"
              name="function"
              size = "30"
              ref={node => (this.inputNode = node)}
            />
          </label>
          </p>
          <p>   
          &emsp;<button type="submit">Submit</button>
          </p>
        </form>
      )
    }
  }



function Falseposition()
{
    render(<FP />);
}

export default Falseposition;