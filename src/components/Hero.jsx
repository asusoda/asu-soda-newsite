function Hero() {
  return (
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">./SoDA</h1>
          <p class="my-2">The Software Developers Association</p>
          <p class="mt-4">
            The premiere software development club for university students at Arizona State University
          </p>
          <ul className="menu menu-horizontal bg-base-100 rounded-box mt-6">
            <li>
              <a className="tooltip" data-tip="Sun Devil Sync" href="https://asu.campuslabs.com/engage/organization/soda">
              <img
                src="/link-white-icon.png"
                className="h-6 w-6"
                alt="logo"
              />
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Discord" href="https://discord.com/invite/6mpAPKk">
                <img
                  src="/discord-white-logo.png"
                  className="h-6 w-6"
                  alt="logo"
                />
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Instagram" href="https://www.instagram.com/soda.asu/">
              <img
                src="/instagram-white-logo.png"
                className="h-6 w-6"
                alt="logo"
              />
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="X" href="https://x.com/asu_soda">
              <img
                src="/link-white-icon.png"
                className="h-6 w-6"
                alt="logo"
              />
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Facebook" href="https://www.facebook.com/SoDAASU/">
              <img
                src="/link-white-icon.png"
                className="h-6 w-6"
                alt="logo"
              />
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="LinkedIn" href="https://www.linkedin.com/company/thesoda/">
              <img
                src="/linkedin-white-logo.png"
                className="h-6 w-6"
                alt="logo"
              />
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Github" href="https://github.com/asusoda">
              <img
                src="/github-mark-white.png"
                className="h-6 w-6"
                alt="logo"
              />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
