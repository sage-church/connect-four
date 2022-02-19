import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Board extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      circles: Array.from({length: 6}, () => ({backgroundColor: 'rgb(194, 194, 194)'})),
      redIsNext: true
    }
    
  }

  handleClick (i) {
    const circles = this.state.circles.slice();
    var redIsNext = this.state.redIsNext
    var changeColor = false;

    if (i === 0 && 
      circles[i].backgroundColor !== 'red' && 
      circles[i].backgroundColor !== 'yellow') {
        redIsNext ? circles[i].backgroundColor = 'red' : circles[i].backgroundColor = 'yellow';
        redIsNext = !redIsNext;
    } else {
        for (let x = 0; x < i; x++) {
          if (circles[x].backgroundColor === 'rgb(194, 194, 194)') {
            break;
          } else if (x === i - 1 && 
            circles[i].backgroundColor !== 'red' && 
            circles[i].backgroundColor !== 'yellow'){
            changeColor = true;
          }
        }
        if (changeColor) {
          redIsNext ? circles[i].backgroundColor = 'red' : circles[i].backgroundColor = 'yellow';
          redIsNext = !redIsNext;
        }
      } 
      this.setState ({
        circles: circles,
        redIsNext: redIsNext,
      }); 
  }


  render () {
    return (
      <div className='entire-board'>
        <div className='column'>
          <div 
            className='circle'
            style={{backgroundColor: this.state.circles[5].backgroundColor}}
            onClick={() => this.handleClick(5)} 
          >
          </div>
          <div 
            className='circle'
            style={{backgroundColor: this.state.circles[4].backgroundColor}}
            onClick={() => this.handleClick(4)} 
          >
          </div>
          <div 
            className='circle'
            style={{backgroundColor: this.state.circles[3].backgroundColor}}
            onClick={() => this.handleClick(3)} 
          >
          </div>
          <div 
            className='circle'
            style={{backgroundColor: this.state.circles[2].backgroundColor}}
            onClick={() => this.handleClick(2)} 
          >
          </div>
          <div 
            className='circle'
            style={{backgroundColor: this.state.circles[1].backgroundColor}}
            onClick={() => this.handleClick(1)} 
          >
          </div>
          <div 
            className='circle'
            style={{backgroundColor: this.state.circles[0].backgroundColor}}
            onClick={() => this.handleClick(0)} 
          >
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Board />,
  document.getElementById('root')
);

