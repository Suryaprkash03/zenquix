import React from "react";
import Marquee from "react-fast-marquee";
import p0 from "../images/partners/p0.png";
import p1 from "../images/partners/p1.png";
import p10 from "../images/partners/p10.png";
import p11 from "../images/partners/p11.png";
import p12 from "../images/partners/p12.png";
import p13 from "../images/partners/p13.png";
import p14 from "../images/partners/p14.png";
import p2 from "../images/partners/p2.png";
import p3 from "../images/partners/p3.png";
import p4 from "../images/partners/p4.png";
import p5 from "../images/partners/p5.png";
import p6 from "../images/partners/p6.png";
import p7 from "../images/partners/p7.png";
import p8 from "../images/partners/p8.png";
import p9 from "../images/partners/p9.png";

const clientsRow1 = [p0, p1, p2, p3, p4, p5, p6, p7];
const clientsRow2 = [p7, p8, p9, p10, p11, p12, p13, p14];

const Clients = () => {
  return (
    <div className="mt-8 mb-20 ">
      <section data-aos="fade-up">
        <div className="py-4 my-4">
          <h2 className="my-2 text-3xl font-bold text-center text-blue-900 uppercase">
            Our Partners
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mx-12 mt-4 text-xl font-semibold text-center text-blue-900 lg:text-2xl">
            Some of our Partners.
          </h2>
        </div>

        {/* Marquee Animation */}
        <div className="w-10/12 mx-auto mt-6">
          {/* First Marquee Layer */}
          <Marquee
            direction="left"
            speed={30}
            gradient={false}
            pauseOnHover={true}
            className="flex items-center"
          >
            {clientsRow1.map((client, index) => (
              <div className="mx-4" key={`left-${index}`}>
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="w-auto transition-opacity duration-300 opacity-50 h-9 grayscale hover:grayscale-0 hover:opacity-100 mix-blend-color-burn"
                />
              </div>
            ))}
          </Marquee>

          {/* Second Marquee Layer */}
          <Marquee
            direction="right"
            speed={30}
            gradient={false}
            pauseOnHover={true}
            className="flex items-center mt-6"
          >
            {clientsRow2.map((client, index) => (
              <div className="mx-6 my-4" key={`right-${index}`}>
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="w-auto h-10 transition-opacity duration-300 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 mix-blend-color-burn"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Clients;
