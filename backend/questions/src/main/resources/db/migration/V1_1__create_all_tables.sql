
CREATE TABLE questions (
    id BIGSERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    upvotes INTEGER,
    unique (text)
);


insert into questions values (1, 'how can i ...', 1);
insert into questions values (2, 'where is ... ', 1);
insert into questions values (3, 'is there ... ', 1);
