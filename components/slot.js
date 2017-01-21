import React,{ Component, PropTypes} from 'react';
export default class Slot extends Component {
  render(){
      return(
        <div className="appointment-slot-wraper">
         <input type="radio" name={"slot1"}/>
          <span>
            <label>
              {this.props.data.slotRange}
            </label>
          </span>

        </div>
      );
    }

}
