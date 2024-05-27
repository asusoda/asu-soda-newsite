import Button from "./Button";

function NavigationBar() {
  return (
    <nav className="sticky top-0 z-10">
      <div className="mx-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <p className="">SoDA</p>
            </a>
          </div>
          <div className="flex space-x-10">
            <a href="/info" className="">
              Info
            </a>
            <a href="/sponsors" className="">
              Sponsors
            </a>
            <a href="/team" className="">
              Team
            </a>
          </div>
          <Button name="Contact" />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
