# Query

![SQL Command](https://static.javatpoint.com/dbms/images/dbms-sql-command.png)
![query order](https://i0.wp.com/www.complexsql.com/wp-content/uploads/2017/02/Select-Statement-Execution.png?resize=300%2C230&ssl=1)

**Setelah order by itu ada limit


## 1. [SELECT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/)

* tampilkan seluruh data student

```sql
SELECT * FROM "Students"

SELECT * FROM "Instructors"

SELECT * FROM "StudentDetails"

SELECT name, gender FROM "Students"

SELECT name AS "Nama Lengkap", gender FROM "Students"
```

## 2. [DISTINCT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select-distinct/)

* tampilkan batch apa saja yang ada di student detail

```sql
SELECT DISTINCT "startBatch" FROM "StudentDetails"
```

## 3. [WHERE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/)

* tampilkan instructor yang memiliki nama 'Acong'

```sql
SELECT * FROM "Instructors" i WHERE i."name" = 'Acong'
```
## 4. [LIKE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-like/)

* tampilkan instructor yang memiliki nama dengan huruf awal 'A' 

```sql
SELECT * FROM "Instructors" i WHERE i."name" LIKE 'A%'

SELECT * FROM "Instructors" i WHERE i."name" LIKE 'a%'

SELECT * FROM "Instructors" i WHERE i."name" ILIKE 'a%'
```
## 5. [LIMIT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-limit/)

* tampilkan 2 instructor

```sql
SELECT * FROM "Instructors" i LIMIT 2
SELECT * FROM "Instructors" i WHERE i."name" LIKE 'A%' LIMIT 2
```
## 6. [JOIN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/)

* tampilkan 2 data instructor dan student dengan nama instructor yang memiliki huruf awal a 

```sql
SELECT * FROM "Students" s 
    JOIN "Instructors" i
    ON i."id" = s."instructorId" 

SELECT * FROM "Students" s 
    LEFT JOIN "Instructors" i
    ON i."id" = s."instructorId" 
    WHERE i."name" ILIKE 'a%'
    LIMIT 2
```

**ketika join perhatikan nama kolom, karena bisa kejadian ada nama kolom yang sama antara table a dan b

## 7. [ORDER](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-order-by/)

* tampilkan name dari Students dan testScore dari StudentDetail, dengan kriteria student yang memiliki score lebih kecil atau sama dengan 80 urutkan berdasarkan test score
```sql
SELECT * FROM "Students" s 
    JOIN "Instructors" i
    ON i."id" = s."instructorId" 
    WHERE i."name" ILIKE 'a%'
    ORDER BY s."name"

SELECT s."name", sd."testScore" FROM "Students" s 
    JOIN "StudentDetails" sd
    ON s."id" = sd."StudentId"
    WHERE sd."testScore" <= 80 
    ORDER BY sd."testScore"
```

## 8. [Aggregate Functions](https://www.postgresqltutorial.com/postgresql-aggregate-functions/)

* tampilkan rata-rata testScore dari semua batch
* tampilkan rata-rata testScore dari batch oslo

```sql
SELECT AVG("testScore") FROM "StudentDetails" sd

SELECT AVG("testScore") FROM "StudentDetails" sd
    WHERE "startBatch" like '%oslo%'
```

* tampilkan instruktur dan total student buddy-nya
* tampilkan instruktur dan total student buddy-nya, tampilkan berdasarkan 3 terbanyak

```sql
SELECT i.name, COUNT(s.*) FROM "Instructors" i
    JOIN "Students" s 
    ON i."id" = s."instructorId" 

SELECT i.name, COUNT(s.*) FROM "Instructors" i
    JOIN "Students" s 
    ON i."id" = s."instructorId" 
    GROUP BY i.name
```

* tampilkan evaluasi setiap batch (nama batch, total instruktur, total student, rata-rata score per batch)
* tampilkan evaluasi batch 33 (nama batch, total instruktur, total student, rata-rata score per batch)
* tampilkan evaluasi yang memiliki total instruktur lebih dari 2 (nama batch, total instruktur, total student, rata-rata score per batch)

```sql
SELECT sd."startBatch", 
    COUNT(i.*) AS "totalInstructor",
    COUNT(s.*) AS "totalStudent",
    AVG(sd."testScore") AS "rata-rata",
    FROM "Students" s 
    JOIN "Instructors" i
    ON i."id" = s."instructorId" 
    JOIN "StudentDetails" sd
    ON s."id" = sd."StudentId"
    GROUP BY sd."startBatch";

SELECT sd."startBatch", 
    COUNT(i.*) AS "totalInstructor",
    COUNT(s.*) AS "totalStudent",
    AVG(sd."testScore") AS "rata-rata",
    FROM "Students" s 
    JOIN "Instructors" i
    ON i."id" = s."instructorId" 
    JOIN "StudentDetails" sd
    ON s."id" = sd."StudentId"
    WHERE sd."startBatch" LIKE '33%'
    GROUP BY sd."startBatch";

SELECT sd."startBatch", 
    COUNT(i.*) AS "totalInstructor",
    COUNT(s.*) AS "totalStudent",
    AVG(sd."testScore") AS "rata-rata",
    FROM "Students" s 
    JOIN "Instructors" i
    ON i."id" = s."instructorId" 
    JOIN "StudentDetails" sd
    ON s."id" = sd."StudentId"
    GROUP BY sd."startBatch"
    HAVING COUNT(i.*) > 2;

```
# Reference:
- https://www.javatpoint.com/dbms-sql-command
- https://www.postgresqltutorial.com/postgresql-cheat-sheet/
- https://www.sqltutorial.org/sql-cheat-sheet/
- https://www.complexsql.com/sql-statements/