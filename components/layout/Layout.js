import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="flex flex-col box-border items-center justify-center w-full flex-1 mx-2  my-4 text-center">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
