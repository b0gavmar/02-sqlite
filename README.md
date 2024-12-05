# 02-sqlite
sqlite feladat

Hozz létre egy API-t, mely a felhasználók adatait kezeli.

A felhasználónalk legyen:
id
firstName
lastName
email, ez lehet a PRIMARY KEY is az id helyett
class

A API végpontjai:
/users - GET az összes felhasználót visszaadja
/users/id - GET egy felhasználó adatait adja vissza
/users - POST egy új felhasználót hoz létre
/users/id - PUT egy felhasználó adatait módosítja
/users/id - DELETE egy felahsználó adatait törli

Készíts Swagger dokumentációt is hozzá, mely elérhető az alábbi végponton
/users/docs
