# Sequelize Associations

**Record**

recall materi sequelize

INGAT

========================
- gitignore
- npm init

========================

## 1. [Apa itu associations?](https://sequelize.org/v5/manual/associations.html)

Associations adalah cara mendefinisikan relasi antara 2 entity.

## 2. [Jenis relasi](https://sequelize.org/v6/manual/associations.html)
Relasi itu ada 3 yaitu :
- One To One
- One To Many
- Many To Many

[Referensi jenis relasi](https://database.guide/the-3-types-of-relationships-in-database-design/) :

Secara syntax-nya associations di sequelize ada 4 yang bisa dipakai yang memiliki karakteristiknya masing-masing:
1. BelongsTo, create are ones where the foreign key for the edists on the source model.
2. HasOne, create an association in which the foreign key for the relationship exists on the target model.
3. HasMany, create associations are connecting one source with multiple targets in which the foreign key for the relationship exists on the target model
4. BelongsToMany, dibahas di kelas selanjutnya.

## 3. [Migration One To One](https://sequelize.org/master/manual/migrations.html#migration-skeleton)


Kita akan membuat satu table BaseStatuses

![one to one](./recap.png)

Dengan command: 

```npx sequelize-cli model:generate --name Manager --attributes fullName:string,phone:string,email:string```

```npx sequelize-cli model:generate --name Band --attributes name:string,debutYear:integer,domisili:string```


Jika relasinya adalah **One To One** maka **forign key-nya bisa dipilih salah satu di antara 2 table** tersebut.

Kata kunci:
`DALAM RELASI ONE TO ONE, FOREIGN KEY BISA DILETAKAN DIMANA SAJA`


Menambahkan column ke table.

![one to one](./recap.png)

Dengan command: 

```npx sequelize-cli migration:generate --name add-BandId-to-Managers-table```

Di dalam migration method up, gunakan [addColumn](https://sequelize.org/v6/class/src/dialects/abstract/query-interface.js~QueryInterface.html#instance-method-addColumn) untuk menambah column: 

```js
// codingan migration yang lain
/**
Dibawah ini adalah kita akan membuat kolom BandId bertipe integer dan mereferensi ke table bands kolom id juga onUpdate dan onDeletenya 'cascade'
*/

    return queryInterface.addColumn(
      'Managers',
      'BandId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Bands'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    )

// codingan migration yang lain
```

dan method down, gunakan [removeColumn](https://sequelize.org/master/class/lib/dialects/abstract/query-interface.js~QueryInterface.html#instance-method-removeColumn) untuk menghapus column: 

```js
// codingan migration yang lain
    return queryInterface.removeColumn(
      'Managers',
      'BandId',
      {}
    )

// codingan migration yang lain
```

## 4. [Seed Table](https://sequelize.org/v6/manual/migrations.html#creating-first-seed)

Buat seeder untuk table bands
```
npx sequelize-cli seed:generate --name bands-demo
```

Running seed bands
```
npx sequelize db:seed --seed blablabla-bands-demo
```

## 4. [Model One To One](https://sequelize.org/v6/manual/associations.html#one-to-one-associations)

Karena kita sudah menambah column BandId di table Managers dan juga membuat fk di database, maka di model kita perlu tambahkan juga PokemonId di model Managers, lalu dilanjutkan menambahkan assosiationnya di masing-masing model. 

```
// tambahkan kode berikut di bagian function associate model Band
Band.hasOne(models.Manager, { foreignKey: "BandId" });

// tambahkan kode berikut di bagian function associate model Manager
Manager.belongsTo(models.Band, { foreignKey: "BandId" });
``` 

**BelongsTo ditempatkan di model yang merupakan source model atau tempat foreign key berada.**

**hasOne ditempatkan di model yang merupakan target model atau tempat referensi dari foreign key.**

![one to one](./recap.png)

## 5. [Migration One To Many](https://sequelize.org/v6/manual/associations.html#one-to-many-associations--hasmany-)

Relasi one to many, foregin key di letakan di table yang "many".

Kata kunci:
```DALAM RELASI ONE TO MANY, FOREIGN KEY DILETAKAN DI TABLE MANY```

Buat file migration table PokemonImages dengan command:
```
npx sequelize-cli model:generate --name Song --attributes name:string,duration:integer,genre:string,BandId:integer
```

## 5. [Model One To Many](https://sequelize.org/v6/manual/associations.html#one-to-many-associations--hasmany-)
```
// tambahkan kode berikut di bagian function associate model Band
Band.hasMany(models.Song, { foreignKey: "BandId" });

// tambahkan kode berikut di bagian function associate model Song
Song.belongsTo(models.Band, { foreignKey: "BandId" });
``` 

## 4. [Seed Table](https://sequelize.org/v6/manual/migrations.html#creating-first-seed)

Buat seed untuk table Songs
```
npx sequelize-cli seed:generate --name songs-demo
```

Running seed songs-demo
```
npx sequelize db:seed --seed blablabla-songs-demo
```

## 6. [Relasi di migration dan model itu BERBEDA](https://sequelize.org/v6/manual/associations.html)

Relasi yang ada di migration dan model itu `BERBEDA ALAM`. Relasi yang ada di migration ada di dalam `databasenya` sedangkan relasi yang ada di model itu ada di `aplikasinya`.

![beda alam aplikasi dan database](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/Screenshot_8.png)

## 7. [Show data relation (join)](https://sequelize.org/v6/manual/querying.html#relations---associations)
```js
Band
    .findAll({
        include: [
            { 
                model: Song
            }
        ]
    })
    .then(data => {
        // do something
    })
    .catch(error => {
        // do something
    })
``` 

# Referensi 
- https://sequelize.org/v6/manual/associations.html
- https://sequelize.org/v6/manual/associations.html#one-to-one-associations
- https://sequelize.org/v6/manual/associations.html#one-to-many-associations--hasmany-
- https://sequelize.org/v6/manual/associations.html#foreign-keys
- https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7
- https://medium.com/@MomchilKolev/sequelize-migrations-with-relations-a8fd40a0912b
