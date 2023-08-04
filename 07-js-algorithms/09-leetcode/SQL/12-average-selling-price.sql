-- https://leetcode.com/problems/average-selling-price/description/?envType=study-plan-v2&envId=top-sql-50

-- Write an SQL query to find the average selling price for each product. average_price should be rounded to 2 decimal places.

-- Return the result table in any order.

-- The query result format is in the following example.

SELECT P.product_id, ROUND(SUM(P.price * U.units)/SUM(U.units), 2) as average_price
FROM Prices P
LEFT OUTER JOIN UnitsSold U
ON P.product_id = U.product_id AND
U.purchase_date BETWEEN P.start_date AND P.end_date
GROUP BY P.product_id