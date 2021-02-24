Chuchula, Kyrylo

# SportHub  

This project has 2 folders. One to server and another to the client.  Therefore, to run you will need two terminals to run both projects at same time.

Before start install the lastest version of [Node.js](https://nodejs.org/en/)
After instalation finished, open the cmd and type the command

    npm install -g nodemon

After that install the [Sql Server Express](https://www.microsoft.com/en-ca/sql-server/sql-server-downloads)
If there is any trouble to access the database on the machine use [this link](https://knowledgebase.apexsql.com/configure-remote-access-connect-remote-sql-server-instance-apexsql-tools/)
The credentials for the database needs to be changed in the file
[Root]/server/routes/login.js

Now it is time to run the project.

## Client setup

* open the terminal

* type

```
cd client
```

* use the command

```
npm install
npm run serve
```

The prompt will display the access URL.

## Server setup

* open the terminal

* type

```
cd server
```

* use the command

```
npm install
nodemon server.js
```

The prompt will display the access URL.

## Notes
The product page has not been finalized due to the high complexity in the configuration and implementation of the login page with modern authentication parameters. Unfortunately the search process for secure authentication methods and the correct way to implement them took us a lot of time in that first sprint.