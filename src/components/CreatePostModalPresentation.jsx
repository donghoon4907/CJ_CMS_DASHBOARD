import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HashTagComponent from "./HashTagComponent";
import { Image } from "../assets/icons";

const CreatePostModalPresentaion = ({
  tags,
  setTags,
  thumbnail,
  thumbnailEl,
  isShow,
  onHide,
  onClickThumbnail,
  onChangeThumbnail
}) => (
  <Modal show={isShow} onHide={onHide} animation={true}>
    <Modal.Header closeButton>
      <Modal.Title>등록</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ height: "78vh", overflowY: "auto" }}>
      <Form>
        <Form.Group>
          <Form.Label>썸네일 등록</Form.Label>
          <br />
          {thumbnail ? (
            <img
              src={thumbnail}
              width={"100%"}
              height={200}
              style={{
                cursor: "pointer",
                border: "1px solid #DEE2E6"
              }}
              onClick={onClickThumbnail}
              alt={"thumbnail"}
            />
          ) : (
            <Image
              style={{
                width: "100%",
                height: 200,
                cursor: "pointer",
                border: "1px solid #DEE2E6"
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
          <Form.Control type="text" placeholder="제목을 입력하세요." />
          {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group>
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="내용을 입력하세요."
          />
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
      <Button variant="outline-primary">등록</Button>
    </Modal.Footer>
  </Modal>
);
export default CreatePostModalPresentaion;
