import React from 'react';
import AppBar from 'material-ui/AppBar';


class AppBarExampleIcon extends React.Component{
    handleTouchTap(){
        alert('left');
    }
    render(){
        return (
            <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
            />
        )
    }

};

export default AppBarExampleIcon;
