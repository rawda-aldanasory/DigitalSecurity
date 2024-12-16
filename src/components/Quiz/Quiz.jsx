import { useState } from "react";

function Quiz() {
  const [questionIndex1, setQuestionIndex1] = useState(0);
  const [questionIndex2, setQuestionIndex2] = useState(0);
  const [feedback1, setFeedback1] = useState("");
  const [feedback2, setFeedback2] = useState("");

  const questions1 = [
    {
      question: "هل يمكن للآخرين استخدام أفكارك دون إذن؟",
      answers: ["نعم", "لا"],
      correct: 1,
    },
    {
      question: "هل يجب أن تسجل اختراعاتك لحمايتها من السرقة؟",
      answers: ["نعم", "لا"],
      correct: 0,
    },
    {
      question: "هل حقوق الملكية الفكرية تنطبق فقط على الأعمال الفنية؟",
      answers: ["نعم", "لا"],
      correct: 1,
    },
    {
      question: "هل يمكن استخدام محتوى الإنترنت بشكل غير قانوني في حال كانت صورته واضحة؟",
      answers: ["نعم", "لا"],
      correct: 1,
    },
  ];

  const questions2 = [
    {
      question: "هل يجب تحديث برنامج الحماية على جهازك بشكل دوري؟",
      answers: ["نعم", "لا"],
      correct: 0,
    },
    {
      question: "هل يجب تحميل البرامج فقط من المواقع الرسمية؟",
      answers: ["نعم", "لا"],
      correct: 0,
    },
    {
      question: "هل يجب استخدام كلمات مرور قوية تحتوي على أحرف ورموز؟",
      answers: ["نعم", "لا"],
      correct: 0,
    },
    {
      question: "هل من الأمان استخدام شبكة الواي فاي العامة للقيام بمعاملات مالية؟",
      answers: ["نعم", "لا"],
      correct: 1,
    },
  ];

  const handleAnswer = (isCorrect, setQuestionIndex, setFeedback, index, totalQuestions) => {
    if (isCorrect) {
      setFeedback("إجابة صحيحة!");
      setTimeout(() => {
        if (index + 1 < totalQuestions) {
          setQuestionIndex(index + 1);
          setFeedback(""); // Clear feedback after transitioning to the next question
        } else {
          setFeedback("لقد أكملت الاختبار بنجاح!");
        }
      }, 1000);
    } else {
      setFeedback("إجابة غير صحيحة! حاول مرة أخرى.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-5">
      <h1 className="text-center text-xl font-semibold mt-5">اختبار حقوق الملكية الفكرية</h1>
      <div className="mt-5">
        <div className="quiz-container">
          <div className="question">{questions1[questionIndex1].question}</div>
          <ul className="options list-none p-0 mt-3">
            {questions1[questionIndex1].answers.map((answer, idx) => (
              <li key={idx} className="my-2">
                <button
                  className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                  onClick={() =>
                    handleAnswer(
                      idx === questions1[questionIndex1].correct,
                      setQuestionIndex1,
                      setFeedback1,
                      questionIndex1,
                      questions1.length
                    )
                  }
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          {feedback1 && (
            <div
              className={`mt-3 text-center ${feedback1.includes("صحيحة") ? "text-green-500" : "text-red-500"}`}
            >
              {feedback1}
            </div>
          )}
        </div>
      </div>

      <h1 className="text-center text-xl font-semibold mt-5">اختبار كيف نحمي أنفسنا من الاختراق</h1>
      <div className="mt-5">
        <div className="quiz-container">
          <div className="question">{questions2[questionIndex2].question}</div>
          <ul className="options list-none p-0 mt-3">
            {questions2[questionIndex2].answers.map((answer, idx) => (
              <li key={idx} className="my-2">
                <button
                  className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                  onClick={() =>
                    handleAnswer(
                      idx === questions2[questionIndex2].correct,
                      setQuestionIndex2,
                      setFeedback2,
                      questionIndex2,
                      questions2.length
                    )
                  }
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          {feedback2 && (
            <div
              className={`mt-3 text-center ${feedback2.includes("صحيحة") ? "text-green-500" : "text-red-500"}`}
            >
              {feedback2}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
