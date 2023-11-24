import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ItemList } from './ImageGallery.styled';

export const ImageGallery = ({ findCards }) => {
  return (
    <>
      <ItemList>
        {findCards.map(findCard => {
          return (
            <ImageGalleryItem key={findCard.id} imageItem={findCard} />
          );
        })}
      </ItemList>
    </>
  );
};