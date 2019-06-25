import React, {Component} from 'react';

import GalleryModal from './GalleryModal';
import GalleryImageCard from './GalleryImageCard';

class Gallery extends Component {
  state = {
    currentIndex: null
  };

  openModal = (index) => {
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
    const {images, title, children, titleColor, titleAlignment, maxWidth='1200px', imageGap, columns, tabletColumns, mobileColumns} = this.props;
    return (
      <div className="gallery-container">
        <h3 className="gallery-title">{title}</h3>
        {children}
        <div className="gallery-grid">
          {
            images.map((img,index)=>
            <GalleryImageCard 
              img={img} 
              key={img.id}
              index={index} 
              handleImageCardClick={this.openModal} 
            />)
          }
        </div>
        {
          (this.state.currentIndex !== null ) &&
          <GalleryModal 
            findPrev={this.findPrev} 
            findNext={this.findNext} 
            closeModal={this.closeModal} 
            hasPrev={this.state.currentIndex > 0} 
            hasNext={this.state.currentIndex + 1 < images.length} 
            image={images[this.state.currentIndex]} 
          />
        }
        <style jsx>{`
          .gallery-container {
            padding: .9375rem 0;
          }
          .gallery-title{
            color: ${titleColor||"#ffffff"};
            text-align: ${titleAlignment||"center"};
          }
          .gallery-grid {
            width: 100%;
            display: grid;
            margin: 0 auto;
            ${maxWidth?`max-width: ${maxWidth};`:""}
            grid-gap: ${imageGap||"8px"};
            grid-template-columns: repeat(${columns||"4"}, 1fr);
          }
          @media only screen and (max-width : 768px) {
            .gallery-grid {
              grid-template-columns: repeat(${tabletColumns||"2"}, 1fr);
            }
          }
          @media only screen and (max-width: 667px) {
            .gallery-grid {
              grid-template-columns: repeat(${mobileColumns||"2"}, 1fr);
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Gallery;