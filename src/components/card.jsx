import PropTypes from "prop-types";

export function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={props.image} className="card-img-top" />
        <div className="card-body ">
          <p className="card-text fw-bold"> {props.content}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, 
};
