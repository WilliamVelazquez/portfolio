import React, {Component} from 'react';

import { scrollToTop } from '../utils/functions';
import CaretIcon from '../components/icons/CaretIcon';

class TopButton extends Component {
  state = {
    showBtn: false
  }

  componentDidMount() {
    if(!window) return

    window.addEventListener('scroll', this.showToTopBtn);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.showToTopBtn);
  }

  showToTopBtn = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.setState({ showBtn:true });
    }
    else{
      this.setState({ showBtn:false });
    }
  }

  render(){
    const { showBtn } = this.state;
  	return(
  		<div>
        <button
          className={`toTopBtn ${showBtn?"":"hidden"}`}
          onClick={scrollToTop}
        >
          <CaretIcon 
            color={"#fff"} 
            hoverColor={"#111317"} 
            size={32}
            viewBox="0 0 24 22"
            direction="up"
          />
        </button>
        <style jsx>{`
          button{
            cursor: pointer;
            border-radius: 5px;
            border: 0px;
            /*border: 1px solid #791716;*/
            padding: 0px;
            background: #BF0404;
            color: #fff;
            font-size: 10px;
            transition-duration: 0.4s;
            -o-transition-duration: 0.4s; /* Opera */
            -moz-transition-duration: 0.4s; /* Mozilla */
            -webkit-transition-duration: 0.4s; /* Safari */
            box-shadow: 0px 0px 3px 2px #791716;
            -o-box-shadow: 0px 0px 3px 2px #791716;
            -moz-box-shadow: 0px 0px 3px 2px #791716;
            -webkit-box-shadow: 0px 0px 3px 2px #791716;
          }
          button:hover,
          button:active
          {
            color: #111317;
            background: #fff;
            /*border: 1px solid #111317;*/
            box-shadow: 0px 0px 3px 2px #111316;
            -o-box-shadow: 0px 0px 3px 2px #111316;
            -moz-box-shadow: 0px 0px 3px 2px #111316;
            -webkit-box-shadow: 0px 0px 3px 2px #111316;
          }
          .toTopBtn{
            position: fixed; /* Fixed/sticky position */
            bottom: 20px; /* Place the button at the bottom of the page */
            right: 30px; /* Place the button 30px from the right */
            z-index: 99; /* Make sure it does not overlap */
          }
          .hidden{
            display: none;
          }
        `}</style>
      </div>
  	);
  }
}

export default TopButton;