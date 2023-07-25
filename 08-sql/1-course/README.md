# SQL

| <font size="4px">**Contents**</font>            |
| :---------------------------------------------- |
| 1. [***Advanced SQL Commands***](#commands)     |
| 2. [***Primary Keys and Foreign Keys***](#keys) |
| 3. [***Constraints***](#constraints)            |
| 4. [***CREATE Table***](#createTable)           |

## <a id="commands">***Advenced SQL Commands***</a>

### **Timestamps and Extract**

- **TIME** - Contains only time
- **DATE** - Contains only date
- **TIMESTAMP** - Contains date and time
- **TIMESTAMPTZ** - Contains date, time and timezone

## <a id="keys">***Primary Keys and Foreign Keys***</a>

A primary key is a column or a group of columns used to identify a row uniquely in a table. Primary keys are also important since they allow us to easily discern what columns should be used for joining tables together.

A foreign key is a field or group of fields in a table that uniquely identifies a row in another table. A foreign key is defined in a table that references to the **primary key** of the other table.

The table that contains the foreign key is called refencing table or child table. The table to which the foreign key references is called referenced table or parent table.

When creating tables and defining columns, we can use constraints to define columns as being a primary key, or attaching a foreign key relationship to another table.

## <a id="constraints">**Constraints**</a>

- Contraints are the rules enforced on data columns on table.
- These are used to prevent invalid data from being entered into the database.
- This ensures the the accuracy and reliability of the data in the database.
  - **Column Constraints:** Constraints the data in a column to adhere to certain conditions.
  - **Table Constraints:** Applied to the entire table rather than to an individual column.

## <a id="joins">***JOINS***</a>

A join clause in the Structured Query Language (SQL) combines columns from one or more tables into a new table. The operation corresponds to a join operation in relational algebra. Informally, a join stitches two tables and puts on the same row records with matching fields: `INNER`, `LEFT OUTER`, `RIGHT OUTER`, `FULL OUTER` and `CROSS`.

