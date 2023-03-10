import mongoose from "mongoose";
const CV_Model = mongoose.Schema({
    JobTitle:String,
    FirstName:String,
    LastName:String,
    Email:String,
    PhoneNumber:Number,
    Country:String,
    City:String,
    Address:String,
    PostalCode:String,
    DrivingLisence:String,
    Nationality:String,
    Edu_SchoolName:String,
    Edu_Degree:String,
    Edu_StartDate:String,
    Edu_EndDate:String,
    Edu_City:String,
    EducationDescription:[],
    Emp_JobTitle:String,
    Employer:String,
    Emp_StartDate:String,
    Emp_EndDate:String,
    Emp_City:String,
    EmploymentDescription:[],
    Hobbies:String,
    Objective:String,
    ProjectTitle:String,
    GithubLink:String,
    ProjectDescription:[],
    Skills:{},
    WebsiteName:String,
    WebsiteLink:String,
})

export default mongoose.model('Cv_Model',CV_Model);