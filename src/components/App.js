import React, { Component } from "react";
import Spinner from "../components/Loader";
import Notification from "../components/Notification";
import ImageGallery from "../components/ImageGallery";
import SearchBar from "../components/SearchBar";
import PicturesApi from "../services/PicturesApi";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default class App extends Component {
  state = {
    pictures: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
    largeImageUrl: null,
  };

  setLargeImg = (url) => {
    this.state.largeImageUrl != null
      ? this.setState({ largeImageUrl: null })
      : this.setState({ largeImageUrl: url });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchPictures();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  fetchPictures = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    PicturesApi.fetchPicturesWithQuery(searchQuery, page)
      .then((pictures) =>
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      pictures: [],
    });
  };

  render() {
    const { pictures, loading, error, largeImageUrl } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />

        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {pictures.length > 0 && (
          <ImageGallery pictures={pictures} openModal={this.setLargeImg} />
        )}
        {loading && <Spinner />}

        {pictures.length > 0 && !loading && (
          <Button type="button" handleOnClick={this.fetchPictures} />
        )}

        {largeImageUrl && (
          <Modal onClose={this.setLargeImg}>
            <img src={largeImageUrl} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
