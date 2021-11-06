import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="flex flex-col box-border max-w-screen-md min-w-full items-center justify-center w-full flex-1 my-4 text-center">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
