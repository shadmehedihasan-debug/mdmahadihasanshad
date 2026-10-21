import { Link } from "react-router-dom";
import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <Link to="/ask" className="cta-btn cta-btn-play" data-cursor="disable">
          Ask Shad AI →
        </Link>

        <a
          href={`mailto:${config.contact.email}`}
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Say Hello →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
