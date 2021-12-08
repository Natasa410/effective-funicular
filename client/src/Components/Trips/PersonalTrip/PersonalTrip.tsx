import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import tripsService from "Services/trips.service";
import { Trip } from "Types";
import moment from "moment";

type TripProps = {
  trip: Trip;
  setTrips: Dispatch<SetStateAction<Trip[]>>;
};

const PersonalTrip = (props: TripProps): JSX.Element => {
  const { id, city, dateFrom, dateTo } = props.trip;

  const deleteHandler = async () => {
    if (props.trip.id) {
      await tripsService.deleteOnePersonalTrip(props.trip.id);
      props.setTrips((prev) =>
        prev.filter(
          (notDeletedTrip: Trip) => notDeletedTrip.id !== props.trip.id
        )
      );
    }
  };

  return (
<Link to={`/trip/${id}`} state={props.trip}>
  <div className="container">
    <div className="book">
      <div className="front">
        <div className="cover">
          <h2>{city}</h2>
              <p>{moment(dateFrom).format("MMM Do YYYY")}</p>
              <p>to</p>
          <p>{moment(dateTo).format("MMM Do YYYY")}</p>
        </div>
      </div>
      <div className="left-side">
            <h2>{city}</h2>
      </div>
    </div>
  </div>
</Link>
  );
};

export default PersonalTrip;

{/* <div className="trip_delete">
<button
  className="delete_btn"
  onClick={() => {
    if (window.confirm("Are you sure you wish to delete this trip?"))
      deleteHandler();
  }}
>
  <span role="img" aria-label="delete-button" className="delete-button">
    ❌
  </span>
</button>
</div>
</div> */}


