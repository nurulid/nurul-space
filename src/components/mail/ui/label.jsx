import React from 'react'
import { Paperclip } from "lucide-react";
import { capitalizeFirstLetter } from "@/lib/utils";

export const Label = ({attachment, label}) => {
  return (
    <span
      className="inline-flex items-center gap-1 bg-gray-100 py-1 px-3 rounded-full text-gray-500 text-sm"
    >
      {label ? (
        <>
          <span className="w-[8px] h-[8px] rounded-full bg-gray-800"></span>
          {capitalizeFirstLetter(label)}
        </>
      ): null}
      {attachment ? (
        <>
          <Paperclip className="inline-block" size={18} /> +{attachment.length}
        </>
      ): null}
    </span>
  )
}
