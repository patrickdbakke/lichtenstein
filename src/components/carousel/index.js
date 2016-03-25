import React, { Component } from 'react';
import Slider from 'react-slick';
import style from './style';
import assign from 'object-assign';

 
export default class Carousel extends Component {
	static defaultProps = {
    autoplay: false,
    centerMode: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    nextArrow: null,
    prevArrow: null,
  };
  state = {
    currentSlide: 1,
    bottomSlide: 1,
    justChanged: false,
  };
  render () {
  	var that = this;
		var settingsTop = assign({}, this.defaultProps, this.props, {
			initialSlide: this.state.currentSlide,
			slickGoTo: this.state.currentSlide,
			afterChange: function(newIndex){
				if(!that.changing){
					that.changing = true;
					var diff = that.state.currentSlide - newIndex;
					that.setState({
						currentSlide: newIndex,
						bottomSlide: that.state.bottomSlide + diff,
					});
					setTimeout(function(){
						that.changing = false
					}, that.props.speed + 100);
				}
			}
		});
		var settingsBottom = assign({}, this.defaultProps, this.props, {
			initialSlide: this.state.bottomSlide,
			slickGoTo: this.state.bottomSlide,
			afterChange: function(newIndex){
				if(!that.changing){
					that.changing = true;
					var diff = that.state.bottomSlide - newIndex;
					that.setState({
						bottomSlide: newIndex,
						currentSlide: that.state.currentSlide + diff,
					});
					setTimeout(function(){
						that.changing = false
					}, that.props.speed + 100);
				}
			}
		});
    return(
    	<div className={style.root}>
	    	<div className={style.row}>
		    	<div className={style.next}></div>
		    	<Slider className={style.nextRow} {...settingsTop} ref={(a) => this.topSlider = a}></Slider>
		    </div>
		    <div className={style.row}>
		    	<Slider className={style.prevRow} {...settingsBottom} ref={(a) =>this.bottomSlider = a}></Slider>
		    	<div className={style.prev}></div>
		    </div>
		  </div>
    );
	}
}