import React, { Component } from "react";

import Lightbox from "./Lightbox";

export { default as Lightbox } from "./Lightbox";

export default class extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    const { onOpen, onClose, small, medium, large } = this.props;
    const param = {
      small,
      medium,
      large
    }

    this.setState(prev => ({
      modalOpen: !prev.modalOpen
    }), () => {
      if(this.state.modalOpen) {
        onOpen && onOpen(param)
      } else {
        onClose && onClose(param)
      }
    });
  };

  render() {
    const {
      className,
      small,
      smallSrcSet,
      medium,
      large,
      alt,
      hideDownload,
      hideZoom,
      showRotate,
      imageBackgroundColor
    } = this.props;
    const { modalOpen } = this.state;

    return (
      <div>
        <img
          className={className}
          style={{
            cursor: "pointer",
            maxWidth: "100%",
            maxHeight: "100%"
          }}
          onClick={this.toggleModal}
          src={small}
          srcSet={smallSrcSet}
          alt={alt}
        />
        {modalOpen && (
          <Lightbox
            medium={medium}
            large={large}
            alt={alt}
            onClose={this.toggleModal}
            hideDownload={hideDownload}
            hideZoom={hideZoom}
            showRotate={showRotate}
            imageBackgroundColor={imageBackgroundColor}
          />
        )}
      </div>
    );
  }
}
