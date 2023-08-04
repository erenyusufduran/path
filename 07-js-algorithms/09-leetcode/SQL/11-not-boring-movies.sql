-- Write an SQL query to report the movies with an odd-numbered ID and a description that is not "boring".

-- Return the result table ordered by rating in descending order.

-- The query result format is in the following example.

SELECT *
FROM Cinema
WHERE ID % 2 = 1 AND DESCRIPTION != "boring"
ORDER BY RATING DESC