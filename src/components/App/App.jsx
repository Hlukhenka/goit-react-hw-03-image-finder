import { Component } from 'react';
import { Grid } from 'react-loader-spinner';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImages } from 'components/Api/Api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  onSubmit = search => {
    this.setState({ search, images: [], page: 1 });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      images: [...prevState.images, ...[]],
      loading: false,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true, error: null });
      try {
        const data = await fetchImages(search, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          loading: false,
        }));
      } catch (error) {
        console.log(error);
        this.setState({ error: error.message });
        Notiflix.Notify.failure('Something went wrong, please reload the page');
      }
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery images={images} />
        {loading && (
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClass=""
            visible={true}
          />
        )}

        {images.length !== 0 && !loading && (
          <Button onClick={this.onLoadMore} />
        )}
      </>
    );
  }
}
