import React, { useState } from "react";
import "./VideosCatalog.scss";
import { Col, Card } from "antd";
import { STATIC_FOLDER_FROM_SERVER, API_URL } from "../../utils/constants";
import { EyeFilled } from "@ant-design/icons";
import ModalVideo from "../../components/ModalVideo";

export default function VideosCatalog({ videos }) {
  console.log(videos);
  return videos.map((video) => (
    <Col key={video.videoId} className="videos-catalog">
      <VideoCard video={video}></VideoCard>
    </Col>
  ));
}

function VideoCard(props) {
  const [isVisibleModal, setIsVisiblemodal] = useState(false);
  const {
    video: { videoId, title, thumbnailPath, videoPath },
  } = props;
  const { Meta } = Card;
  const posterPath = `${API_URL}${STATIC_FOLDER_FROM_SERVER}/${thumbnailPath}`;
  const videoUrl = `${API_URL}${STATIC_FOLDER_FROM_SERVER}/${videoPath}`;

  const openModal = () => setIsVisiblemodal(true);
  const closeModal = () => setIsVisiblemodal(false);

  return (
    <>
      <Card
        onClick={openModal}
        hoverable
        style={{ width: "240px" }}
        cover={<img alt={title} src={posterPath}></img>}
        actions={<EyeFilled />}
      >
        <Meta title={title}></Meta>
      </Card>
      <ModalVideo
        videoPath={videoUrl}
        isOpen={isVisibleModal}
        close={closeModal}
      ></ModalVideo>
    </>
  );
}
