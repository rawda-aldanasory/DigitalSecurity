import React, { useState } from "react";

// Info data for each location
const infoData = {
  firewall: {
    title: "🏰 مركز جدار الحماية",
    text: "جدار الحماية يساعد على حماية جهازك من الوصول غير المصرح به، وهو ضروري لسلامة بياناتك.",
  },
  password: {
    title: "🔑 نادي كلمة المرور",
    text: "كلمة المرور القوية يجب أن تكون صعبة التخمين وتتضمن حروفاً وأرقاماً ورموزاً.",
  },
  privacy: {
    title: "🔒 زاوية الخصوصية",
    text: "احرص دائماً على حماية معلوماتك الشخصية وعدم مشاركتها مع الغرباء.",
  },
  academy: {
    title: "🎓 أكاديمية الأمان الرقمي",
    text: "في هذه الأكاديمية، يمكنك تعلم أساسيات الأمان الرقمي وكيفية حماية نفسك على الإنترنت.",
  },
  library: {
    title: "📚 مكتبة الأمان",
    text: "مكتبة مليئة بالموارد التي تساعدك على تعزيز معرفتك حول الأمان الرقمي.",
  },
  data: {
    title: "💾 مركز البيانات",
    text: "هنا تجد معلومات عن كيفية حماية البيانات الشخصية في العالم الرقمي.",
  },
};

const Activities = () => {
  // State for password strength
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [popupData, setPopupData] = useState(null);

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    let strengthValue = 0;

    if (password.length >= 6) strengthValue += 1;
    if (/[A-Z]/.test(password)) strengthValue += 1;
    if (/[0-9]/.test(password)) strengthValue += 1;
    if (/[^A-Za-z0-9]/.test(password)) strengthValue += 1;

    setStrength(strengthValue);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  const getStrengthText = () => {
    switch (strength) {
      case 0:
        return 'أدخل كلمة مرور';
      case 1:
        return 'ضعيفة';
      case 2:
        return 'متوسطة';
      case 3:
        return 'قوية';
      case 4:
        return 'قوية جدًا';
      default:
        return '';
    }
  };

  const getStrengthBarStyle = () => {
    switch (strength) {
      case 0:
        return { width: '0', backgroundColor: 'lightgray' };
      case 1:
        return { width: '25%', backgroundColor: 'red' };
      case 2:
        return { width: '50%', backgroundColor: 'orange' };
      case 3:
        return { width: '75%', backgroundColor: 'yellow' };
      case 4:
        return { width: '100%', backgroundColor: 'green' };
      default:
        return {};
    }
  };

  // Function to display the info of each location
  const showInfo = (location) => {
    setPopupData(infoData[location]);
  };

  // Function to hide the popup
  const hideInfo = () => {
    setPopupData(null);
  };

  return (
    <div className="activities-container mt-5 pt-5">
      <h1>عالم الأمان الرقمي</h1>
      <p>استكشف مواقع الأمان الرقمي بالنقر على النقاط المختلفة على الخريطة!</p>

      <div className="map-container">
        <div
          className="location firewall"
          onClick={() => showInfo("firewall")}
        >
          🏰 مركز جدار الحماية
        </div>
        <div
          className="location password-club"
          onClick={() => showInfo("password")}
        >
          🔑 نادي كلمة المرور
        </div>
        <div
          className="location privacy-corner"
          onClick={() => showInfo("privacy")}
        >
          🔒 زاوية الخصوصية
        </div>
        <div
          className="location digital-academy"
          onClick={() => showInfo("academy")}
        >
          🎓 أكاديمية الأمان الرقمي
        </div>
        <div
          className="location security-library"
          onClick={() => showInfo("library")}
        >
          📚 مكتبة الأمان
        </div>
        <div
          className="location data-center"
          onClick={() => showInfo("data")}
        >
          💾 مركز البيانات
        </div>
      </div>

      {/* Password Strength Check */}
      <div className="password-strength mt-5">
        <h2>اختبار قوة كلمة المرور</h2>
        <input
          type="password"
          className="password-input"
          placeholder="أدخل كلمة المرور"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="strength-meter">
          <div className="strength" style={getStrengthBarStyle()} id="strength-bar"></div>
        </div>
        <p id="strength-text">{getStrengthText()}</p>
      </div>

      {/* Overlay for popup */}
      {popupData && <div className="overlay" onClick={hideInfo}></div>}

      {/* Popup information */}
      {popupData && (
        <div className="info-popup">
          <h2>{popupData.title}</h2>
          <p>{popupData.text}</p>
          <button onClick={hideInfo}>إغلاق</button>
        </div>
      )}
    </div>
  );
};

export default Activities;
