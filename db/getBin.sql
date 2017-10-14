SELECT Name, Price, ImageURL
FROM Bins
WHERE lower(ShelfID) = lower($1) AND ID = $2;