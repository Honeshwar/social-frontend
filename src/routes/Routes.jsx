import React, { Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import App from "../App";
import AuthProvider from "../context/authContext";
import MainLoader from "../components/Loaders/MainLoader";

// Pages (lazy loaded)
const HomeView = React.lazy(() => import("../pages/Home/Home"));
const ProfileView = React.lazy(() => import("../pages/Profile/Profile"));
const FriendsView = React.lazy(() => import("../pages/Friends/Friends"));
const GroupsView = React.lazy(() => import("../pages/Groups/Groups"));
const MarketplaceView = React.lazy(() =>
  import("../pages/Marketplace/Marketplace")
);
const WatchView = React.lazy(() => import("../pages/Watch/Watch"));
const MemoriesView = React.lazy(() => import("../pages/Memories/Memories"));
const EventsView = React.lazy(() => import("../pages/Events/Events"));
const GamingView = React.lazy(() => import("../pages/Gaming/Gaming"));
const GalleryView = React.lazy(() => import("../pages/Gallery/Gallery"));
const VideosView = React.lazy(() => import("../pages/Videos/Videos"));
const MessagesView = React.lazy(() => import("../pages/Messages/Messages"));
const FundraiserView = React.lazy(() =>
  import("../pages/Fundraiser/Fundraiser")
);
const TutorialsView = React.lazy(() => import("../pages/Tutorials/Tutorials"));
const CoursesView = React.lazy(() => import("../pages/Courses/Courses"));

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
          <ProtectedRoute isProtectionRequired={true}>
            <App /> {/* App contains your layout */}
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <HomeView /> },
          { path: "profile/:id", element: <ProfileView /> },
          { path: "friends", element: <FriendsView /> },
          { path: "groups", element: <GroupsView /> },
          { path: "marketplace", element: <MarketplaceView /> },
          { path: "watch", element: <WatchView /> },
          { path: "memories", element: <MemoriesView /> },
          { path: "events", element: <EventsView /> },
          { path: "gaming", element: <GamingView /> },
          { path: "gallery", element: <GalleryView /> },
          { path: "videos", element: <VideosView /> },
          { path: "messages", element: <MessagesView /> },
          { path: "fundraiser", element: <FundraiserView /> },
          { path: "tutorials", element: <TutorialsView /> },
          { path: "courses", element: <CoursesView /> },
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
