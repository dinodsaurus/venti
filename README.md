#Instalacija razvojnog okruženja
* Potrebno je instalirat [brew](http://brew.sh/)
* Pomocu brew-a instaliramo node `brew install node`
* Također instaliramo mongodb `brew install mongodb`
* Kako bi mongo radio potrebno je dodati varijable unutar našeg bash_profile-a
```
export MONGO_PATH=/usr/local/mongodb  
export PATH=$PATH:$MONGO_PATH/bin
```

#Instalacija projekta
* Potrebno je isklonirat projekt `git clone git@github.com:dinodsaurus/venti.git`
* Nakon kloniranja instaliramo sve projektne zavisnosti `npm install`
* Potrebno je instalirat sve frontend zavisnosti`cd app && bower install`
* Pokrenemo mongo bazu sa `mongod`
* Unutar novog terminal prozora pokrenemo node server `cd .. && node server.js`
* Za pokretanje naše frontend aplikacije izvršimo `gulp serve` unutar novog terminal prozora
* Nakon ovog naš projekt bi se uspješno trebao pokrenuti na `http://localhost:3002/`
