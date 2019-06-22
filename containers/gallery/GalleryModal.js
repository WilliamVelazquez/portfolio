import React, {Component} from 'react';

class GalleryModal extends Component {
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  componentWillUnMount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 27)
      this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      console.log('whut')
      return null;
    }
    return (
      <div>
        <div className="gallery-modal-overlay" onClick={closeModal}></div>
        <div isOpen={!!src} className="gallery-modal">
          <div className='gallery-modal-body'>
            <a href="#" className='gallery-modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            {hasPrev && <a href="#" className='gallery-modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="#" className='gallery-modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
            <img src={src} />
          </div>
        </div>
        <style jsx>{`
          .modal {
            top: 50%;
            left: 50%;
            width: 50%;
            z-index: 999;
            position: fixed;
            max-width: 800px;
            transform: translate3d(-50%, -50%, 0);
            /*@include bp( x-small ) {
              width: 95%;
            }	  
            @include bp( small ) {
              width: 80%;
            }	
            @include bp( large ) {
              width: 60%;
            }*/
            img {
              width: 100%;
              border: 5px solid #fff;
            }
          }
          
          .modal-overlay {
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            position: fixed;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .modal-body a {
            position: absolute;
            display: inline;
            color: #222;
            text-decoration: none;
            line-height: 36px;
            font-size: 30px;
            font-weight: lighter;
            background: #fff;
            border-radius: 5px;
            height: 40px; width: 40px;
            text-align: center;
          }
          .modal-body .modal-close {
            right: 0; top: 0;
            border-radius: 0 0 0 5px;
          }
          .modal-body .modal-next,
          .modal-body .modal-prev {
            right: 0; top: calc(50% - 25px);
            border-radius: 5px 0 0 5px;
            height: 50px;
            line-height: 40px;
            font-size: 60px;
          }
          .modal-body .modal-prev {
            left: 0;
            right: auto;
            border-radius: 0 5px 5px 0;
          }
          .modal-body {
            position: relative;
          }
        `}</style>
      </div>
    )
  }
}

export default GalleryModal;