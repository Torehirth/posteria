const router = () => {
  const pathname = window.location.pathname;

  console.log(pathname);

  switch (pathname) {
    case "./":
      console.log("#HOME");
      break;
    case "./register":
      console.log("REGISTER");
      break;
    case "./feed":
      console.log("FEED");
      break;
    case "./profile":
      console.log("PROFILE");
      break;
  }
};

router();
