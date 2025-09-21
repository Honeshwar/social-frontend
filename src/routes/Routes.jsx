import React, { Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import App from "../App";
import AuthProvider from "../context/authContext";
import MainLoader from "../components/Loaders/MainLoader";

// Pages (lazy loaded)
const HomeView = React.lazy(() => import("../pages/Home/Home"));
const ProfileView = React.lazy(() => import("../pages/Profile/Profile"));
const SignInView = React.lazy(() => import("../pages/SignIn/SignIn"));
const SignUpView = React.lazy(() => import("../pages/SignUp/SignUp"));

/**
 * Root wrapper: Provides Auth + Suspense fallback
 */
const RootWrapper = () => (
  <AuthProvider>
    <Suspense fallback={<MainLoader />}>
      <Outlet />
    </Suspense>
  </AuthProvider>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />, // ✅ Auth & Suspense applied globally
    children: [
      {
        element: (
          <ProtectedRoute isProtectionRequired>
            <App /> {/* App contains your layout */}
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <HomeView /> },
          { path: "profile/:id", element: <ProfileView /> },
        ],
      },
      {
        path: "signin",
        element: (
          <ProtectedRoute isProtectionRequired={false}>
            <SignInView />
          </ProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <ProtectedRoute isProtectionRequired={false}>
            <SignUpView />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
