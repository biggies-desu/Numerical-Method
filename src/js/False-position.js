
import { render } from "@testing-library/react";
var xm = <h1>I Love JSX!</h1>;

function calcFalseposition(){
    xm = <>this is Falseposition</>
    render(xm)
}

function Falseposition() {
    calcFalseposition();
    alert("FALSE POSITION")
}

export default Falseposition;