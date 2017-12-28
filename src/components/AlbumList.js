import React, { Component } from "react";
import axios from "axios";
import { ScrollView, Text } from "react-native";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  constructor() {
    super();
    this.state = { albums: [] };
  }
  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => this.setState({ albums: res.data }));
  }
  renderAlbums() {
    return this.state.albums.map(abm => (
      <AlbumDetail key={abm.title} {...abm} />
    ));
  }
  render() {
    console.log(this.state);
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
