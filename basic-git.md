# Command Line And GIT

Prerequesite:
- Install GIT (https://git-scm.com/downloads)

## 1. Command Line
A series of commands that we typed into terminal work inside a computer.

Basic command:
- pwd, print working directory
- ls, list files & folder in current directory
- cd, change directory
- touch <filename>, create a file
- mkdir <foldername>, create a folder
- clear / cls

## 2. Git
Git is a free and open source distributed version control system.
Intinya git ini merekam semua perubahan yang terjadi pada file dalam repo dan kita dapat menyimpan setiap perubahannya, sehingga kita bisa kembali ke versi sebelumnya jika mau.

## 3. Basic Git Config
run this command in terminal:
```git config –global user.name "Juned The Geming And Code"```
```git config –global user.email "junedtamvhan@gmail.com"```

## 4. Three State File in Git
1. Modified, kita mengubah file tapi belum disimpan secara permanen ke repository
2. Staged, kita menandai modifikasi yang kita lakukan terhadap file yang akan disimpan secara permanen ke repository
3. Committed, file sudah aman disimpan di repository


## 5. git clone
Clone atau download repo dari git server ke local
```git clone <url>```

## 6. git checkout -b
Membuat branch baru dan pindah ke branch tersebut
```git clone checkout -b <namaBranchBaru>```

## 7. git status
Melihat status file
```git status```

## 8. git add
Merubah file dengan status modified ke staged
```git add <namaFile>```

per-file: git add index.md
all file: git add .

## 9. git commit -m 
Merubah file dengan status staged ke commited, setelah git commit ini dijalankan maka file yang telah kita ubah akan disimpan didalam data git
```git commit -m <message>```

## 10. git push origin
Meng-upload hasil dari perubahan yang ada di local ke git server
```git push origin <namaBranch>```

Referensi:
- https://www.youtube.com/watch?v=fQbTeNX1mvM
- https://www.youtube.com/playlist?list=PL64Qn3RNic5MUyo17z0Yw3nJXlXm9e0Yb
