# Stored Procedures

Stored procedure is simply a group of SQL statements grouped togerher under a single heading. Similar to method in other programming languages.  

### Benefits

- Speed and efficiency
   
   If I run a query many times on a regular basis, I haven't to write out this set of code again and again or I don't need to save file and then reopen it and run it each time. With the SPs, we can execute it everytime.

1. To use it to create a procedure all I need to do is write a `CREATE PROCEDURE`  statement above the `SELECT` statement (We can write *PROC* aswell). 
2. Then we need a sensible name for our procedure, let's say it `spHREmployee`.
3. Then need to `AS` keyword and it will convert to *SELECT* statament into a **Stored Procedure**.
4. We can add `BEGIN` & `END` block.
5. We can use `USE` statement to select appropriate database.
6. Then we should write `GO`
7. To call it we can write `EXEC $NAME` or `EXECUTE`
8. If we want to update the procedure, we can call with `ALTER PROC` command.
9. We can remove it from SP list or with `DROP PROC $NAME` we can delete it.