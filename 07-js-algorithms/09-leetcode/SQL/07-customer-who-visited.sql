-- Customer Who Visited but Did Not Make Any Transactions

-- Write a SQL query to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.

-- Return the result table sorted in any order.

-- The query result format is in the following example.

SELECT V.customer_id, COUNT(V.visit_id) AS count_no_trans
FROM Visits V
LEFT OUTER JOIN Transactions T
ON V.visit_id = T.visit_id
WHERE T.transaction_id IS NULL
GROUP BY V.customer_id