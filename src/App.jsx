import Loading from "@/components/layout/Common/loading";
import { Suspense, lazy } from "react";
import { Route, Router, Switch } from "wouter";
import "./App.css";

import { LocationProvider } from "./components/layout/Context/locationContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QueryProvider from "./components/layout/Common/QueryProvider";

import Home from "./components/pages/home";
import NotFound from "./components/pages/not-found";
import { useHashLocation } from "./hooks/routing";

// Lazy-loaded pages
const About = lazy(() => import("@components/pages/about"));

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation}>
            <QueryProvider>
              <LocationProvider>
                <Routes />
              </LocationProvider>
            </QueryProvider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
