const handleLogin = (e) => {
  e.preventDefault();
  localStorage.setItem('user', JSON.stringify({ email, password }));
};
