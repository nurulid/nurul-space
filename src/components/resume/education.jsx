import React from 'react'

export const Education = ({data}) => {
  return (
    <section>
      <h2 className="title">Education</h2>
      <div>
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-base font-semibold">{data.school}</h3>
          <p className="!text-sm whitespace-nowrap">
            <span>{data.start}</span>
            {'-'}
            <span>{data.end}</span>
          </p>
        </div>
        <p>{data.degree}</p>
      </div>
    </section>
  )
}
