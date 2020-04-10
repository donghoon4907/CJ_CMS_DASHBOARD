import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import HashTagComponent from "./HashTagComponent";
import { Image } from "../assets/icons";

const CreatePostModalPresentaion = ({
  title,
  titleEl,
  description,
  descriptionEl,
  tags,
  setTags,
  thumbnail,
  thumbnailEl,
  isShow,
  onHide,
  onClickThumbnail,
  onChangeTitle,
  onChangeDescription,
  onChangeThumbnail,
  onSubmit
}) => (
  <Modal show={isShow} onHide={onHide} animation={true} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>등록</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ height: "78vh", overflowY: "auto" }}>
      <Form>
        <Form.Group>
          <Form.Label>썸네일</Form.Label>
          <br />
          {thumbnail ? (
            <img
              src={thumbnail}
              width={"100%"}
              height={250}
              style={{
                cursor: "pointer",
                border: "1px solid #DEE2E6",
                borderRadius: 5
              }}
              onClick={onClickThumbnail}
              alt={"thumbnail"}
            />
          ) : (
            <Image
              style={{
                width: "100%",
                height: 250,
                cursor: "pointer",
                border: "1px solid #DEE2E6",
                borderRadius: 5
              }}
              onClick={onClickThumbnail}
            />
          )}
          <input
            type="file"
            onChange={onChangeThumbnail}
            ref={thumbnailEl}
            hidden
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={onChangeTitle}
            isInvalid={title.length > 200}
            ref={titleEl}
          />
          <Form.Text>{title.length} / 200</Form.Text>
          <Form.Control.Feedback type="invalid">
            제목은 200자 이내로 작성하세요.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="내용을 입력하세요."
            value={description}
            onChange={onChangeDescription}
            isInvalid={description.length > 500}
            ref={descriptionEl}
          />
          <Form.Text>{description.length} / 500</Form.Text>
          <Form.Control.Feedback type="invalid">
            내용은 500자 이내로 작성하세요.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>태그</Form.Label>
          <HashTagComponent tags={tags} setTags={setTags} />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-secondary" onClick={onHide}>
        취소
      </Button>
      <Button variant="outline-primary" onClick={onSubmit}>
        등록
      </Button>
    </Modal.Footer>
  </Modal>
);
export default CreatePostModalPresentaion;

CreatePostModalPresentaion.propTypes = {
  title: PropTypes.string.isRequired,
  titleEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  description: PropTypes.string.isRequired,
  descriptionEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  thumbnail: PropTypes.string,
  thumbnailEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  onChangeTitle: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
