import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'up' | 'left' | 'right' | 'scale'
}

export function ScrollReveal({ children, className = '', delay = 0, animation = 'up' }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  const animationClasses = {
    up: 'scroll-animate',
    left: 'scroll-animate-left',
    right: 'scroll-animate-right',
    scale: 'scroll-animate-scale'
  }

  const delayClasses = delay > 0 ? `stagger-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${delayClasses} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
