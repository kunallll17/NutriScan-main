import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-[#F8F3E6] flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 text-4xl text-[#6B5B4E] opacity-30 font-indie">
        ✿
      </div>
      <div className="absolute top-40 right-48 text-5xl text-[#6B5B4E] opacity-30 font-indie">
        ☆
      </div>
      <div className="absolute bottom-32 left-40 text-6xl text-[#6B5B4E] opacity-30 font-indie">
        ♪
      </div>
      <div className="absolute bottom-48 right-32 text-4xl text-[#6B5B4E] opacity-30 font-indie">
        ❀
      </div>
      <div className="absolute top-1/2 left-12 text-2xl text-[#6B5B4E] font-indie">
        ✎
      </div>
      <div className="absolute top-1/3 right-12 text-2xl text-[#6B5B4E] font-indie">
        ✿
      </div>
      <div className="absolute bottom-1/3 left-8 text-2xl text-[#6B5B4E] font-indie">
        ♡
      </div>

      {/* Main Login Card */}
      <div className="w-[448px] relative">
        {/* Tab Navigation */}
        <div className="flex rounded-t-xl">
          <button
            className={`flex-1 h-14 px-6 rounded-tl-xl border border-[#6B5B4E] ${
              !isSignUpActive
                ? "bg-white text-[#6B5B4E] border-b-0"
                : "bg-[#E6D9C2] text-[#6B5B4E]"
            } font-indie text-lg transition-all duration-200`}
            onClick={() => setIsSignUpActive(false)}
          >
            Login
          </button>
          <button
            className={`flex-1 h-14 px-6 rounded-tr-xl border border-[#6B5B4E] ${
              isSignUpActive
                ? "bg-white text-[#6B5B4E] border-b-0"
                : "bg-[#E6D9C2] text-[#6B5B4E]"
            } font-indie text-lg transition-all duration-200`}
            onClick={() => setIsSignUpActive(true)}
          >
            Sign Up
          </button>
        </div>

        {/* Main Card Content */}
        <div className="bg-white rounded-b-xl border-x border-b border-[#6B5B4E] shadow-xl p-6">
          {/* Welcome Header */}
          <div className="bg-[#E6D9C2] rounded-2xl p-4 mb-6 text-center">
            <p className="font-indie text-xl text-[#6B5B4E]">
              {isSignUpActive ? "Join the Squad!" : "Welcome Back!"}
            </p>
          </div>

          <div className="flex gap-6">
            {/* Food Character */}
            <div className="flex-shrink-0 w-32 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff8f187299e8f469787954da064d6bc37%2Fb475adf34ebb4eb595ae32df28443147"
                alt="Food character"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Form */}
            <div className="flex-1">
              <form className="space-y-4" onSubmit={handleLogin}>
                {/* Email Field */}
                <div className="relative">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B5B4E]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-12 pl-10 pr-4 bg-[#F8F3E6] border-b-2 border-dashed border-[#6B5B4E] focus:outline-none focus:border-solid placeholder-gray-400 font-comic"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="relative">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B5B4E]">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full h-12 pl-10 pr-10 bg-[#F8F3E6] border-b-2 border-dashed border-[#6B5B4E] focus:outline-none focus:border-solid placeholder-gray-400 font-comic"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B5B4E] hover:text-[#5A4A3D]"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field (only for Sign Up) */}
                {isSignUpActive && (
                  <div className="relative">
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B5B4E]">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full h-12 pl-10 pr-4 bg-[#F8F3E6] border-b-2 border-dashed border-[#6B5B4E] focus:outline-none focus:border-solid placeholder-gray-400 font-comic"
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#F8F3E6] border-2 border-dashed border-[#6B5B4E] rounded-full text-[#6B5B4E] font-indie text-lg hover:bg-[#E6D9C2] transition-colors duration-200"
                  >
                    {isSignUpActive ? "Join now!" : "Log me in!"}
                  </button>
                </div>

                {/* Forgot Password Link (only for Login) */}
                {!isSignUpActive && (
                  <div className="text-center pt-2">
                    <a
                      href="#"
                      className="text-sm text-[#6B5B4E] opacity-70 underline font-indie hover:opacity-100 transition-opacity"
                    >
                      Forgot your password?
                    </a>
                  </div>
                )}

                {/* Terms Text (only for Sign Up) */}
                {isSignUpActive && (
                  <div className="text-center pt-2">
                    <p className="text-xs text-[#6B5B4E] opacity-70 font-indie">
                      By signing up, you agree to our{" "}
                      <a href="#" className="underline hover:opacity-100">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline hover:opacity-100">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
