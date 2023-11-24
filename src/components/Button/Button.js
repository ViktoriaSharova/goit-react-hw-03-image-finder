import { LoadMoreBtn } from './Button.styled';
export const Button = ({ onBtnClick }) => {
  return (
    <>
      <LoadMoreBtn type="submit" onClick={onBtnClick}>
        Load more
      </LoadMoreBtn>
    </>
  );
};