import React from "react";
import Lesson1Image from "../../Images/lesson1.jpg";

const Lesson1 = () => {
  return (
    <div
      id="lesson1"
      dir="rtl"
      className="lesson bg-[#f0f8ff] rounded-xl p-8 shadow-lg mt-5 mb-5"
    >
      {/* Lesson Title */}
      <section className="text-center mb-8">
        <h1 className="text-3xl text-[#ff4500] font-bold font-[Comic Sans MS]">
          🛡️ الأمن الرقمي وحماية كلمات المرور 🛡️
        </h1>
        <p className="text-lg text-[#555] mt-2">
          في هذا الدرس، سنستعرض أهمية حماية بياناتنا عبر الإنترنت وكيفية إنشاء كلمات مرور قوية تحمي حساباتنا من المخاطر.
        </p>
      </section>

      {/* Image and Explanation */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={Lesson1Image}
            alt="أمان الإنترنت"
            className="rounded-lg shadow-md border-2 border-[#ffa07a]"
          />
        </div>
        <div>
          <h2 className="text-2xl text-[#333] font-semibold mb-4">
            لماذا كلمة المرور القوية مهمة؟
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            كلمة المرور القوية هي الحاجز الأول لحماية حساباتك من المهاجمين. إذا كانت كلمة المرور سهلة التخمين، يمكن للمهاجمين الوصول إلى بياناتك الشخصية. لذا من المهم أن تحتوي كلمات المرور على:
          </p>
          <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
            <li>🔠 حروف كبيرة وصغيرة لزيادة التعقيد.</li>
            <li>🔢 أرقام ورموز خاصة مثل @، #، $ لتعقيد عملية التخمين.</li>
            <li>🔒 يجب أن تكون طويلة، يفضل أكثر من 12 حرفًا.</li>
          </ul>
        </div>
      </section>

      {/* Lesson Video */}
      <section className="mt-8 text-center">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          🎥 شاهد الفيديو التوضيحي
        </h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2z8ahml8TKA?si=l3lO0LQe6rFBUrz2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* Additional Tips */}
      <section className="mt-8">
        <h2 className="text-center text-2xl text-[#333] font-bold mb-6">
          🔑 نصائح لحماية بياناتك 🔑
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Tip 1 */}
          <div className="bg-[#ffa07a] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">استخدم المصادقة الثنائية</h3>
            <p className="text-md leading-relaxed">
              تفعيل خاصية <strong>2FA</strong> على حساباتك يضيف طبقة أمان إضافية.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-[#87cefa] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">غيّر كلمة المرور بانتظام</h3>
            <p className="text-md leading-relaxed">
              من الأفضل تغيير كلمة المرور كل <strong>3 أشهر</strong> لتجنب حدوث اختراق.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-[#ffd700] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">تجنب إعادة استخدام كلمات المرور</h3>
            <p className="text-md leading-relaxed">
              لا تستخدم نفس كلمة المرور لأكثر من حساب. من المهم أن يكون لكل حساب كلمة مرور فريدة.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section className="mt-8 text-center">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          🚀 اختبار: هل كلمة مرورك قوية؟
        </h2>
        <p className="text-lg text-[#555] mb-4">
          هل لديك كلمة مرور قوية بما فيه الكفاية؟ اضغط هنا لاختبار قوة كلمة مرورك!
        </p>
        <a
          href="Activities.html"
          className="inline-block bg-[#ff6347] text-white py-3 px-6 rounded-lg text-xl shadow-md hover:bg-[#e5533d] transition duration-300"
        >
          جرب الآن
        </a>
      </section>

      {/* Additional Section: Real-Life Examples */}
      <section className="mt-8">
        <h2 className="text-center text-2xl text-[#333] font-bold mb-6">
          🛡️ أمثلة حقيقية على اختراقات كلمات المرور 🛡️
        </h2>
        <p className="text-lg text-[#444] leading-relaxed mb-4">
          لنتعرف على بعض من أشهر حالات الاختراق التي حدثت بسبب كلمات المرور الضعيفة:
        </p>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>🔴 Yahoo (2013): تم اختراق أكثر من 3 مليار حساب.</li>
          <li>🔴 Adobe (2013): تم تسريب بيانات 153 مليون حساب.</li>
          <li>🔴 LinkedIn (2012): تم تسريب 6.5 مليون كلمة مرور.</li>
        </ul>
        <p className="text-lg text-[#444] leading-relaxed mt-4">
          هذه الاختراقات تظهر لنا أهمية استخدام كلمات مرور قوية وفريدة لكل حساب.
        </p>
      </section>
    </div>
  );
};

export default Lesson1;
