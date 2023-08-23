import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  Form,
  FormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeSearch = evt => {
    this.setState({ search: evt.target.value.toLowerCase() });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const search = this.state.search.trim();
    if (search === '') {
      Notiflix.Notify.failure('Your querry can not be empty');
      return;
    }

    this.props.onSubmit(search);
    this.setState({ search: '' });
    evt.target.reset();
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
