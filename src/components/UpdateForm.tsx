"use client"
import React, { FormEvent, useRef } from "react" ;
import { TextField } from "@mui/material";
import UpdateButton from "./UpdateButton";
import Form from "./DateReserve";
import { useSession } from "next-auth/react";
import getMe from "@/libs/getMe";

export default function UpdateForm () {

    const dentistNameRef = useRef<HTMLInputElement>(null) ;
    const dateTimeRef = useRef<HTMLInputElement>(null) ;
    return (
        <div>
            <TextField inputRef = {dentistNameRef} variant = "standard" name = "dentist-name" label = "dentist-name"/>
            <Form inputRef = {dateTimeRef}></Form>
            <UpdateButton dentistNameRef = {dentistNameRef} dateTimeRef={dateTimeRef}/>
        </div>
    )
}