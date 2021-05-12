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
        `${API_URL}api/videos/?api_key=${STATIC_FOLDER_FROM_SERVER}&page=${page}`
      );
      console.log("kk");
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
      {videosList.results ? (
        <>
          <Row span="24">
            <VideosCatalog videos={videosList} />
          </Row>
          <Row span="24">
            <Pagination
              currentPage={videosList.page}
              totalItems={videosList.total_results}
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
