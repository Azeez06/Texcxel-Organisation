import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-10 py-24">
        <div className="grid md:grid-cols-4 gap-16">

          {/* ABOUT US */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-5 bg-[#B11226]" />
              <h4 className="font-bold tracking-wide">ABOUT US</h4>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              We work as a team to provide solutions to the emergence of digital
              world. At Adatoworld, our customer is our first priority.
            </p>
          </div>

          {/* PAGES */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-5 bg-[#B11226]" />
              <h4 className="font-bold tracking-wide">PAGES</h4>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                "Home",
                "Web Design",
                "Training",
                "Creative Design",
                "Our Strategies",
                "Portfolio",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white"
                >
                  <span className="text-[#B11226]">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* OTHERS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-5 bg-[#B11226]" />
              <h4 className="font-bold tracking-wide">OTHERS</h4>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                "Request a quote",
                "Web Promo",
                "Blog",
                "Business Growth",
                "Privacy Policy",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white"
                >
                  <span className="text-[#B11226]">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-5 bg-[#B11226]" />
              <h4 className="font-bold tracking-wide">SOCIAL MEDIA</h4>
            </div>

            <div className="flex gap-5 text-xl text-gray-300">
              <FaFacebookF className="cursor-pointer hover:text-[#B11226]" />
              <FaTwitter className="cursor-pointer hover:text-[#B11226]" />
              <FaYoutube className="cursor-pointer hover:text-[#B11226]" />
              <FaWhatsapp className="cursor-pointer hover:text-[#B11226]" />
              <FaInstagram className="cursor-pointer hover:text-[#B11226]" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
