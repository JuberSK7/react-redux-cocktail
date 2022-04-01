import React from 'react';
//import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import {  incNumber, decNumber} from './action/action';
import styledComponents from 'styled-components';
      

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
   <>
    <MainDiv>
      <h1>Increement and decreement </h1>
      <h2>Power of React-Redux</h2>
      <div className='Seconddiv'>
        <a className='sub' title='Decreement'
        onClick={ () => dispatch(decNumber())}><span>–</span></a>
        <input className='input' name='quantity' type='text' value={myState}/>
        <a className='add' title='Increement'
         onClick={ () => dispatch(incNumber())}><span>+</span></a>
      </div>
    </MainDiv>
  </>
  )
}

export default App;


 const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 140px;

`


