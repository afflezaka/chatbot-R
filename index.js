const express=require('express');
const bodyParser=require('body-parser')

const app = express()
app.use(bodyParser.json())


require('./routes/dialogflowRoutes')(app);



const PORT = process.env.PORT || 3009;

app.listen(PORT)