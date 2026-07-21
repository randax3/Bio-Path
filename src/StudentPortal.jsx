import React, { useState, useEffect } from 'react';
import {
  LogOut, Edit2, Save, X, User, BookOpen, ClipboardList, Award, Languages,
  Home, Compass, Star, ChevronDown, ChevronUp, Microscope, Cpu, Dna,
  Activity, FlaskConical, ScanLine, Stethoscope
} from 'lucide-react';

/* ============ الترجمة ============ */
const translations = {
  ar: {
    dir: 'rtl',
    appName: 'Bio Path',
    appSubtitle: 'اكتشف مسارك في الهندسة الحيوية',
    email: 'البريد الإلكتروني', password: 'كلمة المرور', fullName: 'الاسم الكامل',
    bio: 'النبذة الشخصية', bioPlaceholder: 'أخبرنا عن نفسك...',
    login: 'تسجيل الدخول', signup: 'إنشاء حساب',
    noAccount: 'ليس لديك حساب؟', signupNow: 'اشترك الآن',
    haveAccount: 'لديك حساب بالفعل؟', loginNow: 'تسجيل الدخول',
    logout: 'خروج', profile: 'ملفي الشخصي',
    navHome: 'الرئيسية', navSpecialties: 'المسارات', navQuiz: 'الاختبار', navResults: 'النتائج',
    welcomeBack: 'أهلاً', homeIntro: 'هذا الموقع يساعدك تكتشف أي مسار دقيق داخل الهندسة الحيوية يناسب ميولك وشخصيتك، عن طريق اختبار بسيط ونتيجة واضحة.',
    startJourney: 'ابدأ الاختبار الآن', seeMyResult: 'شوف نتيجتك الأخيرة', browseSpecialties: 'تصفح المسارات',
    specialtiesTitle: 'المسارات الدقيقة', specialtiesDesc: 'تعرف على كل مسار بلغة بسيطة قبل أو بعد الاختبار',
    inShort: 'باختصار', aroundYou: 'تشوفه حولك', funFact: 'هل تعلم؟', careerPath: 'وين توديك؟', suitableFor: 'مناسب لمين؟',
    yourMatch: 'الأقرب لك', profileInfo: 'معلومات الملف الشخصي', edit: 'تعديل', name: 'الاسم', notEntered: 'لم يتم إدخاله',
    joinDate: 'تاريخ الانضمام', save: 'حفظ التغييرات', cancel: 'إلغاء',
    quizTitle: 'اختبار اكتشاف المسار', quizDesc: 'أجب بصراحة — ما فيه إجابات صح أو غلط، فقط ميولك الحقيقية',
    startQuiz: 'ابدأ الاختبار', agree: 'أتفق', disagree: 'لا أتفق', submitQuiz: 'أظهر نتيجتي',
    quizFinished: 'هذي أقرب مساراتك!', yourTopMatches: 'أعلى 3 مسارات مناسبة لك',
    recommendations: 'توصيات وتواصل', internalUni: '🏫 داخل الجامعة', externalUni: '🌍 خارج الجامعة',
    comingSoon: 'سيتم إضافة تفاصيل حقيقية هنا قريباً', date: 'التاريخ', time: 'الوقت',
    backToMenu: 'العودة', resultsLog: 'سجل محاولاتك السابقة', noQuizzes: 'لم تأخذ الاختبار بعد',
    startFirst: 'ابدأ اختبارك الأول من تبويب الاختبار', attempt: 'محاولة',
    fillRequired: 'يرجى ملء البيانات المطلوبة!', emailExists: 'البريد الإلكتروني مسجل بالفعل!',
    invalidLogin: 'بيانات دخول غير صحيحة!', questionCounter: 'من', placeholderNote: '⚙️ محتوى مبدئي — سيُستبدل بالمحتوى النهائي'
  },
  en: {
    dir: 'ltr',
    appName: 'Bio Path',
    appSubtitle: 'Discover your path in Bioengineering',
    email: 'Email', password: 'Password', fullName: 'Full Name',
    bio: 'Bio', bioPlaceholder: 'Tell us about yourself...',
    login: 'Login', signup: 'Sign Up',
    noAccount: "Don't have an account?", signupNow: 'Sign up now',
    haveAccount: 'Already have an account?', loginNow: 'Login',
    logout: 'Logout', profile: 'My Profile',
    navHome: 'Home', navSpecialties: 'Specialties', navQuiz: 'Quiz', navResults: 'Results',
    welcomeBack: 'Welcome', homeIntro: 'This site helps you discover which precise bioengineering specialty fits your interests and personality, through a simple quiz with a clear result.',
    startJourney: 'Start the Quiz', seeMyResult: 'See Your Last Result', browseSpecialties: 'Browse Specialties',
    specialtiesTitle: 'Precise Specialties', specialtiesDesc: 'Learn about each specialty in simple terms, before or after the quiz',
    inShort: 'In Short', aroundYou: 'Around You', funFact: 'Did You Know?', careerPath: 'Where It Leads', suitableFor: 'Suited For',
    yourMatch: 'Your Match', profileInfo: 'Profile Information', edit: 'Edit', name: 'Name', notEntered: 'Not entered',
    joinDate: 'Join Date', save: 'Save Changes', cancel: 'Cancel',
    quizTitle: 'Discover Your Path Quiz', quizDesc: "Answer honestly — there's no right or wrong, just your real interests",
    startQuiz: 'Start Quiz', agree: 'Agree', disagree: 'Disagree', submitQuiz: 'Show My Result',
    quizFinished: 'Here are your closest paths!', yourTopMatches: 'Your Top 3 Matching Specialties',
    recommendations: 'Recommendations & Contacts', internalUni: '🏫 Inside University', externalUni: '🌍 Outside University',
    comingSoon: 'Real details will be added here soon', date: 'Date', time: 'Time',
    backToMenu: 'Back', resultsLog: 'Your Past Attempts', noQuizzes: "You haven't taken the quiz yet",
    startFirst: 'Start your first quiz from the Quiz tab', attempt: 'Attempt',
    fillRequired: 'Please fill in the required fields!', emailExists: 'This email is already registered!',
    invalidLogin: 'Invalid login credentials!', questionCounter: 'of', placeholderNote: '⚙️ Placeholder content — will be replaced with final content'
  }
};

