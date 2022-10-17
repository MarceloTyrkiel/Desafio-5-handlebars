import {Router} from 'express'
//import { ContainerMemory } from '../Containers/ContainerMemory.js';
import { ProductApi } from '../Api/ProductApi.js';
const productRouter = Router();

//const productMemory = new ContainerMemory()

productRouter.get('/', (req, res) => {
   const products = ProductApi.getAll()
   
   res.send({ success:true, data:products});
});

productRouter.get('/:id', (req, res) => {
   const { id } = req.params;
   const product = ProductApi.getByid(Number(id));

   if (!product) {
      return res.send({ success:false, data:undefined, message:"product not found"});
   }
   
   res.send({ success:true, data:product});
});

productRouter.post('/', (req, res) => {
   const {title, price, thumbnail} = req.body

   const product = ProductApi.save({ title, price,thumbnail});
   
   res.send({ success:true, data: { id: product.id }});

})

productRouter.put('/:id', (req, res) => {
   const { id } = req.params;
   const {title, price, thumbnail} = req.body

   const updateProduct = ProductApi.updateByid(id,{ title, price,thumbnail});
   
   res.send({ success:true, data: { updated: updateProduct }});

})

productRouter.delete('/:id', (req, res) => {
   const { id } = req.params;
   const product = ProductApi.deleteByid(Number(id));

   if (!product) {
      return res.send({ success:false, data:undefined, message:"product not found"});
   }
   
   res.send({ success:true, data:product});
});




export { productRouter };