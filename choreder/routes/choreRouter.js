const express = require("express")
const chore = require("../models/chore.js")
const choreRouter = express.Router()
const Chore = require("../models/chore.js")
// get all
choreRouter.get("/", (req, res, next) => {
  Chore.find((err, chores) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(200)
      .send(chores)
  })
})
// post new chores
choreRouter.post("/", (req, res, next) => {
  const newChore = new Chore(req.body)
  newChore.save((err, savedChore) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(201)
      .send(savedChore)
  })
})
// delete chores
choreRouter.delete("/:choreId", (req, res, next) => {
  Chore.findOneAndDelete({
    _id: req.params.choreId
  }, (err, deletedChore) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(200)
      .send(`Successfully deleted ${deletedChore.choreName} from the list of chores`)
  })
})
//updated chore
choreRouter.put("/updateOne/:choreId", (req, res, next) => {
  Chore.findOneAndUpdate({
    _id: req.params.choreId
  }, req.body, {
    new: true
  }, (err, updatedChore) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(201)
      .send(updatedChore)
  })
})

choreRouter.get("search/:userId", (req, res, next)=>{
    Chore.find((err, foundChores)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        const filteredChores = foundChores.filter((chore)=>chore.user === req.params.userId)
        return res.status(200).send(filteredChores)
    }
)})


choreRouter.put("/resetAll" ,(req, res, next)=>{
  const {weekly, daily, asneeded} = req.query
  const reset = (rate)=>{
    Chore.updateMany({frequency: rate},{user: null, completed: false, available: true},(err, updatedChores)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedChores)
    })}
    if (weekly) reset("weekly")
    if (daily) reset("daily")
    if (asneeded) reset("as needed")
    return("done")
})
module.exports = choreRouter