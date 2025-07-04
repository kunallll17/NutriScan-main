import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import About from "./pages/About";
import Compare from "./pages/Compare";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Layout } from "@/components/layout/Layout";
import Download from "./pages/Download";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout bgColor="bg-[#FFFAF2]">
                <Index />
              </Layout>
            }
          />
          <Route
            path="/features"
            element={
              <Layout bgColor="bg-[#F2FBFD]">
                <Features />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout bgColor="bg-[#F8F5E6]">
                <About />
              </Layout>
            }
          />
          <Route
            path="/compare"
            element={
              <Layout>
                <Compare />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout bgColor="bg-[#F8F3E6]">
                <Login />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout bgColor="bg-[#EFF6FF]">
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/download"
            element={
              <Layout>
                <Download />
              </Layout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