/* ============ بيانات المسارات (محتوى مبدئي مؤقت) ============ */
const specialties = [
  { id: 'tissue', icon: Microscope, color: '#059669',
    ar: { name: 'هندسة الأنسجة', short: 'زراعة وبناء أنسجة حية بديلة في المختبر.', aroundYou: 'الجلد الصناعي للحروق، غضاريف مزروعة.', fact: 'فيه علماء نجحوا يطبعون أنسجة بسيطة بطابعات ثلاثية الأبعاد!', career: 'مختبرات بحثية، شركات التقنية الحيوية.', suitable: 'تحب الصبر على التجارب الدقيقة بالمختبر.' },
    en: { name: 'Tissue Engineering', short: 'Growing and building living replacement tissue in the lab.', aroundYou: 'Artificial skin for burns, grown cartilage.', fact: 'Scientists have successfully 3D-printed simple tissues!', career: 'Research labs, biotech companies.', suitable: 'You enjoy patient, precise lab work.' } },
  { id: 'devices', icon: Cpu, color: '#2563eb',
    ar: { name: 'الأجهزة الطبية', short: 'تصميم أجهزة تساعد أو تراقب جسم الإنسان.', aroundYou: 'منظم ضربات القلب، أجهزة قياس السكر.', fact: 'بعض الأجهزة الحديثة توصل بياناتك للطبيب لحظياً عبر الجوال!', career: 'شركات تصنيع أجهزة طبية، مستشفيات.', suitable: 'تحب الجمع بين الهندسة والإلكترونيات.' },
    en: { name: 'Medical Devices', short: 'Designing devices that help or monitor the human body.', aroundYou: 'Pacemakers, glucose monitors.', fact: 'Some modern devices send your data to your doctor live via phone!', career: 'Device manufacturers, hospitals.', suitable: 'You like combining engineering with electronics.' } },
  { id: 'bioinfo', icon: Dna, color: '#7c3aed',
    ar: { name: 'المعلوماتية الحيوية', short: 'استخدام البرمجة لتحليل البيانات الجينية والطبية.', aroundYou: 'فحوصات تحديد النسب الجينية، أبحاث الأمراض الوراثية.', fact: 'الذكاء الاصطناعي صار يتوقع شكل البروتينات خلال ثواني!', career: 'شركات تقنية، مراكز أبحاث جينية.', suitable: 'تحب البرمجة والتحليل أكثر من العمل اليدوي.' },
    en: { name: 'Bioinformatics', short: 'Using programming to analyze genetic and medical data.', aroundYou: 'Ancestry DNA tests, genetic disease research.', fact: 'AI can now predict protein shapes within seconds!', career: 'Tech companies, genetic research centers.', suitable: 'You prefer coding and analysis over manual work.' } },
  { id: 'biomech', icon: Activity, color: '#dc2626',
    ar: { name: 'الميكانيكا الحيوية', short: 'دراسة حركة الجسم بمبادئ هندسية وفيزيائية.', aroundYou: 'الأطراف الصناعية، تحليل حركة الرياضيين.', fact: 'بعض الأطراف الصناعية الحديثة تتحرك بإشارات من الدماغ مباشرة!', career: 'مراكز التأهيل، شركات الأطراف الصناعية.', suitable: 'تحب الفيزياء والحركة والرياضة.' },
    en: { name: 'Biomechanics', short: 'Studying body movement using engineering and physics principles.', aroundYou: 'Prosthetic limbs, athlete movement analysis.', fact: 'Some modern prosthetics move directly from brain signals!', career: 'Rehab centers, prosthetics companies.', suitable: 'You like physics, movement, and sports.' } },
  { id: 'biomat', icon: FlaskConical, color: '#ea580c',
    ar: { name: 'المواد الحيوية', short: 'تصميم مواد آمنة تتوافق مع جسم الإنسان.', aroundYou: 'الغرز الجراحية القابلة للذوبان، حشوات الأسنان.', fact: 'فيه مواد حديثة تلتئم مع العظم وتختفي بعد ما يشفى!', career: 'شركات المستلزمات الطبية، مختبرات المواد.', suitable: 'تحب الكيمياء وتجربة مواد جديدة.' },
    en: { name: 'Biomaterials', short: 'Designing safe materials compatible with the human body.', aroundYou: 'Dissolvable surgical stitches, dental fillings.', fact: 'Some new materials bond with bone and disappear after healing!', career: 'Medical supply companies, materials labs.', suitable: 'You like chemistry and testing new materials.' } },
  { id: 'imaging', icon: ScanLine, color: '#0891b2',
    ar: { name: 'التصوير الطبي', short: 'تطوير تقنيات لتصوير داخل الجسم دون جراحة.', aroundYou: 'الأشعة المقطعية، الرنين المغناطيسي، السونار.', fact: 'أجهزة حديثة تقدر تصور القلب وهو ينبض بدقة عالية جداً!', career: 'مستشفيات، شركات تصنيع أجهزة التصوير.', suitable: 'تحب الفيزياء والتفاصيل الدقيقة بالصور.' },
    en: { name: 'Medical Imaging', short: 'Developing techniques to see inside the body without surgery.', aroundYou: 'CT scans, MRI, ultrasound.', fact: 'Modern machines can image a beating heart in high precision!', career: 'Hospitals, imaging device manufacturers.', suitable: 'You like physics and fine visual detail.' } },
  { id: 'clinical', icon: Stethoscope, color: '#4f46e5',
    ar: { name: 'الهندسة السريرية', short: 'صيانة وإدارة الأجهزة الطبية داخل المستشفيات.', aroundYou: 'الفريق اللي يصلح ويعاير أجهزة المستشفى يومياً.', fact: 'هذا التخصص يجمع بين الهندسة والتعامل المباشر مع فرق طبية!', career: 'إدارات هندسية بالمستشفيات.', suitable: 'تحب حل المشاكل العملية والتعامل مع فرق العمل.' },
    en: { name: 'Clinical Engineering', short: 'Maintaining and managing medical devices inside hospitals.', aroundYou: 'The team that fixes and calibrates hospital equipment daily.', fact: 'This field blends engineering with direct work alongside medical teams!', career: 'Hospital engineering departments.', suitable: 'You like practical problem-solving and teamwork.' } }
];

