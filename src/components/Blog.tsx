import React from "react";
import Markdown from "markdown-to-jsx";

export default function Blog() {
  return (
    <main>
      <h1 className="section-header-text">SoDA Developers News</h1>
      <section className="flex gap-10 my-14 items-center justify-center">
        <div className="bg-gray-900 rounded-lg p-4 w-80 text-white font-sans">
          <img
            src="your-image-source-here.jpg"
            alt="Person coding on a laptop"
            className="w-full rounded-lg"
          />
          <div className="flex space-x-2 mt-2">
            <span className="bg-blue-500 rounded-full px-3 py-1 text-xs text-white">
              Product
            </span>
            <span className="bg-blue-500 rounded-full px-3 py-1 text-xs text-white">
              Engineering
            </span>
          </div>
          <h2 className="text-lg font-bold mt-3">
            The quick brown fox jumped over the lazy dog.
          </h2>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 w-80 text-white font-sans">
          <img
            src="your-image-source-here.jpg"
            alt="Person coding on a laptop"
            className="w-full rounded-lg"
          />
          <div className="flex space-x-2 mt-2">
            <span className="bg-blue-500 rounded-full px-3 py-1 text-xs text-white">
              Product
            </span>
            <span className="bg-blue-500 rounded-full px-3 py-1 text-xs text-white">
              Engineering
            </span>
          </div>
          <h2 className="text-lg font-bold mt-3">
            The quick brown fox jumped over the lazy dog.
          </h2>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </main>
  );
}
