# Sequelize Associations

**Record**

## 1. [Apa itu associations?](https://sequelize.org/v5/manual/associations.html)

Associations adalah cara mendefinisikan relasi antara 2 entity.

## 2. [Jenis relasi](https://sequelize.org/v5/manual/associations.html)
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

![one to one](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/Screenshot_5.png)

Dengan command: 

```npx sequelize-cli model:generate --name Pokemon --attributes name:string,description:string,height:float,weight:float```

```npx sequelize-cli model:generate --name BaseStatus --attributes hp:integer,attack:integer,defense:integer,speed:integer```


Jika relasinya adalah **One To One** maka **forign key-nya bisa dipilih salah satu di antara 2 table** tersebut, contohnya adalah jika kita punya 2 table yaitu BaseStatuses dan Pokemons, table BaseStatuses menyimpan hanya menyimpan stat dari pokemon dan table Pokemons menyimpan data umumnya. 

Kata kunci:
`DALAM RELASI ONE TO ONE, FOREIGN KEY BISA DILETAKAN DIMANA SAJA`

Pada kasus ini kita akan taruh foreign key-nya di table BaseStatuses.

Menambahkan column ke table Pokemons

![one to one](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/w4d1-1to1.png)

Dengan command: 

```npx sequelize-cli migration:generate --name add-PokemonId-to-BaseStatuses-table```

Di dalam migration method up, gunakan [addColumn](https://sequelize.org/master/class/lib/dialects/abstract/query-interface.js~QueryInterface.html#instance-method-addColumn) untuk menambah column: 

```js
// codingan migration yang lain
/**
Dibawah ini adalah kita akan membuat kolom userId bertipe integer dan mereferensi ke table Users kolom id juga onUpdate dan onDeletenya 'cascade'
*/

    return queryInterface.addColumn(
      'BaseStatuses',
      'PokemonId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Pokemons'
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
/**
Dibawah ini adalah kita akan membuat kolom userId bertipe integer dan mereferensi ke table Users kolom id juga onUpdate dan onDeletenya 'cascade'
*/

    return queryInterface.removeColumn(
      'BaseStatuses',
      'PokemonId',
      {}
    )

// codingan migration yang lain
```

## 4. [Seed Table](https://sequelize.org/v5/manual/migrations.html#creating-first-seed)

Buat seeder untuk table PokemonStatus
```
npx sequelize-cli seed:generate --name status-starter-pokemon
```

Running seed status-starter-pokemon
```
npx sequelize db:seed --seed blablabla-status-starter-pokemon
```

## 4. [Model One To One](https://sequelize.org/v5/manual/associations.html#one-to-one-associations)

Karena kita sudah menambah column PokemonId di table BaseStatuses dan juga membuat fk di database, maka di model kita perlu tambahkan juga PokemonId di model BaseStatus, lalu dilanjutkan menambahkan assosiationnya di masing-masing model. 

```
// tambahkan kode berikut di bagian function associate model Pokemon
Pokemon.hasOne(models.BaseStatus, { foreignKey: "PokemonId" });

// tambahkan kode berikut di bagian function associate model BaseStatus
BaseStatus.belongsTo(models.Pokemon, { foreignKey: "PokemonId" });
``` 

**BelongsTo ditempatkan di model yang merupakan source model atau tempat foreign key berada.**

**hasOne ditempatkan di model yang merupakan target model atau tempat referensi dari foreign key.**

![one to one](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/Screenshot_6.png)

## 5. [Migration One To Many](https://sequelize.org/v5/manual/associations.html#one-to-many-associations--hasmany-)

Relasi one to many, foregin key di letakan di table yang "many", contohnya adalah jika kita punya 2 table yaitu Pokemons dan PokemonImages, table Pokemons menyimpan hanya data umum pokemon dan table PokemoImages menyimpan data image dari pokemon. Maka foreign key-nya di letakan di table PokemoImages, karena disini 1 pokemon memiliki banyak pokemon image, jadilah Pokemons (one) dan PokemoImages (many).

Kata kunci:
```DALAM RELASI ONE TO MANY, FOREIGN KEY DILETAKAN DI TABLE MANY```

Buat file migration table PokemonImages dengan command:
```
npx sequelize-cli model:generate --name PokemonImage --attributes PokemonId:integer,image:string
```

## 5. [Model One To Many](https://sequelize.org/v5/manual/associations.html#one-to-many-associations--hasmany-)
```
// tambahkan kode berikut di bagian function associate model Pokemon
Pokemon.hasMany(models.PokemonImage, { foreignKey: "PokemonId" });

// tambahkan kode berikut di bagian function associate model PokemonImage
PokemonImage.belongsTo(models.Pokemon, { foreignKey: "PokemonId" });
``` 

![one to many](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/w4d1-1toM.png)

Hasil Akhir ERD

![hasil akhir](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/w4d1-v2.png)


## 4. [Seed Table](https://sequelize.org/v5/manual/migrations.html#creating-first-seed)

Buat seed untuk table PokemonImages
```
npx sequelize-cli seed:generate --name pokemon-image
```

Running seed pokemon-image
```
npx sequelize db:seed --seed blablabla-pokemon-image
```

## 6. [Relasi di migration dan model itu BERBEDA](https://sequelize.org/v5/manual/associations.html)

Relasi yang ada di migration dan model itu `BERBEDA ALAM`. Relasi yang ada di migration ada di dalam `databasenya` sedangkan relasi yang ada di model itu ada di `aplikasinya`.

![beda alam aplikasi dan database](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/Screenshot_8.png)

## 7. [Show data relation (join)](https://sequelize.org/v5/manual/querying.html#relations---associations)
```js
Pokemon
    .findAll({
        include: [
            { 
                model: BaseStatus
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
- https://sequelize.org/v5/manual/associations.html
- https://sequelize.org/v5/manual/associations.html#one-to-one-associations
- https://sequelize.org/v5/manual/associations.html#one-to-many-associations--hasmany-
- https://sequelize.org/v5/manual/associations.html#foreign-keys
- https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7
- https://medium.com/@MomchilKolev/sequelize-migrations-with-relations-a8fd40a0912b
