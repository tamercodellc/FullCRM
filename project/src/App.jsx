
function App() {

  return (
    <AuthProvider>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/verify" element={<AuthVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </NavigationProvider>
      <Toaster />
    </AuthProvider>
  )
}

export default App