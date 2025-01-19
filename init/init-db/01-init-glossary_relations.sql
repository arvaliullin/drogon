CREATE TABLE IF NOT EXISTS glossary_relations (
    id SERIAL PRIMARY KEY,
    term_source_id INT NOT NULL,
    term_target_id INT NOT NULL,
    relation_type VARCHAR(255) NOT NULL,
    FOREIGN KEY (term_source_id) REFERENCES glossary(id) ON DELETE CASCADE,
    FOREIGN KEY (term_target_id) REFERENCES glossary(id) ON DELETE CASCADE
);

INSERT INTO glossary_relations (term_source_id, term_target_id, relation_type) VALUES
    (2, 1, 'содержит'),
    (3, 1, 'используется для'),

    (4, 2, 'зависит от'),
    (5, 2, 'связан с'),

    (6, 3, 'требует'),
    (7, 3, 'ускоряет'),

    (9, 4, 'влияет на'),
    (10, 4, 'улучшает'),

    (11, 5, 'связан с'),
    (8, 5, 'оптимизирует'),

    (12, 6, 'обеспечивает поддержку'),
    (13, 6, 'улучшает'),

    (14, 9, 'используется для'),
    (15, 9, 'зависит от'),

    (15, 8, 'влияет на'),
    (13, 12, 'сокращает');
