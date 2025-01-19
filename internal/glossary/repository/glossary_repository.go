package repository

import (
	"database/sql"

	"github.com/arvaliullin/drogon/internal/domain"
)

type GlossaryRepository struct {
	Db *sql.DB
}

func NewGlossaryRepository(db *sql.DB) *GlossaryRepository {
	return &GlossaryRepository{Db: db}
}

func (r *GlossaryRepository) GetAll() ([]domain.GlossaryTerm, error) {
	query := "SELECT id, term, description FROM glossary"
	rows, err := r.Db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var glossaryTerms []domain.GlossaryTerm
	for rows.Next() {
		var term domain.GlossaryTerm
		if err := rows.Scan(&term.ID, &term.Term, &term.Description); err != nil {
			return nil, err
		}
		glossaryTerms = append(glossaryTerms, term)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return glossaryTerms, nil
}

func (r *GlossaryRepository) GetByTerm(term string) (*domain.GlossaryTerm, error) {
	query := "SELECT id, term, description FROM glossary WHERE term = $1"
	row := r.Db.QueryRow(query, term)

	var glossaryTerm domain.GlossaryTerm
	if err := row.Scan(&glossaryTerm.ID, &glossaryTerm.Term, &glossaryTerm.Description); err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	return &glossaryTerm, nil
}

func (r *GlossaryRepository) Create(term domain.GlossaryTerm) error {
	query := "INSERT INTO glossary (term, description) VALUES ($1, $2)"
	_, err := r.Db.Exec(query, term.Term, term.Description)
	return err
}

func (r *GlossaryRepository) Update(term domain.GlossaryTerm) error {
	query := "UPDATE glossary SET description = $1 WHERE term = $2"
	result, err := r.Db.Exec(query, term.Description, term.Term)
	if err != nil {
		return err
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if rowsAffected == 0 {
		return sql.ErrNoRows
	}
	return nil
}

func (r *GlossaryRepository) Delete(term string) error {
	query := "DELETE FROM glossary WHERE term = $1"
	result, err := r.Db.Exec(query, term)
	if err != nil {
		return err
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if rowsAffected == 0 {
		return sql.ErrNoRows
	}
	return nil
}

func (r *GlossaryRepository) GetGlossaryGraph() ([]domain.GlossaryNode, []domain.GlossaryEdge, error) {
	nodesQuery := "SELECT id, term, description FROM glossary"
	edgesQuery := "SELECT term_source_id, term_target_id, relation_type FROM glossary_relations"

	rows, err := r.Db.Query(nodesQuery)
	if err != nil {
		return nil, nil, err
	}
	defer rows.Close()

	var nodes []domain.GlossaryNode
	for rows.Next() {
		var node domain.GlossaryNode
		if err := rows.Scan(&node.ID, &node.Term, &node.Description); err != nil {
			return nil, nil, err
		}
		nodes = append(nodes, node)
	}

	rows, err = r.Db.Query(edgesQuery)
	if err != nil {
		return nil, nil, err
	}
	defer rows.Close()

	var edges []domain.GlossaryEdge
	for rows.Next() {
		var edge domain.GlossaryEdge
		if err := rows.Scan(&edge.SourceID, &edge.TargetID, &edge.RelationType); err != nil {
			return nil, nil, err
		}
		edges = append(edges, edge)
	}

	return nodes, edges, nil
}
