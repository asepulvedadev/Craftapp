import { Hero, ServicesGrid, PortfolioPreview, ContactForm } from "./components/sections"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="py-4">
        <ServicesGrid />
      </div>
      <div className="py-4">
        <PortfolioPreview />
      </div>
      <div className="py-4">
        <ContactForm />
      </div>
    </div>
  );
}
