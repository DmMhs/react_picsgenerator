import React, { Component } from 'react';
import './App.css';

//CHANGE THE PATHS RELEVANT TO YOUR IMAGES
import pic1 from './images/pic1.jpg'; 
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.jpg';
import pic6 from './images/pic6.jpg';

//ADD ALL THE IMAGES TO ARRAY
const pics = [ pic1, pic2, pic3, pic4, pic5, pic6 ];


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pic: 'Click a button'
		}
	}
	//CHOOSE RANDOM IMAGE FROM AN ARRAY 
	generatePic(){
	const pic = <img src={pics[Math.floor(Math.random()*pics.length)]} style={{maxWidth:'500px'} }/>;
	this.setState({ pic: pic});
	}
	render() {
    return (
      	<div className="App">
			<h1>Guitar pics generator</h1>
			<button onClick={() => this.generatePic()}>get a pic</button>
  			<div style={{marginTop: '50px'}}>
 				{this.state.pic}
			</div>
			<p>designed by Dm Mh - dmmhs888@gmail.com</p>
      	</div>
    );
  }
}

export default App;
