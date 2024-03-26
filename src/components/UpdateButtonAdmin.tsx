// UpdateButtonAdmin.tsx
"use client"
import React, { RefObject } from "react";
import { useSession } from "next-auth/react";
import updateByAdmin from "@/libs/updateByAdmin";
import {useRouter} from "next/navigation"
import { Router } from "next/router";
interface UpdateButtonAdminProps {
  params: string;
  dentistNameRef: RefObject<HTMLInputElement>;
  dateTimeRef: RefObject<HTMLInputElement>;
}

export default function UpdateButtonAdmin({ params, dentistNameRef, dateTimeRef }: UpdateButtonAdminProps) {
  const { data: session } = useSession();
  const router = useRouter() ;
  async function submit() {
    if (!session || !session.user?.token || !dentistNameRef.current || !dateTimeRef.current) {
      return;
    }

    const dentistName = dentistNameRef.current.value;
    const dateTime = dateTimeRef.current.value;
    const date = new Date(dateTime);
    const BookingForm = {
      date: date,
      dentistName: dentistName
    };

    const booked = await updateByAdmin(session.user.token, params, BookingForm);

    if (booked.success) {
      alert("Successfully updated");
    } else {
      alert("Failed to update");
    }
    router.push("/mybooking") ;
    router.refresh() ;
  }

  return (
    <button
      name="Book Dentist"
      className="my-5 block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
      onClick={submit}
    >
      Update Dentist
    </button>
  );
}
