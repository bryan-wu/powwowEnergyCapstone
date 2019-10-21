import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HorizontalNav from './HorizontalNav';
import './index.css';
// class Square extends React.Component {
//     render() {
// 	return (
//       <button className="square">
// 	  {/* TODO */}
//       </button>
// 		);
//     }
// }

// class Board extends React.Component {
//     renderSquare(i) {
// 	return <Square />;
//     }

//     render() {
// 	const status = 'Next player: X';

// 	return (
//       <div>
//       <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
// 	    {this.renderSquare(3)}
// 	    {this.renderSquare(4)}
// 	    {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
// 	    {this.renderSquare(6)}
// 	    {this.renderSquare(7)}
// 	    {this.renderSquare(8)}
//         </div>
//       </div>
// 		);
//     }
// }

// class Game extends React.Component {
//     render() {
// 	return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//       <div>{/* status */}</div>
//       <ol>{/* TODO */}</ol>
//         </div>
//       </div>
// 		);
//     }
// }

 // This component is only a placeholder for now
 // It should be replaced with Google map area later
  class MapArea extends Component {
    render() {
      return (
        <div class="card">
          <h5 class="card-header">placeholder</h5>
          <div class="card-body">
            <p class="card-text">This is only a placeholder for Google map</p>
          </div>
        </div>
      );
    }
  }

  // Text box for Analysis text
  class Analysis extends Component {
    render() {
      return (
        <div class="card">
          <h5 class="card-header">Water Efficiency</h5>
          <div class="card-body">
            <p class="card-text">analysis text goes here!</p>
          </div>
        </div>
      );
    }
  }

  class MainBody extends Component {
    render() {
      return (
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6">
              <MapArea />
            </div>
            <div class="col-lg-6">
              <Analysis />
            </div>
          </div>
        </div>
      );
    }
  }

  class Home extends Component {
    render(){
      return (
        <>
          <HorizontalNav />
          <MainBody />
        </>
      );
    }
  }
// ========================================

ReactDOM.render(
		<Home />,
		document.getElementById('root')
);
