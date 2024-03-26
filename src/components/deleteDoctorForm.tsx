"use client"
import DeleteByAdminButton from "./DeleteByAdminButton"
import DeleteDoctorButton from "./deleteDoctorButton"
export default function DeleteDoctorForm ({ params }: { params: { bookId: string } }) {
    return (
        <DeleteDoctorButton params={{ bookId: params.bookId }}/>
    )
}