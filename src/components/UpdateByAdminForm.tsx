// UpdateByAdminForm.tsx
"use client"
import React, { useRef } from "react";
import { TextField } from "@mui/material";
import UpdateButtonAdmin from "./UpdateButtonAdmin";
import Form from "./DateReserve"; // Assuming this is correctly implemented

interface UpdateByAdminFormProps {
  params: { bookId: string };
}

export default function UpdateByAdminForm({ params }: { params: { bookId: string } }) {
  const dentistNameRef = useRef<HTMLInputElement>(null);
  const dateTimeRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <TextField
        inputRef={dentistNameRef}
        variant="standard"
        name="dentist-name"
        label="Dentist Name"
      />
      {/* Assuming Form is a component with an inputRef prop */}
      <Form inputRef={dateTimeRef} />
      <UpdateButtonAdmin params={params.bookId} dentistNameRef={dentistNameRef} dateTimeRef={dateTimeRef} />
    </div>
  );
}
