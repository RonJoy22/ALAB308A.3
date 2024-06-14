// Importing database functions. DO NOT MODIFY THIS LINE.

import { central, db1, db2, db3, vault } from "./databases.js";

 

function getUserData(id) {

  const dbs = {

    db1: db1,

    db2: db2,

    db3: db3,

  };

}

 

// console.log(data(1));

 

async function getUser(id) {

  const dbNum = await central(id);

  console.log(dbNum);

  // const value = await vault(id);

  // console.log(value);

 

  new Promise(function (myResolve, myReject) {

    vault(id).then((returnedValue) => {

      console.log(returnedValue);

      let userData = returnedValue;

    });

    myResolve("Data received"); // when successful

    myReject("Id Invalid"); // when error

  });
}

 

getUser(7);