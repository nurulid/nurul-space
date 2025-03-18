import React from 'react';
import WritingLayout from '@/components/template/WritingLayout';

export const metadata = {
  title: {
    template: "%s | Nurul's website",
    default: "Writings"
  },
  keyword: "ui writing, ui blog, ui web tutorial, ui tutorial, ui tips, nurul insani dewi, nurul insani, nurul, nurul insan, nurul id, nurulid, nurulide"
};

export default function MdxLayout({ children }) {

  return <WritingLayout>{children}</WritingLayout>;
}
