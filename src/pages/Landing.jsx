import { Outlet, useNavigation } from "react-router-dom";
import { Nav, Footer, BgBlur } from "../Components";

const Landing = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Nav />
      <BgBlur />
      {isPageLoading ? <h1>Loading...</h1> : <Outlet />}
      <Footer />
    </>
  );
};

export default Landing;
