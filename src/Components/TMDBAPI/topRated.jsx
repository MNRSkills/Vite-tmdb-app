import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import { useGetTopRatedMoviesQuery } from "../../features/api/apiSlice";

const TopRated = () => {
  const { data: topRated, isLoading, isSuccess } = useGetTopRatedMoviesQuery();
  // console.log("THIS IS TOP RATED", topRated.results);
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isSuccess) {
    console.log("TOP RATED", topRated.results);
    return (
      <>
        <h1>Top Rated Movies</h1>
        <Container>
          <Row>
            {topRated.results &&
              topRated.results.map((items, index) => {
                return (
                  <Col key={index} md={3}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                      />
                      <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                        <Card.Text>{items.overview}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </>
    );
  }
};

export default TopRated;
