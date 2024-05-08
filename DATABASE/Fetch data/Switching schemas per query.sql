
create schema myschema;

create table myschema.mytable (
  id uuid primary key default gen_random_uuid(),
  data text
);

insert into myschema.mytable (data) values ('mydata');
