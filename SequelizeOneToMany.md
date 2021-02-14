# Sequelize Associations

## 1. [Apa itu associations?](https://sequelize.org/v5/manual/associations.html)

Associations adalah cara mendefinisikan relasi antara 2 entity.

## 2. [Jenis relasi](https://sequelize.org/v5/manual/associations.html)
Relasi itu ada 3 yaitu :
- One To One
- One To Many
- Many To Many

[Referensi jenis relasi](https://database.guide/the-3-types-of-relationships-in-database-design/) :

Secara syntax-nya associations di sequelize ada 4 yang bisa dipakai yang memiliki karakteristiknya masing-masing:
1. BelongsTo
2. HasOne
3. HasMany
4. BelongsToMany

## 3. [Add relation to migration](https://sequelize.org/master/manual/migrations.html#migration-skeleton)
```
// codingan migration yang lain

    /**
    Dibawah ini adalah kita akan membuat kolom userId bertipe integer dan mereferensi ke table Users kolom id juga onUpdate dan onDeletenya 'cascade'
    */

    userId: {
    type: Sequelize.INTEGER,
    references: {
        model: 'Users',
        key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
    },

// codingan migration yang lain
```


## 4. [One To One](https://sequelize.org/v5/manual/associations.html#one-to-one-associations)

Jika relasinya adalah One To One maka forign key-nya bisa dipilih salah satu di antara 2 table tersebut, contohnya adalah jika kita punya 2 table yaitu accounts dan profiles, table accounts menyimpan hanya email dan password dan table profiles menyimpan data detail dari accounts seperti name, nomor telepon, jenis kelamin, tanggal lahir, dll. Kita akan taruh foreign key-nya di table profiles.
```
// tambahkan kode berikut di bagian function associate model account
Account.hasOne(Profile, { foreignKey: "accountId" });

// tambahkan kode berikut di bagian function associate model profile
Profile.belongsTo(Account, { foreignKey: "accountId" });
``` 

**BelongsTo ditempatkan di model yang merupakan source model atau tempat foreign key berada.**

**hasOne ditempatkan di model yang merupakan target model atau tempat referensi dari foreign key.**


## 5. [One To Many](https://sequelize.org/v5/manual/associations.html#one-to-many-associations--hasmany-)
Relasi one to many, foregin key di letakan di table yang "many", contohnya adalah jika kita punya 2 table yaitu categories dan products, table categories menyimpan hanya nama category dan table products menyimpan data dari product seperti categoryId, name, price, description, stock, dll. Maka foreign key-nya di letakan di table products, karena disini 1 category memiliki banyak product, jadilah categories (one) dan products (many).
```
// tambahkan kode berikut di bagian function associate model category
Category.hasMany(Product, { foreignKey: "categoryId" });

// tambahkan kode berikut di bagian function associate model product
Product.belongsTo(Category, { foreignKey: "categoryId" });
``` 

## 7. [Show data relation (join)](https://sequelize.org/v5/manual/querying.html#relations---associations)
```
Product
    .findAll({
        include: [
            { 
                model: Tag
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
- https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7
- https://medium.com/@MomchilKolev/sequelize-migrations-with-relations-a8fd40a0912b