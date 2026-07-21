import React, { useState, useEffect } from 'react';
import {
  LogOut, Edit2, Save, X, User, ClipboardList, Award, Languages,
  Home, Compass, Star, ChevronDown, ChevronUp, ArrowLeft
} from 'lucide-react';
import {
  hollandTypes, specialties, quizQuestions, forcedChoiceQuestions, computeHollandResult
} from './quizData.js';

/* ============ الترجمة ============ */
const translations = {
  ar: {
    dir: 'rtl',
    appName: 'Bio Path', appSubtitle: 'اكتشف مسارك في الهندسة الحيوية',
    email: 'البريد الإلكتروني', password: 'كلمة المرور', fullName: 'الاسم الكامل',
    bio: 'النبذة الشخصية', bioPlaceholder: 'أخبرنا عن نفسك...',
    login: 'تسجيل الدخول', signup: 'إنشاء حساب',
    noAccount: 'ليس لديك حساب؟', signupNow: 'اشترك الآن',
    haveAccount: 'لديك حساب بالفعل؟', loginNow: 'تسجيل الدخول',
    profile: 'ملفي', navHome: 'الرئيسية', navSpecialties: 'المسارات', navQuiz: 'الاختبار', navResults: 'النتائج',
    welcomeBack: 'أهلاً', homeIntro: 'هذا الموقع يساعدك تكتشف أي مسار دقيق داخل الهندسة الحيوية يناسب ميولك وشخصيتك، عن طريق اختبار علمي يعتمد على نموذج هولاند للميول المهنية.',
    startJourney: 'ابدأ الاختبار الآن', retakeQuiz: 'أعد الاختبار', seeMyResult: 'شوف نتيجتك', browseSpecialties: 'تصفح المسارات',
    specialtiesTitle: 'المسارات الدقيقة', specialtiesDesc: 'تعرف على كل مسار بلغة بسيطة — قبل أو بعد الاختبار',
    suitableType: 'يناسب النمط', inShort: 'باختصار', around: 'تراه حولك في', fact: 'هل تعلم؟', career: 'أين تعمل؟',
    field: 'المجال', example: 'مثال', takeTestForThis: 'خذ الاختبار لتعرف مدى ملاءمتك لهذا المسار',
    yourMatch: 'الأقرب لك', profileInfo: 'الملف الشخصي', edit: 'تعديل', name: 'الاسم', notEntered: 'لم يُدخل',
    joinDate: 'تاريخ الانضمام', save: 'حفظ', cancel: 'إلغاء',
    quizTitle: 'اختبار اكتشاف المسار', quizIntro: 'اختبار الميول المهنية (نموذج هولاند)',
    quizDesc: 'أجب بصراحة حسب ميولك الحقيقية — ما فيه إجابة صح أو غلط. اختر ما يمثلك أكثر في كل موقف.',
    quizNote: 'الاختبار 33 موقف. آخر 3 مواقف اختيار إجباري بين خيارين.',
    startQuiz: 'ابدأ الاختبار', forcedSection: 'أسئلة المفاضلة — اختر واحداً فقط',
    submitQuiz: 'أظهر نتيجتي', answered: 'أُجيب', of: 'من',
    yourCode: 'رمز شخصيتك المهنية', yourTopMatches: 'أقرب المسارات لك',
    resultTitle: 'نتيجتك', recommendations: 'توصيات وتواصل', internalUni: '🏫 داخل الجامعة', externalUni: '🌍 خارج الجامعة',
    comingSoon: 'سيتم إضافة التوصيات وحسابات المختصين هنا قريباً', date: 'التاريخ', time: 'الوقت',
    viewResult: 'اعرض النتيجة كاملة', backToMenu: 'تم', resultsLog: 'محاولاتك السابقة',
    noQuizzes: 'لم تأخذ الاختبار بعد', startFirst: 'ابدأ من تبويب الاختبار', attempt: 'محاولة',
    fillRequired: 'يرجى ملء البيانات المطلوبة!', emailExists: 'البريد مسجّل بالفعل!', invalidLogin: 'بيانات دخول غير صحيحة!',
    mustAnswerAll: 'يرجى الإجابة على جميع المواقف أولاً'
  },
  en: {
    dir: 'ltr',
    appName: 'Bio Path', appSubtitle: 'Discover your path in Bioengineering',
    email: 'Email', password: 'Password', fullName: 'Full Name',
    bio: 'Bio', bioPlaceholder: 'Tell us about yourself...',
    login: 'Login', signup: 'Sign Up',
    noAccount: "Don't have an account?", signupNow: 'Sign up now',
    haveAccount: 'Already have an account?', loginNow: 'Login',
    profile: 'Profile', navHome: 'Home', navSpecialties: 'Specialties', navQuiz: 'Quiz', navResults: 'Results',
    welcomeBack: 'Welcome', homeIntro: 'This site helps you discover which precise bioengineering specialty fits your interests and personality, through a scientific quiz based on the Holland career-interest model.',
    startJourney: 'Start the Quiz', retakeQuiz: 'Retake Quiz', seeMyResult: 'See Your Result', browseSpecialties: 'Browse Specialties',
    specialtiesTitle: 'Precise Specialties', specialtiesDesc: 'Learn about each specialty in simple terms — before or after the quiz',
    suitableType: 'Suits the', inShort: 'Overview', around: 'Real-world examples', fact: 'Did You Know?', career: 'Career Opportunities',
    field: 'Field', example: 'Example', takeTestForThis: 'Take the quiz to see how well this path suits you',
    yourMatch: 'Your Match', profileInfo: 'Profile', edit: 'Edit', name: 'Name', notEntered: 'Not entered',
    joinDate: 'Join Date', save: 'Save', cancel: 'Cancel',
    quizTitle: 'Discover Your Path Quiz', quizIntro: 'Career Interest Assessment (Holland Model)',
    quizDesc: "Answer honestly based on your real interests — there's no right or wrong. Choose what represents you most in each situation.",
    quizNote: 'The quiz has 33 situations. The last 3 are forced choices between two options.',
    startQuiz: 'Start Quiz', forcedSection: 'Forced-choice questions — pick only one',
    submitQuiz: 'Show My Result', answered: 'Answered', of: 'of',
    yourCode: 'Your Career Personality Code', yourTopMatches: 'Your Closest Specialties',
    resultTitle: 'Your Result', recommendations: 'Recommendations & Contacts', internalUni: '🏫 Inside University', externalUni: '🌍 Outside University',
    comingSoon: 'Recommendations and expert contacts will be added here soon', date: 'Date', time: 'Time',
    viewResult: 'View Full Result', backToMenu: 'Done', resultsLog: 'Your Past Attempts',
    noQuizzes: "You haven't taken the quiz yet", startFirst: 'Start from the Quiz tab', attempt: 'Attempt',
    fillRequired: 'Please fill in the required fields!', emailExists: 'Email already registered!', invalidLogin: 'Invalid login credentials!',
    mustAnswerAll: 'Please answer all situations first'
  }
};

