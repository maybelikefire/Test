import React from 'react';

class Product extends React.Component{
	constructor(props,hstyle){
		super(props);
		this.hstyle={'font-size':'14px'}

	}
	render(){
		return(
			<div>
				<ul style={{display:'flex',width:'100%','flex-wrap':'wrap',padding:'15px 0'}}>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/1.jpg')} style={{margin:'10px auto',width:'70%'}}/></div>
						<h3 style={this.hstyle}>美食</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/2.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>晚餐</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/3.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>商超便利</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/4.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>果蔬生鲜</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/5.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>新店特惠</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/6.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>医药健康</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/7.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>大牌5折</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/8.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>浪漫鲜花</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/9.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>麻辣烫</h3>
					</li>
					<li style={{width:'20%','text-align':'center'}}>
						<div><img src={require('../img/10.jpg')} style={{margin:'10px auto',width:'70%'}} /></div>
						<h3 style={this.hstyle}>地方菜系</h3>
					</li>
				</ul>
			</div>		
		)
	}
}

export default Product;

