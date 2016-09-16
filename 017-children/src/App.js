import React from 'react';

class App extends React.Component {
    render () {
        return(
            <div>
                {this.props.name}
                <ol>   
                    {
                    React.Children.map(
                        this.props.children,function(c){
                            return <li>{c}</li>;
                        }
                    )}
                </ol>
            </div>
        )
    }

}

export default App;
