
show databases;
create database [database];
drop database [database];
use [database];


-- Create Table
create table [tablename](col1 coltype(size) extra);

-- Show tables
show tables;

-- Describe table
desc [tablename];

-- Table alter
-- add column
alter table [tablename] add [column_name] datatype;

-- to modify datatype or column
alter table [tablename] modify [column_name] [new_datatype];

-- rename column
alter table [tablename] rename column [old_column_name] to [new_column_name];

-- drop column
alter table [tablename] DROP column [column_name];

-- insert data to table
insert into [tablename](cols) Values (values);
-- insert into student(id,name,city) values (104, "Manik", "Delhi"), (105, "John","New york"),(106,"Alia","Virginia");

-- update based on the id(promary key)
update [tablename] set col=value, col2=value, col3=value where id=12;

-- delete a row
delete from [tablename] where id=?;

-- condition clause
AND, OR, NOT

-- order by
select * from [tablename] order by [column_name] desc;  --by default it is ascebding order sorting

select * from student limit 3 offset 2;

-- limit, offset, alias
select s.name, s.city from student s;
select count(id) from student;

functions
AVG - find the average
SUM - find the sum
COUNT - count the rows