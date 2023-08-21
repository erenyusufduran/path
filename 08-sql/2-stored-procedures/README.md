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

```sql
ALTER PROC spHREmployee --CREATE
AS
BEGIN
SELECT TOP 100 *
FROM HumanResources.Employee
ORDER BY BirthDate
END

EXEC spHREmployee
```

## Parameters

The idea being that every time you execute a SP, you can pass in a different piece of information and that will affect the result returned if change the value.

After the SP name we can write the parameters.

```sql
USE AdventureWorks2012
GO

CREATE PROC spHREmployeCriteria (@OrgLevel AS INT)
AS
BEGIN
	SELECT TOP 100 *
	FROM HumanResources.Employee
	WHERE OrganizationLevel > @OrgLevel
	ORDER BY BirthDate
END

EXEC spHREmployeCriteria @OrgLevel = 3
```

```sql
ALTER PROC spHREmployeCriteria 
	(
		@MinOrgLevel AS INT,
		@MaxOrgLevel AS INT
	)
AS
BEGIN
	SELECT TOP 100 *
	FROM HumanResources.Employee
	WHERE 
		OrganizationLevel >= @MinOrgLevel AND 
		OrganizationLevel <= @MaxOrgLevel
	ORDER BY BirthDate
END

EXEC spHREmployeCriteria 3, 4
```


```sql
ALTER PROC spHREmployeCriteria 
	(
		@MinOrgLevel AS INT = 0,
		@MaxOrgLevel AS INT,
		@Title AS VARCHAR(MAX)
	)
AS
BEGIN
	SELECT TOP 100 *
	FROM HumanResources.Employee
	WHERE 
		OrganizationLevel >= @MinOrgLevel AND 
		OrganizationLevel <= @MaxOrgLevel AND
		JobTitle LIKE '%' + @Title + '%'
	ORDER BY BirthDate
END

EXEC spHREmployeCriteria 3, 4, 'sales'
EXEC spHREmployeCriteria @MinOrgLevel = 3, @MaxOrgLevel = 4, @Title = 'sales'

```

## Variables

Variable is simply a space in memory where you can hold a single piece of information while your procedure runs. They're useful whenever you want to give your procedures in memory if you would like to be ablo to refer to the same value from one statement to the next within a procedure.

```sql
USE Movies
GO

SET NOCOUNT ON

DECLARE @MyDate DATETIME
DECLARE @NumFilms INT
DECLARE @NumActors INT
DECLARE @NumDirectors INT

SET @MyDate = '1970-01-01'
SET @NumFilms = 
				(SELECT COUNT(*) 
					FROM tblFilm 
					WHERE FilmReleaseDate >= @MyDate)
SET @NumActors = 
				(SELECT COUNT(*) 
					FROM tblActor 
					WHERE ActorDOB >= @MyDate)
SET @NumDirectors = 
				(SELECT COUNT(*) 
					FROM tblDirector 
					WHERE DirectorDOB >= @MyDate)

SELECT 'Number of films', @NumFilms
UNION
SELECT 'Number of actors', @NumActors

SELECT FilmName AS [Name], FilmReleaseDate AS [Date], 'Film' AS [Type]
FROM tblFilm
WHERE FilmReleaseDate >= @MyDate
UNION ALL
SELECT ActorName, ActorDOB, 'Actor'
FROM tblActor
WHERE ActorDOB >= @MyDate
UNION ALL
SELECT DirectorName, DirectorDOB, 'Director'
WHERE tblDirector
WHERE DirectorDOB >= @MyDate
ORDER BY [Date] ASC

PRINT @NumFilms
PRINT @NumActors

PRINT 'Number of films = ' + CAST(@NumFilms AS VARCHAR(MAX))
```

```sql
USE Movies
GO

DECLARE @ID INT
DECLARE @Name VARCHAR(MAX)
DECLARE @Date DATETIME

SELECT TOP 1
	@ID = ActorID,
	@Name = ActorName,
	@Date = ActorDOB
FROM
	tblActor
WHERE
	ActorDOB >= '1970-01-01'
ORDER BY
	ActorDOB ASC

SELECT
	F.FilmName,
	C.CastCharacterName
FROM
	tblFilm AS F
	INNER JOIN tblCast AS C
	ON F.FilmID = C.CastFilmID
WHERE
	C.CastActorID = @ID
```

