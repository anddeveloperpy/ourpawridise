import Image from "next/image"

export function ImageSection() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-2xl mx-auto flex justify-center">
        <Image
          src="/CollagePerros.png"
          alt="Collage of dogs and pets"
          width={400}
          height={300}
          className="w-auto h-auto max-w-full object-contain"
          priority
          unoptimized
        />
      </div>
    </section>
  )
}
