import React from "react";
import { Link } from "react-router-dom";
import Lesson1Image from "../../Images/lesson1.jpg";
import Lesson2Image from "../../Images/lesson2.jpg";
import Lesson3Image from "../../Images/lesson3.jpg";

const Lessons = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-full md:w-4/12 lg:w-4/12 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={Lesson1Image}
              className="w-full h-48 object-cover"
              alt="Security lesson"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold">الأمن الرقمي وحماية كلمات المرور</h5>
              <p className="text-gray-700 mt-2">
                في هذا الدرس سنتعلم كيفية حماية معلوماتنا الشخصية على الإنترنت وأهمية استخدام كلمات مرور قوية وآمنة
              </p>
              <Link to="/Lessons/Lesson1" className="inline-block mt-2 text-white primary-btn flex items-center max-w-[150px]">
  عرض الدرس
</Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 lg:w-4/12 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={Lesson2Image}
              className="w-full h-48 object-cover"
              alt="Intellectual property lesson"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold">حقوق الملكية الفكرية</h5>
              <p className="text-gray-700 mt-2">
                حقوق الملكية الفكرية تمنح صاحبها الحق الحصري في استخدام عمله واستغلاله
              </p>
              <Link to="/Lessons/Lesson2" className="inline-block mt-2 text-white primary-btn flex items-center max-w-[150px]">
  عرض الدرس
</Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 lg:w-4/12 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={Lesson3Image}
              className="w-full h-48 object-cover"
              alt="Cybersecurity lesson"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold">كيف نحمي أنفسنا من الاختراق</h5>
              <p className="text-gray-700 mt-2">
                الهجمات الإلكترونية مثل الفيروسات، البرمجيات الخبيثة، وهجمات التصيد الاحتيالي، تمثل تهديدًا لأمننا على الإنترنت
              </p>
              <Link to="/Lessons/Lesson3" className="inline-block mt-2 text-white primary-btn flex items-center max-w-[150px]">
  عرض الدرس
</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
