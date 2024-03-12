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

//update book status 
export const updateBookStatus = (id, result) =>{
    db.query("UPDATE booktable SET book_status = book_status + 1 WHERE book_id = ?",id, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

//undo book status
export const undoBookStatus = (id, result) =>{
    db.query("UPDATE booktable SET book_status = book_status - 1 WHERE book_id = ?",id, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// get all Bills Status
export const getBooksByUser = (id,result) => {
    db.query("SELECT * FROM booktable WHERE user_id = ?",id, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
        }
    });
};



//get getAllBooksByBookName
export const getBooksByBookName = (id,result) => {
    db.query("SELECT * FROM booktable WHERE book_name = ?",id, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,results);
        }
    });
};


