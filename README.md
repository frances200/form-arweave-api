<div align="center">
  <a href="https://github.com/frances200/form-arweave-api">
    <img src="API_logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Form Arweave API</h3>

  <p align="center">
    Save form data as an Arweave transaction and in MySQL database
    <br />
    <a href="https://github.com/frances200/form-arweave-api">View Demo</a>
    ·
    <a href="https://github.com/frances200/form-arweave-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/frances200/form-arweave-api/issues">Request Feature</a>
  </p>
</div>

## Build with
This API is built with the following major frameworks:
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/)
* [MySQL](https://mysql.com/)

**Other libraries used are not mentioned in this list*

## Getting Started

This section will explain how to install and run this program. All information needed is explained below.

### Prerequisites
* NPM
```sh
sudo apt install npm
```
```sh
sudo npm install npm@latest -g
```
* MySQL
```sh
sudo apt-get install mysql-server
```
### Installation
1. Clone this repository (or upload files manually)
```sh
git clone https://github.com/frances200/form-arweave-api.git
```
**To clone this way, the repository must be public*
2. Install NPM packages in the root folder of the app
```sh
npm install 
```
3. Rename `.env.example` to `.env` and fill in needed info in the file, example:
```sh
PORT=3000
DATABASE_HOST=127.0.0.1
DATABASE_NAME=example_db
DATABASE_USERNAME=example
DATABASE_PASSWORD=password
```
4. Create database
```sh
mysql -u root -p < {path to .sql file, found in /dao/setup.sql}
```

5. Run `node app.js` found in the root folder

## Usage

In this section you will see everything the API can do and how to interact with all the different functions of this API.

### Fetching data

* **Fetch all data:** <br>`GET: localhost:3000/form`<br><br>
* **Fetch by row ID in database:** <br>`GET: localhost:3000/form/:id`<br><br>
* **Fetch by transaction ID:** <br>`GET: localhost:3000/form/transaction/:id`<br><br>

### Removing data

* **Remove by row ID in database:** <br>`DELETE: localhost:3000/form/:id`<br><br>
* **Remove by transaction ID:** <br>`DELETE: localhost:3000/form/transaction/:id`<br><br>

### Updating data

* **Update by row ID in database:** <br>`PUT: localhost:3000/form/:id`<br><br>
* **Update by transaction ID:** <br>`PUT: localhost:3000/form/transaction/:id`<br><br>

### Inserting data (Also creates transaction)

* **Insert data and create transaction:** <br>`POST: localhost:3000/form`<br><br>
