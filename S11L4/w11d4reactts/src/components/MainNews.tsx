import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Result } from "../interfaces/result";

const MainNews = () => {
  const [results, setResults] = useState<Result | null>(null);
  //   const [id, setId] = useState(29399);
  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/29399");
      if (resp.ok) {
        const articles: Result = await resp.json();
        setResults(articles);
        // console.log(articles.results);
        console.log(results);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
    console.log(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container className="text-center">
        <Row xs={1}>
          <Col>
            <h1>{results?.title}</h1>
            <Image className="mt-2 mb-4" src={results?.image_url} />
            <p style={{ fontSize: "1.5rem" }}>{results?.summary}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainNews;
