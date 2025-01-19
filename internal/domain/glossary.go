package domain

type GlossaryTerm struct {
	ID          int    `json:"id"`
	Term        string `json:"term"`
	Description string `json:"description"`
}

type GlossaryNode struct {
	ID          int    `json:"id"`
	Term        string `json:"term"`
	Description string `json:"description"`
}

type GlossaryEdge struct {
	SourceID     int    `json:"source_id"`
	TargetID     int    `json:"target_id"`
	RelationType string `json:"relation_type"`
}
