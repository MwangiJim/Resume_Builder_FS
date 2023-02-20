import CoverLetterModel from "../models/CoverLetterModel.js";

async function createCoverLetter(req,res){
    const {fullName,jobTitle,address,email,phoneNumber,Location,
    companyName,HR_Name,CoverLetter,date
    } = req.body;
    if(!fullName && !jobTitle && !CoverLetter){
        return res.status(400).json({'msg':'Cannot create Letter without name,jobTitle and letter'})
    }
    else{
        const newLetter = await CoverLetterModel.create({
            FullName:fullName,
            JobTitle:jobTitle,
            Address:address,
            Email:email,
            PhoneNumber:phoneNumber,
            Location:Location,
            CompanyName:companyName,
            Hr_Name:HR_Name,
            CoverLetter:CoverLetter,
            Date:date,
        })
        //console.log(newLetter)
        return res.status(201).json({'msg':newLetter})
    }
}
async function getCoverLetter(req,res){
    const foundCoverletter = await CoverLetterModel.find();
    if(!foundCoverletter){
        return res.status.json({'msg':'No Cover Letter Found'})
    }
    else{
        res.status(200).json({'msg':foundCoverletter})
       // console.log(foundCoverletter);
    }
}

async function updatecoverletter(req,res){
    const {id}=req.params;
    const {fullName,jobTitle,address,email,phoneNumber,Location,
        companyName,HR_Name,CoverLetter,date}=req.body;
    if(!id){
        return res.status(500).json({'msg':'Cannot update the Cover letter'})
    }
    else{
        const updatedCoverLetter = await CoverLetterModel.findByIdAndUpdate(id,{$set:{
            FullName:fullName,
            JobTitle:jobTitle,
            Address:address,
            Email:email,
            PhoneNumber:phoneNumber,
            Location:Location,
            CompanyName:companyName,
            Hr_Name:HR_Name,
            CoverLetter:CoverLetter,
            Date:date,
        }})
       // console.log(updatedCoverLetter);
        return res.status(200).json({'msg':updatedCoverLetter})
    }
}
async function deleteCoverLetter(req,res){
    const{id}=req.params;
    if(!id){
        return res.status(400).json({'msg':'Error deleting File'})
    }
    else{
        const deletedFile = await CoverLetterModel.findByIdAndDelete(id);
        res.status(200).json({'msg':'Cover letter deleted'})
    }
}
export {createCoverLetter,getCoverLetter,deleteCoverLetter,updatecoverletter}