'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  imagePath: string
}

interface State {
  hasError: boolean
}

export class ImageErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.warn(`Failed to load image: ${this.props.imagePath}`, error)
  }

  render() {
    if (this.state.hasError) {
      return null
    }

    return this.props.children
  }
}
