import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { Video } from "../assets/icons";
import { StyledDatePicker } from "./PublishStyledComponent";
import moment from "moment";

const SetProgramModalPresentaion = ({
  type,
  pgm,
  pgmEl,
  description,
  descriptionEl,
  broadcastDate,
  broadcastDateEl,
  setBroadcastDate,
  onHide,
  onChangePgm,
  onChangeDescription,
  onSubmit
}) => (
  <Modal show={true} onHide={onHide} animation={true} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>컨텐츠 {type}</Modal.Title>
    </Modal.Header>
    <Modal.Body
      style={{ maxHeight: window.innerHeight - 200, overflowY: "auto" }}
    >
      <Form>
        <Form.Group>
          <Form.Label>영상</Form.Label>
          <br />
          <Video
            style={{
              width: "100%",
              height: 250,
              cursor: "pointer",
              border: "1px solid #DEE2E6",
              borderRadius: 5
            }}
          />
          )}
          <input type="file" hidden accept="video/mp4" />
        </Form.Group>
        <Form.Group>
          <Form.Label>프로그램</Form.Label>
          <Form.Control
            type="text"
            placeholder="프로그램을 선택하세요."
            value={pgm}
            onChange={onChangePgm}
            ref={pgmEl}
          />
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
          <Form.Label>방송일</Form.Label>
          <StyledDatePicker
            className="form-control"
            selected={broadcastDate}
            onChange={(date) => setBroadcastDate(date)}
            isClearable
            placeholderText="입력하세요."
            dateFormat="yyyy-MM-dd HH:mm:ss"
            ref={broadcastDateEl}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-secondary" onClick={onHide}>
        취소
      </Button>
      <Button variant="outline-primary" onClick={onSubmit}>
        {type}
      </Button>
    </Modal.Footer>
  </Modal>
);
export default SetProgramModalPresentaion;

SetProgramModalPresentaion.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ])
};
