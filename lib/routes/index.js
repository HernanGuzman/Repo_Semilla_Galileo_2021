import express from 'express';
import test from './RoutTest';

const router = express.Router();

router.use('/api/Test', test);

export default router;
