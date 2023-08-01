-- Find all dates' Id with higher temperatures compared to its previous dates (yesterday).

-- Return the result table in any order.

-- The result format is in the following example.

SELECT W2.id
FROM Weather W1, Weather W2
WHERE 
    W2.temperature > W1.temperature AND 
    DATE(W2.recordDate) - DATE(W1.recordDate) = 1