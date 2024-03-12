import {
    insertBooking,
    getAllBook,
    updateBookStatus,
    getBooksByUser,
    getBooksByBookName,
    undoBookStatus
} from "../models/BookTableModel.js";

// create Booking
export const createBooking=(req,res)=>{
    const data = req.body;
    insertBooking(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get Books
export const getAllBooks=(req,res)=>{
    getAllBook((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


export const updateBooksStatusById = (req, res)=>{
    updateBookStatus( req.params.id, (err, results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get Bills Status
export const getAllBooksByUser=(req,res)=>{
    getBooksByUser(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// getAllBooksByBookName
export const getAllBooksByBookName=(req,res)=>{
    getBooksByBookName(req.params.id,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//undo book status
export const undoBooksStatusById = (req, res)=>{
    undoBookStatus( req.params.id, (err, results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};