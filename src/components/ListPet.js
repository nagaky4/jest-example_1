import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Show list pet
 * @param {Object} props - props of ListPet
 * @param {Array} props.listPet - the name of the props
 */
const ListPet = (props, context) => {
  const [idPet, setIdPet] = useState(null);

  /**
   * render list pet
   */
  const renderListPet = () => {
    return props.listPet.map((value, index) => {
      return (
        <li key={index}>
          {value}
          <button type="button" onClick={() => onChoosePet(index)}>
            choose pet
          </button>
        </li>
      );
    });
  };

  const onChoosePet = idPet => {
    setIdPet(idPet);
  };

  if (idPet !== null) {
    return <h1>you have choose :{props.listPet[idPet]} </h1>;
  } else {
    return (
      <div className="huhu">
        <div className="hihi">hihi</div>
        <h1 className="haha">
          <ul>{renderListPet()}</ul>
        </h1>
      </div>
    );
  }
};

ListPet.propTypes = {
  listPet: PropTypes.array
};

ListPet.defaultProps = {
  listPet: ["lily", "miku", "susu", "mick"]
};

export default ListPet;
