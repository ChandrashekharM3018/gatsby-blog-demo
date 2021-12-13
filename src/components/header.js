import React from "react";
import { Link } from 'gatsby'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-6xl font-bold tracking-tight md:tracking-tighter leading-tight mb-25 mt-10">
      <Link to="/" className="hover:underline">
        Blog
      </Link>
      .
    </h2>
  )
}
