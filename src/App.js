import React, { Component } from 'react';
import Button from './components/Button';

export default class App extends Component {
  render() {
    return (
			<div>
				<div id="content">
				  <div className="title pop-text">
				  	Pop Art
				  </div>
				</div>
	      <div id="menu">
				  <Button>Lorem</Button>
				  <Button>Ipsum</Button>
				  <Button>Salts</Button>
				  <Button>Waffle</Button>
				  <Button>Pancakes</Button>
				</div>
			</div>
    );
  }
}
