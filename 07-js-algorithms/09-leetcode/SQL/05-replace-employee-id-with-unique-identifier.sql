-- Show the unique ID of each user, If a user does not have a unique ID replace just show null.

-- Return the result table in any order.

-- The result format is in the following example.

SELECT EU.unique_id, E.name
FROM Employees E
LEFT OUTER JOIN EmployeeUNI EU
ON E.id = EU.id