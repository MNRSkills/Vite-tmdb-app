import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useGetPopularMoviesQuery } from "../../features/api/apiSlice";

const Popular = () => {
  const [popMoviesTwo, setMovies] = useState([]);
  const { data: popMovies, isLoading, isSuccess } = useGetPopularMoviesQuery();
  if (isLoading) {
    return <h1>isLoading...</h1>;
  } else if (isSuccess) {
    return (
      <>
        <h1>Popular Movies</h1>
        <Container>
          <Row>
            {popMovies.results &&
              popMovies.results.map((items, index) => {
                return (
                  <Col key={index}>
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

export default Popular;
