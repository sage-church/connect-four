import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Board extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      circles: Array.from({length: 12}, () => ({backgroundColor: 'rgb(194, 194, 194)'})),
      redIsNext: true
    }
    
  }

  handleClick (i) {

    const circles = this.state.circles.slice();
    const columns = [
      [0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11]
    ];
    const bottomCircles = [0, 6];
    var isCircleOnBottom = false
    var changeColor = false;
    var redIsNext = this.state.redIsNext;
    

    for (let bottomCircle = 0; bottomCircle < bottomCircles.length; bottomCircle++) {
      if (i === bottomCircles[bottomCircle]) {
        isCircleOnBottom = true
      }
    }
    if (
      isCircleOnBottom && 
      circles[i].backgroundColor !== 'red' && 
      circles[i].backgroundColor !== 'yellow'
      ) {
        redIsNext ? circles[i].backgroundColor = 'red' : circles[i].backgroundColor = 'yellow';
        redIsNext = !redIsNext;
    } else {
        for (let col = 0; col < columns.length; col++) {
          for (let circ = 0; circ < columns[col].length; circ++) {
            if (i === columns[col][circ]) {

              for (let j = 0; j < columns[col].indexOf(i); j++) {
                if (circles[columns[col][j]].backgroundColor === 'rgb(194, 194, 194)') {
                  break;
                } else if (j === columns[col].indexOf(i) - 1 && 
                  circles[i].backgroundColor !== 'red' && 
                  circles[i].backgroundColor !== 'yellow'){
                  changeColor = true;
                }
              }
            }
          }
        }
    }
    if (changeColor) {
      redIsNext ? circles[i].backgroundColor = 'red' : circles[i].backgroundColor = 'yellow';
      redIsNext = !redIsNext;
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
          <div className='column'>
              <div 
                className='circle'
                style={{backgroundColor: this.state.circles[11].backgroundColor}}
                onClick={() => this.handleClick(11)} 
              >
              </div>
              <div 
                className='circle'
                style={{backgroundColor: this.state.circles[10].backgroundColor}}
                onClick={() => this.handleClick(10)} 
              >
              </div>
              <div 
                className='circle'
                style={{backgroundColor: this.state.circles[9].backgroundColor}}
                onClick={() => this.handleClick(9)} 
              >
              </div>
              <div 
                className='circle'
                style={{backgroundColor: this.state.circles[8].backgroundColor}}
                onClick={() => this.handleClick(8)} 
              >
              </div>
              <div 
                className='circle'
                style={{backgroundColor: this.state.circles[7].backgroundColor}}
                onClick={() => this.handleClick(7)} 
              >
              </div>
              <div 
                className='circle'
                style={{backgroundColor: this.state.circles[6].backgroundColor}}
                onClick={() => this.handleClick(6)} 
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

