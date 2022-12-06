import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from "./pages/NavBar";
import Home from "./pages/HomePage";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import NotFound404 from "./pages/NotFound404";

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound404 />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
