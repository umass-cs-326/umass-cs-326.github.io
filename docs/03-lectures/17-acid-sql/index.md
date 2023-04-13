# L17 ACID and SQL

## Relational Databases

A relational database is a type of database that stores and organizes data in tables consisting of rows and columns. Each table represents a specific type of object or concept, and each row represents a unique instance of that object or concept. The columns, also known as fields, represent the attributes or properties of the object or concept.

In a relational database, tables can be related to each other through common attributes, which are used to establish relationships between tables. These relationships can be one-to-one, one-to-many, or many-to-many.

Relational databases are based on the relational model, which was first introduced by Edgar Codd in 1970. The relational model uses a set of mathematical principles to organize and manipulate data. The model is based on the concept of relations, which are sets of tuples (rows) that have a common set of attributes (columns).

One of the benefits of a relational database is that it allows for efficient data retrieval and manipulation. Relational databases use structured query language (SQL) to access and manipulate data. SQL allows users to create, modify, and retrieve data from tables and to perform complex operations on the data, such as sorting, filtering, and aggregating.

Relational databases are widely used in various industries, including finance, healthcare, and e-commerce, to manage and store large amounts of data. They are also the foundation for many web applications and are essential for building scalable, reliable, and secure applications.

Here are some examples of SQL:

- **SELECT statement:** used to retrieve data from a table or view

```sql
SELECT * FROM customers;
```

- **WHERE clause:** used to filter query results based on a specified condition

```sql
SELECT * FROM customers WHERE age > 18;
```

- **ORDER BY clause:** used to sort query results in ascending or descending order based on a specified column

```sql
SELECT * FROM customers ORDER BY last_name ASC;
```

- **GROUP BY clause:** used to group query results by one or more columns

```sql
SELECT city, COUNT(*) FROM customers GROUP BY city;
```

- **JOIN clause:** used to combine data from two or more tables based on a related column

```sql
SELECT * FROM customers JOIN orders 
	ON customers.customer_id = orders.customer_id;
```

- **INSERT statement:** used to insert data into a table

```sql
INSERT INTO customers (first_name, last_name, email) VALUES ('John', 'Doe', 'johndoe@gmail.com');
```

- **UPDATE statement:** used to update existing data in a table

```sql
UPDATE customers SET email = 'newemail@gmail.com' WHERE customer_id = 1;
```

- **DELETE statement:** used to delete data from a table

```sql
DELETE FROM customers WHERE customer_id = 1;
```

- **AGGREGATE functions:** used to perform calculations on query results, such as finding the sum, average, or maximum value of a column

```sql
SELECT AVG(price) FROM products;
```

- **SUBQUERIES:** used to nest one query inside another query

```sql
SELECT * FROM customers WHERE customer_id 
  IN (SELECT customer_id FROM orders WHERE total > 100);
```

## ACID

ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties are essential in ensuring the reliability of transactions in a database. SQL, or Structured Query Language, is a language used to manage relational databases. In this post, we will explore how ACID properties are implemented in SQL.

**Atomicity:**
The atomicity property ensures that a transaction is treated as a single unit of work. Either all the changes made by the transaction are committed, or none of them are. In SQL, transactions are initiated using the BEGIN TRANSACTION statement and are committed using the COMMIT statement. If a transaction fails, the ROLLBACK statement is used to undo any changes made during the transaction.

For example, consider the following SQL code:

```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_number = 123;
UPDATE accounts SET balance = balance + 100 WHERE account_number = 456;
COMMIT;
```

In this example, we are transferring 100 from account 123 to account 456. If one of the update statements fails, the entire transaction will be rolled back, and no changes will be made to either account.

**Consistency:**
The consistency property ensures that a transaction brings the database from one valid state to another. This means that the database's integrity is maintained during the transaction. In SQL, constraints are used to ensure data consistency.

For example, consider a table of employees with a constraint that ensures that each employee's salary is greater than 0:

```sql
CREATE TABLE employees (
   employee_id INT PRIMARY KEY,
   name VARCHAR(50),
   salary DECIMAL(10,2) CHECK (salary > 0)
);
```

If a transaction tries to insert a row with a negative salary value, the constraint will prevent the transaction from being committed.

**Isolation:**
The isolation property ensures that concurrent transactions do not interfere with each other. In SQL, transactions are isolated using locking mechanisms. When a transaction modifies a database record, it acquires a lock on that record. Other transactions that try to modify the same record must wait until the lock is released.

For example, consider two transactions that both try to update the same record:

```sql
-- Transaction 1
BEGIN TRANSACTION;
UPDATE customers SET balance = balance + 100 WHERE customer_id = 123;
COMMIT;

-- Transaction 2
BEGIN TRANSACTION;
UPDATE customers SET balance = balance - 50 WHERE customer_id = 123;
COMMIT;
```

In this example, transaction 1 acquires a lock on the customer record with ID 123. Transaction 2 must wait until transaction 1 is committed or rolled back before it can modify the same record.

**Durability:**
The durability property ensures that once a transaction is committed, the changes made by the transaction are permanent and survive any subsequent system failures. In SQL, this is achieved by writing transaction changes to disk before committing.

For example, consider the following SQL code:

```sql
BEGIN TRANSACTION;
UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 123;
COMMIT;
```

After the transaction is committed, the change in inventory quantity is written to disk and will persist even if there is a power outage or other system failure.

ACID properties are essential for ensuring the reliability of transactions in a database. SQL provides a robust set of tools to implement these properties, including transactions, constraints, locking mechanisms, and durable writes. By understanding and implementing these properties, developers can build reliable and scalable applications that handle data with confidence.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQlN4OtSM87iplZEPuN7XdBL3XPVfIlpM8zijx5Qmo_b6zUJ5e-QoZ2QDtsSqvXCup02qqf3MkLJN04/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1MweK0GybmPQoOwczMcoYg-Wxf4Ix9Mo4K20NRsRZspE/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1ap8dwk-NNHAZ9KjvA4jdJAWGBwasyXZAVV_H5cMeDko/edit?usp=share_link).

## Code Examples

- [examples/17-acid-and-sql](https://github.com/umass-cs-326/examples/tree/main/17-acid-and-sql)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Exercise

**NO EXERCISE**, but you should really practice this stuff!

## Resources

- [ElephantSQL](https://www.elephantsql.com/), a free PostgreSQL hosting service
- [Part 1. Databases for beginners - What is a database? What is PostgreSQL?](https://www.elephantsql.com/blog/databases-for-beginners-what-is-a-database-what-is-postgresql.html)
- [Part 2. Databases for beginners - What is a SQL? Getting started with PostgreSQL](https://www.elephantsql.com/blog/databases-for-beginners-what-is-sql-what-is-postgresql.html)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
- [PostgreSQL](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres), an extension that allows you to connect to a PostgreSQL database and run queries.
