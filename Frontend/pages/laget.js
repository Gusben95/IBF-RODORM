import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

const laget = () => {
  return (
    <>
      <div>
        <p>Info</p>
        <div>
            {/* ta understa länken på imgbox i Html */}
          <Image
            src='https://images2.imgbox.com/76/6d/wspuEbRd_o.jpg'
            alt='/'
            width='192'
            height='288'
            priority
          />
        </div>
      </div>
    </>
  );
};

export default laget;
