'use client'

import { useEffect, useRef } from 'react'

type IntrinsicTag = keyof React.JSX.IntrinsicElements

interface Props {
  children: React.ReactNode
  delay?: 1 | 2 | 3 | 4
  className?: string
  as?: IntrinsicTag
}

export default function Reveal({ children, delay, className = '', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = [
    'reveal',
    delay ? `reveal-delay-${delay}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  )
}
