import React,{ Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {showNextSlot} from '../action';
 class DaySlot extends Component {

 showNextSlot(event) {
    event.preventDefault();
    console.log(this.props.days);
    showNextSlot(this.props.dispatch, this.props.id);
  }
  render(){
      return(
        <span className="appointment-button-wraper">
          <button onClick={(event) => this.showNextSlot(event)}>
            <div> {this.props.days.day} </div>
            <div> {this.props.days.date} </div>
            <div> {this.props.days.avalible} <span>Avalible</span>
            </div>
        </button>
        </span>
      );
    }

}

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(
  mapDispatchToProps
)(DaySlot)
