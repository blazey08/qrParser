const [token, setToken] = useState();
const [isLoggedIn, setLogin] = useState(null);

const logIn = () => {
  setLogin(true);
  return <Navigate to="/main" replace />
};

const logOut = () => {
  setLogin(false);
};

// if (!token) {
//   return <Login setToken={setToken} />
// }

return (
  <BrowserRouter>
    <Navbar />
    {isLoggedIn ? (
      <button onClick={logOut}>Logout</button>
    ) : (
      <button onClick={logIn}>Login</button>
    )}
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Home/>
        </ProtectedRoute>
      } />
      <Route index element={<Main />} />
      <Route path="/upload" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Upload />
        </ProtectedRoute>} />
      <Route path="/search" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Search />
        </ProtectedRoute>
      } />
      <Route path="/delete" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
        <Delete />
      </ProtectedRoute>} />
    </Routes>

  </BrowserRouter>
);