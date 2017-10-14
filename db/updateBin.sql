UPDATE Bins
SET Name = $3, Price = $4, ImageURL = $5
WHERE lower(ShelfID) = lower($1) AND ID = $2;
