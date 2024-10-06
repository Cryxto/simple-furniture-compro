import Image from "next/image";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
// import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/assets/logo-bordered.png";
import Link from "next/link";

export interface navStateInterface {
  navState: boolean;
  // scrollState: boolean;
  handleNavToggle: () => void;
}

function Navbar({ navState, handleNavToggle }: navStateInterface) {
  return (
    <>
      <nav className="flex flex-wrap justify-between max-w-6xl mx-auto items-center p-4 relative ">
        <div className="w-full flex items-center justify-between mb-1 flex-col md:flex-row ">
          <div className="flex flex-row w-full justify-between items-center">
            {/* <h1>I am logo</h1> */}
            <div className={`md:max-w-20 max-w-14 flex`}>
              <Link onClick={handleNavToggle} href={"/"}>
                <Image className="border-slate-100 " src={logo} alt="" />
              </Link>
            </div>
            <div className="md:hidden lg:hidden items-center flex">
              {navState ? (
                <button>
                  <RxCross2 className="text-4xl md:max-w-20" onClick={handleNavToggle} />
                </button>
              ) : (
                <button>
                  <RxHamburgerMenu className="text-4xl" onClick={handleNavToggle} />
                </button>
              )}
            </div>
          </div>
          <div className={`${navState ? "block" : "hidden "} md:block lg:block w-full `}>
            <ul className={`flex items-center flex-col flex-1 justify-end  md:flex-row lg:flex-row gap-5 font-bold `}>
              <li className="py-2">
                {/* <a href="#">Home</a> */}
                <Link onClick={handleNavToggle} href={"/"}>
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link onClick={handleNavToggle} href={"/about-us"}>
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link onClick={handleNavToggle} href={"/products"}>
                  Product
                </Link>
                {/* <a href="#">Product</a> */}
              </li>
              <li className="py-2">
                <Link onClick={handleNavToggle} href={"/teams"}>
                  Team
                </Link>
                {/* <a href="#">Teams</a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
