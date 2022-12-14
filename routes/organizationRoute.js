import express from 'express';
import { createOrganization, deleteOrganization, getAllOrganization,
     getOrganization, updateOrganization } from '../controllers/organizationController.js';
import { verifyToken } from '../middlware/authMiddle.js';

const router = express.Router();


router.get('/',getAllOrganization);
router.get('/:id',getOrganization);
router.post('/create',verifyToken, createOrganization);
router.put('/update/:id',updateOrganization);
router.delete('/delete/:id',deleteOrganization);
router.get('/test',newController)



export default router;
