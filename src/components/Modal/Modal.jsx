import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent, Image } from 'components/Modal/Modal.styled';

export class Modal extends Component {
  onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };
  onModalMount = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onModalMount);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onModalMount);
  }

  render() {
    const { src, alt, isOpen } = this.props;
    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <ModalContent isOpen={isOpen}>
          <Image alt={alt} src={src} />
        </ModalContent>
      </Overlay>,
      document.getElementById('modal-root')
    );
  }
}
