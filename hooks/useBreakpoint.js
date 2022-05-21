import { useEffect, useState } from 'react'

export const useBreakpoint = (breakpoint) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false)

  useEffect(() => {
    // Window Width
    const width = window.innerWidth

    // Breakpoints
    const breakpoints = {
      xxs: 321,
      xs: 576,
      sm: 767,
      md: 992,
      lg: 1080,
      xl: 1200,
    }

    const respondBelow = (breakpoint) =>
      width <= breakpoints[breakpoint]

    const hasBreakpoint = respondBelow(breakpoint)
    setIsBreakpoint(hasBreakpoint)
  }, [breakpoint])

  return {
    isBreakpoint,
  }
}