/* ============ أسئلة اختبار الميول (محتوى مبدئي مؤقت، 3 لكل مسار) ============ */
const quizQuestions = [
  { id: 1, specialty: 'tissue', ar: 'أستمتع بتجارب طويلة النفس أحتاج فيها صبر ودقة', en: 'I enjoy long, patient, detail-heavy experiments' },
  { id: 2, specialty: 'tissue', ar: 'يشدني موضوع زراعة الخلايا والأنسجة الحية', en: 'I find growing cells and living tissue fascinating' },
  { id: 3, specialty: 'tissue', ar: 'أفضل العمل بالمختبر على العمل المكتبي', en: 'I prefer lab work over desk work' },
  { id: 4, specialty: 'devices', ar: 'أحب فك وتركيب الأجهزة الإلكترونية لفهمها', en: 'I like taking apart and rebuilding electronics to understand them' },
  { id: 5, specialty: 'devices', ar: 'يعجبني الجمع بين البرمجة والدوائر الإلكترونية', en: 'I like combining programming with electronic circuits' },
  { id: 6, specialty: 'devices', ar: 'أفكر دائماً كيف أصمم جهاز يسهل حياة الناس', en: 'I often think about designing devices that make life easier' },
  { id: 7, specialty: 'bioinfo', ar: 'أفضل تحليل البيانات على التجارب اليدوية', en: 'I prefer analyzing data over hands-on experiments' },
  { id: 8, specialty: 'bioinfo', ar: 'تشدني فكرة أن الكمبيوتر يفك رموز الجينات', en: "I'm drawn to the idea of computers decoding genes" },
  { id: 9, specialty: 'bioinfo', ar: 'أستمتع بالبرمجة وحل المسائل المنطقية', en: 'I enjoy programming and logical problem-solving' },
  { id: 10, specialty: 'biomech', ar: 'أهتم بكيفية تحرك جسم الإنسان أثناء الرياضة', en: 'I am interested in how the body moves during sports' },
  { id: 11, specialty: 'biomech', ar: 'يعجبني تصميم أطراف صناعية تساعد الناس على الحركة', en: 'I like the idea of designing prosthetics that help people move' },
  { id: 12, specialty: 'biomech', ar: 'أحب مواد الفيزياء والميكانيكا أكثر من الكيمياء', en: 'I prefer physics and mechanics over chemistry' },
  { id: 13, specialty: 'biomat', ar: 'تستهويني تجربة مواد جديدة ومعرفة خصائصها', en: 'I love testing new materials and learning their properties' },
  { id: 14, specialty: 'biomat', ar: 'أهتم بمادة الكيمياء أكثر من باقي المواد', en: 'I am more interested in chemistry than other subjects' },
  { id: 15, specialty: 'biomat', ar: 'يعجبني موضوع صناعة مواد آمنة تدخل جسم الإنسان', en: 'I like the idea of creating safe materials for the human body' },
  { id: 16, specialty: 'imaging', ar: 'أحب التفاصيل الدقيقة في الصور والأشكال', en: 'I love fine detail in images and shapes' },
  { id: 17, specialty: 'imaging', ar: 'يثير فضولي كيف نشوف داخل الجسم بدون جراحة', en: "I'm curious how we can see inside the body without surgery" },
  { id: 18, specialty: 'imaging', ar: 'أهتم بمادة الفيزياء وتطبيقاتها العملية', en: 'I am interested in physics and its practical applications' },
  { id: 19, specialty: 'clinical', ar: 'أفضل حل المشاكل العملية على الأبحاث النظرية', en: 'I prefer practical problem-solving over theoretical research' },
  { id: 20, specialty: 'clinical', ar: 'أستمتع بالعمل ضمن فريق والتواصل مع الآخرين', en: 'I enjoy working within a team and communicating with others' },
  { id: 21, specialty: 'clinical', ar: 'يعجبني التواجد بجو المستشفى والتعامل مع أجهزته', en: 'I like being in a hospital setting working with its equipment' }
];

