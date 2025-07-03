import { Button } from "@/components/ui/button";
import {
  Heart,
  Bookmark,
  CheckSquare,
  Lightbulb,
  Edit,
  Camera,
  Check,
  Salad,
  ShoppingCart,
  Leaf,
  ChefHat,
  BookOpen,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F7F3EB] px-4 py-14">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-4">
            <div className="w-40 h-40 rounded-full border-4 border-dashed border-nutri-border-dashed bg-white p-3">
              <img
                src="/mikasa.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute bottom-3 right-3 w-11 h-12 bg-yellow-400 rounded-full border-2 border-nutri-gray flex items-center justify-center shadow-lg">
              <Camera className="w-5 h-5 text-black" />
            </div>
          </div>

          <h1 className="font-caveat text-4xl font-normal text-black mb-4 tracking-wide">
            Mikasa
          </h1>

          <Button
            variant="outline"
            className="border-2 border-nutri-gray bg-white hover:bg-gray-50 rounded-xl px-6 py-3 h-auto"
          >
            <Edit className="w-4 h-4 text-black mr-2" />
            <span className="font-caveat text-lg text-black">Edit Profile</span>
            <div className="w-3 h-3 bg-red-400 rounded-full border border-nutri-gray ml-20 -mr-2 -mt-6"></div>
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* My Preferences Card */}
          <div className="bg-white rounded-xl border-2 border-nutri-gray shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full border-2 border-nutri-gray flex items-center justify-center">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <h2 className="font-caveat text-2xl text-black">
                My Preferences
              </h2>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500" />
                <span className="font-kalam text-base text-black">
                  Vegetarian meals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500" />
                <span className="font-kalam text-base text-black">
                  High protein options
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green-500" />
                <span className="font-kalam text-base text-black">
                  No dairy products
                </span>
              </div>
            </div>

            <div className="text-right">
              <button className="font-caveat text-base text-blue-600 underline hover:text-blue-800">
                Edit preferences
              </button>
            </div>
          </div>

          {/* Saved Products Card */}
          <div className="bg-white rounded-xl border-2 border-nutri-gray shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full border-2 border-nutri-gray flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-caveat text-2xl text-black">
                Saved Products
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 pb-4 border-b border-dashed border-nutri-border-dashed">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Salad className="w-4 h-4 text-green-500" />
                </div>
                <span className="font-kalam text-base text-black">
                  Super Green Salad Mix
                </span>
              </div>
              <div className="flex items-center gap-3 pb-4 border-b border-dashed border-nutri-border-dashed">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-red-500" />
                </div>
                <span className="font-kalam text-base text-black">
                  Protein Smoothie Blend
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-green-500" />
                </div>
                <span className="font-kalam text-base text-black">
                  Organic Chia Seeds
                </span>
              </div>
            </div>

            <div className="text-right">
              <button className="font-caveat text-base text-blue-600 underline hover:text-blue-800">
                View all
              </button>
            </div>
          </div>

          {/* My Goals Card */}
          <div className="bg-white rounded-xl border-2 border-nutri-gray shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full border-2 border-nutri-gray flex items-center justify-center">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-caveat text-2xl text-black">My Goals</h2>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-nutri-gray bg-white rounded-md flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="font-kalam text-base text-black">
                  Drink 8 glasses of water daily
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-nutri-gray bg-white rounded-md flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="font-kalam text-base text-black">
                  Eat 5 servings of vegetables
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-nutri-gray bg-white rounded-md"></div>
                <span className="font-kalam text-base text-black">
                  Try one new healthy recipe weekly
                </span>
              </div>
            </div>

            <div className="text-right">
              <button className="font-caveat text-base text-blue-600 underline hover:text-blue-800">
                Add goal
              </button>
            </div>
          </div>

          {/* Recommendations Card */}
          <div className="bg-white rounded-xl border-2 border-nutri-gray shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full border-2 border-nutri-gray flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-caveat text-2xl text-black">
                Recommendations
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 border border-dashed border-nutri-border-dashed rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-black" />
                  </div>
                  <span className="font-kalam text-base text-black">
                    Farm Fresh Veggie Box
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 border border-dashed border-nutri-border-dashed rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-black" />
                  </div>
                  <span className="font-kalam text-base text-black">
                    "Eat Smart" Recipe Book
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <button className="font-caveat text-base text-blue-600 underline hover:text-blue-800">
                Show more
              </button>
            </div>
          </div>
        </div>

        {/* Notification Toast */}
        <div className="fixed bottom-8 right-8 w-52 bg-yellow-400 border-2 border-nutri-gray rounded-lg shadow-xl p-4">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-white border-2 border-nutri-gray rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <div className="pt-2">
              <p className="font-caveat text-lg text-nutri-gray leading-tight mb-2">
                Keep eating smart, legend 🍏
              </p>
              <p className="font-caveat text-sm text-black leading-tight">
                You're making amazing progress!
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <img
                src="https://cdn.builder.io/o/assets%2Ff8f187299e8f469787954da064d6bc37%2F007557333a7042e3a0162f84931b5a8b?alt=media&token=e56cd917-d9a4-4fe9-b09c-4b2db874a22c&apiKey=f8f187299e8f469787954da064d6bc37"
                alt="Character"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
