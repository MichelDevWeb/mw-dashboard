const IsAuthenticated = () => {
  // TODO

  const isAuthenticated = localStorage.getItem("profile");

  return isAuthenticated;
};

export default IsAuthenticated;
