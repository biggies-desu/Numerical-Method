
import React,{ Component } from 'react'
import { useState } from 'react'
const math = require('mathjs');
//refactor code from class component to functional component
//THIS ONE ONLY FOR LINEAR AND POLYNOMIAL REGRESSION
const Regression = () => {
    var Size,Degree,Xi;
    var array=[];
    var temparray = [];
    var Xarray=[];
    var Yarray=[]

    var tempRegression = [];
    var MatrixA = [];
    var MatrixA_Inv = [];
    var MatrixB = [];
    var answerarray = []

    const [getSize, setSize] = useState('')
    const [getDegree,setDegree] = useState('')
    const [getXi,setXi] = useState('')

    var getValue = e => {//hale input event and pass value to function
        e.preventDefault();
        document.getElementById('matrix').innerHTML = ""//clear matrix each clicks
        Size = getSize
        Degree = getDegree
        Xi = getXi;
        
        console.log("Size = "+Size)
        console.log("Degree = "+Degree)
        console.log("Xi = "+Xi)
        createMatrix(Size)
    }

    function createMatrix(Size)
    {
      for(var row=1;row<=Size;row++)
      {
        for(var col=1;col<=2;col++)
        {
          document.getElementById('matrix').innerHTML += '<input type="text" id="matrix_index_row'+row +'col'+(col)+'" name="" placeholder="-" size=3>';
        }
        document.getElementById('matrix').innerHTML += '<br/>'
      }
      document.getElementById('cal_button').innerHTML = ""//create button
      document.getElementById('cal_button').innerHTML += '<button onclick="calculate()">Calculate the matrix</button>'
      document.getElementById('cal_button').onclick = function(){calculate()};//button call calculate function
    }

    function calculate()
    {
      //clear output array
      document.getElementById('outputarray').innerHTML = ""

      //get array input
      for(var row=1;row<=Size;row++)
      {
        for(var col=1;col<=2;col++)
        {
          var getvalue = parseFloat(document.getElementById('matrix_index_row'+row +'col'+(col)).value)
          temparray.push(getvalue) //get input from form then push to array
          console.log(temparray)
        }
        console.log(temparray)
        array.push(temparray) //push each row to main array
        temparray = []; // clear small array
      }
      console.log(array)
      //show array as output
      for(var i = 0;i<Size;i++)
      {
        document.getElementById('outputarray').innerHTML += "[ "
        for(var j = 0;j<1;j++)
        {
            document.getElementById('outputarray').innerHTML += ""+array[i][0]+"x "
            document.getElementById('outputarray').innerHTML += " = "+array[i][1]+"y] <br/>"
        }
      }

      //seperate X and Y
      for(var i=0;i<Size;i++)
      {
        Xarray.push(array[i][0]);
      }
      for(var i=0;i<Size;i++)
      {
        Yarray.push(array[i][1]);
      }
      console.log(Xarray)
      console.log(Yarray)

      RegressionCalc();
      printout();

      array = [];//clear array for next inc array input
      Xarray =[];
      Yarray = [];
      tempRegression = [];
      MatrixA = [];
      MatrixB = [];
    }

    function RegressionCalc()
    {
      console.log("RegressionCalc")
      
        //Regression cal
        //get matrix A
        for(var row=0;row<=Degree;row++)
        {
            for(var col=0;col<=Degree;col++)
            {
                let mul = row+col
                tempRegression.push(SumofSquareX(Xarray,mul)); //call function to mul the sum
            }
            MatrixA.push(tempRegression) //push to array matrix A
            tempRegression = []; //clear array for next inc row
        }
        console.log(MatrixA)
        //get matrix B
        for(var row2=0;row2<=Degree;row2++)
        {
            //console.log(row2)
            tempRegression.push(SumofSquareY(Xarray,Yarray,row2)); //call function to mul the sum
            MatrixB.push(tempRegression)  //push to array matrix B
            tempRegression = []; //clear array for next inc row
        }
        console.log(MatrixB)

        //find each a with using Matrix inverse
        MatrixA_Inv = math.inv(MatrixA)
        answerarray = math.multiply(MatrixA_Inv,MatrixB);
        console.log(MatrixA_Inv)
        console.log(answerarray)
    }

    function SumofSquareX(arr,mul) //function return X^...
    {
      let sumofsqrt = 0.0;
      for(var i = 0;i<Size;i++)
      {
        sumofsqrt += Math.pow(arr[i],mul);
      }
      return sumofsqrt
    }

    function SumofSquareY(arr,arr2,mul2) //function return X^...*Y
    {
      let sumofsqrt2 = 0.0;
      for(var i = 0;i<Size;i++)
      {
        sumofsqrt2 += Math.pow(arr[i],mul2)*arr2[i]
      }
      return sumofsqrt2
    }

    function printout()
    {
      let sumproof = 0;
      document.getElementById('final').innerHTML = ""
      document.getElementById('proof').innerHTML = "g("+Xi+") ="
        for(var i = 0;i<=Degree;i++)
        {
          document.getElementById('final').innerHTML += "a("+i+") = "+answerarray[i]+"<Br/>"
        }//print out answer

        //proof
        
        for(var j = 0;j<=Degree;j++)
        {
          document.getElementById('proof').innerHTML += "+("+answerarray[j]+"*"+Math.pow(Xi,j)+")";
          sumproof += answerarray[j]*Math.pow(Xi,j);
        }
        document.getElementById('proof').innerHTML += " =" + sumproof;
        

    }

    return(<body>
        <div>
          <form onSubmit={getValue}>
            <div>
                <h1>&emsp;Linear / Polynomial Regression&emsp;</h1>
              <label htmlFor='Size'>&emsp;Number of data :&emsp;</label>
              <input 
                name='Size'
                placeholder='Number of size.' 
                value = {getSize}
                onChange={event => setSize(event.target.value)}
                size='11'
              />
              <label htmlFor='Degree'>&emsp;Degree :&emsp;</label>
              <input 
                name='Degree'
                placeholder='Ex: 2 = a0+a1x+a2x^2' 
                value = {getDegree}
                onChange={event => setDegree(event.target.value)}
                size='18'
              />
            </div>
            <p></p>
            <label htmlFor='Xi'>&emsp;Xi :&emsp;</label>
              <input 
                name='Xi'
                placeholder='Ex: X that we want to know' 
                value = {getXi}
                onChange={event => setXi(event.target.value)}
                size='3'
              />
            <p></p>
            <p>
            <div>
            &emsp;<button>Submit</button>
            </div>
            </p>
            <p id = 'matrix'></p>
            <p id = 'cal_button'></p>
            <p id = 'outputarray'></p>
            <h3><p id = 'final'></p></h3>
            <p id = 'proof'></p>
          </form>
          </div>
          </body>
    )
}


export default Regression