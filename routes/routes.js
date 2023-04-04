import Item from '../model/model.js'
import express from 'express'
import io from '../index.js'
import {deleteInventory, getInventory, getInventoryById, postInventory, updateInventory} from '../controllers/controllers.js'

const router = express.Router();





router.get('/inventory',getInventory);
router.get('/inventory/:id',getInventoryById )
router.post('/inventory', postInventory)
router.put('/inventory/:id',updateInventory)
router.delete('/inventory/:id',deleteInventory) 
  

  export default router