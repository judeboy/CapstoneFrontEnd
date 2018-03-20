import React, {Component} from 'react'
import C3Chart from 'react-c3js';
// import '../c3.css';
import '../App.css'


class Chart extends Component {

  render(){
    const data = {
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
      return (
        <div>
        <C3Chart data={data}/>
          The US Government has thousands of programs that provide funding to both individuals and businesses for a myriad of reasons, from student loans, to small business loans, agricultural programs and low-income assistance. The problem is that navigating the .GOV sites is treacherous and rarely provides ease of access. What Civic Searcher aims to do is streamline the process by providing a central database to access and track the application process of these programs.
        </div>
        )
    }
}

export default Chart;
