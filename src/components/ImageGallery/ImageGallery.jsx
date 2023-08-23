import { Component } from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <List>
        {images.map(img => {
          return (
            <ImageGalleryItem
              key={img.id}
              less={img.webformatURL}
              large={img.largeImageURL}
              tag={img.tag}
            />
          );
        })}
      </List>
    );
  }
}
