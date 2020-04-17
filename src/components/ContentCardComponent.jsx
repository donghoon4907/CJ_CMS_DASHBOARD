import React from "react";
import PropTypes from "prop-types";
import {
  CardWrap,
  CardHeader,
  CardThumbnail,
  CardBody,
  CardFooter,
  EllipsisText
} from "./PublishStyledComponent";

const ContentCardComponent = (props) => {
  const { id, title, description, onClickItem } = props;
  return (
    <CardWrap key={id}>
      <CardHeader>
        <div>
          <img
            width={50}
            height={20}
            src={`${process.env.REACT_APP_BACKEND_HOST}/images/${Channel.Images[0].src}`}
            alt={"logo"}
          />
        </div>
        <div title={createdAt}>{createdAt.substring(0, 10)}</div>
      </CardHeader>
      <CardThumbnail>
        <img
          src={`${process.env.REACT_APP_BACKEND_HOST}/images/${Images[0].src}`}
          width={"100%"}
          height={"100%"}
          alt={"thumbnail"}
        />
      </CardThumbnail>
      <CardBody>
        <EllipsisText onClick={() => onClickItem(props)}>{title}</EllipsisText>
        <EllipsisText onClick={() => onClickItem(props)}>
          {description}
        </EllipsisText>
      </CardBody>
      <CardFooter>
        <div>
          {Genre.name}, {DetailGenre.name}
        </div>
        <div>{Contents.length === 0 ? "예정" : `${Contents.length}화`}</div>
      </CardFooter>
    </CardWrap>
  );
};

export default ProgramCardComponent;

ProgramCardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  Images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  ),
  Channel: PropTypes.shape({
    Images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired
      })
    )
  }),
  // Contents,
  Genre: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  DetailGenre: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  onClickItem: PropTypes.func.isRequired
};
