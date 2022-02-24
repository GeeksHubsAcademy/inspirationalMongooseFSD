const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
// const FilmsRouter = require('./views/FilmsRouter');
const OrdersRouter = require('./views/OrdersRouter');

router.use('/users', UsersRouter);
// router.use('/films', FilmsRouter);
router.use('/orders', OrdersRouter);

module.exports = router;