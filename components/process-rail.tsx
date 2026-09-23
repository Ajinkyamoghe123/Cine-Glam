import { processStages } from "../lib/content";

export function ProcessRail() {
  return (
    <div className="process-rail" aria-label="Strategy to Growth process">
      {processStages.map((stage, index) => (
        <div className="process-rail__stage" key={stage.number}>
          <span className="process-rail__number">{stage.number}</span>
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
          {index < processStages.length - 1 ? <span className="process-rail__arrow" aria-hidden="true">→</span> : null}
        </div>
      ))}
    </div>
  );
}
