import React, {Component} from 'react'
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import '../App.css'


class Landing extends Component {

  render(){
    const data = {
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        // onclick: function (d, i) { console.log("onclick", d, i); },
        // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
      return (
        <div> <C3Chart data={data}/> </div>

        )
    }
}

export default Landing;
