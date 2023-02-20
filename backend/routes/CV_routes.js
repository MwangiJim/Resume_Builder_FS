import express from 'express'
import { createCV, deleteCv, fetchCVDetails, updateCVDetails } from '../controllers/CV_Controller.js';

const router = express.Router();

router.post('/createCV',createCV);

router.get('/getCvDetails',fetchCVDetails);

router.put('/updateCvDetails:id',updateCVDetails);

router.delete('/deleteCvDetails:id',deleteCv);


export default router;