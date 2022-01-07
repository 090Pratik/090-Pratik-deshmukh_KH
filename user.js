const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype)


const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project3",
  }

  async function connectionCheck() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection success");
    await connection.endAsync();
  }

//connectionCheck();


async function addmsg(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = 'insert into message values(?)';
  await connection.queryAsync(sql,[user.msgs]);

  await connection.endAsync();
  console.log("record added");

}

async function showmsg()
{
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = 'select * from message';

  let output = await connection.queryAsync(sql,[]);

  await connection.endAsync();
  console.log("output");
  return output;

} 

module.exports = {addmsg,showmsg};
  