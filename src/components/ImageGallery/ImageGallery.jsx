import { List } from './ImageGallery.styled';
import { Item } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(image => {
        return <Item key={image.id} image={image} />;
      })}
    </List>
  );
};
