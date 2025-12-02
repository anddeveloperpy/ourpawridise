'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirigir a la página principal después de un breve momento
    router.replace('/')
  }, [router])

  // Mostrar un mensaje breve mientras se redirige
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-muted-foreground">Redirigiendo a la página principal...</p>
      </div>
    </div>
  )
}

