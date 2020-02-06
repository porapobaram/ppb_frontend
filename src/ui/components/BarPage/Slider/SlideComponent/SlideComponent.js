import React from 'react';
import './SlideComponent.scss';

const SlideComponent = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
  }
  return <div className="slide-block" style={styles}></div>
  
}

export default SlideComponent;