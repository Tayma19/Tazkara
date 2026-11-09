import React from 'react';
import { FaShieldAlt, FaDatabase, FaCookieBite, FaShareAlt, FaUserSecret, FaEnvelope } from 'react-icons/fa';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
     
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-red-800/20 rounded-full mb-4">
          <FaShieldAlt className="text-5xl text-red-800" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">سياسة الخصوصية</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          نحن نهتم بخصوصية بياناتك. اقرأ هذه السياسة لتعرف كيف نتعامل مع معلوماتك.
        </p>
        <p className="text-gray-500 text-sm mt-2">آخر تحديث: 1 يونيو 2024</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaDatabase className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">المعلومات التي نجمعها</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            عند استخدامك لموقع "تذكرة"، قد نجمع بعض المعلومات مثل: عنوان IP، نوع المتصفح، الصفحات التي تزورها، 
            وتفضيلاتك داخل الموقع (مثل قائمة المفضلة المخزنة محلياً). لا نجمع معلومات شخصية تحدد هويتك (مثل الاسم الكامل أو العنوان)
            إلا إذا قمت بتزويدنا بها طواعية (مثلاً عبر نموذج الاتصال).
          </p>
        </div>

       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaShareAlt className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">كيف نستخدم معلوماتك</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            نستخدم المعلومات لتحسين أداء الموقع، تخصيص المحتوى المعروض، تحليل الاتجاهات، وإدارة حسابات المستخدمين (عند تفعيلها لاحقاً).
            لا نبيع أو نؤجر بياناتك لأطراف ثالثة.
          </p>
        </div>

      
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaCookieBite className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">ملفات تعريف الارتباط (Cookies)</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك، مثل تذكر تفضيلاتك (المفضلة، اللغة). يمكنك تعطيلها من إعدادات المتصفح،
            لكن قد يتأثر أداء بعض الخدمات.
          </p>
        </div>

      
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaUserSecret className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">أمان البيانات</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            نعتمد إجراءات أمنية معقولة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح. ومع ذلك، لا يوجد نظام آمن بنسبة 100%.
          </p>
        </div>

       
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaShareAlt className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">روابط خارجية</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            قد يحتوي موقعنا على روابط لمواقع خارجية (مثل IMDb، الصفحة الرئيسية للفيلم). نحن غير مسؤولين عن ممارسات الخصوصية لتلك المواقع.
          </p>
        </div>

      
        <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaShieldAlt className="text-red-800 text-2xl" />
            <h2 className="text-xl font-bold">حقوقك</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            يمكنك طلب الاطلاع على بياناتك الشخصية التي نخزنها، أو تعديلها، أو حذفها (إن وجدت). للتواصل، استخدم البريد الإلكتروني أدناه.
          </p>
        </div>

       
        <div className="bg-red-800/20 rounded-lg p-6 text-center border border-red-800/50">
          <FaEnvelope className="text-3xl text-red-800 mx-auto mb-2" />
          <h3 className="text-lg font-bold mb-2">للتواصل بخصوص الخصوصية</h3>
          <p className="text-gray-300">
            إذا كان لديك أي استفسار حول سياسة الخصوصية، يمكنك مراسلتنا على:
          </p>
          <a href="mailto:privacy@tazkera.com" className="text-red-400 hover:text-red-300 underline mt-2 inline-block">
            privacy@tazkera.com
          </a>
        </div>

     
        <p className="text-gray-500 text-sm text-center mt-8">
          نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة.
        </p>
      </div>
    </div>
  );
};

export default Privacy;