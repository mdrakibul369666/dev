import express from "express";
import color from 'cli-color'
const app = express()
const port = process.env.PORT || '4000'
app.listen(port, ()=>{
    console.log(color.green(`server is running in ${port}`));
})
app.get('/' , (take , sent)=>{
    sent.send('hellow node ')
})

