const express=require('express')
const blogRouter=express.Router()
const {Blog}=require('../db')
const jwt=require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const zod=require('zod')

blogRouter.get('/all', async (req, res) => {
    try {
        const allBlogs = await Blog.find({});
        res.status(200).json({
            msg: "All blogs fetched successfully",
            allBlogs: allBlogs
        });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({
            msg: "Failed to fetch blogs",
            error: error.message
        });
    }
});

blogRouter.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        res.status(200).json({ blog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const postblogData=zod.object({
    title:zod.string(),
    description:zod.string(),
    author:zod.string()
})
blogRouter.post('/postblog',async(req,res)=>{
    const token=req.headers.authorization
    if(!token){
        return res.status(401).json({
            msg:"no auth token found,try signing again"
        })
    }
    try {
        const decoded=await jwt.verify(token.split(' ')[1],JWT_SECRET)
        const postedby=decoded.userId
        const {success}=postblogData.safeParse(req.body)
        if(!success){
            return res.status(400).json({
                msg:"Bad Request,invalid input type,please enter again!"
            })
        }
        const {title,description,author}=req.body
        const newBlog=await Blog.create({
            title,
            description,
            postedby,
            author
        })
        const BlogId=newBlog._id
        return res.status(200).json({
            msg:"blog added successfully",
            blogId:BlogId
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"an error occurred,try again"
        })
    }
})


blogRouter.get('/myblogs', async (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            msg: "Authorization failed, no auth token provided, try signing in again!"
        });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET);
        const userId = decoded.userId;
        console.log(userId)
        
        console.log(`Fetching blogs for userId: ${userId}`);
        
        const allBlogs = await Blog.find({ postedby: userId });

        console.log(`Found blogs: ${allBlogs}`);
        
        return res.status(200).json({
            msg: "All blogs posted by you",
            allBlogs: allBlogs
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({
            msg: "An error occurred, please try again!"
        });
    }
});
blogRouter.delete('/delete',(req,res)=>{
    res.status(200).json({
        msg:"blog deleted successfully"
    })
})

blogRouter.put('/update',(req,res)=>{
    res.status(200).json({
        msg:"blog updated successfully"
    })
})

module.exports=blogRouter