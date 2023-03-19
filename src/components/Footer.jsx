import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="text-center p-3 font-thin max-w-4xl md:text-sm text-xs mx-auto text-gray-700 w-full">
      <div className="px-3">
        <div className="text-sm">
          <div className="">
            <div className="">
              <span className="font-semibold">&copy; {date.getFullYear()}</span>{" "}
              The Indexers by{" "}
              <a
                href="https://www.layoutindex.com/"
                target={"_blank"}
                rel="nofollow noopener noreferrer"
                className="font-semibold"
              >
                LAYOUTindex
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
