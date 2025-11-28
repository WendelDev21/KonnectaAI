import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers-hero"
import { JobListings } from "@/components/job-listings"
import { CultureSection } from "@/components/culture-section"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CareersHero />
      <CultureSection />
      <JobListings />
      <Footer />
    </div>
  )
}
