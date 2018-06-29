
import React from 'react';

import '../stylesheet/sty.css'
import a from '../img/1.jpg'
import b from '../img/2.jpg'

var st={background:"red"}
class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	tap(){
		console.log('hello world')
	}
	
	render(){
		return(
			<div>
				<div class='tou'>--推荐商家--</div>
				<ul className='list'>
					<li className='item'>
						<div className='left'><img src={a}/></div>
						<div className='right'>
							<div className='shang'>
								<p className='up'>小川麻辣香锅</p>
								<p className='zhong'><em>评分:4.6</em><em>月售787单</em></p>
								<p className='down'><em>￥15元起送</em><em>夜间配送费￥4.5</em></p>
							</div>
							<div className='xia'>
								<p className='down'><em style={st}>减</em><em>满35减27,满55减35,满75减47</em></p>
								<p className='down'><em style={st}>折</em><em>折扣商品五折起</em></p>
							</div>
						</div>
						
					</li>
					<li className='item'>
						<div className='left'><img src={a}/></div>
						<div className='right'>
							<div className='shang'>
								<p className='up'>小川麻辣香锅</p>
								<p className='zhong'><em>评分:4.6</em><em>月售787单</em></p>
								<p className='down'><em>￥15元起送</em><em>夜间配送费￥4.5</em></p>
							</div>
							<div className='xia'>
								<p className='down'><em style={st}>减</em><em>满35减27,满55减35,满75减47</em></p>
								<p className='down'><em style={st}>折</em><em>折扣商品五折起</em></p>
							</div>
						</div>
						
					</li>
				
				</ul>
				
			</div>
		)
	}
		
	
}

export default App;

