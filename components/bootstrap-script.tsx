"use client"

import { useEffect } from "react"

export default function BootstrapScript() {
  useEffect(() => {
    // Load Bootstrap JS
    const bootstrapScript = document.createElement("script")
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    bootstrapScript.async = true
    document.body.appendChild(bootstrapScript)

    // Load AOS JS and initialize
    const aosScript = document.createElement("script")
    aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js"
    aosScript.async = true
    aosScript.onload = () => {
      // Initialize AOS when loaded - access from window object
      if (typeof window !== "undefined" && (window as any).AOS) {
        ;(window as any).AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        })
      }
    }
    document.body.appendChild(aosScript)

    // Cleanup function
    return () => {
      if (document.body.contains(bootstrapScript)) {
        document.body.removeChild(bootstrapScript)
      }
      if (document.body.contains(aosScript)) {
        document.body.removeChild(aosScript)
      }
    }
  }, [])

  return null
}
