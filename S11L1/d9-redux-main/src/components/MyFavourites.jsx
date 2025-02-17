import { Alert, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyFavourites = () => {
  const favourites = useSelector((state) => state.main.favourites);
  return (
    <>
      <h3 className="display-1">Your Favourites</h3>
      <Row xs={1} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
        {favourites.length === 0 ? (
          <Alert variant="info">You do not have any favourite job offer yet.</Alert>
        ) : (
          favourites.map((favourite) => (
            <Col key={favourite._id}>
              <div className="d-flex">
                <Link>
                  <img src="/star2.svg" style={{ width: "25px", height: "25px" }} className="me-2" />
                </Link>
                <Link to={`/${favourite.company_name}`}>{favourite.company_name}</Link>
              </div>
              <h5>{favourite.title}</h5>
              <Link to={favourite.url}>click here to go to learn more about the offer</Link>
            </Col>
          ))
        )}
      </Row>
    </>
  );
};
export default MyFavourites;
