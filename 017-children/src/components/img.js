import React from 'react';

import Me from '../images/1.jpg';
class Img extends React.Component {
    render () {
        let styles={
            weight:'200px',
            height:'1000px',
            background:'url(' + Me + ') no-repeat #0f9',
        }
        return(
            <div>
                <img src={Me} />
                <div style={styles}>行内样式</div>
            </div>
        )
    }

}

export default Img;
