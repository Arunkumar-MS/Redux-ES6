import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTitle } from '../action';
import DaySlot from './daySlot';
import Slot from './slot';

class App extends Component {
    static propTypes = {
        data: PropTypes.object,
        dispatch: React.PropTypes.func.isRequired
    };
  render() {

    let i =0;
    let k =0;
    let counter =0;

      return (
          <div>
          {
          this.props.data.appointmentdays.map((item) => {
            
          return  (<DaySlot days = {item} id={i} key={i++}/>);

          })
        }
        {
          this.props.data.appointmentdays[this.props.data.showSlot].slot.map((item) => {
          return (<Slot data = {item} key= {k++} /> );
        })
        }

        </div>
        );
    }

}

const mapStateToProps = state => ({
  data: state.ui
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
