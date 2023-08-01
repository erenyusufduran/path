-- Write an SQL query to report the name and bonus amount of each employee with a bonus less than 1000.

-- Return the result table in any order.

-- The query result format is in the following example.

SELECT E.name, B.bonus
FROM Employee E
LEFT OUTER JOIN Bonus B
ON E.empId = B.empId
WHERE B.bonus < 1000 OR B.bonus IS NULL