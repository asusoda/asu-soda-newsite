import RegularButton from "../Button/RoundedButton";

function Contact() {
  return (
    <section
      className="flex flex-col justify-center items-center my-20"
      id="join"
    >
      <h1 className="text-white font-bold text-2xl md:text-4xl text-center">
        Let's Get In Touch!
      </h1>
      <h4 className="text-soda-gray text-sm md:text-lg text-center mb-8">
        Excited to join SoDA? Leave your information here and our officers will
        get in touch with you shortly.
      </h4>
      <section className="w-[70vw] h-[70vh] grid grid-cols-2 gap-10 ">
        <figure className="">
          <iframe
            className="w-full h-full rounded-2xl"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=tempe&key=AIzaSyALN2fUL0Wx_CgtyGlXH5hR_s45DZH7rU0"
          ></iframe>
        </figure>

        <section className="m-auto flex flex-cols">
          <form className="grid grid-rows-4 gap-4 bg-soda-white py-10 px-8 rounded-3xl">
            <h1 className="text-soda-black text-xl font-bold">
              CONTACT FORM <hr className="bg-soda-gray w-full h-0.5" />
            </h1>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Fist Name"
                name="first name"
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last name"
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              name="email"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />

            <div className="">
              <textarea
                placeholder="Your message"
                name="message"
                className="focus:outline-none focus:ring relative w-full px-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>
            <div className="text-center">
              <RegularButton name="Submit" />
            </div>
          </form>
        </section>
      </section>
    </section>
  );
}

export default Contact;
