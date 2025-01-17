const Investment=require('../models/investment.model');
const addInvestment=async(req,res)=>{
    const {value,type,UserId,returns,name}=req.body;
    const val=parseInt(value);
    const ret=parseFloat(returns);
    try{
        const investment=await Investment.create({
            value:val,
            returns:ret,
            type:type,
            userRef:UserId,
            name:name,
        })
        res.status(201).json(investment);
    }
    catch(e){
        console.log(e)
        res.status(500).json('INTERNAL SERVER ERROR');
    }
};
const GetAllInvestments=async(req,res)=>{
    const {userId}=req.params;
    try{
        const allInvestments=await Investment.find(userId);
        res.status(200).json(allInvestments);
    }
    catch(e){
        console.log(e)
        res.status(500).json('UNABLE TO FETCH INVESTMENTS');
    }
}

module.exports = { addInvestment, GetAllInvestments };