import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  

const NavbarMenu = [
  {
    id: 1,
    title: "الصفحة الرئيسية",
    path: "/",
  },
  {
    id: 2,
    title: "الدروس",
    path: "/Lessons",  
  },
  {
    id: 3,
    title: "الأنشطة",
    path: "/Activities",
  },
  {
    id: 4,
    title: "الإختبارات",
    path: "/Quiz",
  },
  // {
  //   id: 5,
  //   title: "المعلمين",
  //   path: "/teachers",
  // },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">الأمن الرقمي</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}  
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}
            <button className="primary-btn">تسجيل الدخول</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
