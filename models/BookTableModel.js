// import connection
import db from "../config/database.js";

// insert Booking
export const insertBooking = (data,result) => {
    db.query("INSERT INTO booktable SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// get all Books
export const getAllBook = (result) => {
    db.query("SELECT * FROM booktable", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
        }
    });
};

//get book status 
export const updateBookStatus = (result) =>{
    db.query("UPDATE booktable SET book_status = book_status + 1 WHERE book_id = ?",id, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
}