import React from "react";
import Modal from "./Modal"

class App extends React.PureComponent {
state={
  show:true
}
hide=()=>{
 this.setState({show:!this.state.show}) 
}
  render() {
    

    return (
      <div className="app">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" onClick={()=>this.hide("show")} className="btn btn-primary">
            Уведомления
            </button>
          </div>
        </div>
   {this.state.show && <Modal hc={this.hide}/>}
      </div>
    );
  }
}

export default App;