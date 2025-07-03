import { useState } from "react";
import {
  BarChart3,
  Gauge,
  Lightbulb,
  Leaf,
  Search,
  Download,
  Apple,
  Smartphone,
  Instagram,
  Twitter,
  Facebook,
  TrendingUp,
  Heart,
  ArrowDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const FeatureCard = ({
    icon: Icon,
    title,
    description,
    bgColor,
  }: {
    icon: any;
    title: string;
    description: string[];
    bgColor: string;
  }) => (
    <div className="w-full max-w-[284px] min-h-[248px] rounded-xl border-4 border-nutri-gray bg-white shadow-lg p-7 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div
        className={`w-16 h-16 rounded-full border-2 border-nutri-gray ${bgColor} flex items-center justify-center mb-4 flex-shrink-0`}
      >
        <Icon className="w-8 h-8 text-black" />
      </div>
      <h3 className="font-architects text-xl text-center mb-4 text-black">
        {title}
      </h3>
      <div className="text-center space-y-1">
        {description.map((line, index) => (
          <p key={index} className="font-quicksand text-base text-black">
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-start justify-center overflow-hidden pt-24">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-architects text-6xl md:text-7xl text-black mb-16 leading-tight">
            What's in Your Snack?
          </h1>

          {/* Character with speech bubble */}
          <div className="relative mb-12">
            <div className="w-48 h-48 mx-auto mb-4 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300 to-orange-400 border-4 border-nutri-gray flex items-center justify-center">
                <div className="text-6xl">🍪</div>
              </div>

              {/* Speech bubble */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="bg-white border-2 border-nutri-gray rounded-3xl px-6 py-4 relative">
                  <p className="font-architects text-xl text-black whitespace-nowrap">
                    Let's find out!
                  </p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-nutri-gray rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/features"
            className="group relative bg-white border-4 border-nutri-gray rounded-xl px-16 py-5 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 inline-block"
          >
            <div className="flex items-center gap-4">
              <BarChart3 className="w-6 h-6 text-black" />
              <span className="font-architects text-2xl text-black">
                Start Scanning
              </span>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-nutri-light-coral border-2 border-nutri-gray rounded-full flex items-center justify-center">
                <ArrowDown className="w-3 h-3 text-black" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-architects text-4xl text-center text-black mb-16">
            Super Awesome Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <FeatureCard
              icon={BarChart3}
              title="Scan Any Product"
              description={[
                "Just point your camera at",
                "any barcode and get instant",
                "nutrition info. Super easy!",
              ]}
              bgColor="bg-nutri-light-blue"
            />

            <FeatureCard
              icon={Gauge}
              title="Instant Rating"
              description={[
                "Get a simple health score",
                "from 1-10 so you know if it's a",
                "thumbs up or down!",
              ]}
              bgColor="bg-nutri-light-green"
            />

            <FeatureCard
              icon={Lightbulb}
              title="Smart Suggestions"
              description={[
                "We'll recommend healthier",
                "alternatives that are just as",
                "yummy!",
              ]}
              bgColor="bg-nutri-light-purple"
            />

            <FeatureCard
              icon={Leaf}
              title="Know What You Eat"
              description={[
                "Understand ingredients in",
                "plain English. No more",
                "mystery chemicals!",
              ]}
              bgColor="bg-nutri-light-coral"
            />
          </div>
        </div>
      </section>

      {/* Try It Out Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-architects text-4xl text-center text-black mb-16">
            Try It Out!
          </h2>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-12">
            <input
              type="text"
              placeholder="Search for a snack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[68px] px-6 pr-16 border-4 border-nutri-gray rounded-xl bg-white font-architects text-lg placeholder:text-gray-400"
            />
            <button className="absolute right-5 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Product Demo Card */}
          <div className="max-w-lg mx-auto bg-white border-4 border-nutri-gray rounded-xl p-7 shadow-lg">
            {/* Product Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-24 border-2 border-nutri-gray rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center text-4xl">
                  🍪
                </div>
              </div>
              <div>
                <h3 className="font-architects text-xl text-black mb-2">
                  Chocolate Chip Cookie
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-5 bg-gray-200 border-2 border-nutri-gray rounded-full overflow-hidden">
                    <div className="w-14 h-full bg-nutri-cream rounded-full"></div>
                  </div>
                  <span className="font-architects text-base text-black">
                    6/10
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-nutri-border-dashed pt-5">
              {/* Nutrition Facts */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="font-architects text-base text-black mb-1">
                    Calories
                  </p>
                  <p className="font-architects text-base text-black">150</p>
                </div>
                <div className="text-center">
                  <p className="font-architects text-base text-black mb-1">
                    Sugar
                  </p>
                  <p className="font-architects text-base text-black">12g</p>
                </div>
                <div className="text-center">
                  <p className="font-architects text-base text-black mb-1">
                    Fat
                  </p>
                  <p className="font-architects text-base text-black">7g</p>
                </div>
              </div>

              {/* Suggestion */}
              <div className="bg-nutri-light-green/30 border-2 border-dashed border-nutri-light-green rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <p className="font-architects text-base text-black">
                    Try homemade oatmeal cookies instead for more fiber and less
                    sugar !!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Speech bubble */}
          <div className="relative mb-12">
            <div className="bg-white border-4 border-nutri-gray rounded-3xl px-8 py-6 inline-block relative">
              <p className="font-architects text-2xl text-black mb-2">
                Your gut will thank
              </p>
              <p className="font-architects text-2xl text-black">you!</p>
              <div className="absolute -bottom-3 left-8 w-8 h-8 bg-white border-4 border-nutri-gray rounded-full"></div>
            </div>
          </div>

          {/* Download Button */}
          <button className="bg-nutri-light-coral border-4 border-nutri-gray rounded-xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 mb-8">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-black" />
              <span className="font-architects text-xl text-black">
                Download Now
              </span>
            </div>
          </button>

          <p className="font-architects text-lg text-black mb-6">
            Available on:
          </p>

          {/* App Store Icons */}
          <div className="flex justify-center gap-4">
            <div className="w-12 h-12 border-2 border-nutri-gray rounded-full bg-white flex items-center justify-center">
              <Apple className="w-6 h-6 text-black" />
            </div>
            <div className="w-12 h-12 border-2 border-nutri-gray rounded-full bg-white flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
