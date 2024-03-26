"use client"
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {DatePicker} from "@mui/x-date-pickers" ;
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { RefObject, useRef } from "react";
export default function Form ({inputRef} : {inputRef : RefObject<HTMLInputElement>}) {
    return (
        <form className = "w-3/4 space-y-2 flex">
            <LocalizationProvider dateAdapter = {AdapterDayjs}>
                <DateTimePicker inputRef = {inputRef}/>
            </LocalizationProvider>
        </form>
    )
}