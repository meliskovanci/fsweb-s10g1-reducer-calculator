import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { useReducer } from "react";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  recallMemory,
  clearMemory,
} from "./actions/index";

import reducer, { initialState } from "./reducers/index";

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickHandler = (number) => {
    dispatch(applyNumber(number));
  };

  const operatorHandler = (operator) => {
    dispatch(changeOperation(operator));
  };

  const clearHandler = () => {
    dispatch(clearDisplay());
  };

  const addMemoryHandler = () => {
    dispatch(addMemory());
  };

  const recallMemoryHandler = () => {
    dispatch(recallMemory());
  };

  const clearMemoryHandler = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={addMemoryHandler}/>
              <CalcButton value={"MR"} onClick={recallMemoryHandler}/>
              <CalcButton value={"MC"} onClick={clearMemoryHandler}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => onClickHandler(1)}/>
              <CalcButton value={2} onClick={() => onClickHandler(2)}/>
              <CalcButton value={3} onClick={() => onClickHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => onClickHandler(4)} />
              <CalcButton value={5} onClick={() => onClickHandler(5)}/>
              <CalcButton value={6} onClick={() => onClickHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => onClickHandler(7)}/>
              <CalcButton value={8} onClick={() => onClickHandler(8)}/>
              <CalcButton value={9} onClick={() => onClickHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operatorHandler("+")} />
              <CalcButton value={"*"} onClick={() => operatorHandler("*")}/>
              <CalcButton value={"-"} onClick={() => operatorHandler("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
