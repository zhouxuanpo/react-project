import React, { Component } from 'react';


import CardList from './CardList.js';

let meg=[
    {title:'qqq',date:'2016.1.1'},
    {title:'www',date:'2016.1.2'},
    {title:'eee',date:'2016.1.3'},
    {title:'rrr',date:'2016.1.4'},
    {title:'ttt',date:'2016.1.5'},
    {title:'yyy',date:'2016.1.6'},
]


class Cards extends Component{
    render(){
        let megs=[];
        let j = 0;
        for(var i = 0;i < meg.length; i++){
            j = i + 1 ;
            megs.push(
                <CardList title={meg[i].title} date={meg[i].date} index={j} />
            )
        }
        return(
            <div>
                {megs}
            </div>
        )
    }
}

export default Cards;
