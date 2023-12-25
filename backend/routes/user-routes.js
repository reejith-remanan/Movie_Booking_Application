const express = require('express');
const userRouter = express.Router;

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signUp);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/login', logIn);
userRouter.get('/bookings/:id', getBookingofUser);
userRouter.get('/:id', getuserById);

module.exports = userRouter;