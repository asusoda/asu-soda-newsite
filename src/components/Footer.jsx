function Footer() {
  return (
    <footer className=" w-full border-t-1">
      <hr className="border-gray-500 opacity-100"></hr>
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-10 px-20 py-10 max-md:gap-5 max-md:px-10 max-md:py-5">
        <div className="text-slate-300 max-md:col-span-2 max-md:p-5">
          SoDA - Software Developer Association at ASU
        </div>
        <div className="grid grid-rows-3">
          <a href="#">
            <p>Organization</p>
          </a>
          <a href="#">
            <p className="text-gray-500">Get Involved</p>
          </a>
          <a href="#">
            <p className="text-gray-500">Projects</p>
          </a>
          <a href="#">
            <p className="text-gray-500">Documentation</p>
          </a>
        </div>

        <div className="grid grid-rows-3">
          <a href="#">
            <p className="text-slate-300">Resources</p>
          </a>
          <a href="#">
            <p className="text-gray-500">Constitution</p>
          </a>
          <a href="#">
            <p className="text-gray-500">Privacy & Policy</p>
          </a>
        </div>

        <div className="max-md:col-span-2 max-md:justify-self-center">
          <a href="#" className="max-md:hidden">
            <p className="text-slate-300">Contacts</p>
          </a>
          <div className="flex gap-5 py-5">
            <a href="#">
              <img
                src="/discord-white-logo.png"
                width={30}
                height={30}
                alt="logo"
              ></img>
            </a>
            <a href="#">
              <img
                src="/github-mark-white.png"
                width={30}
                height={30}
                alt="logo"
              ></img>
            </a>
            <a href="#">
              <img
                src="/instagram-white-logo.png"
                width={30}
                height={30}
                alt="logo"
              ></img>
            </a>
            <a href="#">
              <img
                src="/linkedin-white-logo.png"
                width={30}
                height={30}
                alt="logo"
              ></img>
            </a>
            <a href="#">
              <img
                src="/link-white-icon.png"
                width={30}
                height={30}
                alt="logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className=" text-center items-center bg-[#121212] text-gray-400 py-5">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Software Developers Association at ASU.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
