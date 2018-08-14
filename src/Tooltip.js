import React, { Component } from 'react';
//import $ from 'jquery';
import './App.css';

class Tooltip extends Component {

  componentWillMount() {
    this.setState({
      tooltipVisible: false
    })
  }

  tooltipMouseEnter = () => {
    this.setTooltipVisible(true);
  }
  tooltipMouseLeave = () => {
    this.setTooltipVisible(false);
  }

  setTooltipVisible = (isVisible) => {
    this.setState({
      tooltipVisible: isVisible
    })
  }


  render() {

    let tooltipID = this.props.id + "-custom-tooltip";
    let tooltipMessage = this.props.tooltipMessage || "Type in some tooltip text";
    let tooltipStyle = {};
    let tooltipContent = this.props.tooltipContent || "Some TooltipContent";
    if (this.state.tooltipVisible) {
      tooltipStyle.display = "block";
      tooltipStyle.backgroundColor = "black";
      tooltipStyle.color = "white";
      tooltipStyle.padding = "10px";
      tooltipStyle.width = "auto";
      tooltipStyle.borderRadius = "5px"
    } else {
      tooltipStyle.display = "none";
    }

    return (
      <div>
        <div className="info" onMouseEnter={this.tooltipMouseEnter} onMouseLeave={this.tooltipMouseLeave}>{tooltipContent}
          <span className="tooltip-container">
            <div id={tooltipID}
              style={tooltipStyle}
              className="tooltip-text">
              <p>{tooltipMessage}</p>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Tooltip;
