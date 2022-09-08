import express from 'express';
import mongoose from 'mongoose';
import { Organization } from '../models/organizationModel.js';


//create a new organization
export const createOrganization = async(req, res) => {
        try {
            const org = new Organization(req.body); 

            await org.save();
            res.json({
                message:"Organization created successfully",
                data: org
            })
        } catch (error) {
            console.error(error.message);
        }
}

//get all organization
export const getAllOrganization = async(req, res) => {
    try {
        const org = await Organization.find();
        
        if(org){
            res.send(org);
        }else{
            res.send("No Organization found");
        }
    }catch (error) {
        console.error(error.message);
    }
}

//get a single organization
export const getOrganization = async(req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
           return res.json({ 
            message:"Organization not found"
        });
        }
        const id = req.params.id;
        const org = await Organization.findById(id);
        if(org){
            res.send(org);
        }
    } catch (error) {
        console.error(error.message);
    }
}

//update an organization
export const updateOrganization = async(req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
           return res.json({ 
            message:"Organization not found"
        });
        }
        const id = req.params.id;
        const org = await Organization.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if (org) {
            res.json({
                message:"Organization updated successfully",
                data: org
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}

//delete organization
export const deleteOrganization = async(req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
           return res.json({ 
            message:"Organization not found"
        });
        }
        const id = req.params.id;
        const org = await Organization.findByIdAndDelete(id);
        if(org){
            res.json({
                message:"Organization deleted successfully"});
        }
    } catch (error) {
        console.error(error.message);
    }
}
































// router.get('/', async(req, res) => {  
//     try {
//     const org = await User.find({});

//     if(org){
//         res.status(200).send(org);
//     }else{
//         res.status(404).send("No organization found");
//     }
//     } catch (error) {
//       res.status(500).send(error);
//     }
// })



// router.get('/:id', async(req, res) => {  
//     try {
//     const org = await User.findById(req.params.id);

//     if(org){
//         res.status(200).send(org);
//     }else{
//         res.status(404).send("Organization not found");
//     }
//     } catch (error) {
//       res.status(500).send(error);
//     }
// })


// router.post('/create', async(req, res) => {
//     const organization = new User(req.body);
  
//     try {
//       await organization.save();
//       res.status(201).send(organization);
//     } catch (error) {
//       res.status(500).send(error);
//     }
// })


// router.put('/:id', async(req, res) => {  
//     const org = await User.findById(req.params.id);
//     try {

//     if(org){
//      const updatedOrg = await User.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true
//         })
//         res.status(200).send(updatedOrg);
//     }else{
//         res.status(404).send("Organization not found");
//     }
//     } catch (error) {
//       res.status(500).send(error);
//     }
// })


// router.delete('/:id', async(req, res) => {  
//     try {
//     const org = await User.findByIdAndDelete(req.params.id);

//     if(org){
//         res.status(200).send("Deleted successfully");
//     }else{
//         res.status(404).send("Organization not found");
//     }
//     } catch (error) {
//       res.status(500).send(error);
//     }
// })