export default function StudentPortal() {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [expandedSpecialty, setExpandedSpecialty] = useState(null);

  const [formData, setFormData] = useState({ email: '', password: '', name: '', bio: '' });

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
    const savedLang = localStorage.getItem('appLang');
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
    localStorage.setItem('appLang', newLang);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[formData.email] && users[formData.email].password === formData.password) {
      const user = users[formData.email];
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      setIsLoggedIn(true);
      setFormData({ email: '', password: '', name: '', bio: '' });
    } else {
      alert(t.invalidLogin);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      alert(t.fillRequired);
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[formData.email]) {
      alert(t.emailExists);
      return;
    }
    const newUser = {
      email: formData.email, password: formData.password, name: formData.name, bio: formData.bio,
      quizAttempts: [], createdAt: new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US')
    };
    users[formData.email] = newUser;
    localStorage.setItem('users', JSON.stringify(users));
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setIsLoggedIn(true);
    setIsSignUp(false);
    setFormData({ email: '', password: '', name: '', bio: '' });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
    setIsEditing(false);
    setIsProfileOpen(false);
    setCurrentPage('home');
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const updatedUser = { ...currentUser, name: formData.name, bio: formData.bio };
    users[currentUser.email] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
    setIsEditing(false);
  };

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const computeMatches = () => {
    const bySpecialty = {};
    specialties.forEach(s => { bySpecialty[s.id] = { agree: 0, total: 0 }; });
    quizQuestions.forEach(q => {
      bySpecialty[q.specialty].total += 1;
      if (quizAnswers[q.id] === true) bySpecialty[q.specialty].agree += 1;
    });
    return specialties
      .map(s => ({ id: s.id, percentage: Math.round((bySpecialty[s.id].agree / bySpecialty[s.id].total) * 100) }))
      .sort((a, b) => b.percentage - a.percentage);
  };

  const handleSubmitQuiz = () => {
    const matches = computeMatches();
    const attempt = {
      date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US'),
      time: new Date().toLocaleTimeString(lang === 'ar' ? 'ar-SA' : 'en-US'),
      matches
    };
    setQuizResult(attempt);
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const updatedUser = { ...currentUser, quizAttempts: [...(currentUser.quizAttempts || []), attempt] };
    users[currentUser.email] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
  };

  const getSpecialty = (id) => specialties.find(s => s.id === id);
  const hasAttempts = currentUser && currentUser.quizAttempts && currentUser.quizAttempts.length > 0;
  const topMatchId = hasAttempts ? currentUser.quizAttempts[currentUser.quizAttempts.length - 1].matches[0].id : null;

  const LangToggle = ({ dark }) => (
    <button onClick={toggleLang} className={`flex items-center gap-1 px-3 py-2 rounded-lg font-semibold text-sm transition ${dark ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
      <Languages className="w-4 h-4" />
      {lang === 'ar' ? 'EN' : 'ع'}
    </button>
  );

  /* ============ صفحة تسجيل الدخول ============ */
  if (!isLoggedIn) {
    return (
      <div dir={t.dir} className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-end mb-4"><LangToggle dark /></div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4"><BookOpen className="w-12 h-12 text-blue-600" /></div>
              <h1 className="text-3xl font-bold text-gray-800">{t.appName}</h1>
              <p className="text-gray-500 mt-2">{t.appSubtitle}</p>
            </div>

            {!isSignUp ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.password}</label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">{t.login}</button>
                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    {t.noAccount}{' '}
                    <button type="button" onClick={() => { setIsSignUp(true); setFormData({ email: '', password: '', name: '', bio: '' }); }} className="text-blue-600 hover:text-blue-700 font-semibold">{t.signupNow}</button>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.fullName} *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.email} *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.password} *</label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.bio}</label>
                  <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows="3"
                    placeholder={t.bioPlaceholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition">{t.signup}</button>
                <div className="text-center">
                  <p className="text-gray-600 text-sm">
                    {t.haveAccount}{' '}
                    <button type="button" onClick={() => { setIsSignUp(false); setFormData({ email: '', password: '', name: '', bio: '' }); }} className="text-blue-600 hover:text-blue-700 font-semibold">{t.loginNow}</button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ============ لوحة التحكم ============ */
  return (
    <div dir={t.dir} className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-7 h-7 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-800">{t.appName}</h1>
            </div>
            <div className="flex items-center gap-2">
              <LangToggle />
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
                <User className="w-5 h-5 text-gray-700" />
              </button>
              <button onClick={handleLogout} className="p-2 rounded-lg bg-red-600 hover:bg-red-700 transition">
                <LogOut className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="flex gap-2 border-t pt-3 overflow-x-auto">
            {[
              { key: 'home', label: t.navHome, icon: Home },
              { key: 'specialties', label: t.navSpecialties, icon: Compass },
              { key: 'quiz', label: t.navQuiz, icon: ClipboardList },
              { key: 'results', label: t.navResults, icon: Award }
            ].map(tab => (
              <button key={tab.key} onClick={() => { setCurrentPage(tab.key); setIsQuizStarted(false); }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg whitespace-nowrap text-sm transition ${currentPage === tab.key ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                <tab.icon className="w-4 h-4" />{tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* لوحة الملف الشخصي المنسدلة */}
        {isProfileOpen && (
          <div className="max-w-6xl mx-auto px-4 pb-4">
            <div className="bg-white border rounded-xl shadow-lg p-6 mt-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">{t.profileInfo}</h3>
                <div className="flex gap-2">
                  {!isEditing && (
                    <button onClick={() => { setIsEditing(true); setFormData({ email: currentUser.email, password: currentUser.password, name: currentUser.name, bio: currentUser.bio || '' }); }}
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm transition">
                      <Edit2 className="w-4 h-4" />{t.edit}
                    </button>
                  )}
                  <button onClick={() => setIsProfileOpen(false)} className="p-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 transition"><X className="w-4 h-4" /></button>
                </div>
              </div>

              {!isEditing ? (
                <div className="space-y-3 text-sm">
                  <div><span className="text-gray-500">{t.name}: </span><span className="font-semibold text-gray-800">{currentUser.name}</span></div>
                  <div><span className="text-gray-500">{t.email}: </span><span className="font-semibold text-gray-800">{currentUser.email}</span></div>
                  {currentUser.bio && <div><span className="text-gray-500">{t.bio}: </span><span className="text-gray-800">{currentUser.bio}</span></div>}
                  <div className="text-gray-400 text-xs pt-2">{t.joinDate}: {currentUser.createdAt}</div>
                </div>
              ) : (
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.fullName}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.bio}</label>
                    <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-sm transition"><Save className="w-4 h-4" />{t.save}</button>
                    <button type="button" onClick={() => setIsEditing(false)} className="flex items-center gap-1 bg-gray-400 hover:bg-gray-500 text-white px-4 py-1.5 rounded-lg text-sm transition"><X className="w-4 h-4" />{t.cancel}</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* ============ الرئيسية ============ */}
        {currentPage === 'home' && (
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-2">{t.welcomeBack}, {currentUser.name}! 👋</h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-8">{t.homeIntro}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => setCurrentPage('quiz')} className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                {hasAttempts ? t.startQuiz : t.startJourney}
              </button>
              {hasAttempts && (
                <button onClick={() => setCurrentPage('results')} className="bg-white/20 hover:bg-white/30 font-bold px-6 py-3 rounded-lg transition">{t.seeMyResult}</button>
              )}
              <button onClick={() => setCurrentPage('specialties')} className="bg-white/20 hover:bg-white/30 font-bold px-6 py-3 rounded-lg transition">{t.browseSpecialties}</button>
            </div>
          </div>
        )}

        {/* ============ المسارات ============ */}
        {currentPage === 'specialties' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{t.specialtiesTitle}</h2>
              <p className="text-gray-500">{t.specialtiesDesc}</p>
              <p className="text-amber-600 text-xs mt-1">{t.placeholderNote}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialties.map(s => {
                const Icon = s.icon;
                const isExpanded = expandedSpecialty === s.id;
                const isTop = topMatchId === s.id;
                const d = s[lang];
                return (
                  <div key={s.id} className="bg-white rounded-xl shadow-md overflow-hidden border" style={{ borderColor: isTop ? s.color : '#e5e7eb', borderWidth: isTop ? 2 : 1 }}>
                    <button onClick={() => setExpandedSpecialty(isExpanded ? null : s.id)} className="w-full flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: s.color + '20' }}>
                          <Icon className="w-6 h-6" style={{ color: s.color }} />
                        </div>
                        <div className="text-start">
                          <p className="font-bold text-gray-800 flex items-center gap-1">
                            {d.name} {isTop && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                          </p>
                          {isTop && <p className="text-xs" style={{ color: s.color }}>{t.yourMatch}</p>}
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-4 space-y-3 text-sm">
                        <div><p className="font-semibold text-gray-700">{t.inShort}</p><p className="text-gray-600">{d.short}</p></div>
                        <div><p className="font-semibold text-gray-700">{t.aroundYou}</p><p className="text-gray-600">{d.aroundYou}</p></div>
                        <div><p className="font-semibold text-gray-700">🔬 {t.funFact}</p><p className="text-gray-600">{d.fact}</p></div>
                        <div><p className="font-semibold text-gray-700">{t.careerPath}</p><p className="text-gray-600">{d.career}</p></div>
                        <div><p className="font-semibold text-gray-700">{t.suitableFor}</p><p className="text-gray-600">{d.suitable}</p></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============ الاختبار ============ */}
        {currentPage === 'quiz' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {!isQuizStarted && !quizResult ? (
              <div className="text-center mb-8">
                <ClipboardList className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.quizTitle}</h2>
                <p className="text-gray-600 mb-6">{t.quizDesc}</p>
                <p className="text-amber-600 text-xs mb-4">{t.placeholderNote}</p>
                <button onClick={() => { setIsQuizStarted(true); setQuizAnswers({}); }} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition">{t.startQuiz}</button>
              </div>
            ) : isQuizStarted && !quizResult ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.quizTitle}</h2>
                <div className="space-y-5">
                  {quizQuestions.map((q, index) => (
                    <div key={q.id} className="border border-gray-300 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-600 text-white px-2.5 py-1 rounded-full text-xs font-bold">{index + 1}/{quizQuestions.length}</div>
                        <p className="font-semibold text-gray-800 flex-1">{q[lang]}</p>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={() => handleQuizAnswer(q.id, true)} className={`flex-1 py-2 rounded-lg font-semibold transition ${quizAnswers[q.id] === true ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>✓ {t.agree}</button>
                        <button onClick={() => handleQuizAnswer(q.id, false)} className={`flex-1 py-2 rounded-lg font-semibold transition ${quizAnswers[q.id] === false ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>✗ {t.disagree}</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={handleSubmitQuiz} disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-3 rounded-lg transition">
                  {t.submitQuiz} ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                </button>
              </>
            ) : quizResult && (
              <ResultView t={t} lang={lang} result={quizResult} getSpecialty={getSpecialty}
                onBack={() => { setIsQuizStarted(false); setQuizResult(null); setQuizAnswers({}); setCurrentPage('results'); }} />
            )}
          </div>
        )}

        {/* ============ النتائج ============ */}
        {currentPage === 'results' && (
          <div className="space-y-6">
            {hasAttempts ? (
              <>
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <ResultView t={t} lang={lang} result={currentUser.quizAttempts[currentUser.quizAttempts.length - 1]} getSpecialty={getSpecialty} hideBack />
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.resultsLog}</h3>
                  <div className="space-y-3">
                    {currentUser.quizAttempts.slice().reverse().map((attempt, idx) => {
                      const top = getSpecialty(attempt.matches[0].id);
                      return (
                        <div key={idx} className="border border-gray-300 rounded-lg p-4 flex justify-between items-center text-sm">
                          <div>
                            <p className="text-gray-500">{attempt.date} - {attempt.time}</p>
                            <p className="font-semibold text-gray-800">{t.attempt} #{currentUser.quizAttempts.length - idx}</p>
                          </div>
                          <div className="text-end">
                            <p className="font-bold" style={{ color: top.color }}>{top[lang].name}</p>
                            <p className="text-gray-600">{attempt.matches[0].percentage}%</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">{t.noQuizzes}</p>
                <p className="text-gray-400 text-sm">{t.startFirst}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============ عرض النتيجة (يُستخدم بعد الاختبار وبصفحة النتائج) ============ */
function ResultView({ t, lang, result, getSpecialty, onBack, hideBack }) {
  const top3 = result.matches.slice(0, 3);
  const topSpecialty = getSpecialty(top3[0].id);

  return (
    <div>
      <div className="text-center mb-8">
        <Award className="w-20 h-20 text-yellow-500 mx-auto mb-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{t.quizFinished}</h2>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-gray-700 mb-4">{t.yourTopMatches}</h3>
        <div className="space-y-3">
          {top3.map((m, i) => {
            const s = getSpecialty(m.id);
            const Icon = s.icon;
            return (
              <div key={m.id} className="flex items-center gap-3">
                <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: s.color + '20' }}>
                  <Icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-gray-800">{i === 0 && '🏆 '}{s[lang].name}</span>
                    <span className="font-bold" style={{ color: s.color }}>{m.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full transition-all" style={{ width: `${m.percentage}%`, backgroundColor: s.color }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-gray-800 mb-3">{t.recommendations} — {topSpecialty[lang].name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4 border">
            <p className="font-semibold text-gray-700 mb-2">{t.internalUni}</p>
            <p className="text-gray-400 text-xs">{t.comingSoon}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <p className="font-semibold text-gray-700 mb-2">{t.externalUni}</p>
            <p className="text-gray-400 text-xs">{t.comingSoon}</p>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-400 mb-4">{result.date} - {result.time}</div>

      {!hideBack && (
        <button onClick={onBack} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">{t.backToMenu}</button>
      )}
    </div>
  );
}
