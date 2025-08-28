import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Features from "@/pages/Features";
import AppPage from "@/pages/App";
import Categories from "@/pages/Categories";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import Resources from "@/pages/Resources";
import Support from "@/pages/Support";
import Services from "@/pages/Services";
import Stories from "@/pages/Stories";
import FAQ from "@/pages/FAQ";
import Donate from "@/pages/Donate";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/features" component={Features} />
        <Route path="/app" component={AppPage} />
        <Route path="/categories" component={Categories} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/resources" component={Resources} />
        <Route path="/support" component={Support} />
        <Route path="/services" component={Services} />
        <Route path="/stories" component={Stories} />
        <Route path="/faq" component={FAQ} />
        <Route path="/donate" component={Donate} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
