import React, { Component } from 'react';

import LifeCycle from './LifeCycle';

class DestroyComponent extends Component {
  constructor(){
    super();
    this.state = {
      destroyValue:1,
      destroyed:false
    }
  }
  increase(){
    this.setState({
      destroyValue: this.state.destroyValue + 1
    });
  }
  destroy(){
    this.setState({
      destroyed: true
    });
  }
  render() {
    if(this.state.destroyed){
        return null;
    }

    return(
      <div>
        <p>
          <button onClick={this.increase.bind(this)}>每次加1</button>
          <button onClick={this.destroy.bind(this)}>干掉这两个按钮</button>
        </p>
        <LifeCycle value={this.state.destroyValue}/>
      </div>
    )
  }
}

export default DestroyComponent;
