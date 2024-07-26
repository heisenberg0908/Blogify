const express=require('express')
const app=express()
const cors=require('cors')
const userRouter=require('./routes/user')
const blogRouter=require('./routes/blog')

app.use(express.json())
app.use(cors())

app.use('/api/v1/users',userRouter)
app.use('/api/v1/blogs',blogRouter)
const port=3000

app.listen(port,()=>{
    console.log(`app is listeninig to port ${port}`)
})