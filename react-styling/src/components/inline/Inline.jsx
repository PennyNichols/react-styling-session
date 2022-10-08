import React from 'react'
import {myStyles} from './styles';


const styleObj = {
    color: 'red',
    backgroundColor: '#e0e0e0',
    fontWeight: 'lighter',
};


const Inline = () => {
  return (
    <>
        <div style={{color:'purple', backgroundColor:'#e0e0e0', fontWeight:'bold'}}>Inline Styling Component</div>
        <div style={styleObj}>Inline components with constant javascript object</div>
        <div style={myStyles.div}>Inline styling with external js stylesheet</div>
        <div style={myStyles.par}>Inline styling with external js stylesheet</div>
    </>


    )
}

export default Inline