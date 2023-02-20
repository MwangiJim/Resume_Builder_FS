import express from 'express'
import { createCoverLetter, deleteCoverLetter, getCoverLetter, updatecoverletter } from '../controllers/CL_Controller.js';

const routerCL = express.Router();

routerCL.post('/postCoverLetterDetails',createCoverLetter);

routerCL.get('/getCoverLetterDetails',getCoverLetter);

routerCL.put('/updateCoverLetterDetails:id',updatecoverletter);

routerCL.delete('/deletCoverLetter:id',deleteCoverLetter);

export default routerCL;