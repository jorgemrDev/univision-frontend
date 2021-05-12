import React, { useState, useEffect } from "react";
import { API_URL, STATIC_FOLDER_FROM_SERVER } from "../utils/constants";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import VideosCatalog from "../components/VideosCatalog";
import Pagination from "../components/Pagination";
import { Row, Col } from "antd";

export default function Home() {
  const [videosList, setVideosList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_URL}api/videos/?PageSize=10&PageNumber=${page}`
      );

      const videos = await response.json();
      setVideosList(videos);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>Uploaded Videos</h1>
      </Col>
      {videosList.videos ? (
        <>
          <Row span="24" style={{ width: "100%" }}>
            <VideosCatalog videos={videosList.videos} />
          </Row>
          <Row span="24">
            <Pagination
              currentPage={videosList.queryParameters.currentPage + 1}
              totalItems={videosList.queryParameters.totalCount}
              onChangePage={onChangePage}
            />
          </Row>
        </>
      ) : (
        <Col span={24}>
          <Loading></Loading>
        </Col>
      )}

      <Col span={24}>
        <Footer></Footer>
      </Col>
    </Row>
  );
}
