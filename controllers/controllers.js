import Item from "../model/model.js";
import io from '../index.js'



export const getInventory = ('/inventory', async (req, res) => {
    try {
        const item = await Item.find();
        if(!item)return res.status(404).json({message: 'user does not exist'});
        
        res.status(200).json(item);
    } catch (error) {
        console.log(error)
    }
   
  });
  
  export const getInventoryById = ('/inventory/:id', async (req, res) => {
    const item = await Item.findById(req.params.id)
    
    try {
        
        if(!item) return res.status(404).json({message: 'user does not exist'});
       
            res.status(200).json(item);
        
        
       
    } catch (error) {
        console.log(error)
    }
  });
  
  export const postInventory =('/inventory', async (req, res) => {
    try {
        const item = new Item(req.body);
    
    await item.save();
    io.emit('itemAdded', item);
    res.status(200).json(item);
        
    } catch (error) {
        console.log(error)
    
  }});
  
  export const updateInventory =('/inventory/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        if(!item) return res.status(404).json({message: 'user does not exist'});
        
        io.emit('itemUpdated', item);
           res.status(200).json(item);
        
    } catch (error) {
        console,log(error)
    }
    
  });
  
  export const deleteInventory =('/inventory/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if(!item) return res.status(404).json({message: 'user does not exist'});
        
        io.emit('itemDeleted', item);
        res.status(200).json(item );
    } catch (error) {
        console.log(error)
    }
    
  });

 