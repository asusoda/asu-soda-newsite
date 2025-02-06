import SocialMediaLinks from "../SocialMediaLinks";

export function LeftFooterGrid() {
  return (
    <section className="col-span-2 max-md:col-span-2 max-md:p-2">
      <div className="flex flex-col max-md:flex-row justify-between h-full">
        <div className="flex gap-4 items-center max-sm:flex-row max-sm:items-center max-sm:hidden">
          <img src="/logo/soda-logo-white.webp" className="w-6" alt="Abstract SoDA Logo in White" />
          <span className="text-soda-gray italic">Since 2008</span>
        </div>
      </div>
    </section>
  );
}
