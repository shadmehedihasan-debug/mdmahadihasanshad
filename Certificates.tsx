import { useMemo, useState } from "react";
import "./styles/Certificates.css";
import { config } from "../config";

const ALL = "All";

const Certificates = () => {
  const [active, setActive] = useState<string>(ALL);

  const groups = useMemo(() => {
    const names = Array.from(new Set(config.certificates.map((c) => c.group)));
    return [ALL, ...names];
  }, []);

  const visible = config.certificates.filter(
    (c) => active === ALL || c.group === active
  );

  return (
    <div className="cert-section section-container" id="certificates">
      <div className="cert-container">
        <h3 className="cert-title">Certificates</h3>
        <p className="cert-subtitle">Courses and activities I have completed</p>
        <div className="cert-filters">
          {groups.map((g) => (
            <button
              key={g}
              type="button"
              className={`cert-filter ${active === g ? "active" : ""}`}
              onClick={() => setActive(g)}
              data-cursor="disable"
            >
              {g}
            </button>
          ))}
        </div>
        <div className="cert-grid">
          {visible.map((c) => (
            <div className="cert-card" key={c.title}>
              <span className="cert-group">{c.group}</span>
              <h4>{c.title}</h4>
              {c.note && <p>{c.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
