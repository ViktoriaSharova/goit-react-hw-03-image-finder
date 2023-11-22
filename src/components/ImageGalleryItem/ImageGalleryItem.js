import { ModalWindow } from "components/Modal/Modal";
import { Component } from "react";
import { ListItem, ListItemImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState(prevState => ({
      isModalOpen: true,
    }));
  };

  closenModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const {
      imageItem: { webformatURL, largeImageURL, tags },
    } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <ListItem onClick={this.openModal}>
          <ListItemImg src={webformatURL} alt={tags} />
        </ListItem>
        <ModalWindow
          onClose={this.closenModal}
          imageUrl={largeImageURL}
          imageAlt={tags}
          isOpen={isModalOpen}
        />
      </>
    );
  }
}