// اسم المسار ثنائي اللغة دائماً
const bilingualName = (s) => `${s.emoji} ${s.ar.name} | ${s.en.name}`;

export default function BioPath() {
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
  const [expanded, setExpanded] = useState(null);

  const [formData, setFormData] = useState({ email: '', password: '', name: '', bio: '' });

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) { setCurrentUser(JSON.parse(savedUser)); setIsLoggedIn(true); }
    const savedLang = localStorage.getItem('appLang');
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const n = lang === 'ar' ? 'en' : 'ar';
    setLang(n); localStorage.setItem('appLang', n);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[formData.email] && users[formData.email].password === formData.password) {
      const u = users[formData.email];
      setCurrentUser(u); localStorage.setItem('currentUser', JSON.stringify(u));
      setIsLoggedIn(true); setFormData({ email: '', password: '', name: '', bio: '' });
    } else alert(t.invalidLogin);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) { alert(t.fillRequired); return; }
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[formData.email]) { alert(t.emailExists); return; }
    const u = { email: formData.email, password: formData.password, name: formData.name, bio: formData.bio,
      quizAttempts: [], createdAt: new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US') };
    users[formData.email] = u;
    localStorage.setItem('users', JSON.stringify(users));
    setCurrentUser(u); localStorage.setItem('currentUser', JSON.stringify(u));
    setIsLoggedIn(true); setIsSignUp(false); setFormData({ email: '', password: '', name: '', bio: '' });
  };

  const handleLogout = () => {
    setCurrentUser(null); setIsLoggedIn(false); localStorage.removeItem('currentUser');
    setIsEditing(false); setIsProfileOpen(false); setCurrentPage('home');
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const u = { ...currentUser, name: formData.name, bio: formData.bio };
    users[currentUser.email] = u;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(u));
    setCurrentUser(u); setIsEditing(false);
  };

  const allQuestions = [...quizQuestions, ...forcedChoiceQuestions];
  const answeredCount = Object.keys(quizAnswers).length;
  const allAnswered = answeredCount >= allQuestions.length;

  const handleSubmitQuiz = () => {
    if (!allAnswered) { alert(t.mustAnswerAll); return; }
    const result = computeHollandResult(quizAnswers);
    const attempt = {
      date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US'),
      time: new Date().toLocaleTimeString(lang === 'ar' ? 'ar-SA' : 'en-US'),
      ...result
    };
    setQuizResult(attempt);
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const u = { ...currentUser, quizAttempts: [...(currentUser.quizAttempts || []), attempt] };
    users[currentUser.email] = u;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(u));
    setCurrentUser(u);
  };

  const getSpecialty = (id) => specialties.find(s => s.id === id);
  const hasAttempts = currentUser?.quizAttempts?.length > 0;
  const lastAttempt = hasAttempts ? currentUser.quizAttempts[currentUser.quizAttempts.length - 1] : null;
  const topMatchId = lastAttempt ? lastAttempt.matches[0].id : null;

  const LangToggle = ({ dark }) => (
    <button onClick={toggleLang} className={`flex items-center gap-1 px-3 py-2 rounded-lg font-semibold text-sm transition ${dark ? 'bg-white/20 hover:bg-white/30 text-white' : 'text-white hover:opacity-90'}`} style={dark ? {} : { backgroundColor: '#10B981' }}>
      <Languages className="w-4 h-4" />{lang === 'ar' ? 'EN' : 'ع'}
    </button>
  );

  /* ============ تسجيل الدخول ============ */
  if (!isLoggedIn) {
    return (
      <div dir={t.dir} className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #0A392B 0%, #047857 100%)' }}>
        <div className="w-full max-w-md">
          <div className="flex justify-end mb-4"><LangToggle dark /></div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-3">
                <img src="/logo.jpg" alt="Bio Path" className="w-28 h-28 object-contain" />
              </div>
              <h1 className="text-3xl font-bold" style={{ color: '#0A392B' }}>{t.appName}</h1>
              <p className="text-gray-500 mt-2">{t.appSubtitle}</p>
            </div>

            {!isSignUp ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <Field label={t.email} name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                <Field label={t.password} name="password" type="password" value={formData.password} onChange={handleInputChange} required />
                <button type="submit" className="w-full text-white font-bold py-2.5 rounded-lg transition hover:opacity-90" style={{ backgroundColor: '#0A392B' }}>{t.login}</button>
                <p className="text-center text-gray-600 text-sm">{t.noAccount}{' '}
                  <button type="button" onClick={() => { setIsSignUp(true); setFormData({ email: '', password: '', name: '', bio: '' }); }} className="font-semibold" style={{ color: '#059669' }}>{t.signupNow}</button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleSignUp} className="space-y-4">
                <Field label={`${t.fullName} *`} name="name" value={formData.name} onChange={handleInputChange} required />
                <Field label={`${t.email} *`} name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                <Field label={`${t.password} *`} name="password" type="password" value={formData.password} onChange={handleInputChange} required />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.bio}</label>
                  <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows="3" placeholder={t.bioPlaceholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style={{ '--tw-ring-color': '#10B981' }} />
                </div>
                <button type="submit" className="w-full text-white font-bold py-2.5 rounded-lg transition hover:opacity-90" style={{ backgroundColor: '#059669' }}>{t.signup}</button>
                <p className="text-center text-gray-600 text-sm">{t.haveAccount}{' '}
                  <button type="button" onClick={() => { setIsSignUp(false); setFormData({ email: '', password: '', name: '', bio: '' }); }} className="font-semibold" style={{ color: '#059669' }}>{t.loginNow}</button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ============ لوحة التحكم ============ */
  return (
    <div dir={t.dir} className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-20 shadow-lg" style={{ backgroundColor: '#0A392B' }}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="Bio Path" className="w-9 h-9 object-contain rounded-lg" />
              <h1 className="text-xl font-bold text-white">{t.appName}</h1>
            </div>
            <div className="flex items-center gap-2">
              <LangToggle dark />
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"><User className="w-5 h-5 text-white" /></button>
              <button onClick={handleLogout} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"><LogOut className="w-5 h-5 text-white" /></button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {[
              { key: 'home', label: t.navHome, icon: Home },
              { key: 'specialties', label: t.navSpecialties, icon: Compass },
              { key: 'quiz', label: t.navQuiz, icon: ClipboardList },
              { key: 'results', label: t.navResults, icon: Award }
            ].map(tab => {
              const active = currentPage === tab.key;
              return (
                <button key={tab.key} onClick={() => { setCurrentPage(tab.key); setIsQuizStarted(false); }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition"
                  style={active ? { backgroundColor: '#10B981', color: '#04231A' } : { backgroundColor: 'rgba(255,255,255,0.08)', color: 'white' }}>
                  <tab.icon className="w-4 h-4" />{tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {isProfileOpen && (
          <div className="max-w-6xl mx-auto px-4 pb-4">
            <div className="bg-white rounded-xl shadow-lg p-6 mt-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold" style={{ color: '#0A392B' }}>{t.profileInfo}</h3>
                <div className="flex gap-2">
                  {!isEditing && (
                    <button onClick={() => { setIsEditing(true); setFormData({ email: currentUser.email, password: currentUser.password, name: currentUser.name, bio: currentUser.bio || '' }); }}
                      className="flex items-center gap-1 text-white px-3 py-1.5 rounded-lg text-sm transition hover:opacity-90" style={{ backgroundColor: '#059669' }}><Edit2 className="w-4 h-4" />{t.edit}</button>
                  )}
                  <button onClick={() => setIsProfileOpen(false)} className="p-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 transition"><X className="w-4 h-4" /></button>
                </div>
              </div>
              {!isEditing ? (
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-500">{t.name}: </span><span className="font-semibold text-gray-800">{currentUser.name}</span></div>
                  <div><span className="text-gray-500">{t.email}: </span><span className="font-semibold text-gray-800">{currentUser.email}</span></div>
                  {currentUser.bio && <div><span className="text-gray-500">{t.bio}: </span><span className="text-gray-800">{currentUser.bio}</span></div>}
                  <div className="text-gray-400 text-xs pt-2">{t.joinDate}: {currentUser.createdAt}</div>
                </div>
              ) : (
                <form onSubmit={handleUpdateProfile} className="space-y-3">
                  <Field label={t.fullName} name="name" value={formData.name} onChange={handleInputChange} small />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.bio}</label>
                    <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className="flex items-center gap-1 text-white px-4 py-1.5 rounded-lg text-sm transition hover:opacity-90" style={{ backgroundColor: '#059669' }}><Save className="w-4 h-4" />{t.save}</button>
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
          <div className="rounded-2xl shadow-xl p-8 md:p-12 text-white text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A392B 0%, #047857 100%)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#10B981', transform: 'translate(30%,-30%)' }}></div>
            <div className="relative">
              <div className="inline-flex mb-4">
                <img src="/logo.jpg" alt="Bio Path" className="w-32 h-32 object-contain drop-shadow-lg" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.welcomeBack}، {currentUser.name}! 👋</h2>
              <p className="text-emerald-50 max-w-xl mx-auto mb-8 leading-relaxed">{t.homeIntro}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => setCurrentPage('quiz')} className="font-bold px-6 py-3 rounded-lg transition hover:opacity-90" style={{ backgroundColor: '#10B981', color: '#04231A' }}>
                  {hasAttempts ? t.retakeQuiz : t.startJourney}
                </button>
                {hasAttempts && <button onClick={() => setCurrentPage('results')} className="bg-white/15 hover:bg-white/25 font-bold px-6 py-3 rounded-lg transition">{t.seeMyResult}</button>}
                <button onClick={() => setCurrentPage('specialties')} className="bg-white/15 hover:bg-white/25 font-bold px-6 py-3 rounded-lg transition">{t.browseSpecialties}</button>
              </div>
            </div>
          </div>
        )}

        {/* ============ المسارات ============ */}
        {currentPage === 'specialties' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold" style={{ color: '#0A392B' }}>{t.specialtiesTitle}</h2>
              <p className="text-gray-500">{t.specialtiesDesc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {specialties.map(s => {
                const isExp = expanded === s.id;
                const isTop = topMatchId === s.id;
                const d = s[lang];
                const primaryType = hollandTypes[s.codes[0]];
                return (
                  <div key={s.id}
                    className="rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm"
                    style={{
                      background: 'rgba(255,255,255,0.75)',
                      border: `1.5px solid ${isTop ? '#10B981' : 'rgba(10,57,43,0.12)'}`,
                      boxShadow: isTop ? '0 8px 30px rgba(16,185,129,0.25)' : '0 4px 20px rgba(10,57,43,0.06)'
                    }}>
                    {/* Badge نمط الشخصية */}
                    <div className="px-4 pt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: primaryType.color + '18', color: primaryType.color }}>
                        🧬 {t.suitableType} {lang === 'ar' ? primaryType.ar : primaryType.en}
                      </span>
                      {isTop && <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />}
                    </div>

                    <button onClick={() => setExpanded(isExp ? null : s.id)} className="w-full px-4 py-3 text-start">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-bold leading-snug" style={{ color: '#0A392B' }}>{s.emoji} {d.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5" dir="ltr">{s.en.name}</p>
                          {isTop && <p className="text-xs font-semibold mt-1" style={{ color: '#059669' }}>⭐ {t.yourMatch}</p>}
                        </div>
                        {isExp ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                      </div>
                    </button>

                    {isExp && (
                      <div className="px-4 pb-4 space-y-2.5">
                        <MiniCard title={t.inShort} text={d.short} color="#0A392B" />
                        <MiniCard title={`📍 ${t.around}`} text={d.around} color="#047857" />
                        <MiniCard title={`🔬 ${t.fact}`} text={d.fact} color="#059669" />
                        <MiniCard title={`💼 ${t.career}`} text={d.career} color="#10B981" />
                        <button onClick={() => { setCurrentPage('quiz'); setExpanded(null); }}
                          className="w-full mt-2 text-white text-sm font-semibold py-2.5 rounded-lg transition hover:opacity-90 flex items-center justify-center gap-1"
                          style={{ backgroundColor: '#0A392B' }}>
                          {t.takeTestForThis} <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                        </button>
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
          <div>
            {!isQuizStarted && !quizResult ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="inline-flex p-3 rounded-2xl mb-4" style={{ backgroundColor: 'rgba(16,185,129,0.12)' }}>
                  <ClipboardList className="w-14 h-14" style={{ color: '#059669' }} />
                </div>
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#0A392B' }}>{t.quizTitle}</h2>
                <p className="font-semibold mb-3" style={{ color: '#059669' }}>{t.quizIntro}</p>
                <p className="text-gray-600 mb-2 max-w-lg mx-auto">{t.quizDesc}</p>
                <p className="text-gray-400 text-sm mb-6">{t.quizNote}</p>
                <button onClick={() => { setIsQuizStarted(true); setQuizAnswers({}); }} className="text-white px-8 py-3 rounded-lg font-bold transition hover:opacity-90" style={{ backgroundColor: '#059669' }}>{t.startQuiz}</button>
              </div>
            ) : isQuizStarted && !quizResult ? (
              <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#0A392B' }}>{t.quizTitle}</h2>
                <div className="space-y-5">
                  {quizQuestions.map((q, index) => (
                    <QuestionCard key={q.id} q={q} index={index} total={allQuestions.length} lang={lang}
                      selected={quizAnswers[q.id]} onSelect={(type) => setQuizAnswers(prev => ({ ...prev, [q.id]: type }))} />
                  ))}

                  {/* قسم المفاضلة */}
                  <div className="pt-4">
                    <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: '#0A392B' }}>
                      <p className="text-white font-bold text-center">⚖️ {t.forcedSection}</p>
                    </div>
                    {forcedChoiceQuestions.map((q, i) => (
                      <QuestionCard key={q.id} q={q} index={quizQuestions.length + i} total={allQuestions.length} lang={lang} forced
                        selected={quizAnswers[q.id]} onSelect={(type) => setQuizAnswers(prev => ({ ...prev, [q.id]: type }))} />
                    ))}
                  </div>
                </div>

                <button onClick={handleSubmitQuiz} disabled={!allAnswered}
                  className="w-full mt-8 text-white font-bold py-3 rounded-lg transition disabled:opacity-40" style={{ backgroundColor: allAnswered ? '#059669' : '#9CA3AF' }}>
                  {t.submitQuiz} ({answeredCount}/{allQuestions.length})
                </button>
              </div>
            ) : quizResult && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <ResultView t={t} lang={lang} result={quizResult} getSpecialty={getSpecialty}
                  onBack={() => { setIsQuizStarted(false); setQuizResult(null); setQuizAnswers({}); setCurrentPage('results'); }} />
              </div>
            )}
          </div>
        )}

        {/* ============ النتائج ============ */}
        {currentPage === 'results' && (
          <div className="space-y-6">
            {hasAttempts ? (
              <>
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <ResultView t={t} lang={lang} result={lastAttempt} getSpecialty={getSpecialty} hideBack />
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#0A392B' }}>{t.resultsLog}</h3>
                  <div className="space-y-3">
                    {currentUser.quizAttempts.slice().reverse().map((a, idx) => {
                      const top = getSpecialty(a.matches[0].id);
                      return (
                        <div key={idx} className="border rounded-lg p-4 flex justify-between items-center text-sm" style={{ borderColor: 'rgba(10,57,43,0.1)' }}>
                          <div>
                            <p className="text-gray-500">{a.date} - {a.time}</p>
                            <p className="font-semibold text-gray-800">{t.attempt} #{currentUser.quizAttempts.length - idx} · {a.topCode.join('·')}</p>
                          </div>
                          <div className="text-end">
                            <p className="font-bold" style={{ color: top.color }}>{top.emoji} {top[lang].name}</p>
                            <p className="text-gray-600">{a.matches[0].percentage}%</p>
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

/* ============ مكوّنات مساعدة ============ */
function Field({ label, name, type = 'text', value, onChange, required, small }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} required={required}
        className={`w-full ${small ? 'px-3 py-2 text-sm' : 'px-4 py-2'} border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none`}
        style={{ '--tw-ring-color': '#10B981' }} />
    </div>
  );
}

function MiniCard({ title, text, color }) {
  return (
    <div className="rounded-lg p-3" style={{ backgroundColor: color + '0D' }}>
      <p className="font-semibold text-sm mb-0.5" style={{ color }}>{title}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function QuestionCard({ q, index, total, lang, selected, onSelect, forced }) {
  return (
    <div className="border rounded-xl p-5" style={{ borderColor: forced ? '#10B981' : 'rgba(10,57,43,0.12)', backgroundColor: forced ? 'rgba(16,185,129,0.03)' : 'white' }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-white px-2.5 py-1 rounded-full text-xs font-bold shrink-0" style={{ backgroundColor: '#0A392B' }}>{index + 1}/{total}</div>
        <p className="font-semibold text-gray-800 flex-1">{q[lang]}</p>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {q.options.map((opt, i) => {
          const isSel = selected === opt.type;
          return (
            <button key={i} onClick={() => onSelect(opt.type)}
              className="text-start px-4 py-2.5 rounded-lg text-sm font-medium transition border"
              style={isSel
                ? { backgroundColor: '#10B981', color: '#04231A', borderColor: '#10B981' }
                : { backgroundColor: '#F9FAFB', color: '#374151', borderColor: 'rgba(10,57,43,0.08)' }}>
              {opt[lang]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultView({ t, lang, result, getSpecialty, onBack, hideBack }) {
  const top3 = result.matches.slice(0, 3);
  const topSpecialty = getSpecialty(top3[0].id);

  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex p-3 rounded-2xl mb-3" style={{ backgroundColor: 'rgba(16,185,129,0.12)' }}>
          <Award className="w-16 h-16" style={{ color: '#10B981' }} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0A392B' }}>{t.resultTitle}</h2>
      </div>

      {/* رمز الشخصية */}
      <div className="rounded-xl p-5 mb-6 text-center" style={{ background: 'linear-gradient(135deg, #0A392B 0%, #047857 100%)' }}>
        <p className="text-emerald-100 text-sm mb-2">{t.yourCode}</p>
        <div className="flex justify-center gap-2">
          {result.topCode.map(code => (
            <div key={code} className="px-4 py-2 rounded-lg font-bold text-lg" style={{ backgroundColor: 'rgba(16,185,129,0.25)', color: 'white' }}>
              {code} · {lang === 'ar' ? hollandTypes[code].ar : hollandTypes[code].en}
            </div>
          ))}
        </div>
      </div>

      {/* أقرب المسارات */}
      <div className="mb-6">
        <h3 className="font-bold mb-4" style={{ color: '#0A392B' }}>{t.yourTopMatches}</h3>
        <div className="space-y-3">
          {top3.map((m, i) => {
            const s = getSpecialty(m.id);
            return (
              <div key={m.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-gray-800">{i === 0 && '🏆 '}{s.emoji} {s[lang].name}</span>
                  <span className="font-bold" style={{ color: s.color }}>{m.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full transition-all" style={{ width: `${m.percentage}%`, backgroundColor: s.color }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* توصيات */}
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#F9FAFB' }}>
        <h3 className="font-bold mb-3" style={{ color: '#0A392B' }}>{t.recommendations} — {topSpecialty.emoji} {topSpecialty[lang].name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4 border" style={{ borderColor: 'rgba(10,57,43,0.1)' }}>
            <p className="font-semibold text-gray-700 mb-2">{t.internalUni}</p>
            <p className="text-gray-400 text-xs">{t.comingSoon}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border" style={{ borderColor: 'rgba(10,57,43,0.1)' }}>
            <p className="font-semibold text-gray-700 mb-2">{t.externalUni}</p>
            <p className="text-gray-400 text-xs">{t.comingSoon}</p>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-400 mb-4">{result.date} - {result.time}</div>
      {!hideBack && <button onClick={onBack} className="w-full text-white font-bold py-3 rounded-lg transition hover:opacity-90" style={{ backgroundColor: '#059669' }}>{t.backToMenu}</button>}
    </div>
  );
}
