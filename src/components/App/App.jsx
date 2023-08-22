import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
// import { fetchImages } from 'components/Api/Api';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    search: '',
    images: [],
  };

  onSubmit = (search, images) => {
    this.setState({ search, images });
    console.log(this.state.images);
  };

  render() {
    // const { images, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {/* <ImageGallery images={images} /> */}
      </>
    );
  }
}
