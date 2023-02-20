import CvModel from "../models/CvModel.js";

 async function createCV(req,res){
    const{
        jobtitle,  firstname, lastname,  email,
        phonenumber,  country,  city,  address,  postalcode,
        drivinglisence, objective,
        E_Jobtitle, E_Employer, E_startdate, E_Enddate,  E_City, E_Description, 
        Edu_SchoolName,Edu_Degree, Edu_Startdate,  Edu_Enddate, Edu_City,Edu_Description,
        WebSiteName,WebsiteLink,skills,hobbies,projectTitle,projectLink,projectDescription
    } = req.body;
    if(!jobtitle && !firstname && !lastname){
        return res.status(400).json({'msg':'Error creating CV'})
    }
    else{
        const newCv = await CvModel.create({
            JobTitle:jobtitle,FirstName:firstname,LastName:lastname,Email:email,PhoneNumber:phonenumber,Country:country,City:city,
            Address:address,
            PostalCode:postalcode,DrivingLisence:drivinglisence,Objective:objective,Emp_JobTitle:E_Jobtitle, Employer:E_Employer,
            Emp_StartDate:E_startdate,Emp_EndDate:E_Enddate,Emp_City:E_City, EmploymentDescription:E_Description,
            Edu_SchoolName:Edu_SchoolName, Edu_Degree:Edu_Degree,Edu_StartDate:Edu_Startdate,Edu_EndDate:Edu_Enddate,
            Edu_City:Edu_City,EducationDescription:Edu_Description, WebsiteName:WebSiteName,WebsiteLink:WebsiteLink,
            Skills:skills,Hobbies:hobbies, ProjectTitle:projectTitle,GithubLink:projectLink,ProjectDescription:projectDescription
        })
        //console.log(newCv);
        return res.status(201).json({'message':newCv})
    }
}
//fetch Cv details
async function fetchCVDetails(req,res){
    const foundCV = await CvModel.find();
    if(!foundCV){
        return res.status(500).json({'msg':'No Details Found'})
    }
    else{
        //console.log(foundCV);
        return res.status(200).json({'msg':foundCV})
    }
}
//update CV details

async function updateCVDetails(req,res){
    const {id}=req.params;
    const{jobtitle,  firstname, lastname,  email,
        phonenumber,  country,  city,  address,  postalcode,
        drivinglisence, objective,
        E_Jobtitle, E_Employer, E_startdate, E_Enddate,  E_City, E_Description, 
        Edu_SchoolName,Edu_Degree, Edu_Startdate,  Edu_Enddate, Edu_City,Edu_Description,
        WebSiteName,WebsiteLink,skills,hobbies,projectTitle,projectLink,projectDescription
    } = req.body;
    if(!id){
        return res.status(500).json({'msg':'unable to update try again later...'})
    }
    else{
        const updatedCV = await CvModel.findByIdAndUpdate(id,{$set:{
            JobTitle:jobtitle,FirstName:firstname,LastName:lastname,Email:email,PhoneNumber:phonenumber,Country:country,City:city,
            Address:address,
            PostalCode:postalcode,DrivingLisence:drivinglisence,Objective:objective,Emp_JobTitle:E_Jobtitle, Employer:E_Employer,
            Emp_StartDate:E_startdate,Emp_EndDate:E_Enddate,Emp_City:E_City, EmploymentDescription:E_Description,
            Edu_SchoolName:Edu_SchoolName, Edu_Degree:Edu_Degree,Edu_StartDate:Edu_Startdate,Edu_EndDate:Edu_Enddate,
            Edu_City:Edu_City,EducationDescription:Edu_Description, WebsiteName:WebSiteName,WebsiteLink:WebsiteLink,
            Skills:skills,Hobbies:hobbies, ProjectTitle:projectTitle,GithubLink:projectLink,ProjectDescription:projectDescription
        }})
        //console.log(updatedCV);
        return res.status(200).json({'msg':updatedCV})
    }
}

//delete CV

async function deleteCv(req,res){
    const {id}=req.params;
    if(!id){
        return res.status(500).json({'msg':'unable to delete try again later...'})
    }
    else{
        const deletedFile = await CvModel.findByIdAndDelete(id);
       // console.log(deletedFile)
        return res.status(200).json({'msg':deletedFile})
    }
}

export {createCV,fetchCVDetails,deleteCv,updateCVDetails}