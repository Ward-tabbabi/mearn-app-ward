const express=require("express");
const gameRouter=express.Router();

const Game=require("../models/gameModels");
//------------post-----------//
gameRouter.post("/add",async(req,res)=>{
try {
    const newGame=new Game(req.body);
    const result=await newGame.save();
    res.send({game:result,msg:"game  added successfully "});
} catch (error) {
    console.log(error)
}
});
//------------get all------------///

gameRouter.get("/",async(req,res)=>{
    try {
        
        const result=await Game.find();
        res.send({games:result,msg:"all games "});
    } catch (error) {
        console.log(error)
    }
    });
    //-----------------get element by id -------------///
    gameRouter.get("/:id",async(req,res)=>{
        try {
            
            const result=await Game.findById({_id:req.params.id});
            res.send({games:result,msg:"getted game by id successfully "});
        } catch (error) {
            console.log(error)
        }
        });
  //----------------- update-------------///


      gameRouter.put("/:id",async(req,res)=>{
        try {
            
            const result=await Game.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
            res.send({msg:"updated successfully"});
        } catch (error) {
            console.log(error)
        }
        });
     ///-------------delete---------------///

 gameRouter.delete("/:id",async(req,res)=>{
        try {
            
            const result=await Game.findByIdAndDelete({_id:req.params.id},{$set:{...req.body}});
            res.send({msg:"deleted successfully"});
        } catch (error) {
            console.log(error)
        }
        });



module.exports=gameRouter;