"use client"
import DeleteByAdminButton from "./DeleteByAdminButton"
export default function DeleteByAdminForm ({ params }: { params: { bookId: string } }) {
    return (
        <DeleteByAdminButton params={{ bookId: params.bookId }}/>
    )
}