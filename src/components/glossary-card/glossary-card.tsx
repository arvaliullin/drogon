import { GlossaryTerm } from "../../types";
import "./glossary-card.css";

type GlossaryCardProps = {
  term: GlossaryTerm;
}

function GlossaryCard({ term }: GlossaryCardProps) {
  return (
    <div className="flashcard">
      <h3>{term.term}</h3>
      <p>{term.description}</p>
    </div>
  );
}

export default GlossaryCard;
