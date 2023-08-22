import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;
    return (
      <Item>
        <Image alt={image.tags} src={image.webformatURL} />
      </Item>
    );
  }
}
