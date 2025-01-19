import { GlossaryTerm } from "../../types";
import GlossaryCard from "../glossary-card/glossary-card";
import "./glossary-list.css";

type GlossaryList = {
  terms: GlossaryTerm[];
}

function GlossaryList({ terms } : GlossaryList) {
  return (
    <div className="glossary-list-container">
      <h2>Глоссарий</h2>
      <div className="glossary-list">
        {terms.map((term) => (
          <GlossaryCard key={term.id} term={term} />
        ))}
      </div>
    </div>
  );
};

export default GlossaryList;
