import React from 'react';
import '../stylesheet/style.css'


class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<div className="taochan">
					<div className="taochan1">
						<h3>品质套餐</h3>
						<p>搭配齐全吃的好</p>
						<img src={require('../img/index1.jpg')}/>
					</div>
					<div className="taochan1">
						<h3>品质联盟</h3>
						<p>品质升级,消费亲民</p>
						<img src={require('../img/index2.jpg')}/>
					</div>
					<div className="taochan1">
						<h3>限量抢购</h3>
						<p>超值美味,9.9元起</p>
						<img src={require('../img/index3.jpg')}/>
					</div>
					
				</div>
				<div className="plus">
					<img src={require('../img/index4.jpg')}/>
				</div>
			</div>
		)
	}
	
}

export default App;

