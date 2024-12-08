"use client"
import { Button } from "../components/ui/button";
import homeBg from "../assets/home-background.jpg";
import { LoginButton } from "../components/LoginButton";

console.log(homeBg)

const HomePage = () => {
  return (
    <>
      <div
        className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Main Content */}
        <div className="z-10 text-center px-6 sm:px-12">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-gradient-to-br from-primary-600 to-accent-400 bg-clip-text mb-4">
            Dec-deth
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-white mb-8">
            The Platform for{" "}
            <span className="font-bold text-primary-600">
              Decentralised Finance
            </span>{" "}
            &{" "}
            <span className="font-bold text-primary-600">
              Dashboards
            </span>
          </p>
          
          {/* Login Button */}
          <LoginButton />

          {/* Optional Additional Button */}
          <Button className="mt-6 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition duration-300 ease-in-out">
            Explore More
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
