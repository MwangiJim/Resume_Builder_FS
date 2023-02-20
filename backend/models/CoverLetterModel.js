import mongoose from "mongoose";

const CLModel = mongoose.Schema({
    FullName:String,
    JobTitle:String,
    Address:String,
    Email:String,
    PhoneNumber:Number,
    Location:String,
    CompanyName:String,
    Hr_Name:String,
    CoverLetter:String,
    Date:String
})

export default mongoose.model('CLModel',CLModel);