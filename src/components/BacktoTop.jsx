import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-14 right-4 z-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          <FaArrowAltCircleUp className="m-2" />
        </button>
      )}
    </div>
  );
};

export default BacktoTop;
