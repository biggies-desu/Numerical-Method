import { render } from "@testing-library/react";
import React from 'react';
const Parser = require('expr-eval').Parser;


function bisectioncalc(XL,XR,func,errorapox)
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
        ErrorApox = Math.abs((xm-xold)/xm)*100
        i++
        render(("Iteration #"+i+" || XL = "+xl+" XM = "+xm+" XR = "+xr))
        render(("ErrorApox = "+ErrorApox))
    
    }   
    
}


class Bisect extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      const XL = (event.target.xl.value)
      const XR = (event.target.xr.value)
      const func = (event.target.function.value)
      const errorapox = (event.target.err.value)
      console.log("XL = "+XL)
      console.log("XR = "+XR)
      console.log("Function = "+func)
      console.log("Errorapox = "+errorapox)
      bisectioncalc(XL,XR,func,errorapox)
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <p>
          <label>
             XL :
            <input
              type="text"
              name="xl"
              size = "6"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <label>
             XR :
            <input
              type="text"
              name="xr"
              size = "6"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <label>
             ErrorApox :
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
             function :
            <input
              type="text"
              name="function"
              size = "30"
              ref={node => (this.inputNode = node)}
            />
          </label>
          </p>
          <button type="submit">Submit</button>
        </form>
      )
    }
  }



function Bisection()
{
    render(<Bisect />);
}

export default Bisection;