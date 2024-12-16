import React from "react";
import LessonImage from "../../Images/lesson3.jpg";

const Lesson3 = () => {
  return (
    <div
      id="lesson3"
      dir="rtl"
      className="lesson bg-[#f0f8ff] rounded-xl p-8 shadow-lg mt-5 mb-5"
    >
      {/* Lesson Title */}
      <section className="text-center mb-8">
        <h1 className="text-3xl text-[#ff4500] font-bold font-[Comic Sans MS]">
          🔒 كيف نحمي أنفسنا من الاختراق 🔒
        </h1>
        <p className="text-lg text-[#555] mt-2">
          في هذا الدرس، سنتعرف على كيفية حماية أنفسنا من الهجمات الإلكترونية والفيروسات التي قد تهدد أماننا على الإنترنت.
        </p>
      </section>

      {/* Image and Explanation */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={LessonImage}
            alt="حماية من الاختراق"
            className="rounded-lg shadow-md border-2 border-[#ffa07a]"
          />
        </div>
        <div>
          <h2 className="text-2xl text-[#333] font-semibold mb-4">
            الهجمات الإلكترونية وتهديداتها
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            الهجمات الإلكترونية مثل الفيروسات، البرمجيات الخبيثة، وهجمات التصيد الاحتيالي تمثل تهديدًا كبيرًا لأمننا على الإنترنت. هذه الهجمات قد تؤدي إلى فقدان البيانات أو التلاعب بها.
          </p>
        </div>
      </section>

      {/* Types of Cyber Attacks */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          أنواع الهجمات الإلكترونية
        </h2>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>🦠 الفيروسات: برامج خبيثة تقوم بتدمير أو تعديل ملفات الكمبيوتر.</li>
          <li>💻 البرمجيات الخبيثة: برامج تهدف إلى تدمير الأنظمة أو سرقة البيانات.</li>
          <li>🎯 هجمات التصيد الاحتيالي: محاولات لخداع المستخدمين للحصول على معلوماتهم الشخصية مثل كلمات السر.</li>
        </ul>
      </section>

      {/* How to Protect Yourself */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          كيف نحمي أنفسنا من هذه الهجمات؟
        </h2>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>🔑 استخدام كلمات مرور قوية ومعقدة (مثال: مزيج من الحروف، الأرقام، والرموز).</li>
          <li>🛡️ تثبيت برامج مكافحة الفيروسات وتحديثها بانتظام.</li>
          <li>⚠️ تجنب فتح الرسائل أو الروابط المشبوهة في رسائل البريد الإلكتروني أو الرسائل النصية.</li>
          <li>🔒 التأكد من أن المواقع التي تزورها تستخدم بروتوكول "https" الآمن.</li>
          <li>📱 تحديث النظام والتطبيقات على هاتفك بشكل دوري لضمان الحماية من الثغرات الأمنية.</li>
        </ul>
      </section>

      {/* Real-Life Example of a Cyber Attack */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          مثال حقيقي على الهجمات الإلكترونية
        </h2>
        <p className="text-lg text-[#444] leading-relaxed mb-4">
          أحد الأمثلة الواقعية على هجمات التصيد الاحتيالي هو عندما يتلقى المستخدمون رسائل بريد إلكتروني تبدو وكأنها من بنوكهم أو شركاتهم الموثوقة، تطلب منهم إدخال بياناتهم الشخصية.
        </p>
      </section>

      {/* How to Recognize Phishing Attacks */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          كيفية التعرف على هجمات التصيد الاحتيالي؟
        </h2>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>🚨 رسائل تبدو غير طبيعية أو تحتوي على أخطاء لغوية.</li>
          <li>🚨 روابط تحتوي على أسماء غريبة أو غير مألوفة.</li>
          <li>🚨 رسائل تطلب منك إدخال بياناتك الشخصية أو كلمات المرور.</li>
        </ul>
      </section>

      {/* Additional Tips */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          نصائح إضافية لحمايتك على الإنترنت
        </h2>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>🛡️ استخدم التحقق بخطوتين (2FA) لحساباتك الهامة مثل البريد الإلكتروني والمصارف.</li>
          <li>🧑‍💻 لا تستخدم شبكات الإنترنت العامة (Wi-Fi) لإجراء المعاملات المالية أو تسجيل الدخول إلى حساباتك.</li>
          <li>💾 قم بعمل نسخ احتياطية لملفاتك المهمة بشكل دوري.</li>
        </ul>
      </section>

      {/* Quiz */}
      <section className="mt-8 text-center">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          🚀 اختبار: هل أنت مستعد لحماية نفسك من الاختراق؟
        </h2>
        <p className="text-lg text-[#555] mb-4">
          هل تعرف كيفية حماية نفسك من الهجمات الإلكترونية؟ اضغط هنا لاختبار معرفتك!
        </p>
        <a
          href="Activities.html"
          className="inline-block bg-[#ff6347] text-white py-3 px-6 rounded-lg text-xl shadow-md hover:bg-[#e5533d] transition duration-300"
        >
          جرب الآن
        </a>
      </section>
    </div>
  );
};

export default Lesson3;
