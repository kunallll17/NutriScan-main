import {
  ChevronDown,
  Flame,
  Dumbbell,
  Zap,
  Milk,
  Candy,
  HelpCircle,
  ThumbsUp,
  ArrowRight,
  Heart,
  Share2,
  RotateCcw,
  Facebook,
  Instagram,
  Twitter,
  Utensils,
  AlertTriangle,
} from "lucide-react";

export default function Compare() {
  const NutritionCard = ({
    title,
    description,
    image,
    nutritionData,
    badgeColor,
    badgeText,
  }: {
    title: string;
    description: string;
    image: string;
    nutritionData: Array<{
      icon: any;
      label: string;
      value: string;
      color: string;
      bgColor: string;
      borderColor: string;
      direction: "good" | "bad" | "neutral";
    }>;
    badgeColor: string;
    badgeText: string;
  }) => (
    <div className="w-[608px] rounded-xl border-4 border-gray-300 bg-white relative">
      <div className="p-7">
        {/* Food Image and Info */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={image}
            alt={title}
            className="w-48 h-48 rounded-lg border-2 border-gray-300 object-cover mb-3"
          />
          <h3 className="font-architects text-2xl text-black text-center mb-1">
            {title}
          </h3>
          <p className="text-gray-600 text-base italic text-center">
            {description}
          </p>
        </div>

        {/* Nutrition Facts */}
        <div className="space-y-4">
          {nutritionData.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 border-dashed ${item.borderColor} ${item.bgColor} p-4 flex items-center justify-between h-20`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}
                >
                  <item.icon
                    className="w-4 h-4"
                    fill={
                      item.label === "Calories"
                        ? "#EF4444"
                        : item.label === "Protein"
                          ? "#3B82F6"
                          : item.label === "Fat"
                            ? "#EAB308"
                            : item.label === "Carbs"
                              ? "#A855F7"
                              : item.label === "Sugar"
                                ? "#EC4899"
                                : "#6B7280"
                    }
                  />
                </div>
                <div>
                  <p
                    className={`font-architects text-sm mb-1 ${item.label === "Calories" ? "text-red-700" : item.label === "Protein" ? "text-blue-700" : item.label === "Fat" ? "text-yellow-700" : item.label === "Carbs" ? "text-purple-700" : item.label === "Sugar" ? "text-pink-700" : "text-gray-600"}`}
                  >
                    {item.label}
                  </p>
                  <p className="font-architects text-2xl text-black">
                    {item.value}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {item.direction === "good" && (
                  <ThumbsUp className="w-5 h-5 text-green-500" />
                )}
                {item.direction === "bad" && (
                  <ArrowRight className="w-5 h-5 text-red-500" />
                )}
                {item.direction === "neutral" && (
                  <HelpCircle className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Food Badge */}
      <div
        className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-19 h-19 rounded-full border-2 ${badgeColor === "bg-yellow-300" ? "border-yellow-600" : "border-teal-600"} ${badgeColor} flex items-center justify-center`}
      >
        <span className="font-architects text-sm text-black text-center leading-tight px-2">
          {badgeText}
        </span>
      </div>
    </div>
  );

  const hamburgerData = [
    {
      icon: Flame,
      label: "Calories",
      value: "540",
      color: "bg-red-300",
      bgColor: "bg-red-100",
      borderColor: "border-red-300",
      direction: "bad" as const,
    },
    {
      icon: Dumbbell,
      label: "Protein",
      value: "25g",
      color: "bg-blue-300",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
      direction: "good" as const,
    },
    {
      icon: Zap,
      label: "Fat",
      value: "29g",
      color: "bg-yellow-300",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-300",
      direction: "neutral" as const,
    },
    {
      icon: Milk,
      label: "Carbs",
      value: "45g",
      color: "bg-purple-300",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-300",
      direction: "bad" as const,
    },
    {
      icon: Candy,
      label: "Sugar",
      value: "9g",
      color: "bg-pink-300",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-300",
      direction: "bad" as const,
    },
    {
      icon: HelpCircle,
      label: "Sodium",
      value: "950mg",
      color: "bg-gray-300",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
      direction: "neutral" as const,
    },
  ];

  const smoothieData = [
    {
      icon: Flame,
      label: "Calories",
      value: "240",
      color: "bg-red-300",
      bgColor: "bg-red-100",
      borderColor: "border-red-300",
      direction: "good" as const,
    },
    {
      icon: Dumbbell,
      label: "Protein",
      value: "10g",
      color: "bg-blue-300",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
      direction: "bad" as const,
    },
    {
      icon: Zap,
      label: "Fat",
      value: "5g",
      color: "bg-yellow-300",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-300",
      direction: "good" as const,
    },
    {
      icon: Milk,
      label: "Carbs",
      value: "42g",
      color: "bg-purple-300",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-300",
      direction: "bad" as const,
    },
    {
      icon: Candy,
      label: "Sugar",
      value: "32g",
      color: "bg-pink-300",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-300",
      direction: "bad" as const,
    },
    {
      icon: HelpCircle,
      label: "Sodium",
      value: "75mg",
      color: "bg-gray-300",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
      direction: "good" as const,
    },
  ];

  return (
    <>
      {/* Main Content */}
      <main className="px-10 py-12">
        <div className="flex flex-col items-center">
          {/* Main Content */}
          <div className="flex gap-8 items-start">
            {/* Choose Food 1 */}
            <div className="w-[304px] space-y-4">
              <h3 className="font-architects text-xl text-black text-center">
                Choose Food #1
              </h3>
              <div className="relative">
                <select className="w-full h-16 px-3 pr-12 border-2 border-dashed border-yellow-600 rounded-lg bg-white bg-opacity-70 font-architects text-lg appearance-none">
                  <option>Select a food...</option>
                  <option>Hamburger</option>
                  <option>Pizza</option>
                  <option>Salad</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 text-black pointer-events-none" />
              </div>
              <div className="flex justify-center mt-4">
                <div className="w-6 h-8">
                  <Utensils className="w-6 h-8 text-yellow-700" />
                </div>
              </div>
            </div>

            {/* Choose Food 2 */}
            <div className="w-[304px] space-y-4">
              <h3 className="font-architects text-xl text-black text-center">
                Choose Food #2
              </h3>
              <div className="relative">
                <select className="w-full h-16 px-3 pr-12 border-2 border-dashed border-teal-600 rounded-lg bg-white bg-opacity-70 font-architects text-lg appearance-none">
                  <option>Select a food...</option>
                  <option>Berry Smoothie</option>
                  <option>Apple</option>
                  <option>Yogurt</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 text-black pointer-events-none" />
              </div>
              <div className="flex justify-center mt-4">
                <div className="w-6 h-8">
                  <Utensils className="w-6 h-8 text-teal-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Results */}
          <section className="mb-16">
            <div className="flex justify-center gap-8 mb-12">
              <NutritionCard
                title="Hamburger"
                description="Classic beef patty with fixings"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/cfb672c508f12ae2053a3a50f642c9fa04269006?width=384"
                nutritionData={hamburgerData}
                badgeColor="bg-yellow-300"
                badgeText="FOOD #1"
              />

              <NutritionCard
                title="Berry Smoothie"
                description="Blended berries with yogurt"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/5f03447756749ac7f19501972e154baba1b92b6b?width=384"
                nutritionData={smoothieData}
                badgeColor="bg-teal-300"
                badgeText="FOOD #2"
              />
            </div>

            {/* Nutritionist's Note */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-gray-700 rounded-xl border-8 border-gray-600 p-8 shadow-2xl relative">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <img
                    src="https://cdn.builder.io/o/assets%2Ff8f187299e8f469787954da064d6bc37%2F583565ca3b99424b94e4c1f5bffed694?alt=media&token=91a43cdd-fc0e-491e-800e-3f9487fba309&apiKey=f8f187299e8f469787954da064d6bc37"
                    alt="Nutritionist character"
                    className="w-32 h-32"
                  />
                </div>
                <h3 className="font-architects text-2xl text-white text-center mb-4 pt-4">
                  Nutritionist's Note
                </h3>
                <p className="text-white text-lg text-center leading-relaxed font-architects">
                  Oof, that smoothie has a lot of sugar! While it has fewer
                  calories and less fat than the burger, watch out for that
                  hidden sugar content. The burger packs more protein but also
                  comes with higher sodium levels. Remember, balance is key!
                </p>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="text-center mb-16">
            <h2 className="font-indie text-3xl text-black mb-8">
              Ready to make a healthy choice?
            </h2>
            <div className="flex justify-center gap-5">
              <button className="bg-green-500 text-white px-9 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="font-architects text-xl">Save Comparison</span>
              </button>

              <button className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                <span className="font-architects text-xl">Share Results</span>
              </button>

              <button className="bg-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                <RotateCcw className="w-5 h-5" />
                <span className="font-architects text-xl">New Comparison</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
