// import express 
import express, { Router } from "express";
// import functions from controller 
import {
    showFoods,
    showFoodById,
    createFood,
    updateFood,
    deleteFood,
} from "../controllers/food.js";

import { 
    showAUser,
    createAccount,
    getUserId
} from "../controllers/user.js";

import {
    showAAdmin,
    createAdminAccount,
    allAdmin
} from "../controllers/admin.js";

import {
    showADp,
    createDpAccount
} from "../controllers/dp.js";
import {
    addItems,
    getItem,
    updateItem,
    allItems,
    deleteItem,
    deleteItems
} from "../controllers/cart.js";

import {
    createBooking,
    getAllBooks,
    updateBooksStatusById,
    getAllBooksByUser,
    getAllBooksByBookName,
    undoBooksStatusById
} from "../controllers/booktable.js";

import {
    createBillDetails,getBillDetailsById
} from "../controllers/billdetails.js";

import {
    showNewestStatusId,
    createBillStatus, 
    getAllBillsByUser,
    getAllBillsByBill,
    getAllBills,
    updateBillStatus,
    updateBillPaid,
    // cancelBillStatus
    undoBillStatusBtn
} from "../controllers/billstatus.js";
import { format } from "mysql2";
// import initializeChapaPayment from "../chapa-wrapper.js";
// import customerInfo from "../cha.js";
// init express router
import {responseData,} from "../pay.js"
const router = express.Router();

////////////////////////// FOOD ////////////////////////////////
// get all Food
router.get("/api/foods", showFoods);

// get single Food 
router.get("/api/foods/:id", showFoodById);

// create Food
router.post("/api/foods", createFood);

// update Food 
router.put("/api/foods/:id", updateFood);

// delete Food
router.delete("/api/foods/:id", deleteFood);



////////////////////////// USER ////////////////////////////////
// get all user
router.get("/api/users/:email", showAUser);

// create account
router.post("/api/users/", createAccount);

//////////////////////////ADMIN/////////////////////////////////
//get all admin
router.get("/api/admin/:email", showAAdmin);

//create admin account
router.post("/api/admin/", createAdminAccount);
router.post("/api/admindata/", allAdmin);



////////////////////////////DP//////////////////////////
///get deliver person
router.get("/api/dp/:email", showADp);

//create deliver person
router.post("/api/dp/", createDpAccount);


////////////////////////// CART ////////////////////////////////
// add to cart
router.post("/api/cartItem", addItems);

// get a item in cart
router.get("/api/cartItem/:user_id/:food_id", getItem);

// get all items by user id
router.get("/api/cartItem/:id", allItems);

// update item qty
router.put("/api/cartItem/", updateItem);

// delete a item in cart
router.delete("/api/cartItem/:user_id/:food_id", deleteItem);

// delete all items in cart
router.delete("/api/cartItem/:id", deleteItems);



////////////////////////// Booking ////////////////////////
router.post("/api/booktable", createBooking);
// router.get("/api/booktable")
router.get("/api/booktable", getAllBooks);

//put router boooktable
router.put("/api/booktable/:id", updateBooksStatusById);
router.get("/api/booktable/user/:id", getAllBooksByUser);
router.put("/api/booktable/undo/:id", undoBooksStatusById);

// get table data by user name
router.get("/api/booktable/username/:id", getAllBooksByBookName);
router.get("/api/user/:id", getUserId);

////////////////////////// Bill Details ///////////////////////
router.post("/api/billdetails", createBillDetails);
router.get("/api/billdetails/:id", getBillDetailsById);

//////////////////////// Bill Status ////////////////////////
router.get("/api/billstatus/new", showNewestStatusId);
router.post("/api/billstatus", createBillStatus);
router.get("/api/billstatus/user/:id", getAllBillsByUser);
router.get("/api/billstatus/bill/:id", getAllBillsByBill);
router.get("/api/billstatus", getAllBills);
router.put("/api/billstatus/:id", updateBillStatus);
router.put("/api/billstatus/paid/:id", updateBillPaid);

router.put("/api/billstatus/undo/:id", undoBillStatusBtn);

// router.put("/api/billstatus/cancel/:id", cancelBillStatus);


/////////////////////CHAPA PAYMENT API ENDPOINT ////////////////////////////////
// router.post("/api/payment/", initializeChapaPayment);
// router.post("/api/payment/", customerInfo);
// router.post("/api/payment/", initializeChapaPayment);
// ... other imports and setup

/////////////////////PAYMENT////////////////////////////////
router.post('/api/initiate-payment/', responseData);
// router.get('/api/checkout-url/', checkoutUrl);
// router.get('/api/checkout-url/', payData);
export  default router