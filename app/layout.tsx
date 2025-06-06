import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mr. Gil's & Grill - Delicious Afghan Cuisine",
  description: "Authentic Afghan grocery store and restaurant serving traditional dishes and fresh ingredients",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Bootstrap CSS directly in the head */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          precedence="default"
        />
        {/* Add Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
          precedence="default"
        />
        {/* Add AOS CSS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" precedence="default" />
      </head>
      <body>{children}</body>
    </html>
  )
}
