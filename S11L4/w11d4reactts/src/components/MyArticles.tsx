import { useEffect, useState } from "react";
import { Research, Result } from "../interfaces/result";
import { Col, Container, Image, Row } from "react-bootstrap";

const MyArticles = () => {
  const [results, setResults] = useState<Result[]>([]);
  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const articles: Research = await resp.json();
        setResults(articles.results);
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
      <Container>
        <Row xs={1}>
          {results.map((result) => (
            <Col className="m-3" key={result.id}>
              <Row>
                <Col xs={2}>
                  <Image fluid src={result.image_url} />
                </Col>
                <Col xs={10}>
                  <h3>{result.title}</h3>
                  <p>{result.summary}</p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default MyArticles;
