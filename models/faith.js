import express from 'express';
import { createOrganization, deleteOrganization, getAllOrganization,
     getOrganization, updateOrganization } from '../controllers/organizationController.js';

const router = express.Router();


router.get('/',getAllOrganization);
router.get('/:id',getOrganization);
router.post('/create',createOrganization);
router.put('/update/:id',updateOrganization);
router.delete('/delete/:id',deleteOrganization);



export default router;