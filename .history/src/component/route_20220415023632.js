function Route() {
  <Routes location={location}>
    <Route path="/" element={<LoginPage />} />
    <Route path="/main" element={<MainPage />} />
  </Routes>;
}
