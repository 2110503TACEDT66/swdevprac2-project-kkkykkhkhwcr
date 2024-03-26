"use client"
import postDataToDatabase from "@/libs/userRegister"
import MyInput from "./MyInput"
import FormControl from "@mui/material/FormControl"
import { useState } from "react"

export interface FormData {
    name: string;
    telephone: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterForm () {
    const handleSubmit = async () => {
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const result = await postDataToDatabase(formData);
            console.log("Data successfully pushed to database:", result);
            
        } catch (error) {
            console.error("Failed to push data to database:", error);
        }
    };
    const [formData , setFormData] = useState<FormData>({
        name : "",
        telephone : "",
        email : "",
        password : "",
        confirmPassword : ""
    }) ;
    const handleInputChange = (fieldName: keyof FormData, value: string) => {
        setFormData({
            ...formData,
            [fieldName] : value
        })
    }
    return (
        <div>
            <div className = "flex-center flex justify-evenly">
                <header>Register</header>
            </div>
            <div className = "mt-5">
                <MyInput label = "Name" 
                value = {formData.name} 
                onChange = {(value) => handleInputChange("name" , value)}/>
            </div>
            <div className = "mt-5">
                <MyInput label = "Telephone" 
                value = {formData.telephone} 
                onChange = {(value) => handleInputChange("telephone" , value)}/>
            </div>
            <div className = "mt-5">
                <MyInput label = "Email" 
                value = {formData.email} 
                onChange = {(value) => handleInputChange("email" , value)}/>
            </div>
            <div className = "mt-5">
                <MyInput label = "Password" 
                value = {formData.password} 
                onChange = {(value) => handleInputChange("password" , value)}/>
            </div>
            <div className = "mt-5">
                <MyInput label = "Confirm password" 
                value = {formData.confirmPassword} 
                onChange = {(value) => handleInputChange("confirmPassword" , value)}/>
            </div>
            <div className = "mt-10 justify-evenly flex">
                <button className = "w-[80px] h-[30px] rounded-md bg-indigo-600 hover:bg-sky-50 text-white hover:text-black"
                onClick = {handleSubmit}
                >Sign Up</button>
            </div>
        </div>
    )
}