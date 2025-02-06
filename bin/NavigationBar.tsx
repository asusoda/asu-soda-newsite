import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  PlayIcon,
  XMarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Team from "../pages/Team";
import Sponsors from "../pages/Sponsors";
import Login from "../pages/Login";

const products = [
  {
    name: "Blog",
    description: "Read up on the latest from SoDA",
    href: "#",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: "Discord Bot",
    description: "Play with the best features from our Discord bot",
    href: "#",
    icon: PlayIcon,
  },
  {
    name: "Participation",
    description: "Get rewards for engaging in our community",
    href: "#",
    icon: HandRaisedIcon,
  },
];

{
  /* 
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
*/
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <header className="bg-white">
        {/* standard NavBar */}
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/Home">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SoDA</span>
                <img className="h-8 w-auto" src="/soda.png" alt="./SoDA Logo" />
              </a>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Resources
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </PopoverButton>

              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
                            aria-hidden="true"
                          />
                        </div>

                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* 
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                    */}
                </PopoverPanel>
              </Transition>
            </Popover>

            <li>
              <Link to="/Info">
                <a
                  href=""
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Info
                </a>
              </Link>
            </li>

            <li>
              <Link to="/Team">
                <a
                  href=""
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Team
                </a>
              </Link>
            </li>

            <li>
              <Link to="/Sponsors">
                <a
                  href=""
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Sponsors
                </a>
              </Link>
            </li>

            {/* 
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Info
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Sponsors
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Team
            </a>
            */}
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <li>
              <Link to="/Login">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </li>
          </div>
        </nav>

        {/* compressed NavBar */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SoDA</span>
                <img className="h-8 w-auto" src="../public/soda.webp" alt="./SoDA Logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Resources
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {[...products].map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Info
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sponsors
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Team
                  </a>
                </div>

                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Info" element={<Info />}></Route>
        <Route path="/Team" element={<Team />}></Route>
        <Route path="/Sponsors" element={<Sponsors />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}
