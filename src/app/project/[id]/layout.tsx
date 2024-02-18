"use client"
import React from 'react'
import { ReactFlowProvider } from 'reactflow'

export default function layout({children}: {
    children: React.ReactNode
}) {
  return (
    <ReactFlowProvider>
        {children}
    </ReactFlowProvider>
  )
}