```sql
USE Movies
GO

DECLARE @NameList VARCHAR(MAX)
SET @NameList = ''

SELECT
	@NameList = @NameList + ActorName + ', '
FROM
	tblActor
WHERE
	YEAR(ActorDob) = 1970

PRINT @NameList
```

### Global Variables

With `@@`, we can reach global variables.

```sql
SELECT 
	@@SERVERNAME, 
	@@VERSION,
	@@ROWCOUNT
```

## Output Parameters & Return Valeus

```sql
USE Movies
GO

CREATE PROC spFilmsInYear(@Year INT)
AS
BEGIN
	SELECT FilmName
	FROM tblFilm
	WHERE YEAR(FilmReleaseDate) - @Year
	ORDER BY FilmName ASC
END

-- EXEC
EXEC spFilmsInYear @Year = 2000
```

```sql
ALTER PROC spFilmsInYear
	(
		@Year INT,
		@FilmList VARCHAR(MAX) OUTPUT,
		@FilmCount INT OUTPUT
	)
AS
BEGIN
	DECLARE @Films VARCHAR(MAX)
	SET @Films = ''
	SELECT
		@Films = @Films + FilmName + ', '
	FROM
		tblFilm
	WHERE
		YEAR(FilmReleaseDate) = @Year
	ORDER BY
		FilmName ASC
	
	RETURN @@ROWCOUNT

	SET @FilmCount = @@ROWCOUNT
	SET @FilmList = @Films
END

-- EXEC
DECLARE @Names VARCHAR(MAX)
DECLARE @Count INT

EXEC spFilmsInYear
	@Year = 2000,
	@FilmList = @Names OUTPUT
	@FilmCount = @Count OUTPUT

SELECT @Count AS [Number of Films], @Names AS [List of Films]
```

## IF Statements

In SQL server `IF statements` allows you to check whether a condition has been met and if it has to perform a sequence of actions.

Demostrate that at the most basic level, gt a simple routine here which counts the number of films stored in the film table where the film genre Id is 3.

```sql
DECLARE @RomanticFilms INT
DECLARE @ActionFilms INT

SET @RomanticFilms = (SELECT COUNT(*) FROM tblFilm WHERE FilmGenreID = 3)
SET @ActionFilms = (SELECT COUNT(*) FROM tblFilm WHERE FilmGenreID = 1)

IF @RomanticFilms > 5
	BEGIN
		PRINT 'There are too many romantic films in DB.'
		IF @ActionFilms > 10
			BEGIN
				PRINT 'Phew! Therer are enough action films'
			END
	END
ELSE
	BEGIN
		PRINT 'There are no more than five romantic films.'
	END
```

```sql
CREATE PROC spVariableData
	(
		@InfoType VARCHAR(9) -- ALL / AWARD / FINANCIAL
	)
AS
BEGIN
	IF @InfoType = 'ALL'
		BEGIN
			(SELECT * FROM tblFilm)
			RETURN 
		END
	IF @InfoType = 'AWARD'
		BEGIN
			(
				SELECT FilmName, FilmOscarWins, FilmOscarNominations
				FROM tblFilm
			)
			RETURN
		END
	IF @InfoType = 'FINANCIAL'
		BEGIN
			(
				SELECT FilmName, FilmBoxOfficeDollars, FilmBudgerDollars
				FROM tblFilm
			)
			RETURN
		END
	SELECT 'You must choose ALL, AWARD or FINANCIAL'
END

EXEC spVariableData @InfoType='ALL'
```

## WHILE Loops

Loop allows you to repeadetly execute a set of instructions many times very quickly. In SQL there is only one type of loop and it's referred to as a `WHILE` loop.

```sql
DECLARE @Counter INT
SET @Counter = 1

WHILE @Counter <= 10
	BEGIN 
		PRINT @Counter
		SET @Counter = @Counter + 1
	END
```

### Select Statements in Loops

```sql
DECLARE @Counter INT
DECLARE @MaxOscars INT
DECLARE @NumFilms INT

SET @MaxOscars = (SELECT MAX(FilmsOscarWins) FROM tblFilm)
SET @Counter = 0

WHILE @Counter <= @MaxOscars
	BEGIN
		SET @NumFilms = 
				(
					SELECT COUNT(*) FROM tblFilm WHERE FilmOscarWins = @Counter
				)
		IF @NumFilms = 0 BREAK
		PRINT	
			CAST(@NumFilms AS VARCHAR(3)) + ' films have won ' +
			CAST(@Counter AS VARCHAR(2)) + ' Oscars'
		SET @Counter = @Counter + 1
	END
```