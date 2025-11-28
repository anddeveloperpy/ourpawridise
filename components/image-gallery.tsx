'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaMars, FaVenus } from 'react-icons/fa'
import { cn } from '@/lib/utils'

interface ImageGalleryProps {
    images: string[]
    name: string
    gender: 'Macho' | 'Hembra'
}

export function ImageGallery({ images, name, gender }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src={images[selectedImage] || "/placeholder.svg"}
                    alt={name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-all duration-300"
                    priority
                />
                <div className="absolute top-4 right-4 p-3 bg-white/95 rounded-full shadow-lg transition-all">
                    {gender === 'Macho' ? (
                        <FaMars className="w-6 h-6 text-blue-500" />
                    ) : (
                        <FaVenus className="w-6 h-6 text-pink-500" />
                    )}
                </div>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                    {images.map((img: string, idx: number) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={cn(
                                "relative h-20 sm:h-24 rounded-xl overflow-hidden shadow-md transition-all",
                                "hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                selectedImage === idx
                                    ? "ring-2 ring-primary ring-offset-2 scale-105"
                                    : "opacity-70 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={img || "/placeholder.svg"}
                                alt={`${name} ${idx + 1}`}
                                width={150}
                                height={150}
                                className="w-full h-full object-cover"
                            />
                            {selectedImage === idx && (
                                <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
