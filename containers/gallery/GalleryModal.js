import React, {Component} from 'react';

class GalleryModal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    //Esc key
    if (e.keyCode === 27)
      this.props.closeModal();
    //Left Key
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    //Rigth key
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, image } = this.props;
    // if (!image) {
    //   console.log('Modal...')
    //   return null;
    // }
    return (
      <div>
        <div className="gallery-modal-overlay" onClick={closeModal}></div>
        <div className="gallery-modal">
          <div className='gallery-modal-body'>
            <a href="#" className='gallery-modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            {hasPrev && <a href="#" className='gallery-modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="#" className='gallery-modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
            <img src={image.src} />
          </div>
        </div>
        <style jsx>{`
          .gallery-modal {
            top: 50%;
            left: 50%;
            width: 50%;
            z-index: 999;
            position: fixed;
            max-width: 800px;
            transform: translate3d(-50%, -50%, 0);
          }
          .gallery-modal img {
            width: 100%;
            border: 5px solid #fff;
          }
          .gallery-modal-overlay {
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            position: fixed;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .gallery-modal-body a {
            color: #222;
            display: inline;
            font-size: 30px;
            background: #fff;
            line-height: 36px;
            border-radius: 5px;
            text-align: center;
            position: absolute;
            font-weight: lighter;
            text-decoration: none;
            height: 40px; width: 40px;
          }
          .gallery-modal-body .gallery-modal-close {
            top: 0;
            right: -10px; 
            border-radius: 0 0 0 5px;
          }
          .gallery-modal-body .gallery-modal-next,
          .gallery-modal-body .gallery-modal-prev {
            right: -10px; 
            height: 50px;
            font-size: 60px;
            line-height: 40px;
            top: calc(50% - 25px);
            border-radius: 5px 0 0 5px;
          }
          .gallery-modal-body .gallery-modal-prev {
            left: 0;
            right: auto;
            border-radius: 0 5px 5px 0;
          }
          .gallery-modal-body {
            position: relative;
          }
          @media only screen and (max-width : 768px){
            .gallery-modal {
              width: 80%;
            }
          }
          @media only screen and (max-width: 667px){
            .gallery-modal {
              width: 80%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default GalleryModal;