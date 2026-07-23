"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TestimonialCard, type TestimonialCardProps } from "@/components/cards/testimonial-card"

export function TestimonialCarousel({ testimonials }: { testimonials: TestimonialCardProps[] }) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="px-1">
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.name} className="sm:basis-1/2 lg:basis-1/3">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-end gap-2">
        <CarouselPrevious className="static translate-x-0 translate-y-0" />
        <CarouselNext className="static translate-x-0 translate-y-0" />
      </div>
    </Carousel>
  )
}
