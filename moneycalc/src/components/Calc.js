import React from 'react';

class Calc extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            invest : "",
            earning : "",
            fees : ""
        }
    }

    handlechange = (e)=>{
        // var a = e.target.name;
        var value = e.target.value;
        var b = value.slice(1);
        this.setState({invest :value});
        this.setState({earning : "£" +Number((value*-1.16/100).toFixed(2))});
        this.setState({fees : "£" + Number((value*-1.16/1000).toFixed(2))});
        
        console.log(value, b);
    }

    render(){
        return(
            <>
            <div id="back-img">
        <h2>Lending made easy </h2>
        <p>Earn upto -1.16%* a year across a wide range of P2P  sites with InvestUP</p>
        <button>GET STARTED</button>
      </div>

      <div id="content" className="jumbotron">
        <h5>With £
        <input type="text" className="investment" value={this.state.invest} name="invest" placeholder="0"
        style={{color:"#3377ff"}}
        onChange={this.handlechange} min="500" max="250000"
        />
          your estimated earnings could be
          <input type="text" className="investment" value={this.state.earning} 
          style={{color:"#2eb82e"}} name="earning" readOnly placeholder="£0"/>
           &nbsp;* per <br/>
         year with fees of just 
         <input style={{fontWeight: "bold"}} type="text" className="investment" value={this.state.fees} name="fees" readOnly placeholder="£0"/>
          per year </h5>  

          <small>
              Estimated earnings are based on -1.16% per annum before tax and any potential losses. As with most
              forms of investment, peer-to-peer lending carries a <br/>degree of risk to your capital; In this case, if
              borrowers were unable to repay their loans.
          </small>
      </div>

      <div className="slide">
      <input type="range" onChange={this.handlechange} value={this.state.invest} className="slider"
        min={500} max={250000} step="100" id="customRange3" data-show-value="true"/>
      </div>
      <span style={{float: "left", paddingLeft: "200px"}}>
            <b>£500</b>
      </span>
      <span style={{float: "right", paddingRight: "200px"}}>
            <b>£250000</b>
      </span>
            </>
        )
    }

}

export default Calc;