const mongoose=require('mongoose')
const {MONGO_URL}=require('./config')
mongoose.connect(MONGO_URL)

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true}
    
})

const blogSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    author:{type:String,required:true},
    postedby:{type:mongoose.Schema.ObjectId,ref:'User',required:true},
    postedon:{type:Date,default:Date.now()}
})

const User=new mongoose.model('User',userSchema)
const Blog=new mongoose.model('Blog',blogSchema)

module.exports={User,Blog}