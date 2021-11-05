import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
