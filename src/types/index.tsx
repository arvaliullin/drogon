export interface GlossaryTerm {
  id: string;
  term: string;
  description: string;
}

export interface GlossaryGraph {
  nodes: Array<{ id: string; term: string; description: string }>;
  edges: Array<{ source_id: string; target_id: string; relation_type: string }>;
}
