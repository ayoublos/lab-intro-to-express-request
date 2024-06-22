const express=require(`express`);
const app=express()

app.get(`/bugs` ,(req,res)=>{
 
    res.send("99 little bugs in the code <a href='http://localhost:8888/bugs/101'>pull one down,patch it around</a>" )
})
app.get(`/bugs/:numberofbugs` ,(req,res)=>{
    let number=req.params.numberofbugs
 if(number>198){
    res.send( "<a href='http://localhost:8888/bugs'>start over</a")
   
    

 }
 else     res.send(`${number} little bugs in the code <a href='http://localhost:8888/bugs/${+number+2}'>pull one down,patch it around</a>`)

})
app.get(`/:verb/:adjective/:noun` ,(req,res)=>{
    let verb=req.params.verb
    let adjective=req.params.adjective
    let noun=req.params.noun
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun||``}!`)
})



module.exports=app

