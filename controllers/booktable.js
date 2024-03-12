import {
    insertBooking,
    getAllBook,
    updateBookStatus
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