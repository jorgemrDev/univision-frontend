import React from "react";
import "./VideosCatalog.scss";
import { Col, Card } from "antd";
import { Link } from "react-router-dom";
import { STATIC_FOLDER_FROM_SERVER } from "../../utils/constants";
import { EyeFilled } from "@ant-design/icons";

export default function MoviesCatalog(props) {
  const {
    videos: { results },
  } = props;
  return results.map((video) => (
    <Col key={video.videoId} xs={4} className="videos-catalog">
      <VideoCard video={video}></VideoCard>
    </Col>
  ));
}

function VideoCard(props) {
  const {
    movie: { videoId, title, thumbnail },
  } = props;
  const { Meta } = Card;
  const posterPath = `${STATIC_FOLDER_FROM_SERVER}/${thumbnail}`;

  return (
    <Card
      hoverable
      style={{ width: "240px" }}
      cover={<img alt={title} src={posterPath}></img>}
      actions={<EyeFilled />}
    >
      <Meta title={title}></Meta>
    </Card>
  );
}
