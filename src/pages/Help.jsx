import React from 'react';
import { FaHeadset, FaEnvelope, FaWhatsapp, FaTwitter, FaQuestionCircle, FaSearch, FaHeart, FaUserCircle } from 'react-icons/fa';

const Help = () => {
  const faqs = [
    {
      question: "كيف أبحث عن فيلم أو مسلسل؟",
      answer: "يمكنك استخدام مربع البحث الموجود في أعلى الصفحة. اكتب اسم الفيلم أو المسلسل بالعربية أو الإنجليزية، وستظهر لك النتائج فوراً."
    },
    {
      question: "كيف أضيف فيلماً إلى المفضلة؟",
      answer: "افتح صفحة تفاصيل الفيلم أو المسلسل، ثم اضغط على زر 'إضافة إلى المفضلة'. ستُحفظ القائمة في متصفحك حتى تزور الموقع مرة أخرى."
    },
    {
      question: "هل يمكنني مشاهدة الأفلام على هذا الموقع؟",
      answer: "لا، موقعنا متخصص في عرض معلومات الأفلام والمسلسلات فقط (التقييمات، القصص، طاقم التمثيل، المواسم والحلقات). لا نقدم روابط مشاهدة أو تحميل."
    },
    {
      question: "لماذا بعض الصور لا تظهر؟",
      answer: "قد يكون الصورة غير متوفرة في قاعدة بيانات TMDB. نعرض صورة افتراضية بدلاً من ذلك. يمكنك تحديث الصفحة أو المحاولة لاحقاً."
    },
    {
      question: "كيف يمكنني التواصل مع الدعم؟",
      answer: "يمكنك مراسلتنا عبر البريد الإلكتروني أو وسائل التواصل أدناه، وسنرد عليك في أقرب وقت."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 text-white">
     
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-red-800/20 rounded-full mb-4">
          <FaHeadset className="text-5xl text-red-800" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">مركز المساعدة</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          نحن هنا لمساعدتك. اختر الموضوع المناسب أو تواصل معنا مباشرة.
        </p>
      </div>

     
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-right mb-6 border-r-4 border-red-800 pr-4">
          <FaQuestionCircle className="inline ml-2" /> الأسئلة الشائعة
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-5 hover:bg-gray-800 transition">
              <h3 className="text-lg font-semibold text-red-400 mb-2">{faq.question}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-right mb-6 border-r-4 border-red-800 pr-4">
          مساعدة سريعة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 text-center hover:scale-105 transition">
            <FaSearch className="text-3xl text-red-800 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">البحث المتقدم</h3>
            <p className="text-gray-400 text-sm">ابحث حسب النوع، السنة، التقييم، أو اللغة.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 text-center hover:scale-105 transition">
            <FaHeart className="text-3xl text-red-800 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">المفضلة</h3>
            <p className="text-gray-400 text-sm">احفظ قائمة أفلامك المفضلة وراجعها لاحقاً.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 text-center hover:scale-105 transition">
            <FaUserCircle className="text-3xl text-red-800 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">حساب المستخدم</h3>
            <p className="text-gray-400 text-sm">تتبع تقييماتك، مراجعاتك، وقوائمك المخصصة.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 text-center hover:scale-105 transition">
            <FaHeadset className="text-3xl text-red-800 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">الدعم الفني</h3>
            <p className="text-gray-400 text-sm">نحن نرد على الاستفسارات خلال 24 ساعة.</p>
          </div>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto bg-gray-800/30 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
        <p className="text-gray-400 mb-6">لديك سؤال أو اقتراح؟ لا تتردد في الاتصال بنا.</p>
        <div className="flex flex-wrap justify-center gap-6">
         
        </div>
        <p className="text-gray-500 text-sm mt-6">بريد إلكتروني: help@tazkera.com | هاتف: 00962-1234567</p>
      </div>
    </div>
  );
};

export default Help;