import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Circle (props) {
  return (
    <div 
      className='circle'
      style={props.style}
      onClick={props.onClick} 
    >
    </div>
  );
}

class Board extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      circles: Array.from({length: 42}, () => ({backgroundColor: 'rgb(194, 194, 194)'})),
      redIsNext: true
    }
    
  }

  renderCircle (i) {
    return (
      <Circle 
        onClick={() => this.handleClick(i)}
        style={this.state.circles[i]}
      />
    )
  }

  render () {
    return (
      <div className='entire-board'>
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
    )
  }

  handleClick (i) {

    const circles = this.state.circles.slice();
    const bottomCircles = [0, 6, 12, 18, 24, 30, 36];
    var changeColor = false;
    var redIsNext = this.state.redIsNext;
    
    if (
      circles[i].backgroundColor !== 'red' && 
      circles[i].backgroundColor !== 'yellow'
      ) {
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
          
    }
    if (changeColor) {
      redIsNext ? circles[i] = {backgroundColor: 'red'} : circles[i] = {backgroundColor: 'yellow'};
      redIsNext = !redIsNext;
    }
    this.setState ({
      circles: circles,
      redIsNext: redIsNext,
    });
  }
}

function calculateWinner(circles) {

}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);

