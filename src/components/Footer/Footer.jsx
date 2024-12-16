import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">أمان الإنترنت للأطفال</h1>
            <p className="text-dark2">
              اكتشف كيف تبقى آمنًا أثناء استخدام الإنترنت! تعلّم قواعد بسيطة لحماية معلوماتك وعدم مشاركة كلمات السر.
            </p>
          </div>
          {/* Second Section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">مواضيع الأمان</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    حماية البيانات الشخصية
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    كلمات السر القوية
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    تجنب الروابط المشبوهة
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    الاستخدام الآمن للتطبيقات
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">روابط سريعة</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    الصفحة الرئيسية
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    نصائح الأمان
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    من نحن
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    اتصل بنا
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Third Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">تواصل معنا</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="أدخل بريدك الإلكتروني"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                ارسال
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
