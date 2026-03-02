import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Primary from "./pages/Primary";
import Secondary from "./pages/Secondary";
import Academics from "./pages/Academics";
import Activities from "./pages/Activities";
import Campus from "./pages/Campus";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import VirtualTour from "./pages/VirtualTour";
import DayInLife from "./pages/DayInLife";
import Alumni from "./pages/Alumni";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/primary"} component={Primary} />
      <Route path={"/secondary"} component={Secondary} />
      <Route path={"/academics"} component={Academics} />
      <Route path={"/activities"} component={Activities} />
      <Route path={"/campus"} component={Campus} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/news"} component={News} />
      <Route path={"/admissions"} component={Admissions} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/virtual-tour"} component={VirtualTour} />
      <Route path={"/day-in-life"} component={DayInLife} />
      <Route path={"/alumni"} component={Alumni} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
