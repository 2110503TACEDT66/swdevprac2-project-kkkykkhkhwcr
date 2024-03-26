"use client"
import React, { FormEvent, useRef } from "react" ;
import { TextField } from "@mui/material";
import BookingButton from "./BookingButton";
import Form from "./DateReserve";
export default function BookingForm () {
    const dentistNameRef = useRef<HTMLInputElement>(null) ;
    const dateTimeRef = useRef<HTMLInputElement>(null) ;
    return (
        <div>
            <TextField inputRef = {dentistNameRef} variant = "standard" name = "dentist-name" label = "dentist-name"/>
            <Form inputRef = {dateTimeRef}></Form>
            <BookingButton dentistNameRef = {dentistNameRef} dateTimeRef={dateTimeRef}/>
        </div>
    )
}