function Footer() {
  return (
    <footer className=" w-full border-t-1">
      <hr className="border-gray-500 opacity-100"></hr>
      <div className="grid grid-cols-3 max-md:grid-cols-2 gap-10 px-20 py-10 max-md:gap-5 max-md:px-10 max-md:py-5">
        <div className="text-soda-red text-center max-md:col-span-2 max-md:p-5">
          SoDA - Software Developer Association at ASU
        </div>
        <div className="grid grid-rows-3">
          <a href="#">
            <p className="text-soda-white">Organization</p>
          </a>
          <a href="#">
            <p className="text-soda-gray">Get Involved</p>
          </a>
          <a href="#">
            <p className="text-soda-gray">Projects</p>
          </a>
          <a href="#">
            <p className="text-soda-gray">Documentation</p>
          </a>
        </div>

        <div className="grid grid-rows-3">
          <a href="#">
            <p className="text-slate-white">Resources</p>
          </a>
          <a href="#">
            <p className="text-soda-gray">Constitution</p>
          </a>
          <a href="#">
            <p className="text-soda-gray">Privacy & Policy</p>
          </a>
        </div>
      </div>
      <div className=" text-center items-center py-5">
        <p className="text-sm text-soda-gray">
          © {new Date().getFullYear()} Software Developers Association at ASU.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
