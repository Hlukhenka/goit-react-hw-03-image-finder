import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { modalOpen: !prevState.modalOpen };
    });
  };

  render() {
    const { less, tag, large } = this.props;
    return (
      <>
        <Item>
          <Image alt={tag} src={less} onClick={this.toggleModal} />
          {this.state.modalOpen && (
            <Modal
              src={large}
              alt={tag}
              isOpen={true}
              toggleModal={this.toggleModal}
            />
          )}
        </Item>
      </>
    );
  }
}
