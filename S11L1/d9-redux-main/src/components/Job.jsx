import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import {star} from "./public/star.svg"

const Job = ({ data }) => {
  // const favourite = useSelector((state) => state.main.favourites);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  return (
    <>
      <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
        <Col xs={3}>
          <div className="d-flex">
            <Button className="btn me-2 sm">
              <img
                src="/star2.svg"
                style={{ width: "25px", height: "25px" }}
                onClick={() => {
                  dispatch({ type: "ADD_TO_FAVOURITES", payload: data });
                  // navigate("/favourites");
                }}
              />
            </Button>

            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          </div>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Job;
