import React from "react";
import Lesson2Image from "../../Images/lesson2.jpg"; 

const Lesson2 = () => {
  return (
    <div
      id="lesson2"
      dir="rtl"
      className="lesson bg-[#f0f8ff] rounded-xl p-8 shadow-lg mt-5 mb-5"
    >
      {/* Lesson Title */}
      <section className="text-center mb-8">
        <h1 className="text-3xl text-[#ff4500] font-bold font-[Comic Sans MS]">
          🔒  أهمية تشفير البيانات وحقوق الملكية الفكرية🔒
        </h1>
        <p className="text-lg text-[#555] mt-2">
          في هذا الدرس، سنتناول كيفية حماية بياناتنا عبر الإنترنت باستخدام التشفير وأهمية تطبيق هذه الممارسات لحمايتنا.
        </p>
      </section>

      

      {/* Image and Explanation */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={Lesson2Image}
            alt="تشفير البيانات"
            className="rounded-lg shadow-md border-2 border-[#ffa07a]"
          />
        </div>
        <div>
          <h2 className="text-2xl text-[#333] font-semibold mb-4">
            لماذا التشفير مهم؟
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            التشفير هو وسيلة لحماية البيانات من الوصول غير المصرح به. باستخدام التشفير، يمكننا ضمان أن البيانات التي نتبادلها عبر الإنترنت تبقى سرية وآمنة.
          </p>
          <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
            <li>🔐 يحمي البيانات من الهجمات الإلكترونية.</li>
            <li>🔐 يضمن سرية المعلومات الشخصية مثل كلمات المرور.</li>
            <li>🔐 يساعد في تأكيد هوية المرسل والمستقبل في المعاملات عبر الإنترنت.</li>
          </ul>
        </div>
      </section>

      <div>
          <h2 className="text-2xl text-[#333] font-semibold mb-4 mt-5">
            ما هي حقوق الملكية الفكرية؟
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            حقوق الملكية الفكرية هي حقوق تمنح المبدعين والمخترعين الحق الحصري في استخدام عملهم واستغلاله. هذه الحقوق تساعد في حماية الإبداعات مثل الكتب والفن والاختراعات من الاستغلال غير العادل.
          </p>
        </div>
      

      {/* Types of Intellectual Property */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          أنواع حقوق الملكية الفكرية
        </h2>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>📚 حقوق التأليف والنشر: تحمي الأعمال الأدبية والفنية مثل الكتب والموسيقى والأفلام.</li>
          <li>🔬 براءات الاختراع: تحمي الاختراعات والابتكارات الجديدة مثل الأجهزة والمنتجات التقنية.</li>
          <li>💡 العلامات التجارية: تحمي الشعارات والأسماء التجارية للمنتجات أو الخدمات.</li>
          <li>🎨 حقوق التصميم: تحمي التصاميم الجديدة والفريدة للأشياء مثل الملابس أو الأثاث.</li>
        </ul>
      </section>

      {/* Why Intellectual Property is Important */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          لماذا حقوق الملكية الفكرية مهمة؟
        </h2>
        <p className="text-lg text-[#444] leading-relaxed">
          حقوق الملكية الفكرية تساعد المبدعين على حماية أعمالهم من السرقة، وتضمن لهم الاستفادة من جهودهم بشكل عادل. إنها تحفز الناس على الابتكار والإبداع.
        </p>
      </section>

      {/* How to Protect Intellectual Property */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          كيف تحمي حقوق الملكية الفكرية؟
        </h2>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>📑 التسجيل: يجب تسجيل أعمالك الفكرية لتأمين حقوقك بشكل قانوني.</li>
          <li>🔖 الإشعارات: استخدم إشعارات مثل "حقوق الطبع والنشر" أو "براءة اختراع" على أعمالك.</li>
          <li>👀 المراقبة: راقب أعمالك على الإنترنت أو في السوق للتأكد من أنها لا تُستخدم بدون إذن.</li>
        </ul>
      </section>

      {/* Real-Life Examples of Intellectual Property Violations */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          أمثلة حقيقية على انتهاك حقوق الملكية الفكرية
        </h2>
        <p className="text-lg text-[#444] leading-relaxed mb-4">
          هنا بعض الأمثلة عن اختراقات لحقوق الملكية الفكرية بسبب غياب الحماية:
        </p>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>🔴 سرقة الأفكار أو اختراعات مبتكرة من قبل أشخاص آخرين.</li>
          <li>🔴 استخدام شعارات أو أسماء تجارية بدون إذن من أصحابها.</li>
        </ul>
      </section>

      {/* Additional Tips */}
      <section className="mt-8">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          نصائح لتأمين حقوقك
        </h2>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>🔐 تأكد من تسجيل أعمالك الفكرية وحمايتها قانونيًا.</li>
          <li>🔐 استخدم إشعارات حقوق الطبع والنشر أو براءات الاختراع على أعمالك.</li>
          <li>🔐 كن حذرًا عند نشر أعمالك على الإنترنت وتأكد من من يملك الحق في استخدامها.</li>
        </ul>
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
            src="https://www.youtube.com/embed/BbqplA8ose4?si=Iq8GwlaZKmU4yZ1O"
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
          🔑 نصائح لتأمين بياناتك 🔑
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Tip 1 */}
          <div className="bg-[#ffa07a] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">استخدم تشفير SSL/TLS</h3>
            <p className="text-md leading-relaxed">
              تأكد من أن المواقع التي تتصفحها تستخدم بروتوكول <strong>SSL/TLS</strong> لحماية البيانات بينك وبين الموقع.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-[#87cefa] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">تشفير البيانات الحساسة</h3>
            <p className="text-md leading-relaxed">
              قم بتشفير البيانات الحساسة مثل كلمات المرور وأرقام البطاقات الائتمانية قبل إرسالها عبر الإنترنت.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-[#ffd700] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">استخدام كلمات مرور قوية</h3>
            <p className="text-md leading-relaxed">
              كلمات المرور القوية هي عنصر أساسي في حماية حساباتك، واستخدم تقنيات مثل <strong>التشفير</strong> لحمايتها.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section className="mt-8 text-center">
        <h2 className="text-2xl text-[#ff4500] font-bold font-[Comic Sans MS] mb-4">
          🚀 اختبار: هل بياناتك مشفرة بشكل صحيح؟
        </h2>
        <p className="text-lg text-[#555] mb-4">
          هل تعرف إذا كانت بياناتك محمية بشكل جيد؟ اضغط هنا لاختبار تأمين بياناتك!
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
          🛡️ أمثلة حقيقية على اختراقات البيانات 🛡️
        </h2>
        <p className="text-lg text-[#444] leading-relaxed mb-4">
          لنتعرف على بعض من أشهر الحالات التي تم فيها اختراق بيانات بسبب غياب التشفير:
        </p>
        <ul className="list-disc pr-5 mt-3 text-lg text-[#555]">
          <li>🔴 تم تهكير الملايين من الحسابات لعدم تشفير البيانات</li>
          <li>🔴 تم سرقة العديد من الحسابات لعدم وجود حقوق ملكية فكريه </li>
        </ul>
        <p className="text-lg text-[#444] leading-relaxed mt-4">
          هذه الأمثلة تظهر لنا أهمية استخدام التشفير في الحفاظ على سلامة بياناتنا الشخصية.
        </p>
      </section>
    </div>
  );
};

export default Lesson2;
