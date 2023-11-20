export const ImageGallery = ({ findCards }) => {
  return (
    <>
      <List>
        {findCards.map(findCard => {
          return (
            <ImageGalleryItem key={findCard.id} imageItem={findCard} />
          );
        })}
      </List>
    </>
  );
};