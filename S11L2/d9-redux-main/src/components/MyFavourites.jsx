import { Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FAVOURITE } from "../redux/actions";

const MyFavourites = () => {
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="mx-auto my-3 d-flex justify-content-between align-items-end">
        <h3 className="display-1">Your Favourites</h3>
        <Link to={"/"} style={{ color: "Black" }}>
          <h5>Go back to your recent search</h5>
        </Link>
      </div>
      <Row xs={1} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
        {favourites.length === 0 ? (
          <Alert variant="info">You do not have any favourite job offer yet.</Alert>
        ) : (
          favourites.map((favourite, i) => (
            <Col key={`${favourite.company_name} - ${favourite._id}`} className="mb-4">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Link>
                    {/* <img
                      src="/star2.svg"
                      style={{ width: "25px", height: "25px" }}
                      className="me-2"
                      onClick={() => {
                        dispatch({ type: REMOVE_FAVOURITE, payload: i });
                      }}
                    /> */}
                    <span
                      className="btn btn-warning"
                      onClick={() => {
                        dispatch({ type: REMOVE_FAVOURITE, payload: i });
                      }}
                    >
                      🗑️
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to={`/${favourite.company_name}`} target="blank_">
                    {favourite.company_name}
                  </Link>

                  <h5>{favourite.title}</h5>
                  <Link to={favourite.url}>click here to go to learn more about the offer</Link>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
export default MyFavourites;
