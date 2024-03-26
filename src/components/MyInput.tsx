"use client"
import {Input} from "@nextui-org/react"
import React from "react"
interface InputProps {
    label : string,
    value : string,
    onChange : (value : string) => void,

}

export default function MyInput ({label , value , onChange} : InputProps) {

    return (
        <div>
            <Input type = "text" 
            label = {label}
            onChange = {(e)=>onChange(e.target.value)}
            value = {value}
            ></Input>
        </div>
    )
}