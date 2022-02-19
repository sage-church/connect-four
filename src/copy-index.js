import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Arrow (props) {
  return (
    <div className='arrow' onClick={props.onClick}></div>
  );
}

function Circle () {
  return (
    <div className='circle'></div>
  );
}

class Board extends React.Component {
  renderCircle (i) {
    return (
      <Circle onClick={(i) => this.props.onClick(i)}/>
    );
  }

  render () {
    return (
      <div className='entire-board'>
        <div className='board-column'>
          {this.renderCircle(0)}
          {this.renderCircle(1)}
          {this.renderCircle(2)}
          {this.renderCircle(3)}
          {this.renderCircle(4)}
          {this.renderCircle(5)}
        </div>
        <div className='board-column'>
          {this.renderCircle(6)}
          {this.renderCircle(7)}
          {this.renderCircle(8)}
          {this.renderCircle(9)}
          {this.renderCircle(10)}
          {this.renderCircle(11)}
        </div>
        <div className='board-column'>
          {this.renderCircle(12)}
          {this.renderCircle(13)}
          {this.renderCircle(14)}
          {this.renderCircle(15)}
          {this.renderCircle(16)}
          {this.renderCircle(17)}
        </div>
        <div className='board-column'>
          {this.renderCircle(18)}
          {this.renderCircle(19)}
          {this.renderCircle(20)}
          {this.renderCircle(21)}
          {this.renderCircle(22)}
          {this.renderCircle(23)}
        </div>
        <div className='board-column'>
          {this.renderCircle(24)}
          {this.renderCircle(25)}
          {this.renderCircle(26)}
          {this.renderCircle(27)}
          {this.renderCircle(28)}
          {this.renderCircle(29)}
        </div>
        <div className='board-column'>
          {this.renderCircle(30)}
          {this.renderCircle(31)}
          {this.renderCircle(32)}
          {this.renderCircle(33)}
          {this.renderCircle(34)}
          {this.renderCircle(35)}
        </div>
        <div className='board-column'>
          {this.renderCircle(36)}
          {this.renderCircle(37)}
          {this.renderCircle(38)}
          {this.renderCircle(39)}
          {this.renderCircle(40)}
          {this.renderCircle(41)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      circles: Array(42).fill(null),
    }
  }

  handleClick (i) {
    this.setState({
      circles: Array(i).style.backgroundColor = 'green'
    })
  }
  
  renderArrow (i) {
    return (
      <Arrow onClick={(i) => this.handleClick(i)}/>
    );
  }

  render () {
    return(
      <>
        <div className='row-of-arrows'>
            {this.renderArrow(0)}
            {this.renderArrow(1)}
            {this.renderArrow(2)}
            {this.renderArrow(3)}
            {this.renderArrow(4)}
            {this.renderArrow(5)}
            {this.renderArrow(6)}
        </div>
        <Board />
      </>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);