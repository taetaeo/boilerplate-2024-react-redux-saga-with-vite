import { createElement, lazy, ReactElement } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

// Configs
import pageUrlConfig from "./pageUrl.config";
// layouts
import MainLayout from "@/components/widgets/layouts/main-layout";
// Views
const LazyHomeView = lazy(() => import("@/containers/views/home/index.view"));

export type Routers = RouteObject[];

const LayoutComponent = (): ReactElement => createElement(MainLayout);
const HomeComponent = (): ReactElement => createElement(LazyHomeView);

const routes: Routers = [
  {
    path: pageUrlConfig.home,
    element: LayoutComponent(), // Use function to create React element
    children: [
      { path: pageUrlConfig.default, element: HomeComponent() }, // Main Page
    ],
  },
];

export default createBrowserRouter(routes);
