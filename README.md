# todo api

- you nead to add `.env` folder and add `config.env` __file__ to that dirctory and this your configration


```sh

NODE_ENV="devlopment"
PORT=<Your Port>
DB_STRING=<datebase link>
BASE_URL=<the base url is like => http://localhost:8000>

# envirmont to send the emails
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=465
EMAIL_USER=<Your email>
EMAIL_PASSWORD=<Your password>

```

## cation 

- if you want to send emils use tofactor auth in your gmail acoount

## start up date 

if you nead some dummy data run 

``` sh
npm run add-todo
npm run add-user
npm run delete
```

- `add-user` too add some dummy users 
- `add-todo` too add some dummy todo make sure to add valid mongoo id to the seeder before you create the todos to make the api run correct
- `delete` too delete all data

if you nead more info about the data see the `seeder.js` file