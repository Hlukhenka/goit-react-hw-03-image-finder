import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  Form,
  FormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import { fetchImages } from 'components/Api/Api';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeSearch = evt => {
    this.setState({ search: evt.target.value.toLowerCase() });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    // const search = this.state.search.trim();
    // if (search === '') {
    //   alert('enter search');
    //   return;
    // }

    const data = await fetchImages(this.state.search, 1);
    this.props.onSubmit(this.state.search, data.hits);
    console.log(data.hits);

    // try {
    //   const data = await fetchImages(search, 1);
    //   if (data.length === 0) {
    //     alert('sorry nema');
    //     return;
    //   }
    //   this.props.onSubmit(search, data.hits);
    //   this.setState({ search: '' });
    //   console.log(data.hits);
    // } catch (error) {
    //   console.log(error);
    //   alert('its error');
    // }
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <FormButton type="submit">
            <ButtonLabel>
              <ImSearch style={{ width: '100%', height: '100%' }} />
            </ButtonLabel>
          </FormButton>

          <Input
            onChange={this.handleChangeSearch}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
