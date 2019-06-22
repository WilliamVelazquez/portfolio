import React, {Component} from 'react';

class Gallery extends Component {
  state = {
    currentIndex: null
  };

  renderImageContent = (src, index) => {
    return (
      <div onClick={(e) => this.openModal(e, index)}>
        <img src={src} key={src} />
      </div>
    ) 
  }
  openModal = (e, index) => {
    this.setState ({ currentIndex: index });
  }
  closeModal = (e) => {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState ({ currentIndex: null });
  }
  findPrev = (e) => {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }
  findNext = (e) => {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render() {
    const {images} = this.props;
    return (
      <div className="gallery-container">
        <h1>🔥 This Gallery Is Lit 🔥</h1>
        <div className="gallery-grid">
          {images.map(this.renderImageContent)}
        </div>
        <GalleryModal 
          closeModal={this.closeModal} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < images.length} 
          src={images[this.state.currentIndex]} 
        />
        <style jsx>{`
          .gallery-container {
            padding: .9375rem 0;
          }
          .gallery-grid {
            width: 100%;
            display: grid;
            grid-gap: 8px;
            margin: 0 auto;
            max-width: 1200px;
            grid-template-columns: repeat(3, 1fr);
            
            @include bp( x-small ) {
              grid-template-columns: repeat(1, 1fr);
            }	  
            @include bp( small ) {
              grid-template-columns: repeat(2, 1fr);
            }	
            // When above our large breakpoint, make sure we have 3 columns
            @include bp( large ) {
              grid-template-columns: repeat(3, 1fr);
            }	
            img {
              width: 100%;
              border: 5px solid #fff;
            }
          }
          .gallery-grid div {
            cursor: pointer;
            position: relative;
            &:before, &:after {
              opacity: 0;
              transition: .3s opacity ease;
            }
            &:after {
              top: 50%;
              left: 50%;
              color: #fff;
              font-size: 80px;
              display: block;
              content: '\02194';
              position: absolute;
              transform: translate3d(-50%, -50%, 0) rotate(-45deg);
            }
            &:before {
              top: 0;
              left: 0;
              right: 0;
              content: "";
              bottom: 4px;
              display: block;
              position: absolute;
              background: rgba(#222, 0.5);
            }
            &:hover {
              &:before, &:after {
                opacity: 1;
                transition: .3s opacity ease;
              }
            }
          }
        `}</style>
      </div>
    )
  }
}