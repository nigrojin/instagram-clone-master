import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AuthProvider from './components/AuthProvider';
import AuthRequired from "./components/AuthRequired";
import Layout from "./components/Layout";
import Feed from "./components/Feed";
import ArticleList from "./components/ArticleList";
import ArticleCreate from "./components/ArticleCreate";
import ArticleView from "./components/ArticleView";
import Comments from "./components/Comments";
import Search from "./components/Search";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Accounts from "./components/Accounts";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* routes that auth is required */}
          <Route path="/" element={
            <AuthRequired>
              <Layout />
            </AuthRequired> 
          }>
            <Route index element={<Feed />} />
            <Route path="articles" element={<ArticleList />} />
            <Route path="search" element={<Search />} />
            <Route path="create" element={<ArticleCreate />} />
            <Route path="article/:articleId">
              <Route index element={<ArticleView />} />
              <Route path="comments" element={<Comments />} />
            </Route>
            <Route path="profile/:username" element={<Profile />} />
            <Route path="accounts/edit" element={<Accounts />} />
          </Route>

          {/* routes that auth is not required */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
