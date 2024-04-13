import { useParams } from "react-router-dom";
import "./Final.css";

function Final() {
  const { selected, totalprice } = useParams();
  return (
    <div className="final">
      <div className="showe">
        <h3>SELECTED SEATS</h3>
        {selected}
        <h3>TOTALPRICE : {totalprice}</h3>
      </div>
    </div>
  );
}

export default Final;