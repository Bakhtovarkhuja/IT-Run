"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        flex items-center justify-center

        w-11 h-11

        rounded-2xl

        bg-white/10
        dark:bg-white/5

        border border-white/0

        backdrop-blur-xl

        transition hover:scale-105
      "
    >
      {theme === "dark" ? (
        <LightModeIcon size={20} />
      ) : (
        <DarkModeIcon size={20} />
      )}
    </button>
  )
}