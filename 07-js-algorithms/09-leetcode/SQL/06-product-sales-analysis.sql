-- Write an SQL query that reports the product_name, year, and price for each sale_id in the Sales table.

-- Return the resulting table in any order.

-- The query result format is in the following example.

SELECT P.product_name, S.year, S.price
FROM Sales S
LEFT OUTER JOIN Product P
ON S.product_id = P.product_id