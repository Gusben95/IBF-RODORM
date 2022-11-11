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
            src='https://images2.imgbox.com/ea/1c/cFfcitTj_o.jpg'
            alt='/'
            width='300'
            height='200'
            
            priority
          />
        </div>
      </div>
    </>
  );
};

export default laget;

