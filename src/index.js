import express from 'express';
import { productRouter } from './routers/ProductRouter.js';
import handlebars from 'express-handlebars';
import { ViewsRouter } from './routers/ViewsRouter.js'

const PORT = 2400;

const app = express();

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayaout: "main.hbs"
}))

app.set("view engine", "hbs")
app.set("views", './views')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/", ViewsRouter);
app.use('/api/productos', productRouter);

app.listen(PORT, () => console.log("Running on port " +  PORT ));