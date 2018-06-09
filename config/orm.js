var connection = require("./connection.js");

//helper function for "createPlacesWhere" query
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


var orm = {
  // read users table
  selectWhere: function (tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
      if (err) throw err;
      cb(err, result)
    });
  },

  // create new user
  create: function (tableInput, cols_vals, cb) {
    var queryString = "INSERT INTO ?? set ?";
    connection.query(queryString, [tableInput, cols_vals], function (err, result) {
      if (err) throw err;
      cb(err, result)
    });
  },

  // add place to saved list
    //INSERT INTO places_of_interest (col1, col2, col3...) VALUES (val1, val2, val3...)
  createPlacesWhere: function(table, cols, vals, cb) {
    // insert into places_of_interest (col1, col2, col3) values (?, ?, ?)

    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      // console.log(vals);
      if (err) {
        throw err;
      }
      // console.log("POST - ORM WORKING");
      // console.log(result);
      cb(result);
    });
  },

// pull saved places list
selectPlacesWhere: function(table, condition1, condition2, cb) {
 var queryString = "SELECT * FROM " + table;
 queryString += " WHERE " + condition1;
 queryString += " AND " + condition2;
 console.log(queryString);
 connection.query(queryString, function(err, result) {
   if (err) {
     throw err;
   }
   console.log("GET - selectPlacesWhere ORM WORKING");
   cb(result);
   console.log(result);
 });
},
  // Update to table - adding an additional city or recommendation
  // updatePlacesWhere: function(table, city, condition1, cb) {
  //   var queryString = "UPDATE " + table;
  //   queryString += " SET " + city,
  //   queryString += " WHERE " + condition1;
  //   // queryString += " AND " + condition2;

  //   console.log(queryString);
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log("UPDATE - ORM WORKING + records updated");
  //     cb(result);
  //     console.log(result);
  //   });
  // },

  //Delete city or recommendation from list
  deletePlacesWhere: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE " + condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      // console.log("DELETE - ORM WORKING");
      cb(result);
      // console.log(result);
    });
  },

  //pull cities for favorites dropdown
  selectDistinctCitiesWhere: function(col, table, condition, cb) {
    var queryString = "SELECT DISTINCT " + col;
    queryString += " FROM " + table;
    queryString += " WHERE " + condition;
    // console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      // console.log("GET FAVORITES - ORM WORKING");
      cb(result);
      // console.log(result);
    });
   }

};

// var orm = {

//     //FOR USERS
//     //pull user data
//     selectUserWhere: function (tableInput, colToSearch, valOfCol, cb) {
//         var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//         connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
//           if (err) throw err;
//           cb(err, result)
//         });
//       },
//       //create new user data
//       createUser: function (tableInput, cols_vals, cb) {
//         var queryString = "INSERT INTO ?? set ?";
//         connection.query(queryString, [tableInput, cols_vals], function (err, result) {
//           if (err) throw err;
//           cb(err, result)
//         });
//       },
//     //create new saved place data
//     createPlace: function(table, cols, vals, cb) {
//         var queryString = "INSERT INTO " + table;
//         queryString += " (";
//         queryString += cols.toStirng();
//         queryString += ") VALUES (";
//         queryString += printQuestionMarks(vals.length);
//         queryString += ") ";
//         console.log(queryString);
//     },

//     selectPlacesWhere: function (table, colOne, colTwo, cb) {
//         // select recommendations based on user_id and city
//         // SELECT * FROM table WHERE user_id = (user's id) AND city = (selected city)
//       var queryString = "SELECT * FROM " + table + "WHERE ?? = ? AND ?? = ?";
//       connection.query(queryString, valOfCol, function (err, result) {
//           if (err) throw err;
//           cb(err, result)
//       });
//     },
//     selectUsersWhere: function (table, valOfCol, cb) {
//       // select recommendations based on user_id and city
//       // SELECT * FROM table WHERE user_id = (user's id) AND city = (selected city)
//     var queryString = "SELECT * FROM " + table + "WHERE ?? = ? AND ";
//     connection.query(queryString, valOfCol, function (err, result) {
//         if (err) throw err;
//         cb(err, result)
//     });
//   },
  
  
  
    // // to add saved locations to user's favorite list
    // create: function () { //fix parameters
    //   var queryString = "INSERT INTO places_of_interest "
    // }
  // };
  
  module.exports = orm;