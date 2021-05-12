import React, { useState } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import "./modalVideo.scss";

export default function ModalVideo(props) {
  const { videoPath, isOpen, close } = props;
  const [urlVideo, setUrlVideo] = useState(videoPath);

  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls></ReactPlayer>
    </Modal>
  );
}
