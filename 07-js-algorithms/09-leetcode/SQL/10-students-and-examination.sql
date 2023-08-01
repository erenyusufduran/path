-- Find the number of times each student attended each exam.

-- Return the result table ordered by student_id and subject_name.

-- The result format is in the following example.

SELECT St.student_id, St.student_name, Sub.subject_name, COUNT(Ex.subject_name) as attended_exams
FROM Students St
INNER JOIN Subjects Sub
LEFT OUTER JOIN Examinations Ex
ON St.student_id = Ex.student_id AND Sub.subject_name = Ex.subject_name
GROUP BY St.student_id, Sub.subject_name
ORDER BY St.student_id, Sub.subject_name