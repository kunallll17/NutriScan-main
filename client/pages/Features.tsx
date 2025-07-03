import { useState } from "react";
import {
  User,
  Heart,
  Settings,
  Camera,
  Upload,
  Mic,
  Search,
  BarChart3,
  Lightbulb,
  Share,
} from "lucide-react";

export default function Features() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-18">
        {/* Hero Section */}
        <section className="text-center mb-16 pt-18">
          <div className="relative">
            {/* Magnifying glass icon */}
            <div className="absolute right-[624px] top-[-64px] w-24 h-24">
              <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center border-2 border-gray-400">
                <Search className="w-12 h-12 text-gray-600" />
              </div>
            </div>

            <h1 className="font-indie text-4xl text-black mb-4 pt-8">
              What's in your food?
            </h1>
            <p className="font-indie text-lg text-black mb-8">
              Discover nutrition facts and health insights!
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-6">
              <input
                type="text"
                placeholder="Enter a food item or scan a barcode"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 px-6 pr-20 border-2 border-dashed border-gray-400 rounded-full bg-white font-indie text-lg placeholder:text-gray-400"
              />
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 text-sm">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800">
                <Camera className="w-4 h-4" />
                <span className="font-indie">Take Photo</span>
              </button>
              <span className="text-gray-400">|</span>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800">
                <Upload className="w-4 h-4" />
                <span className="font-indie">Upload Image</span>
              </button>
              <span className="text-gray-400">|</span>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800">
                <Mic className="w-3 h-4" />
                <span className="font-indie">Voice Search</span>
              </button>
            </div>
          </div>
        </section>

        {/* Product Analysis Section */}
        <section className="mb-16">
          <div className="bg-white border-2 border-dashed border-gray-400 rounded-lg p-6">
            <div className="flex gap-6">
              {/* Product Image */}
              <div className="w-[231px] h-[231px] border-2 border-dashed border-gray-400 rounded-lg bg-yellow-100/30 p-4 flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 rounded flex items-center justify-center text-6xl">
                  🥜
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="font-indie text-2xl text-black mb-2">
                  Nature's Path Organic Granola Bar
                </h2>
                <p className="font-indie text-base text-gray-600 mb-6">
                  Honey & Oats Flavor • 35g
                </p>

                <div className="border-t-2 border-b-2 border-dashed border-gray-300 py-4 mb-6">
                  <h3 className="font-indie text-base text-black mb-4">
                    Nutrition Facts (per bar)
                  </h3>

                  {/* Nutrition Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 bg-yellow-100 flex items-center justify-center">
                        <span className="font-indie text-base text-black">
                          130
                        </span>
                      </div>
                      <span className="font-indie text-base text-black">
                        Calories
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 bg-red-100 flex items-center justify-center">
                        <span className="font-indie text-base text-black">
                          9g
                        </span>
                      </div>
                      <span className="font-indie text-base text-black">
                        Sugar
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 bg-blue-100 flex items-center justify-center">
                        <span className="font-indie text-base text-black">
                          3g
                        </span>
                      </div>
                      <span className="font-indie text-base text-black">
                        Fat
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-400 bg-green-100 flex items-center justify-center">
                        <span className="font-indie text-base text-black">
                          4g
                        </span>
                      </div>
                      <span className="font-indie text-base text-black">
                        Protein
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full border border-dashed border-gray-400 bg-green-100/50 font-indie text-sm text-black">
                    Organic
                  </span>
                  <span className="px-3 py-1 rounded-full border border-dashed border-gray-400 bg-blue-100/50 font-indie text-sm text-black">
                    Whole Grain
                  </span>
                  <span className="px-3 py-1 rounded-full border border-dashed border-gray-400 bg-yellow-100/50 font-indie text-sm text-black">
                    Non-GMO
                  </span>
                  <span className="px-3 py-1 rounded-full border border-dashed border-gray-400 bg-purple-100/50 font-indie text-sm text-black">
                    No Artificial Flavors
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-dashed border-gray-400 bg-blue-100/50 hover:bg-blue-100 transition-colors">
                    <Heart className="w-4 h-4 text-black" />
                    <span className="font-indie text-base text-black">
                      Save
                    </span>
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-dashed border-gray-400 bg-green-100/50 hover:bg-green-100 transition-colors">
                    <Share className="w-4 h-4 text-black" />
                    <span className="font-indie text-base text-black">
                      Share
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Health Score Badge */}
            <div className="absolute top-[340px] right-[48px] w-20 h-20 rounded-full border-2 border-dashed border-gray-400 bg-green-100 flex flex-col items-center justify-center">
              <span className="font-indie text-2xl text-black">B+</span>
              <span className="font-indie text-xs text-black">
                Health Score
              </span>
            </div>
          </div>
        </section>

        {/* Nutrition Insights Section */}
        <section className="mb-16">
          <div className="bg-white border-2 border-dashed border-gray-400 rounded-lg p-6 relative">
            {/* Speech bubble character */}
            <div className="absolute -left-8 -top-12 w-38 h-38">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center text-6xl border-2 border-gray-400">
                💬
              </div>
            </div>

            <h3 className="font-indie text-xl text-black mb-6 text-center">
              Nutrition Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Sugar Content */}
              <div className="border border-dashed border-gray-400 rounded-lg bg-yellow-100/30 p-4">
                <h4 className="font-indie text-base text-black mb-2">
                  Sugar Content
                </h4>
                <p className="font-indie text-base text-black mb-4">
                  This granola bar has 9g of sugar, which is about 36% of your
                  recommended daily sugar intake for a 2,000 calorie diet.
                </p>
                <div className="w-full h-4 bg-white border border-dashed border-gray-400 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-red-200/70"></div>
                </div>
              </div>

              {/* Whole Grain Benefits */}
              <div className="border border-dashed border-gray-400 rounded-lg bg-green-100/30 p-4">
                <h4 className="font-indie text-base text-black mb-2">
                  Whole Grain Benefits
                </h4>
                <p className="font-indie text-base text-black mb-4">
                  Whole grains contain fiber that helps with digestion and can
                  help maintain steady blood sugar levels throughout the day.
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center text-3xl">
                    🌾
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="border border-dashed border-gray-400 rounded-lg bg-blue-100/30 p-4">
              <h4 className="font-indie text-base text-black mb-2">
                Fun Fact!
              </h4>
              <p className="font-indie text-base text-black">
                Honey is the only food that includes all the substances
                necessary to sustain life, including enzymes, vitamins,
                minerals, and water. It's also the only food that doesn't spoil!
              </p>
            </div>
          </div>
        </section>

        {/* Healthier Alternatives Section */}
        <section className="mb-16">
          <h3 className="font-indie text-xl text-black text-center mb-8">
            Healthier Alternatives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Alternative 1 */}
            <div className="bg-white border-2 border-dashed border-gray-400 rounded-lg p-4">
              <div className="border border-dashed border-gray-400 rounded bg-yellow-100/30 p-2 mb-4 h-36 flex items-center justify-center">
                <div className="text-6xl">🥣</div>
              </div>
              <h4 className="font-indie text-base text-black mb-1">
                Homemade Granola Bar
              </h4>
              <p className="font-indie text-sm text-gray-600 mb-3">
                Less sugar, more nuts & seeds
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-dashed border-gray-400 bg-green-100 flex items-center justify-center">
                  <span className="font-indie text-sm text-black">A</span>
                </div>
                <span className="font-indie text-sm text-black">
                  Health Score
                </span>
              </div>
            </div>

            {/* Alternative 2 */}
            <div className="bg-white border-2 border-dashed border-gray-400 rounded-lg p-4">
              <div className="border border-dashed border-gray-400 rounded bg-yellow-100/30 p-2 mb-4 h-36 flex items-center justify-center">
                <div className="text-6xl">🥜</div>
              </div>
              <h4 className="font-indie text-base text-black mb-1">
                Fruit & Nut Mix
              </h4>
              <p className="font-indie text-sm text-gray-600 mb-3">
                Natural sugars, healthy fats
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-dashed border-gray-400 bg-green-100 flex items-center justify-center">
                  <span className="font-indie text-sm text-black">A-</span>
                </div>
                <span className="font-indie text-sm text-black">
                  Health Score
                </span>
              </div>
            </div>

            {/* Alternative 3 */}
            <div className="bg-white border-2 border-dashed border-gray-400 rounded-lg p-4">
              <div className="border border-dashed border-gray-400 rounded bg-yellow-100/30 p-2 mb-4 h-36 flex items-center justify-center">
                <div className="text-6xl">🍫</div>
              </div>
              <h4 className="font-indie text-base text-black mb-1">
                Protein Bar
              </h4>
              <p className="font-indie text-sm text-gray-600 mb-3">
                Higher protein, lower carbs
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-dashed border-gray-400 bg-green-100 flex items-center justify-center">
                  <span className="font-indie text-sm text-black">B+</span>
                </div>
                <span className="font-indie text-sm text-black">
                  Health Score
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
