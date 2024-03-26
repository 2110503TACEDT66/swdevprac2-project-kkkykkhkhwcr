"use client"
import {TagsInput} from "react-tag-input-component";
import {useState , useRef, ChangeEventHandler, ChangeEvent} from "react"
import { TextField } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import { useSession } from "next-auth/react";
import updateDentist from "@/libs/updateDentist";
import { useRouter } from "next/navigation";
export default function UpdateDentistForm ({params} : {params : {dentistId : string}}) {
    const {data:session} = useSession();
    const router = useRouter() ;
    const [selected, setSelected] = useState([""]);
    // const dentistNameRef = useRef<HTMLInputElement>(null) ;
    const [dentist , setDentist] = useState("") ;
    const [number , setNumber] = useState("") ;
    
    async function submit () {
        if (!session || !session.user.token) {
            return ;
        }
        if (!dentist) {
            return ;
        }
        const postDate = {
            dentistName : dentist ,
            experience : number ,
            expertise : selected
        }
        console.log(postDate) ;
        const newDentist = await updateDentist(session.user.token , params.dentistId ,  postDate) ;
        console.log(newDentist) ;
        if (newDentist.success) {
            alert("Update Successfully") ;
        }

        router.push("/doctor") ;
        router.refresh()
    }
    return (
        <div>
          <h1>Add Expertises</h1>
    
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="Expertises"
            placeHolder="enter expertises"
          />
          <em>press enter to add new tag</em>

          <div>
          <TextField className="p-2"
          onChange = {(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDentist(event.currentTarget.value)}
                     value = {dentist}
                     variant="standard"
                     name="dentist-name"
                     label="Dentist Name">
          </TextField>
          </div>
          <div>
          <TextField className="p-2"
            aria-label="Demo number input"
            placeholder="Type the experience period."
            value={`${number}`}
            onChange = {(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setNumber(event.currentTarget.value)}
            />
            </div>
            <button className="block rounded-md bg-blue-500 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" onClick = {submit}>Submit</button>
        </div>
    )
}