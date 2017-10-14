SELECT * FROM Bins
WHERE lower(shelfid) = lower($1);