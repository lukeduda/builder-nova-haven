import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
  };

  const handleSignIn = () => {
    console.log("Sign in clicked", { email, password });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        {/* Left Panel - Form */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:px-40 relative">
          {/* Logo */}
          <div className="absolute top-8 left-8 flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-fundree-gray-700"
            >
              <path
                d="M15.8631 6.93313L11.5434 5.11816L7.21777 6.93313L11.5434 8.7481L15.8631 6.93313Z"
                fill="currentColor"
              />
              <path
                d="M9.59548 4.32577L5.27587 2.5108L0.950195 4.32577L5.27587 6.14074L9.59548 4.32577Z"
                fill="currentColor"
              />
              <path
                d="M15.5848 1.81497L11.2651 0L6.93945 1.81497L11.2651 3.62994L15.5848 1.81497Z"
                fill="currentColor"
              />
              <path
                d="M12.2637 10.285V16.3349L16.9886 14.3385V8.28857L12.2637 10.285Z"
                fill="currentColor"
              />
              <path
                d="M6.10449 8.30066V14.3506L10.8295 16.3349V10.285L6.10449 8.30066Z"
                fill="currentColor"
              />
              <path
                d="M12.9287 4.47691L17.2483 6.29188L21.9249 4.31961L17.6113 2.50464L12.9287 4.47691Z"
                fill="currentColor"
              />
              <path
                d="M16.9886 15.893L12.2637 17.8834V23.9999L16.9886 22.0094V15.893Z"
                fill="currentColor"
              />
              <path
                d="M23.0863 13.3704L18.3613 15.3669V21.4773L23.0863 19.4929V13.3704Z"
                fill="currentColor"
              />
              <path
                d="M10.8295 17.8835L6.10449 15.8992V22.0095L10.8295 24V17.8835Z"
                fill="currentColor"
              />
              <path
                d="M4.69473 15.3548L0 13.3704V19.4869L4.72497 21.4773L4.69473 15.3548Z"
                fill="currentColor"
              />
              <path
                d="M4.69473 7.69557L0 5.71118V11.8216L4.72497 13.8059L4.69473 7.69557Z"
                fill="currentColor"
              />
              <path
                d="M18.4219 7.68951V13.7394L23.1166 11.7611V5.71118L18.4219 7.68951Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-fundree-gray-700 font-semibold">
              fundree.co
            </span>
          </div>

          {/* Footer */}
          <div className="absolute bottom-8 left-8 flex items-center gap-4 text-sm text-fundree-gray-400">
            <span>© 2024 Fundree.co</span>
            <span>Privacy Policy</span>
            <span>Support</span>
          </div>

          {/* Main Form Content */}
          <div className="max-w-md mx-auto w-full space-y-8">
            {/* Header */}
            <div className="space-y-1">
              <div className="text-sm font-medium text-fundree-brand">
                Welcome back
              </div>
              <h1 className="text-3xl font-semibold text-fundree-gray-900 leading-tight">
                Sign in to your account
              </h1>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Google Sign In */}
              <div className="space-y-6">
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-fundree-gray-200 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors font-semibold text-fundree-gray-700"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7663 12.2764C23.7663 11.4607 23.7001 10.6406 23.559 9.83807H12.2402V14.4591H18.722C18.453 15.9494 17.5888 17.2678 16.3233 18.1056V21.1039H20.1903C22.4611 19.0139 23.7663 15.9274 23.7663 12.2764Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008V24.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.50277 14.3003C5.00011 12.8099 5.00011 11.1961 5.50277 9.70575V6.61481H1.51674C-0.185266 10.0056 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3003V14.3003Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45065 6.86173 9.10947 4.74966 12.2401 4.74966V4.74966Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>

                <div className="text-center text-xs text-fundree-gray-400">
                  Or continue with email
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="flex items-center gap-1 text-sm font-medium text-fundree-gray-700">
                    Email
                    <span className="text-fundree-brand">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-fundree-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-fundree-brand focus:border-transparent placeholder:text-fundree-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-1 text-sm font-medium text-fundree-gray-700">
                    Password
                    <span className="text-fundree-brand">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-fundree-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-fundree-brand focus:border-transparent placeholder:text-fundree-gray-400"
                  />
                </div>

                <div className="text-right">
                  <button className="text-sm text-fundree-brand hover:text-blue-600 font-medium">
                    Forgot password?
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <button
                onClick={handleSignIn}
                className="w-full bg-fundree-brand text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-fundree-brand focus:ring-offset-2"
              >
                Sign in
              </button>

              <div className="text-center">
                <span className="text-fundree-gray-400">
                  Don't have an account?{" "}
                </span>
                <Link
                  to="/"
                  className="text-fundree-gray-900 font-semibold hover:text-fundree-brand transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Hero */}
        <div className="hidden lg:flex flex-1 flex-col p-2">
          {/* Hero Image */}
          <div className="flex-1 relative bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-xl overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/assets/b943380111b841f4a7d205bb4ca26c0b/figma-screenshot-41be1b?format=webp&width=800"
              alt="Floating colorful cubes in sky"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Trust Section */}
          <div className="bg-fundree-gray-100 rounded-xl p-12 mt-2">
            <div className="text-center">
              <div className="text-sm font-medium text-fundree-gray-900 mb-5">
                Over +1400 companies trust us
              </div>

              <div className="grid grid-cols-4 gap-x-10 gap-y-4 items-center opacity-70">
                <div className="h-11 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/202d20cfedd7282740c3405b8905765e8bea568f?width=223"
                    alt="SuperHumans"
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <div className="h-11 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/af1af8be6d74297a80e3f4b64b71cf00757ead32?width=223"
                    alt="Marketingio"
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <div className="h-11 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e6b1cc11fdf6f6b4590c97868215877489bdcc71?width=223"
                    alt="Polar Boost"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="h-11 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e99103a28c99134414b00908e5e43919f40ee868?width=198"
                    alt="Mindeo"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="h-11 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fb70e95704839f1d4890ceda7d8ca76ad410a7ce?width=223"
                    alt="Turncast"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="h-11 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/792a5ccef7e38a67212085267fc6bcc67d86871d?width=223"
                    alt="Piguet & Son"
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <div className="h-11 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f4c6f64db1733e3a41cad54b3358e4a9e9a34865?width=223"
                    alt="Brulafine"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="h-11 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/180c33a9dead48acfa88439a8f10d667600dfe6b?width=223"
                    alt="PopArt Blocks"
                    className="h-11 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
