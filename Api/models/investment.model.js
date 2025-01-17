const mongoose=require("mongoose");

const investmentSchema = new mongoose.Schema({
  userRef: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  value: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  returns: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
});

const Investment = mongoose.model("Investment", investmentSchema);
module.exports=Investment