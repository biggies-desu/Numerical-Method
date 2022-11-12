
import React,{ Component } from 'react'
import { useState } from 'react'
const math = require('mathjs');

//refactor code from class component to functional component

const MatrixInversion = () => {
    var Size;
    var array=[];
    var temparray = [];
    var answerarray = [];
    var resultinv = [];
    var result = [];
    var matrix_A = [];
    var matrix_A_inverse = [];
    var matrix_b = [];

    const [getSize, setSize] = useState('')

    var getValue = e => {//hale input event and pass value to function
        e.preventDefault();
        document.getElementById('matrix').innerHTML = ""//clear matrix each clicks
        Size = getSize
        
        console.log(Size)
        createMatrix(Size)
    }

    function createMatrix(Size)
    {
      for(var row=1;row<=Size;row++)
      {
        for(var col=0;col<=Size;col++)
        {
          document.getElementById('matrix').innerHTML += '<input type="text" id="matrix_index_row'+row +'col'+(col+1)+'" name="" placeholder="---" size=3>';
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
        for(var col=0;col<=Size;col++)
        {
          var getvalue = parseFloat(document.getElementById('matrix_index_row'+row +'col'+(col+1)).value)
          temparray.push(getvalue) //get input from form then push to array
          console.log(temparray)
        }
        console.log("------")
        console.log(temparray)
        array.push(temparray) //push each row to main array
        temparray = []; // clear small array
      }
      console.log(array)
      //show array as output
      for(var i = 0;i<Size;i++)
      {
        document.getElementById('outputarray').innerHTML += "[ "
        for(var j = 0;j<Size;j++)
        {
            document.getElementById('outputarray').innerHTML += ""+array[i][j]+"a("+(j+1)+") "
        }
        document.getElementById('outputarray').innerHTML += " = " +array[i][Size]+" ] <br/>"
      }
      MatrixInversionCal();
      showoutput();

      //this is basically quite a mess but i have to clear a thing up for next incoming input
      array = [];
      answerarray= [];
      result = [];
      resultinv = []
      matrix_A = [];
      matrix_b = []
      matrix_A_inverse = [];
    }

    function MatrixInversionCal()
    {
      //get array value
      var temparrayCalc = [];
      var ending_index = parseInt(Size)+1 //get index of last element from each row
      for(var row=1;row<=Size;row++)
      {
        //console.log(ending_index)
        var temp3 = document.getElementById('matrix_index_row'+(row)+'col'+(ending_index)).value //get-push for matrix B
        matrix_b.push(temp3)
        for(var col=0;col<Size;col++)
        {
          console.log("row = "+(row)+"col = "+(col+1));
          var temp2 = document.getElementById('matrix_index_row'+(row)+'col'+(col+1)).value //get-push matrix A
          temparrayCalc.push(temp2)
        }
        matrix_A.push(temparrayCalc)
        temparrayCalc = [];
    }
    //inverse of matrix A
    matrix_A_inverse = math.inv(matrix_A);
    
    console.log(matrix_A);
    console.log(matrix_A_inverse);
    console.log(matrix_b);
    
    answerarray = math.multiply(matrix_A_inverse,matrix_b)
    console.log(answerarray)
  }

    function showoutput()
    {
      var ans = ""//another array to store round-up value

      var invers =" ==== Inversed Matrix ====<br/>"

      answerarray.forEach(arr2 => result.push(arr2.toFixed(6)))
      var times2 = 0; //index array resultinv
      console.log(result)
      for(var times=0;times<Size;times++)
      {
        matrix_A_inverse[times].forEach(arr => resultinv.push(arr.toFixed(6))) //convert all array element to 6 digit
        ans += "a("+(times+1)+") = "+result[times]+"<br/>"
      }
      console.log(resultinv);
      for(var k=0;k<Size;k++) //get element from resultinv and print out
      {
        invers += "||"
        for(var l=0;l<Size;l++)
        {
          invers += ""+resultinv[times2]+" "
          times2++;
        }  
        invers += "||<br/>"
      }
      document.getElementById('invoutput').innerHTML = invers
      document.getElementById('final').innerHTML = ans

      
      array.splice(0,array.length)
      answerarray.splice(0,answerarray.length)
      result.splice(0,result.length)
      resultinv.splice(0,resultinv.length);
    }

    return(<body>
        <div>
          <form onSubmit={getValue}>
            <div>
                <h1>&emsp;Matrix Inversion&emsp;</h1>
              <label htmlFor='Size'>&emsp;Size :&emsp;</label>
              <input 
                name='Size'
                placeholder='Ex: 4 for 4x4' 
                value = {getSize}
                onChange={event => setSize(event.target.value)}
                size='8'
              />
            </div>
            <p></p>
            <p>
            <div>
            &emsp;<button>Submit</button>
            </div>
            </p>
            <p id = 'matrix'></p>
            <p id = 'cal_button'></p>
            <p id = 'outputarray'></p>
            <p id = 'invoutput'></p>
            <h3><p id = 'final'></p></h3>
          </form>
          </div>
          </body>
    )
}


export default MatrixInversion