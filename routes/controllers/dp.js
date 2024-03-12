import { 
    getAllDp,
    insertDp, 
    getDpByEmail } from "../models/dp.js";

// create dp
export const createDpAccount=(req,res)=>{
    const data = req.body;
    insertDp(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// get single admin
export const showADp = (req,res)=>{
    getDpByEmail(req.params.email,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get all DP
export const allDp=(req,res)=>{
    getAllDp((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
