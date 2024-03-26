import Link from "next/link"

interface Item {
    link : string ,
    label : string
}

export default function MenuItem (item : Item) {
    return (
        <Link className = "duration-500 hover:bg-sky-200 hover:text-black" href = {item.link}>
            {item.label}
        </Link>
    )
}