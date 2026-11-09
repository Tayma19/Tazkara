import React from 'react';
import { 
  FaGavel, 
  FaUserCheck, 
  FaCopyright, 
  FaShieldAlt, 
  FaExclamationTriangle, 
  FaHandshake,
  FaEnvelope 
} from 'react-icons/fa';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
   
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-red-800/20 rounded-full mb-4">
          <FaGavel className="text-5xl text-red-800" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">شروط الاستخدام</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          باستخدامك لموقع "تذكرة"، فإنك توافق على هذه الشروط. يرجى قراءتها بعناية.
        </p>
        <p className="text-gray-500 text-sm mt-2">آخر تحديث: 1 يونيو 2024</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaUserCheck className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">قبول الشروط</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            باستخدامك لموقع "تذكرة" (الموقع)، فإنك تقر بأنك قرأت وفهمت هذه الشروط وتوافق على الالتزام بها. 
            إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.
          </p>
        </div>

       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaHandshake className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">الاستخدام المسموح به</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            يُسمح لك باستخدام الموقع لأغراض شخصية غير تجارية فقط. لا يجوز نسخ أو توزيع أو تعديل أي جزء من المحتوى 
            (بما في ذلك بيانات الأفلام والمسلسلات) دون إذن خطي مسبق.
          </p>
        </div>

       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaCopyright className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">الملكية الفكرية</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            جميع البيانات المعروضة في الموقع (الملصقات، المعلومات، التواريخ، التقييمات، إلخ) مقدمة من قاعدة بيانات TMDB وهي مرخصة تحت 
            <a href="https://www.themoviedb.org/documentation/api/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-red-400 mx-1 hover:underline">
              شروط TMDB API
            </a>.
            اسم الموقع، الشعار، والتصميم الفريد محمية بحقوق الطبع والنشر الخاصة بنا.
          </p>
        </div>

       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaExclamationTriangle className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">إخلاء المسؤولية</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            يبذل الموقع جهده لتوفير معلومات دقيقة، لكنه لا يضمن خلو البيانات من الأخطاء أو عدم الدقة.
            نحن غير مسؤولين عن أي خسائر أو أضرار ناتجة عن استخدام الموقع أو الاعتماد على معلوماته.
            كما أننا لا نقدم روابط لمشاهدة أو تحميل الأفلام والمسلسلات.
          </p>
        </div>

       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaShieldAlt className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">سلوك المستخدم</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            توافق على عدم استخدام الموقع في أي نشاط غير قانوني أو ضار، بما في ذلك:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1 pr-4">
            <li>محاولة اختراق أو تعطيل الموقع.</li>
            <li>إرسال بيانات ضارة أو برامج خبيثة.</li>
            <li>جمع بيانات المستخدمين دون موافقتهم.</li>
          </ul>
        </div>

       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaGavel className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">التعديلات والإنهاء</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            نحتفظ بالحق في تعديل هذه الشروط أو إنهاء الخدمة في أي وقت دون إشعار مسبق. استمرارك في استخدام الموقع بعد التعديلات يعني قبولك للشروط الجديدة.
          </p>
        </div>

       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaShieldAlt className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">القوانين المطبقة</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            تخضع هذه الشروط وتفسر وفقًا لقوانين الدولة التي يعمل منها الموقع. في حال نشوء أي نزاع، يخضع للاختصاص القضائي المحلي.
          </p>
        </div>

        
        <div className="bg-red-800/20 rounded-lg p-6 text-center border border-red-800/50">
          <FaEnvelope className="text-3xl text-red-800 mx-auto mb-2" />
          <h3 className="text-lg font-bold mb-2">للتواصل بخصوص الشروط</h3>
          <p className="text-gray-300">
            إذا كان لديك أي استفسار حول شروط الاستخدام، يرجى مراسلتنا على:
          </p>
          <a href="mailto:terms@tazkera.com" className="text-red-400 hover:text-red-300 underline mt-2 inline-block">
            terms@tazkera.com
          </a>
        </div>

        <p className="text-gray-500 text-sm text-center mt-8">
          باستمرارك في استخدام الموقع، فإنك توافق على هذه الشروط.
        </p>
      </div>
    </div>
  );
};

export default Terms;