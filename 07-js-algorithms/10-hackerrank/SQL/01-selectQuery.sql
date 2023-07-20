-- Query all columns for all American cities IN the CITY TABLE WITH populations larger than 100000.The CountryCode for America is USA.
SELECT * FROM CITY WHERE POPULATION > 100000 AND CountryCode = 'USA';
    
-- Query the NAME field for all American cities IN the CITY TABLE WITH populations larger than 120000.The CountryCode for America is USA.
SELECT NAME FROM CITY WHERE POPULATION > 120000 AND CountryCode = 'USA';

--Query all columns (attributes) for every row in the CITY table.
SELECT * FROM CITY;

--Query all columns for a city in CITY with the ID 1661.
SELECT * FROM CITY WHERE ID = 1661;

--Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.
SELECT * FROM CITY WHERE CountryCode = 'JPN';

--Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.
SELECT NAME FROM CITY WHERE CountryCode = 'JPN';

--Query a list of CITY and STATE from the STATION table.
SELECT CITY STATE FROM STATION;

--Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
SELECT DISTINCT CITY FROM STATION WHERE MOD(ID, 2) = 0 ORDER BY CITY ASC;

--Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
SELECT COUNT(CITY) - COUNT(DISTINCT CITY) FROM STATION;

--Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY) DESC, CITY ASC FETCH FIRST ROW ONLY;
SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY) ASC, CITY ASC FETCH FIRST ROW ONLY;