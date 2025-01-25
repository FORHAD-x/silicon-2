import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar py-[25px] px-4 lg:px-0">
      <div className="container  flex justify-between items-center">
        {/* Left side */}
        <div className="nav_left flex items-center gap-4">
          <img src="/logo.png" alt="logo" />
          <ul className="hidden lg:flex gap-[24px] text-[#3E4265] font-Manrope font-semibold text-[16px]">
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Overview</Link></li>
            <li><Link href="#">Store</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Right side */}
        <div className="nev_right hidden lg:flex items-center">
          <div className="flex items-center gap-2 mr-[32px] text-[16px] font-semibold font-Manrope text-[#585C7B]">
            <Link href="#">light</Link>
            <div className="pt-4">
              <img src="/mode.png" alt="mode toggle" />
            </div>
            <Link href="#">dark</Link>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-[8px] px-[20px] py-[9px] bg-[#EFF2FC] rounded-[5px] font-Manrope text-[#3E4265]">
              <FaSignInAlt />
              <button>Sign in</button>
            </div>
            <div className="flex items-center gap-[8px] px-[20px] py-[9px] bg-[#6366F1] rounded-[5px] font-Manrope text-white">
              <RxPerson />
              <button>Sign up</button>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 py-6">
          <ul className="flex flex-col gap-4 text-[#3E4265] font-Manrope font-semibold text-[16px]">
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Overview</Link></li>
            <li><Link href="#">Store</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
          <div className="flex flex-col items-start gap-4 mt-6">
            <div className="flex items-center gap-2 text-[16px] font-semibold font-Manrope text-[#585C7B]">
              <Link href="#">light</Link>
              <img src="/mode.png" alt="mode toggle" className="w-6 h-6" />
              <Link href="#">dark</Link>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-[8px] px-[20px] py-[9px] bg-[#EFF2FC] rounded-[5px] font-Manrope text-[#3E4265]">
                <FaSignInAlt />
                <button>Sign in</button>
              </div>
              <div className="flex items-center gap-[8px] px-[20px] py-[9px] bg-[#6366F1] rounded-[5px] font-Manrope text-white">
                <RxPerson />
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
