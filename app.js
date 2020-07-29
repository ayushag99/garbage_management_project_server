require('dotenv').config()
const express = require('express');
const app = express();
port = process.env.PORT || 8000;

app.get("/test", (req,res)=>{
    res.json({
        "msg":"This is the test route"
    })

})



app.listen(port ,()=>console.log(`App is running on ${port}.....`))


