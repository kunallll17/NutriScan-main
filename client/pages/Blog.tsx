import { useState } from "react";
import {
  Plus,
  Instagram,
  Twitter,
  Facebook,
  Search,
  Tag,
  RefreshCw,
  Dumbbell,
  Brain,
  Utensils,
} from "lucide-react";

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    {
      id: "all",
      label: "All Tips",
      icon: Utensils,
      color: "bg-green-100 border-green-400 text-green-700",
    },
    {
      id: "snacking",
      label: "Snacking",
      icon: Plus,
      color: "border-gray-300 text-gray-700",
    },
    {
      id: "label101",
      label: "Label 101",
      icon: Tag,
      color: "border-gray-300 text-gray-700",
    },
    {
      id: "healthyswaps",
      label: "Healthy Swaps",
      icon: RefreshCw,
      color: "border-gray-300 text-gray-700",
    },
    {
      id: "exercise",
      label: "Exercise",
      icon: Dumbbell,
      color: "border-gray-300 text-gray-700",
    },
    {
      id: "mindfulness",
      label: "Mindfulness",
      icon: Brain,
      color: "border-gray-300 text-gray-700",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Simple Veggie Swaps That Actually Taste Good",
      excerpt:
        "Not all veggie alternatives are created equal! These five swaps won't leave you missing the original versions. My favorite is #3 - I promise you won't even notice the difference!",
      author: "Emma Green",
      date: "June 15, 2023",
      category: "Healthy Swaps",
      categoryColor: "bg-red-400",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebfb21e2f54d97e3cc6c20b1c7f5746ef27ea63d?width=81",
      categoryIcon: Plus,
    },
    {
      id: 2,
      title: "Water Drinking Hacks I Actually Use Daily",
      excerpt:
        "We all know we should drink more water, but how do you actually remember to do it? These simple tricks have helped me double my water intake without even trying!",
      author: "Michael Waters",
      date: "June 10, 2023",
      category: "Mindfulness",
      categoryColor: "bg-blue-400",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3cac67b8b22c4f5b4c349e128b4b7da531d51644?width=81",
      categoryIcon: Brain,
    },
    {
      id: 3,
      title: "Decode Food Labels Like a Nutritionist",
      excerpt:
        "Food labels are deliberately confusing. Learn these 3 quick tricks to spot hidden sugars, misleading serving sizes, and deceptive health claims at a glance!",
      author: "Sarah Johnson",
      date: "June 5, 2023",
      category: "Label 101",
      categoryColor: "bg-yellow-400",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e136428c88fb4660044074d4dd63d0a3e9e06065?width=81",
      categoryIcon: Tag,
    },
    {
      id: 4,
      title: "Snack Drawer Makeover: What I Actually Keep",
      excerpt:
        "Forget the Instagram-perfect snack drawers! Here's my real-life, budget-friendly healthy snack drawer that keeps me satisfied between meals without breaking the bank.",
      author: "David Chen",
      date: "May 28, 2023",
      category: "Snacking",
      categoryColor: "bg-purple-400",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5e451ceb35be18c29db722b68ef35accb9a75e48?width=83",
      categoryIcon: Plus,
    },
    {
      id: 5,
      title: "10-Minute Workouts That Actually Work",
      excerpt:
        "Don't have an hour for the gym? These 10-minute workout snippets can be done anywhere with zero equipment. Mix and match them throughout your day for real results!",
      author: "James Wilson",
      date: "May 22, 2023",
      category: "Exercise",
      categoryColor: "bg-green-400",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8619c45c9d74b5125b7e6c3ec6a65dc7d9c92836?width=81",
      categoryIcon: Dumbbell,
    },
    {
      id: 6,
      title: "Morning Routines That Don't Require Waking at 5AM",
      excerpt:
        "Not a morning person? Me neither! Here's how I created a realistic morning routine that supports my health without forcing myself to be something I'm not.",
      author: "Lisa Park",
      date: "May 15, 2023",
      category: "Mindfulness",
      categoryColor: "bg-pink-400",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/65ffff19591f0fdba1923fae58b9e556cf2618ab?width=81",
      categoryIcon: Brain,
    },
  ];

  const filteredPosts =
    activeFilter === "all"
      ? blogPosts
      : blogPosts.filter(
          (post) =>
            post.category.toLowerCase().replace(/\s+/g, "") === activeFilter,
        );

  const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => (
    <div className="bg-white rounded-lg border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Category Tab */}
      <div className="relative">
        <div
          className={`absolute top-0 right-0 ${post.categoryColor} rounded-bl-lg px-3 py-1 z-10`}
        >
          <div className="w-6 h-6"></div>
        </div>

        {/* Card Content */}
        <div className="bg-gradient-to-r from-gray-100 via-gray-100 to-gray-400 p-6 pt-8">
          {/* Decorative circles */}
          <div className="flex gap-3 mb-4">
            <div className="w-6 h-6 rounded-full border border-gray-400 bg-gray-300"></div>
            <div className="w-6 h-6 rounded-full border border-gray-400 bg-gray-300"></div>
            <div className="w-6 h-6 rounded-full border border-gray-400 bg-gray-300"></div>
          </div>

          {/* Category & Date */}
          <p className="text-green-600 font-caveat text-sm mb-3">
            {post.date} • {post.category}
          </p>

          {/* Title */}
          <h3 className="font-caveat text-2xl text-blue-800 mb-4 underline hover:no-underline cursor-pointer transition-all">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-indie text-gray-700 text-sm leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Author & Read More */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.image}
                alt={post.author}
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <span className="font-kalam text-gray-600 text-sm">
                {post.author}
              </span>
            </div>
            <button className="text-green-600 font-caveat text-lg hover:text-green-700 transition-colors">
              Read more →
            </button>
          </div>

          {/* Category Icon */}
          <div className="absolute top-6 right-6">
            <div className="w-8 h-8 flex items-center justify-center">
              <post.categoryIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <section className="text-center mb-12">
          <h1 className="font-caveat text-5xl md:text-6xl text-green-700 mb-6">
            Healthy Tips for Happy Living
          </h1>
          <p className="font-indie text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Simple, practical health advice scribbled down just for you. No
            complicated diets, just real tips for everyday wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-kalam text-lg hover:bg-green-700 transition-colors">
              Start Reading
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-kalam text-lg hover:bg-green-50 transition-colors">
              Join Newsletter
            </button>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-lg border-2 border-gray-200 shadow-lg p-4">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all ${
                      activeFilter === category.id
                        ? category.color
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="font-caveat text-lg">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-caveat text-xl hover:bg-green-50 transition-colors">
                Load More Healthy Tips
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-green-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-lg border-2 border-green-300 shadow-xl p-8 text-center">
              <h2 className="font-caveat text-3xl text-green-700 mb-4">
                Subscribe to my Healthy Notes!
              </h2>
              <p className="font-indie text-gray-600 mb-8 max-w-lg mx-auto">
                Get fresh healthy tips delivered straight to your inbox. No spam,
                just useful advice!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg font-indie focus:border-green-500 focus:outline-none"
                />
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-kalam hover:bg-green-700 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
