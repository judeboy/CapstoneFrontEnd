import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import '../App.css'
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import logo from '../images/capitol.jpg'


class Chart extends Component {
  render(){
    let data = {
      columns: [
        ['Grants', 30],
        ['Loans', 120],
      ],
      type : 'pie',
      // onclick: function (d, i) { console.log("onclick", d, i); },
      // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }

      return (
        <div>
        {/* <img className='mainLogo' src={logo}></img> */}
        <div id='landing' className='columnTitles' >
         The US Government has thousands of programs that provide funding to both individuals and businesses for a myriad of reasons. The problem is that navigating the .GOV sites rarely provides ease of access. What <span >Civil Searcher</span> aims to do is streamline the process by providing a central database to access and track the application process of these programs.
        </div>
        </div>
        )
    }
}

export default Chart;
