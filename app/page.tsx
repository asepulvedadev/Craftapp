import { Hero, ServicesGrid, PortfolioPreview } from "./components/sections"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <PortfolioPreview />
    </div>
  );
}
