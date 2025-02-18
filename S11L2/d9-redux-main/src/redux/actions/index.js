export const ADD_FAVOURITES = "ADD_TO_FAVOURITES";
export const FETCH_JOBS = "FETCH_JOBS";
export const SET_QUERY = "SET_QUERY";
export const REMOVE_FAVOURITE = "REMOVE_FROM_FAVOURITES";

export const fetchJobsAction = () => {
  //   const [query, setQuery] = useState("");
  //   const [jobs, setJobs] = useState([]);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  //   const handleChange = (e) => {
  //     setQuery(e.target.value);
  //   };

  return async (dispatch, getState) => {
    const queryState = getState().query.query;
    console.log(queryState);

    try {
      const response = await fetch(baseEndpoint + queryState + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
