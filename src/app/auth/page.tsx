"use client";
import React, { useState } from "react";
import Link from "next/link";
import RedirectIfAuth from "./component/RedirectIfAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { AppProviders } from "../providers";
import { useAppDispatch } from "@/Redux/store";
import { loginSuccess } from "@/Redux/slices/authSlice";

import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

type LoginForm = {
  lmobile: string;
  password: string;
};

type SignupForm = {
  fullName: string;
  mobile: string;
  email?: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export default function Page() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginForm>({ mode: "onChange" });

  const {
    register: signupRegister,
    handleSubmit: handleSignupSubmit,
    watch,
    formState: { errors: signupErrors },
  } = useForm<SignupForm>({ mode: "onChange" });
 const termsChecked = watch("terms", false);
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  const mobile = watch("mobile", "");
  const fullName = watch("fullName", "");
  
  const isFormValid =
  fullName.trim() !== "" &&
  mobile.trim() !== "" &&
  password.trim() !== "" &&
  confirmPassword.trim() !== "" &&
  password === confirmPassword &&
  termsChecked;


  const onLogin: SubmitHandler<LoginForm> = (data) => {
    dispatch(
      loginSuccess({
        user: { name: "Utsav" },
        token: "fake_jwt_token_123",   
      })
    );
  };


  const onSignup: SubmitHandler<SignupForm> = (data) => {
    setLoading(true);
    console.log("Signup Data:", data);
    setTimeout(() => setLoading(false), 1500);
  };

 

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return (
    <AppProviders>
      <RedirectIfAuth />
      
      <div className="flex items-center justify-center min-h-screen bg-[#b34400]/20 px-4">
        <div className="w-full max-w-md md:max-w-lg bg-white border border-gray-300 px-6 py-8 md:px-10 md:py-10 rounded-3xl shadow-xl">


          <div className="flex gap-2 mb-6 bg-[#b04400]/10 rounded-2xl p-1">
            {["login", "signup"].map((tab) => (
              <div
                key={tab}
                className={`flex-1 text-center font-semibold py-3 rounded-2xl cursor-pointer transition-all duration-300 ${activeTab === tab
                    ? "bg-[#b04400] text-white shadow-md scale-105"
                    : "text-gray-600 hover:text-[#b04400]"
                  }`}
                onClick={() => setActiveTab(tab as "login" | "signup")}
              >
                {tab === "login" ? "Login" : "Sign Up"}
              </div>
            ))}
          </div>

          {/* Login Form */}
          {activeTab === "login" ? (
            <form key="loginForm" className="flex flex-col gap-4" onSubmit={handleLoginSubmit(onLogin)}>
              <Input
                {...loginRegister("lmobile", {
                  required: "Mobile is required",
                  pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
                })}
                type="text"
                label="Mobile"
                placeholder="Enter your mobile"
                important
              />
              {loginErrors.lmobile && <p className="text-red-600 text-sm">{loginErrors.lmobile.message}</p>}

              <Input
                {...loginRegister("password", {
                  required: "Password is required",
                  pattern: { value: passwordPattern, message: "Password must be 8+ chars, include uppercase, lowercase, number & special char" }
                })}
                type="password"
                label="Password"
                placeholder="Enter your password"
                important
              />
              {loginErrors.password && <p className="text-red-600 text-sm">{loginErrors.password.message}</p>}

              <div className="text-right mt-1">
                <Link href="/auth/forgotpass" className="text-[#b04400] text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" text={loading ? "Processing..." : "Login"} disabled={loading} />
            </form>
          ) : (
            /* Signup Form */
            <form  key="signupForm" className="flex flex-col gap-4" onSubmit={handleSignupSubmit(onSignup)}>
              <Input
                {...signupRegister("fullName", { required: "Full Name is required" })}
                type="text"
                label="Full Name"
                placeholder="Enter Your Name"
                important
              />
              {signupErrors.fullName && <p className="text-red-600 text-sm">{signupErrors.fullName.message}</p>}

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-1">
                  <Input
                    {...signupRegister("mobile", {
                      required: "Mobile number is required",
                      pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
                    })}
                    type="text"
                    label="Mobile Number"
                    placeholder="Mobile Number"
                    important
                  />
                  {signupErrors.mobile && <p className="text-red-600 text-xs mt-1">{signupErrors.mobile.message}</p>}
                </div>
                <div className="flex-1">
                  <Input
                    {...signupRegister("email", {
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" }
                    })}
                    type="email"
                    label="Email (Optional)"
                    placeholder="example@gmail.com"
                  />
                  {signupErrors.email && <p className="text-red-600 text-xs mt-1">{signupErrors.email.message}</p>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-1">
                  <Input
                    {...signupRegister("password", {
                      required: "Password is required",
                      pattern: { value: passwordPattern, message: "Password must be 8+ chars, include uppercase, lowercase, number & special char" }
                    })}
                    type="password"
                    label="Password"
                    placeholder="Enter password"
                    important
                  />
                  {signupErrors.password && <p className="text-red-600 text-xs mt-1">{signupErrors.password.message}</p>}
                </div>
                <div className="flex-1">
                  <Input
                    {...signupRegister("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) => value === password || "Passwords do not match",
                      pattern: { value: passwordPattern, message: "Password must be 8+ chars, include uppercase, lowercase, number & special char" }
                    })}
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm password"
                    important
                  />
                  {signupErrors.confirmPassword && <p className="text-red-600 text-xs mt-1">{signupErrors.confirmPassword.message}</p>}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <input
                  type="checkbox"
                  id="terms"
                  {...signupRegister("terms", { required: true })}
                  className="w-4 h-4 text-[#b04400]  rounded-full "
                />
                <label htmlFor="terms" className="text-gray-700 text-sm">
                  I agree to the
                  <span className="text-[#b04400] ml-1">Terms & Conditions</span> &
                  <span className="text-[#b04400] ml-1">Privacy & Policy</span>
                </label>
              </div>

              <Button type="submit" text={loading ? "Processing..." : "Sign Up"} disabled={!isFormValid || loading} />
            </form>
          )}
        </div>
      </div>
    </AppProviders>
  );
}
