import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {lines} from './win-lines';


function Circle (props) {
  return (
    <div 
      className='circle'
      onClick={props.onClick}
      style={props.style}
    >
    </div>
  );
}

function Reset (props) {
  return (
    <div 
      className='reset'
      style={props.style}
      onClick={props.onClick}
    >
    Reset Board
    </div>
  )
}

class Board extends React.Component {

  renderCircle (i) {
    return (
      <Circle 
        onClick={() => this.props.onClick(i)}
        style={this.props.circles[i]}
      />
    )
  }

  render () {

    return (
      <>
      <div className='board'>
        <div className='column'>
          {this.renderCircle(5)}
          {this.renderCircle(4)}
          {this.renderCircle(3)}
          {this.renderCircle(2)}
          {this.renderCircle(1)}
          {this.renderCircle(0)}
        </div>
        <div className='column'>
          {this.renderCircle(11)}
          {this.renderCircle(10)}
          {this.renderCircle(9)}
          {this.renderCircle(8)}
          {this.renderCircle(7)}
          {this.renderCircle(6)}
        </div>
        <div className='column'>
          {this.renderCircle(17)}
          {this.renderCircle(16)}
          {this.renderCircle(15)}
          {this.renderCircle(14)}
          {this.renderCircle(13)}
          {this.renderCircle(12)}
        </div>
        <div className='column'>
          {this.renderCircle(23)}
          {this.renderCircle(22)}
          {this.renderCircle(21)}
          {this.renderCircle(20)}
          {this.renderCircle(19)}
          {this.renderCircle(18)}
        </div>
        <div className='column'>
          {this.renderCircle(29)}
          {this.renderCircle(28)}
          {this.renderCircle(27)}
          {this.renderCircle(26)}
          {this.renderCircle(25)}
          {this.renderCircle(24)}
        </div>
        <div className='column'>
          {this.renderCircle(35)}
          {this.renderCircle(34)}
          {this.renderCircle(33)}
          {this.renderCircle(32)}
          {this.renderCircle(31)}
          {this.renderCircle(30)}
        </div>
        <div className='column'>
          {this.renderCircle(41)}
          {this.renderCircle(40)}
          {this.renderCircle(39)}
          {this.renderCircle(38)}
          {this.renderCircle(37)}
          {this.renderCircle(36)}
        </div>
      </div>
      </>
    )
  }
}

class Game extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      circles: Array.from({length: 42}, () => ({backgroundColor: 'rgb(194, 194, 194)'})),
      redIsNext: true,
      resetButton: {display: 'none'},
      coloredBackdrop: {backgroundColor: 'rgb(235, 235, 235)'}
    }
  }

  renderReset () {
    return (
      <Reset 
        onClick={() => this.resetClick()}
        style={this.state.resetButton}
        />
    )
  }

  circleClick (i) {

    const circles = this.state.circles.slice();
    const bottomCircles = [0, 6, 12, 18, 24, 30, 36];
    var changeColor = false;
    var redIsNext = this.state.redIsNext;

    if (
        calculateWinner(circles) ||
        circles[i].backgroundColor === 'red' ||
        circles[i].backgroundColor === 'yellow'
      ) {
        return
    } 
    
    for (let bottomCircle = 0; bottomCircle < bottomCircles.length; bottomCircle++) {
      if (i === bottomCircles[bottomCircle]) {
        changeColor = true;
        break
      } else if (bottomCircle < 6) {
        continue
      } else if (
          circles[i - 1].backgroundColor === 'red' || 
          circles[i - 1].backgroundColor === 'yellow'
        ) {
            changeColor = true;
      }
    }
          
    if (changeColor) {
      redIsNext ? circles[i] = {backgroundColor: 'red'} : circles[i] = {backgroundColor: 'yellow'};
      redIsNext = !redIsNext;
    }
    this.setState ({
      circles: circles,
      redIsNext: redIsNext,
    });
    if (calculateWinner(circles) === 'red') {
        this.setState({
          resetButton: {display: 'block'},
          coloredBackdrop: {backgroundColor: 'rgba(207, 0, 0, 0.644)'}
        });
    } else if (calculateWinner(circles) === 'yellow'){
      this.setState({
        resetButton: {display: 'block'},
        coloredBackdrop: {backgroundColor: 'rgba(248, 228, 45, 0.76)'}
      });
    }
  }

  resetClick() {
    this.setState({
      circles: Array.from({length: 42}, () => ({backgroundColor: 'rgb(194, 194, 194)'})),
      redIsNext: true,
      resetButton: {display: 'none'},
      coloredBackdrop: {backgroundColor: 'rgb(235, 235, 235)'},
    })
  }

  renderBoard () {
    const winner = calculateWinner(this.state.circles)
      let status;
      if (winner) {
        const firstLetterCaps = winner.charAt(0).toUpperCase()
        const winnerCaps = firstLetterCaps + winner.slice(1)
        status = winnerCaps + ' has won!';
      } else {
        status = 'Next player: ' + (this.state.redIsNext ? 'Red' : 'Yellow');
      }

    return (
      <>
        <div 
          className='coloredBackdrop'
          style={this.state.coloredBackdrop}
        >
        </div>
        <div className='game-content'>
          <Board 
            onClick={(i) => this.circleClick(i)}
            circles={this.state.circles}
          />
          <div className='status'>
            {status}
          </div>
          {this.renderReset()}
        </div>
      </>
    
    )
  }

  render() {
      return (
        <>
         {this.renderBoard()}
        </>

      )
  }
}

// ======================================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(circles) {
  //winning lines array is imported at top of file
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c, d] = lines[index];
    if (
      circles[a].backgroundColor !== 'rgb(194, 194, 194)' &&
      circles[a].backgroundColor === circles[b].backgroundColor &&
      circles[b].backgroundColor === circles[c].backgroundColor &&
      circles[c].backgroundColor === circles[d].backgroundColor
      ) {
        return circles[a].backgroundColor;
      }
    }
    return null;
}



