# MVC Code Challenge

The purpose of this challenge is to assess your coding skill in building a simple REST API end point using Elixir and Phoenix.  Your code will be reviewed for structure and style to see how you approach building back end APIs.

## The Problem
Create a Elixir and Phoenix API endpoint that allows the creation of a car rental record in a database.  The API user will provide the following information:
- `name`: Name of the car (eg. Civic)
- `model`: Model of the car (eg. Honda)
- `start_date`: Start date of the rental
- `end_date`: End date of the rental

When the request comes in validate that `name` and `model` are not blank and that `start_date` is less than `end_date`.  If the inputted values are valid then write a record to the database.  You can use Postgres or Mysql (docker containers are included).

The API should work as follows:

### Successful Request
POST /api/v1/rentals

Request body:
```
{
  "name": "Civic",
  "model": "Honda",
  "start_date": "2019-11-01",
  "end_date": "2019-11-05"
}
```

Response (Status code 200)
```
{
  "id": 1,
  "name": "Civic",
  "model": "Honda",
  "start_date": "2019-11-01",
  "end_date": "2019-11-05"
}
```

### Invalid Request
POST /api/v1/rentals

Request body:
```
{
  "name": "Civic",
  "model": "Honda",
  "start_date": "2020-01-01",
  "end_date": "2010-01-01"
}
```

Response (Status code 422)
```
{
  "error": "Start date must not be greater than the end date"
}
```

### Getting started

This solution required Docker (https://docs.docker.com/engine/install/) and Docker Compose (httpsb://docs.docker.com/compose/install/).  Once you have Docker installed you can boot the elixir container and postgres database container by running:

`bash up.sh`

This run Docker Compose for you.

Once Docker Compose is finished you can SSH into the elixir container and use this container like your local computer.  This has elixir and all of the dependencies already installed for you.

`bash ssh.sh`

Once you're SSHed in using the above command you can try running the following to start the boilerplate elixir app already included.

`bash run.sh`