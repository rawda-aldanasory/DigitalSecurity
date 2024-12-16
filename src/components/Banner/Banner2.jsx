import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div dir="rtl" className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div dir="rtl" className="text-center md:text-right space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              انضم إلينا لتعلم حماية نفسك على الإنترنت!
            </h1>
            <p className="text-dark2">
              تعلم كيف تحمي معلوماتك الشخصية، تستخدم كلمات سر قوية، وتبقى آمنًا على الإنترنت!
            </p>
            <a
              href="/Lessons"
              className="primary-btn !mt-8"
            >
              ادرس الآن
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
