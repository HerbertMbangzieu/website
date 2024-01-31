import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookSquare,
  FaFirefoxBrowser,
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  const [subjectLine, setSubjectline] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <div
        id="contact"
        className="w-full bg-gradient-to-tr px-3 md:px-5 lg:px-8 py-3 lg:py-5 from-[#001] to-[#003] rounded-lg text-white font-quicksand shadow-inner shadow-slate-800 mt-2"
      >
        <div className="text-xl md:text-4xl font-semibold text-center py-4 mb-3">
          Contact Me
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2">
          <div>
            <div className="px-2 py-6 lg:py-8">
              <div className="flex text-xl md:text-2xl ">
                <FaEnvelope />{" "}
                <p className="px-10 -mt-1">herbertmbangzieu@gmail.com</p>
              </div>

              <div className="flex text-xl md:text-2xl py-4 lg:py-6">
                <MdLocationPin />{" "}
                <p className="px-10 -mt-1">
                  16 softwind ct, Owings Mills, MD, 21117
                </p>
              </div>

              <div className="flex text-xl md:text-2xl py-4">
                <FaPhone /> <p className="px-10 -mt-1">+1 (443) 285 2804</p>
              </div>

              <div className="flex text-xl md:text-2xl py-4">
                <FaFirefoxBrowser />{" "}
                <p className="px-10 -mt-1">
                  <a
                    href="https://herbertmbangzieu.github.io/onlineresume/"
                    className="text-blue-400 underline underline-offset-[12px]"
                    target="_blank"
                  >
                    My Resume
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-1">
              <a
                href="https://facebook.com/herbertmbangzieu/"
                target="_blank"
                className="text-center text-4xl text-blue-600"
              >
                {" "}
                <FaFacebookSquare />{" "}
              </a>
              <a
                href="https://twitter.com/hlarym1/"
                target="_blank"
                className="text-center text-4xl text-blue-600"
              >
                {" "}
                <FaTwitter />{" "}
              </a>
              <a
                href="https://instagram.com/herbertmbangzieu/"
                target="_blank"
                className="text-center text-4xl text-purple-900"
              >
                {" "}
                <FaInstagram />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/herbert-mbangzieu-ab4829221/"
                target="_blank"
                className="text-center text-4xl text-blue-600"
              >
                {" "}
                <FaLinkedin />{" "}
              </a>
              <a
                href="https://github.com/herbertmbangzieu/"
                target="_blank"
                className="text-center text-4xl"
              >
                {" "}
                <FaGithub />{" "}
              </a>
            </div>
          </div>

          <div className="p-2">
            <div className="text-black">
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject line ..."
                className="w-full rounded px-2 py-1"
                // value={subjectLine || ""}
                onChange={(e) => {
                  setSubjectline(e.target.value);
                }}
              />

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-full rounded mt-2 p-2"
                placeholder="Your message"
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              ></textarea>

              <div className="w-full bg-gradient-to-br from-blue-900 to-blue-700 text-center text-white font-semibold p-3 rounded text-xl">
                {" "}
                <a
                  href={ `mailto:herbertmbangzieu@gmail.com?subject=${subjectLine}&body=${body}`}
                  
                >
                  {" "}
                  Send Message
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
