import React, { useState, useEffect } from 'react';
import {
  LogOut, Edit2, Save, X, User, Users, ClipboardList, Award, Languages,
  Home, Compass, Star, ChevronDown, ChevronUp, ArrowLeft, Mail, Linkedin
} from 'lucide-react';
import {
  interestTypes, specialties, quizQuestions, forcedChoiceQuestions, computeResult, personalitySummary,
  availability, faculty, specialtyShort
} from './quizData.js';
import { CommunityPage, SpecialtyOpportunities } from './community.jsx';

/* ============ الترجمة ============ */
const translations = {
  ar: {
    dir: 'rtl',
    appName: 'Bio Path', appSubtitle: 'اكتشف مسارك في الهندسة الحيوية',
    email: 'البريد الإلكتروني', password: 'كلمة المرور', fullName: 'الاسم الكامل',
    bio: 'النبذة الشخصية', bioPlaceholder: 'أخبرنا عن نفسك...',
    login: 'تسجيل الدخول', signup: 'إنشاء حساب',
    yourName: 'وش اسمك؟', namePlaceholder: 'اكتب اسمك الأول',
    startNow: 'ابدأ الآن',
    quickNote: 'ما تحتاج إيميل ولا كلمة مرور، بس اسمك ونبدأ 🌿',
    haveSavedAccount: 'عندك حساب محفوظ؟', loginHere: 'سجّل دخولك',
    backToQuickStart: '← رجوع للدخول السريع',
    enterNameFirst: 'اكتب اسمك أولاً 🙂',
    saveAccountTitle: 'ثبّت حسابك (اختياري)',
    saveAccountDesc: 'أضف إيميل وكلمة مرور عشان ترجع لنتائجك من أي جهاز',
    saveAccountBtn: 'تثبيت الحساب', accountSaved: 'تم تثبيت حسابك بنجاح ✅',
    guestBadge: 'حساب مؤقت',
    noAccount: 'ليس لديك حساب؟', signupNow: 'اشترك الآن',
    haveAccount: 'لديك حساب بالفعل؟', loginNow: 'تسجيل الدخول',
    profile: 'ملفي', navHome: 'الرئيسية', navSpecialties: 'المسارات', navQuiz: 'الاختبار', navResults: 'النتائج', navCommunity: 'المجتمع',
    welcomeBack: 'أهلاً', homeIntro: 'هذا الموقع يساعدك تكتشف أي مسار دقيق داخل الهندسة الحيوية يناسب ميولك وشخصيتك.',
    startJourney: 'ابدأ الاختبار الآن', retakeQuiz: 'أعد الاختبار', seeMyResult: 'شوف نتيجتك', browseSpecialties: 'تصفح المسارات',
    specialtiesTitle: 'المسارات الدقيقة', specialtiesDesc: 'تعرف على كل مسار بلغة بسيطة، قبل أو بعد الاختبار',
    suitableType: 'يناسب النمط', imagine: 'تخيّلها كذا', yourDay: 'يومك فيه', around: 'تراه حولك في', fact: 'هل تعلم؟', career: 'أين تعمل؟',
    tabBrief: 'نبذة سريعة', tabFaculty: 'أعضاء هيئة التدريس', learnMore: 'تعرف أكثر',
    cxLabel: 'التخصص الدقيق في KFUPM', coordinator: 'منسّق التخصص', toBeAnnounced: 'يُعلن لاحقاً',
    facultyInField: 'دكاترة القسم في هذا المجال', recommendations: 'توصيات ونصائح',
    recSoon: 'التوصيات تُضاف قريباً', recSoonDesc: 'نصائح من طلبة سبقوك ومن دكاترة المجال حول المواد والأبحاث وفرص التدريب.',
    deptTitle: 'قسم الهندسة الحيوية جامعة الملك فهد للبترول والمعادن',
    pickSpecialty: 'اختر تخصصاً من «نبذة سريعة» لعرض تفاصيله', backToBrief: '→ رجوع للنبذة السريعة',
    heroTitle: 'أن تُهندس شيئاً حيّاً',
    heroBody: 'المهندس المعتاد يعمل بالحديد والإسمنت والسيليكون: مواد صامتة تفعل ما يُملى عليها بالضبط. أمّا أنت فتعمل بمادة تنمو، وتتغيّر، وتقاوم، وتموت. وهذا ما يجعل المجال أصعب وأمتع.',
    whatIsTitle: 'ما الهندسة الحيوية؟',
    whatIsP1: 'باختصار: تأخذ أدوات المهندس (التصميم، والقياس، والتحسين) وتطبّقها على الأنظمة الحيّة. الهدف قد يكون علاج مرض، أو إنتاج دواء، أو تنظيف مياه ملوّثة، أو زراعة محصول يتحمّل الملوحة.',
    whatIsP2: 'الفارق الجوهري أن مادتك الخام لها «رأي». الجسر لا يرفض تصميمك، لكن الخليّة قد ترفضه، والجسم قد يهاجم ما زرعته فيه. لهذا يتعلّم مهندس الحياة شيئاً لا يتعلّمه غيره: كيف يصمّم لشيء يردّ عليه.',
    noticeText: 'التباس شائع يستحق التوضيح: الهندسة الطبية الحيوية فرعٌ يركّز على الأجهزة والتطبيقات الطبية. أمّا الهندسة الحيوية فأوسع، فالطب أحد ميادينها، ومعه الزراعة والبيئة والصناعة والحوسبة. أنت في المظلّة الكبرى، لا في الفرع.',
    whyTitle: 'لماذا تعرف التخصصات الدقيقة؟',
    why1T: 'الاسم واحد، والمهن مختلفة تماماً',
    why1B: 'تحت مظلّة «هندسة حيوية» يجلس من يقضي يومه كاتباً كوداً، ومن يقضيه تحت مجهر، ومن يقضيه في مصنع. الفرق بين يومَي اثنين منهم أكبر من الفرق بين كليّتين مختلفتين.',
    why2T: 'القرار يأتي أبكر ممّا تتوقّع',
    why2B: 'المواد الاختيارية، ومشروع التخرّج، والتدريب الصيفي، كلّها تبدأ تسألك «أي اتجاه؟» قبل أن تشعر بأنك جاهز للإجابة.',
    why3T: 'السنة الأولى وقت رخيص للتجربة',
    why3B: 'أن تكتشف أن مساراً لا يناسبك وأنت في السنة الأولى مكسب. أن تكتشف ذلك في السنة الرابعة مكلف.',
    purposeTitle: 'ما الذي يفعله هذا الموقع؟',
    purposeP1: 'هو بوصلة، لا خريطة. لن يقرّر عنك، ولن يقول لك «ادرس هذا». وظيفته أبسط وأهم: أن يجعل الخيارات السبعة واضحة في ذهنك، وأن يريك أيّها يشبه ميولك أنت.',
    purposeP2: 'لهذا يقوم على جزأين: بطاقات تشرح كل مسار بلغة يفهمها من لا خلفية له، واختبار مبنيّ على مقياس علمي للميول المهنية، مُكيّف خصيصاً لهذا المجال، يقرأ نمط ميولك ويدلّك على أقرب مسار إليه.',
    aboutTitle: 'عن المشروع',
    aboutBody: 'طالبة هندسة حيوية في جامعة الملك فهد للبترول والمعادن. أنشأتُ Bio Path لمساعدة الطلاب على اكتشاف المسار الدقيق الذي يناسب ميولهم داخل الهندسة الحيوية، قبل أن يفوت وقت الاختيار. أؤمن أن معرفة الاتجاه مبكراً تُوفّر سنوات من التردد.',
    aboutMaker: 'رندا الوادعي',
    aboutRole: 'طالبة هندسة حيوية · جامعة الملك فهد للبترول والمعادن',
    footerMade: 'رندا الوادعي',
    contactMe: 'تواصل معي',
    field: 'المجال', example: 'مثال', takeTestForThis: 'خذ الاختبار لتعرف مدى ملاءمتك لهذا المسار',
    yourMatch: 'الأقرب لك', profileInfo: 'الملف الشخصي', edit: 'تعديل', name: 'الاسم', notEntered: 'لم يُدخل',
    joinDate: 'تاريخ الانضمام', save: 'حفظ', cancel: 'إلغاء',
    quizTitle: 'اختبار اكتشاف المسار', quizIntro: 'مقياس ميول مبني على أسس علمية معتمدة',
    quizDesc: 'أجب بصراحة حسب ميولك الحقيقية، فما فيه إجابة صح أو غلط. اختر ما يمثلك أكثر في كل موقف.',
    quizNote: 'الاختبار 33 موقف. آخر 3 مواقف اختيار إجباري بين خيارين.',
    startQuiz: 'ابدأ الاختبار', forcedSection: 'سؤال مفاضلة، اختر واحداً فقط',
    resumeQuiz: 'أكمل من حيث وقفت', restartQuiz: 'ابدأ من جديد', resumeNote: 'عندك تقدّم محفوظ',
    questionOf: 'سؤال', prevQ: 'السابق', encourage1: 'ممتاز، أنت في الطريق 🌿', encourage2: 'نصف الطريق! استمر 💚', encourage3: 'اقتربت من النهاية ✨',
    orChoose: 'أو',
    submitQuiz: 'أظهر نتيجتي', answered: 'أُجيب', of: 'من',
    yourCode: 'رمز شخصيتك المهنية', yourTopMatches: 'أقرب المسارات لك',
    resultTitle: 'نتيجتك', recommendations: 'توصيات وتواصل', internalUni: '🏫 داخل الجامعة', externalUni: '🌍 خارج الجامعة',
    feedbackTitle: 'رأيك يهمّني 💚', feedbackDesc: 'دقيقة واحدة من وقتك تساعدني أطوّر Bio Path لزملائك', feedbackBtn: 'شاركني رأيك (٣ أسئلة)',
    personalityLabel: '✦ شخصيتك المهنية', codeHint: 'أعلى ٣ ميول لديك، مرتّبة من الأقوى',
    interestMap: 'خريطة ميولك', interestMapHint: 'من وين طلعت نتيجتك؟ هذي نسبك في الميول الستة',
    whyPath: 'ليش طلع لك هذا المسار؟', whyClosest: 'طلعت الأقرب لك',
    knowMore: 'اعرف أكثر: وش يميّزك عن المسار القريب؟', knowMoreClose: 'إخفاء التفاصيل',
    vsNearby: 'الفرق عن المسار القريب', reprQuestion: 'تحس النتيجة تمثّلك؟', reprYes: '👍 نعم', reprNo: '👎 لا', reprThanks: 'شكراً لك! رأيك يهمّني 💚',
    simTitle: 'كم تشعر أن هذه النتيجة تشبهك؟', simHint: 'من ١ (لا تشبهني) إلى ١٠ (تشبهني تماماً)', simThanks: 'شكراً! هذا يساعدني أطوّر دقّة الاختبار 🌿',
    deepTitle: '📚 تعمّق في مسارك', deepSoon: 'قريباً', deepSoonDesc: 'مصادر مختارة بعناية لكل مسار (فيديو · كورس · مقال)، بالتعاون مع مختصين',
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
    yourName: "What's your name?", namePlaceholder: 'Enter your first name',
    startNow: 'Start Now',
    quickNote: 'No email or password needed, just your name 🌿',
    haveSavedAccount: 'Have a saved account?', loginHere: 'Log in',
    backToQuickStart: '← Back to quick start',
    enterNameFirst: 'Please enter your name first 🙂',
    saveAccountTitle: 'Save your account (optional)',
    saveAccountDesc: 'Add an email and password to access your results from any device',
    saveAccountBtn: 'Save Account', accountSaved: 'Account saved successfully ✅',
    guestBadge: 'Temporary account',
    noAccount: "Don't have an account?", signupNow: 'Sign up now',
    haveAccount: 'Already have an account?', loginNow: 'Login',
    profile: 'Profile', navHome: 'Home', navSpecialties: 'Specialties', navQuiz: 'Quiz', navResults: 'Results', navCommunity: 'Community',
    welcomeBack: 'Welcome', homeIntro: 'This site helps you discover which precise bioengineering specialty fits your interests and personality.',
    startJourney: 'Start the Quiz', retakeQuiz: 'Retake Quiz', seeMyResult: 'See Your Result', browseSpecialties: 'Browse Specialties',
    specialtiesTitle: 'Precise Specialties', specialtiesDesc: 'Learn about each specialty in simple terms, before or after the quiz',
    suitableType: 'Suits the', imagine: 'Picture it like this', yourDay: 'Your day looks like', around: 'Real-world examples', fact: 'Did You Know?', career: 'Career Opportunities',
    tabBrief: 'Quick Overview', tabFaculty: 'Faculty', learnMore: 'Learn more',
    cxLabel: 'Concentration at KFUPM', coordinator: 'Coordinator', toBeAnnounced: 'To be announced',
    facultyInField: 'Department faculty in this field', recommendations: 'Recommendations & tips',
    recSoon: 'Recommendations coming soon', recSoonDesc: 'Tips from students before you and from faculty in the field about courses, research, and training.',
    deptTitle: 'Bioengineering Department KFUPM',
    pickSpecialty: 'Pick a specialty from "Quick Overview" to see its details', backToBrief: '← Back to Quick Overview',
    heroTitle: 'Engineering something alive',
    heroBody: 'The usual engineer works with steel, concrete, and silicon: silent materials that do exactly what they are told. You, on the other hand, work with material that grows, changes, resists, and dies. And that is what makes this field harder and far more interesting.',
    whatIsTitle: 'What is Bioengineering?',
    whatIsP1: 'In short: you take an engineer\u2019s tools (design, measurement, optimization) and apply them to living systems. The goal might be curing a disease, producing a drug, cleaning polluted water, or growing a salt-tolerant crop.',
    whatIsP2: 'The fundamental difference is that your raw material has an opinion. A bridge does not reject your design, but a cell might, and the body may attack what you implanted in it. That is why a life engineer learns something no one else does: how to design for something that answers back.',
    noticeText: 'A common confusion worth clearing up: Biomedical Engineering is a branch focused on medical devices and applications. Bioengineering is broader; medicine is one of its fields, alongside agriculture, environment, industry, and computing. You are under the larger umbrella, not the branch.',
    whyTitle: 'Why learn the precise specialties?',
    why1T: 'One name, completely different careers',
    why1B: 'Under the label \u201cbioengineering\u201d sits someone who spends the day writing code, someone under a microscope, and someone in a factory. The gap between any two of their days is bigger than the gap between two different colleges.',
    why2T: 'The decision comes earlier than you expect',
    why2B: 'Electives, the graduation project, the summer internship all start asking \u201cwhich direction?\u201d before you feel ready to answer.',
    why3T: 'First year is cheap time to experiment',
    why3B: 'Discovering a path does not suit you in your first year is a win. Discovering it in your fourth year is expensive.',
    purposeTitle: 'What does this site do?',
    purposeP1: 'It is a compass, not a map. It will not decide for you, and it will not tell you \u201cstudy this.\u201d Its job is simpler and more important: to make the seven options clear in your mind, and to show you which one resembles your own interests.',
    purposeP2: 'That is why it has two parts: cards explaining each path in language anyone can follow, and an assessment built on a scientific career-interest scale, adapted specifically for this field, that reads your interest profile and points you to the closest path.',
    aboutTitle: 'About the Project',
    aboutBody: 'A bioengineering student at King Fahd University of Petroleum and Minerals. I created Bio Path to help students discover the precise specialty that fits their interests within bioengineering, before the choice is made for them. I believe knowing your direction early saves years of hesitation.',
    aboutMaker: 'Randa Alwadai',
    aboutRole: 'Bioengineering Student · KFUPM',
    footerMade: 'Randa Alwadai',
    contactMe: 'Contact me',
    field: 'Field', example: 'Example', takeTestForThis: 'Take the quiz to see how well this path suits you',
    yourMatch: 'Your Match', profileInfo: 'Profile', edit: 'Edit', name: 'Name', notEntered: 'Not entered',
    joinDate: 'Join Date', save: 'Save', cancel: 'Cancel',
    quizTitle: 'Discover Your Path Quiz', quizIntro: 'A career-interest scale built on established scientific foundations',
    quizDesc: "Answer honestly based on your real interests; there's no right or wrong. Choose what represents you most in each situation.",
    quizNote: 'The quiz has 33 situations. The last 3 are forced choices between two options.',
    startQuiz: 'Start Quiz', forcedSection: 'Forced choice, pick only one',
    resumeQuiz: 'Resume where you left off', restartQuiz: 'Start over', resumeNote: 'You have saved progress',
    questionOf: 'Question', prevQ: 'Previous', encourage1: "Great, you're on your way 🌿", encourage2: 'Halfway there! Keep going 💚', encourage3: "Almost done ✨",
    orChoose: 'or',
    submitQuiz: 'Show My Result', answered: 'Answered', of: 'of',
    yourCode: 'Your Career Personality Code', yourTopMatches: 'Your Closest Specialties',
    resultTitle: 'Your Result', recommendations: 'Recommendations & Contacts', internalUni: '🏫 Inside University', externalUni: '🌍 Outside University',
    feedbackTitle: 'Your opinion matters 💚', feedbackDesc: 'One minute of your time helps me improve Bio Path for your peers', feedbackBtn: 'Share your feedback (3 questions)',
    personalityLabel: '✦ Your Career Personality', codeHint: 'Your top 3 interests, ordered from strongest',
    interestMap: 'Your Interest Map', interestMapHint: 'Where did your result come from? These are your scores across the six interests',
    whyPath: 'Why did this path come up for you?', whyClosest: 'came out closest to you',
    knowMore: 'Learn more: what sets you apart from the nearby path?', knowMoreClose: 'Hide details',
    vsNearby: 'Difference from the nearby path', reprQuestion: 'Does this result represent you?', reprYes: '👍 Yes', reprNo: '👎 No', reprThanks: 'Thank you! Your feedback matters 💚',
    simTitle: 'How much does this result resemble you?', simHint: 'From 1 (not at all) to 10 (exactly me)', simThanks: 'Thanks! This helps me improve the quiz accuracy 🌿',
    deepTitle: '📚 Go deeper into your path', deepSoon: 'Coming soon', deepSoonDesc: 'Carefully selected resources for each path (video · course · article), in collaboration with specialists',
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
  const [isSavingAccount, setIsSavingAccount] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [savedProgress, setSavedProgress] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const [specialtyTab, setSpecialtyTab] = useState('brief'); // 'brief' | 'detail' | 'faculty'
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0].id);

  const [formData, setFormData] = useState({ email: '', password: '', name: '', bio: '' });

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) { setCurrentUser(JSON.parse(savedUser)); setIsLoggedIn(true); }
    const savedLang = localStorage.getItem('appLang');
    if (savedLang) setLang(savedLang);
    try {
      const prog = JSON.parse(localStorage.getItem('quizProgress') || 'null');
      if (prog && prog.answers && Object.keys(prog.answers).length > 0) {
        setQuizAnswers(prog.answers);
        setSavedProgress(Object.keys(prog.answers).length);
        setQuizIndex(prog.index || 0);
      }
    } catch (e) { /* تجاهل أي بيانات تالفة */ }
  }, []);

  const toggleLang = () => {
    const n = lang === 'ar' ? 'en' : 'ar';
    setLang(n); localStorage.setItem('appLang', n);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // دخول سريع بالاسم فقط (بدون إيميل أو كلمة مرور)
  const handleQuickStart = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) { alert(t.enterNameFirst); return; }
    const u = {
      id: 'guest_' + Date.now(),
      name: formData.name.trim(),
      email: '', password: '', bio: '',
      isGuest: true,
      quizAttempts: [],
      createdAt: new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US')
    };
    setCurrentUser(u);
    localStorage.setItem('currentUser', JSON.stringify(u));
    setIsLoggedIn(true);
    setFormData({ email: '', password: '', name: '', bio: '' });
  };

  // تسجيل دخول لمن سبق وثبّت حسابه
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[formData.email] && users[formData.email].password === formData.password) {
      const u = users[formData.email];
      setCurrentUser(u); localStorage.setItem('currentUser', JSON.stringify(u));
      setIsLoggedIn(true); setFormData({ email: '', password: '', name: '', bio: '' });
    } else alert(t.invalidLogin);
  };

  // تثبيت الحساب (اختياري) يحوّل الزائر لحساب محفوظ
  const handleSaveAccount = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) { alert(t.fillRequired); return; }
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[formData.email]) { alert(t.emailExists); return; }
    const u = { ...currentUser, email: formData.email, password: formData.password, isGuest: false };
    users[formData.email] = u;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(u));
    setCurrentUser(u);
    setIsSavingAccount(false);
    setFormData({ email: '', password: '', name: '', bio: '' });
    alert(t.accountSaved);
  };

  const handleLogout = () => {
    setCurrentUser(null); setIsLoggedIn(false); localStorage.removeItem('currentUser');
    setIsEditing(false); setIsProfileOpen(false); setCurrentPage('home');
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const u = { ...currentUser, name: formData.name, bio: formData.bio };
    localStorage.setItem('currentUser', JSON.stringify(u));
    if (u.email) {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      users[u.email] = u;
      localStorage.setItem('users', JSON.stringify(users));
    }
    setCurrentUser(u); setIsEditing(false);
  };

  const allQuestions = [...quizQuestions, ...forcedChoiceQuestions];
  const answeredCount = Object.keys(quizAnswers).length;
  const allAnswered = answeredCount >= allQuestions.length;

  // إرسال الإجابات لجوجل شيت (مجهولة تماماً، بلا أي بيانات شخصية)
  const sendToSheet = (result, similarity) => {
    try {
      const answersObj = {};
      allQuestions.forEach((q, i) => { answersObj['q' + (i + 1)] = quizAnswers[q.id] || ''; });
      const payload = {
        session_id: 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
        timestamp: new Date().toISOString(),
        answers: answersObj,
        scores: result.scores,
        top_paths: result.matches.slice(0, 2).map(m => m.id).join(', '),
        similarity: similarity || ''
      };
      fetch('https://script.google.com/macros/s/AKfycbyXeThYzEX4RWrUsP78Uq0dEqHZDz9Hcan5xvCymNBoXNcjxyoacl-PaTGV0_QC0z8u/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    } catch (e) { /* لا نعطّل تجربة الطالب لو فشل الإرسال */ }
  };

  const handleSubmitQuiz = () => {
    if (!allAnswered) { alert(t.mustAnswerAll); return; }
    const result = computeResult(quizAnswers);
    const attempt = {
      date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US'),
      time: new Date().toLocaleTimeString(lang === 'ar' ? 'ar-SA' : 'en-US'),
      ...result
    };
    setQuizResult(attempt);
    sendToSheet(result); // إرسال أولي (بدون درجة التشابه بعد)
    localStorage.removeItem('quizProgress');
    setSavedProgress(0);
    const u = { ...currentUser, quizAttempts: [...(currentUser.quizAttempts || []), attempt] };
    localStorage.setItem('currentUser', JSON.stringify(u));
    // نحفظ في سجل الحسابات فقط لمن ثبّت حسابه بإيميل
    if (u.email) {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      users[u.email] = u;
      localStorage.setItem('users', JSON.stringify(users));
    }
    setCurrentUser(u);
  };

  const getSpecialty = (id) => specialties.find(s => s.id === id);
  // نقبل فقط المحاولات السليمة بالنظام الجديد ونتجاهل أي بيانات قديمة تالفة
  const validAttempts = (currentUser?.quizAttempts || []).filter(
    a => a && Array.isArray(a.topCode) && Array.isArray(a.matches) && a.matches.length > 0
  );
  const hasAttempts = validAttempts.length > 0;
  const lastAttempt = hasAttempts ? validAttempts[validAttempts.length - 1] : null;
  const topMatchId = lastAttempt ? lastAttempt.matches[0].id : null;

  const LangToggle = ({ dark }) => (
    <button onClick={toggleLang} className={`flex items-center gap-1 px-3 py-2 rounded-lg font-semibold text-sm transition ${dark ? 'bg-white/20 hover:bg-white/30 text-white' : 'text-white hover:opacity-90'}`} style={dark ? {} : { backgroundColor: '#10B981' }}>
      <Languages className="w-4 h-4" />{lang === 'ar' ? 'EN' : 'ع'}
    </button>
  );

  /* ============ شاشة الدخول المبسطة ============ */
  if (!isLoggedIn) {
    return (
      <div dir={t.dir} className="min-h-screen flex flex-col items-center justify-center p-5 relative overflow-hidden"
        style={{ background: 'linear-gradient(165deg, #0A392B 0%, #14503A 28%, #35276B 62%, #6D3FC7 100%)' }}>

        {/* توهج زمردي ناعم */}
        <div className="absolute rounded-full pointer-events-none" style={{ width: 560, height: 560, top: '-16%', insetInlineEnd: '-18%', background: 'radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 68%)' }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 460, height: 460, bottom: '-14%', insetInlineStart: '-14%', background: 'radial-gradient(circle, rgba(52,211,153,0.4) 0%, transparent 70%)' }} />

        <div className="absolute top-5" style={{ insetInlineEnd: 20 }}>
          <LangToggle dark />
        </div>

        <div className="w-full max-w-sm relative z-10">
          {/* اللوقو الشفاف مدموج بالخلفية */}
          <div className="flex flex-col items-center mb-8">
            <img src="/logo.png" alt="Bio Path"
              className="w-52 object-contain"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(16,185,129,0.55))' }} />
            <h1 className="text-4xl font-bold text-white tracking-wide" style={{ textShadow: '0 2px 20px rgba(16,185,129,0.6)' }}>Bio Path</h1>
            <p className="text-emerald-100 mt-2 text-center text-sm">{t.appSubtitle}</p>
          </div>

          {!isSignUp ? (
            /* الدخول السريع بالاسم فقط */
            <form onSubmit={handleQuickStart} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2 text-center">{t.yourName}</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleInputChange}
                  placeholder={t.namePlaceholder} autoFocus
                  className="w-full px-5 py-4 rounded-2xl text-center text-lg outline-none transition"
                  style={{ backgroundColor: 'rgba(255,255,255,0.97)', border: '2px solid #A78BFA', boxShadow: '0 4px 20px rgba(124,58,237,0.25)' }} />
              </div>

              <button type="submit"
                className="w-full font-bold py-4 rounded-2xl text-lg transition hover:opacity-95 active:scale-[0.99]"
                style={{ background: 'linear-gradient(90deg, #10B981 0%, #8B5CF6 100%)', color: '#ffffff', boxShadow: '0 12px 30px rgba(124,58,237,0.4)' }}>
                {t.startNow} ✨
              </button>

              <p className="text-center text-emerald-50/85 text-xs pt-1">{t.quickNote}</p>

              <div className="pt-3 text-center">
                <button type="button" onClick={() => { setIsSignUp(true); setFormData({ email: '', password: '', name: '', bio: '' }); }}
                  className="text-white/85 text-sm hover:text-white transition underline underline-offset-4">
                  {t.haveSavedAccount} {t.loginHere}
                </button>
              </div>
            </form>
          ) : (
            /* دخول لمن ثبّت حسابه */
            <form onSubmit={handleLogin} className="space-y-3">
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t.email} required
                className="w-full px-5 py-3.5 rounded-2xl outline-none" style={{ backgroundColor: 'rgba(255,255,255,0.97)', border: '2px solid #34D399' }} />
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder={t.password} required
                className="w-full px-5 py-3.5 rounded-2xl outline-none" style={{ backgroundColor: 'rgba(255,255,255,0.97)', border: '2px solid #34D399' }} />
              <button type="submit" className="w-full font-bold py-3.5 rounded-2xl transition hover:opacity-95"
                style={{ background: 'linear-gradient(90deg, #10B981 0%, #8B5CF6 100%)', color: '#ffffff' }}>{t.login}</button>
              <div className="text-center pt-2">
                <button type="button" onClick={() => { setIsSignUp(false); setFormData({ email: '', password: '', name: '', bio: '' }); }}
                  className="text-white/85 text-sm hover:text-white transition">{t.backToQuickStart}</button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  /* ============ لوحة التحكم ============ */
  return (
    <div dir={t.dir} className="min-h-screen flex flex-col" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-20 shadow-lg" style={{ background: 'linear-gradient(180deg, #0A392B 0%, #065F46 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Bio Path" className="w-11 object-contain" />
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
              { key: 'results', label: t.navResults, icon: Award },
              { key: 'community', label: t.navCommunity, icon: Users }
            ].map(tab => {
              const active = currentPage === tab.key;
              return (
                <button key={tab.key} onClick={() => { setCurrentPage(tab.key); setIsQuizStarted(false); }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition"
                  style={active ? { backgroundColor: '#8B5CF6', color: '#ffffff' } : { backgroundColor: 'rgba(255,255,255,0.08)', color: '#DDD6FE' }}>
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
                  {currentUser.email
                    ? <div><span className="text-gray-500">{t.email}: </span><span className="font-semibold text-gray-800">{currentUser.email}</span></div>
                    : <span className="inline-block text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>{t.guestBadge}</span>}
                  {currentUser.bio && <div><span className="text-gray-500">{t.bio}: </span><span className="text-gray-800">{currentUser.bio}</span></div>}
                  <div className="text-gray-400 text-xs pt-1">{t.joinDate}: {currentUser.createdAt}</div>

                  {/* تثبيت الحساب اختياري، يظهر فقط للزوار */}
                  {!currentUser.email && (
                    <div className="mt-3 pt-3 border-t">
                      {!isSavingAccount ? (
                        <div>
                          <p className="font-semibold text-sm mb-1" style={{ color: '#0A392B' }}>{t.saveAccountTitle}</p>
                          <p className="text-gray-500 text-xs mb-2">{t.saveAccountDesc}</p>
                          <button onClick={() => setIsSavingAccount(true)}
                            className="text-white px-4 py-1.5 rounded-lg text-sm transition hover:opacity-90"
                            style={{ backgroundColor: '#10B981' }}>{t.saveAccountBtn}</button>
                        </div>
                      ) : (
                        <form onSubmit={handleSaveAccount} className="space-y-2">
                          <Field label={t.email} name="email" type="email" value={formData.email} onChange={handleInputChange} small required />
                          <Field label={t.password} name="password" type="password" value={formData.password} onChange={handleInputChange} small required />
                          <div className="flex gap-2">
                            <button type="submit" className="flex items-center gap-1 text-white px-4 py-1.5 rounded-lg text-sm transition hover:opacity-90" style={{ backgroundColor: '#059669' }}><Save className="w-4 h-4" />{t.save}</button>
                            <button type="button" onClick={() => setIsSavingAccount(false)} className="flex items-center gap-1 bg-gray-400 hover:bg-gray-500 text-white px-4 py-1.5 rounded-lg text-sm transition"><X className="w-4 h-4" />{t.cancel}</button>
                          </div>
                        </form>
                      )}
                    </div>
                  )}
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

      <div className="max-w-6xl mx-auto px-4 py-6 w-full flex-1">

        {/* ============ الرئيسية ============ */}
        {currentPage === 'home' && (
          <div className="space-y-6">

            {/* القسم ب العنوان الرئيسي */}
            <div className="rounded-2xl shadow-xl p-8 md:p-12 text-white text-center relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #0A392B 0%, #1E4D3A 30%, #3B2A6B 65%, #6D3Fc7 100%)' }}>
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20" style={{ backgroundColor: '#A78BFA', transform: 'translate(30%,-30%)' }}></div>
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-15" style={{ backgroundColor: '#34D399', transform: 'translate(-30%,30%)' }}></div>
              <div className="relative">
                <div className="inline-flex mb-3">
                  <img src="/logo.png" alt="Bio Path" className="w-28 object-contain" style={{ filter: 'drop-shadow(0 14px 28px rgba(52,211,153,0.45))' }} />
                </div>
                <p className="text-purple-100 mb-2">{t.welcomeBack}، {currentUser.name} 👋</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.heroTitle}</h2>
                <p className="text-purple-50 max-w-2xl mx-auto leading-relaxed">{t.heroBody}</p>
              </div>
            </div>

            {/* القسم ج ما الهندسة الحيوية؟ */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A392B' }}>{t.whatIsTitle}</h3>
              <p className="text-gray-700 leading-relaxed mb-3">{t.whatIsP1}</p>
              <p className="text-gray-700 leading-relaxed mb-5">{t.whatIsP2}</p>
              <div className="rounded-xl p-4 border-s-4" style={{ backgroundColor: 'rgba(16,185,129,0.07)', borderColor: '#10B981' }}>
                <p className="text-gray-700 text-sm leading-relaxed">💡 {t.noticeText}</p>
              </div>
            </div>

            {/* القسم د لماذا تعرف التخصصات الدقيقة؟ */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A392B' }}>{t.whyTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[[t.why1T, t.why1B], [t.why2T, t.why2B], [t.why3T, t.why3B]].map(([title, body], i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-md p-5 border-t-4" style={{ borderColor: ['#0A392B', '#059669', '#10B981'][i] }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3 text-white" style={{ backgroundColor: ['#0A392B', '#059669', '#10B981'][i] }}>{i + 1}</div>
                    <p className="font-bold mb-2" style={{ color: '#0A392B' }}>{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* القسم هـ الهدف من الموقع + زر الاختبار */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A392B' }}>{t.purposeTitle}</h3>
              <p className="text-gray-700 leading-relaxed mb-3">{t.purposeP1}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{t.purposeP2}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => setCurrentPage('quiz')} className="font-bold px-6 py-3 rounded-xl transition hover:opacity-90 text-white" style={{ background: 'linear-gradient(90deg, #059669 0%, #8B5CF6 100%)' }}>
                  {hasAttempts ? t.retakeQuiz : t.startJourney}
                </button>
                {hasAttempts && <button onClick={() => setCurrentPage('results')} className="font-bold px-6 py-3 rounded-xl transition" style={{ backgroundColor: 'rgba(139,92,246,0.12)', color: '#7C3AED' }}>{t.seeMyResult}</button>}
                <button onClick={() => setCurrentPage('specialties')} className="font-bold px-6 py-3 rounded-xl transition" style={{ backgroundColor: 'rgba(139,92,246,0.12)', color: '#7C3AED' }}>{t.browseSpecialties}</button>
              </div>
            </div>

            {/* عن المشروع */}
            <div className="rounded-2xl shadow-lg p-6 md:p-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #4C1D95 100%)' }}>
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: '#34D399', transform: 'translate(-30%,-30%)' }}></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">{t.aboutTitle}</h3>
                <p className="text-purple-50 leading-relaxed mb-5">{t.aboutBody}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <p className="font-bold text-lg">{t.aboutMaker}</p>
                    <p className="text-purple-200 text-sm">{t.aboutRole}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/randa-alwadai-b4baa8359" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-sm transition hover:opacity-90" style={{ backgroundColor: '#34D399', color: '#04231A' }}>
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="mailto:s202338470@kfupm.edu.sa"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-sm transition hover:opacity-90" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}>
                      <Mail className="w-4 h-4" /> {t.contactMe}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============ المسارات ============ */}
        {currentPage === 'specialties' && (
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold" style={{ color: '#0A392B' }}>{t.specialtiesTitle}</h2>
              <p className="text-gray-500">{t.specialtiesDesc}</p>
            </div>

            {/* شريط التبويبات الفرعية */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[
                { key: 'brief', label: t.tabBrief },
                { key: 'detail', label: `${getSpecialty(selectedSpecialty).emoji} ${getSpecialty(selectedSpecialty)[lang].name}` },
                { key: 'faculty', label: t.tabFaculty }
              ].map(tb => {
                const on = specialtyTab === tb.key;
                return (
                  <button key={tb.key} onClick={() => setSpecialtyTab(tb.key)}
                    className="text-sm font-bold px-4 py-2 rounded-xl transition"
                    style={on
                      ? { background: '#0A392B', color: '#fff' }
                      : { background: '#fff', color: '#6C6C82', border: '1px solid rgba(10,57,43,0.12)' }}>
                    {tb.label}
                  </button>
                );
              })}
            </div>

            {/* ===== نبذة سريعة ===== */}
            {specialtyTab === 'brief' && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {specialties.map(s => {
                  const isTop = topMatchId === s.id;
                  const d = s[lang];
                  const av = availability[s.id];
                  return (
                    <div key={s.id} className="rounded-2xl overflow-hidden flex flex-col"
                      style={{
                        background: '#ffffff',
                        border: `1.5px solid ${isTop ? s.color : 'rgba(10,57,43,0.1)'}`,
                        boxShadow: isTop ? `0 8px 30px ${s.color}33` : '0 2px 12px rgba(10,57,43,0.06)'
                      }}>
                      <div style={{ height: 5, backgroundColor: s.color }}></div>
                      <div className="p-4 flex flex-col gap-3 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-bold leading-snug" style={{ color: '#0A392B' }}>{s.emoji} {d.name}</p>
                            <p className="text-xs text-gray-400 mt-0.5" dir="ltr">{s.en.name}</p>
                            {isTop && <p className="text-xs font-semibold mt-1" style={{ color: '#059669' }}>⭐ {t.yourMatch}</p>}
                          </div>
                          {isTop && <Star className="w-4 h-4 fill-emerald-400 text-emerald-400 shrink-0" />}
                        </div>

                        {/* الخانة المُضافة: توفّر التخصص الدقيق */}
                        <AvailBox av={av} lang={lang} t={t} />

                        <button onClick={() => { setSelectedSpecialty(s.id); setSpecialtyTab('detail'); }}
                          className="mt-auto w-full text-white text-sm font-semibold py-2.5 rounded-lg transition hover:opacity-90 flex items-center justify-center gap-1"
                          style={{ background: 'linear-gradient(180deg, #0A392B 0%, #065F46 100%)' }}>
                          {t.learnMore} <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ===== صفحة التخصص ===== */}
            {specialtyTab === 'detail' && (() => {
              const s = getSpecialty(selectedSpecialty);
              const d = s[lang];
              const av = availability[s.id];
              const coord = faculty.find(f => f.coord === s.id);
              const fieldFac = faculty.filter(f => f.fields.includes(s.id));
              return (
                <div className="max-w-4xl">
                  <div className="rounded-2xl overflow-hidden mb-4" style={{ border: '1px solid rgba(10,57,43,0.1)' }}>
                    <div className="p-5 text-white" style={{ background: `linear-gradient(120deg, ${s.color}, ${s.color}cc)` }}>
                      {av.cx && <p className="text-xs font-bold tracking-wide opacity-90" dir="ltr">{av.cx}</p>}
                      <h3 className="text-2xl font-bold mt-0.5">{s.emoji} {d.name}</h3>
                      <p className="text-sm opacity-90" dir="ltr">{s.en.name}</p>
                    </div>
                    <div className="p-4 bg-white">
                      <AvailBox av={av} lang={lang} t={t} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {/* تخيّلها كذا بطاقة مميزة عريضة */}
                    <div className="sm:col-span-2 relative rounded-2xl p-5" style={{ background: s.color + '14', border: `1px solid ${s.color}33` }}>
                      <span className="absolute rounded-full" style={{ top: 16, bottom: 16, insetInlineStart: 0, width: 5, background: s.color }} />
                      <p className="flex items-center gap-2 font-extrabold text-sm mb-2" style={{ color: s.color }}>
                        <span className="grid place-items-center rounded-xl" style={{ width: 34, height: 34, background: s.color + '26' }}>💡</span>
                        {t.imagine}
                      </p>
                      <p className="text-base font-semibold leading-loose" style={{ color: '#243b34' }}>{d.imagine}</p>
                    </div>

                    {/* يومك فيه خطوات مرقّمة */}
                    <div className="rounded-2xl p-5" style={{ background: '#F7FAF9', border: '1px solid #e8efed' }}>
                      <p className="flex items-center gap-2 font-extrabold text-sm mb-3" style={{ color: '#0A392B' }}>
                        <span className="grid place-items-center rounded-xl bg-white" style={{ width: 34, height: 34, border: '1px solid #e2e8e6' }}>🗓️</span>
                        {t.yourDay}
                      </p>
                      <ul className="space-y-2.5">
                        {d.yourDay.map((st, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-semibold" style={{ color: '#38524a' }}>
                            <span className="grid place-items-center rounded-full text-white flex-shrink-0" style={{ width: 26, height: 26, background: s.color, fontSize: 13, fontWeight: 800 }}>{i + 1}</span>
                            <span className="pt-0.5">{st}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* تراه حولك + أين تعمل */}
                    <div className="flex flex-col gap-3">
                      <div className="rounded-2xl p-5 flex-1" style={{ background: '#F7FAF9', border: '1px solid #e8efed' }}>
                        <p className="flex items-center gap-2 font-extrabold text-sm mb-2" style={{ color: '#0A392B' }}>
                          <span className="grid place-items-center rounded-xl bg-white" style={{ width: 34, height: 34, border: '1px solid #e2e8e6' }}>📍</span>
                          {t.around}
                        </p>
                        <p className="text-sm font-semibold" style={{ color: '#38524a' }}>{d.around}</p>
                      </div>
                      <div className="rounded-2xl p-5 flex-1" style={{ background: '#F7FAF9', border: '1px solid #e8efed' }}>
                        <p className="flex items-center gap-2 font-extrabold text-sm mb-2" style={{ color: '#0A392B' }}>
                          <span className="grid place-items-center rounded-xl bg-white" style={{ width: 34, height: 34, border: '1px solid #e2e8e6' }}>💼</span>
                          {t.career}
                        </p>
                        <p className="text-sm font-semibold" style={{ color: '#38524a' }}>{d.career}</p>
                      </div>
                    </div>

                    {/* هل تعلم؟ شريط ملوّن كامل */}
                    <div className="sm:col-span-2 rounded-2xl p-5 text-white flex items-center gap-4" style={{ background: `linear-gradient(120deg, ${s.color}, ${s.color}cc)` }}>
                      <span style={{ fontSize: 26 }}>🔬</span>
                      <div>
                        <p className="text-xs font-extrabold opacity-85 mb-0.5" style={{ letterSpacing: '.5px' }}>{t.fact}</p>
                        <p className="text-base font-bold">{d.fact}</p>
                      </div>
                    </div>
                  </div>

                  {coord && (
                    <div className="rounded-xl p-4 mb-4 bg-white" style={{ border: '1px solid rgba(10,57,43,0.1)' }}>
                      <p className="font-bold text-sm mb-3" style={{ color: '#0A392B' }}>🎓 {t.coordinator}</p>
                      <div className="flex items-center gap-3">
                        <Avatar f={coord} size={52} />
                        <div>
                          <p className="font-bold text-sm" style={{ color: '#0A392B' }}>{coord.ar}</p>
                          <p className="text-xs text-gray-500">{lang === 'ar' ? coord.role_ar : coord.role_en} · {coord.room}</p>
                          <a href={`mailto:${coord.em}`} className="text-xs font-semibold" style={{ color: '#7C3AED' }} dir="ltr">{coord.em}</a>
                        </div>
                      </div>
                    </div>
                  )}

                  {fieldFac.length > 0 && (
                    <div className="rounded-xl p-4 mb-4 bg-white" style={{ border: '1px solid rgba(10,57,43,0.1)' }}>
                      <p className="font-bold text-sm mb-3" style={{ color: '#0A392B' }}>👥 {t.facultyInField}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {fieldFac.map(f => (
                          <div key={f.id} className="flex items-center gap-2.5 rounded-lg p-2" style={{ background: '#FBFBFE', border: '1px solid rgba(10,57,43,0.06)' }}>
                            <Avatar f={f} size={40} />
                            <div className="min-w-0">
                              <p className="font-semibold text-xs truncate" style={{ color: '#0A392B' }}>{f.ar}</p>
                              <p className="text-[11px] text-gray-500 truncate">{lang === 'ar' ? f.role_ar : f.role_en}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-xl p-4 mb-4 bg-white" style={{ border: '1px solid rgba(10,57,43,0.1)' }}>
                    <p className="font-bold text-sm mb-3" style={{ color: '#0A392B' }}>💡 {t.recommendations}</p>
                    <SpecialtyOpportunities specialtyId={s.id} lang={lang} />
                  </div>

                  <button onClick={() => setCurrentPage('quiz')}
                    className="w-full text-white text-sm font-semibold py-3 rounded-lg transition hover:opacity-90 flex items-center justify-center gap-1"
                    style={{ background: 'linear-gradient(180deg, #0A392B 0%, #065F46 100%)' }}>
                    {t.takeTestForThis} <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                  </button>
                </div>
              );
            })()}

            {/* ===== أعضاء هيئة التدريس ===== */}
            {specialtyTab === 'faculty' && (
              <div>
                <p className="text-gray-500 text-sm mb-4">{t.deptTitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {faculty.map(f => <FacultyCard key={f.id} f={f} lang={lang} t={t} />)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============ الاختبار سؤال واحد بالشاشة ============ */}
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
                {savedProgress > 0 && (
                  <p className="text-sm mb-4" style={{ color: '#047857' }}>💾 {t.resumeNote} ({savedProgress}/{allQuestions.length})</p>
                )}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {savedProgress > 0 && (
                    <button onClick={() => { setIsQuizStarted(true); setQuizIndex(Math.min(savedProgress, allQuestions.length - 1)); }}
                      className="text-white px-8 py-3 rounded-xl font-bold transition hover:opacity-90" style={{ backgroundColor: '#059669' }}>{t.resumeQuiz}</button>
                  )}
                  <button onClick={() => { setIsQuizStarted(true); setQuizAnswers({}); setQuizIndex(0); localStorage.removeItem('quizProgress'); }}
                    className="px-8 py-3 rounded-xl font-bold transition hover:opacity-90"
                    style={savedProgress > 0 ? { backgroundColor: 'rgba(16,185,129,0.12)', color: '#047857' } : { backgroundColor: '#059669', color: 'white' }}>
                    {savedProgress > 0 ? t.restartQuiz : t.startQuiz}
                  </button>
                </div>
              </div>
            ) : isQuizStarted && !quizResult ? (
              <QuizRunner
                t={t} lang={lang}
                questions={allQuestions}
                forcedStart={quizQuestions.length}
                index={quizIndex}
                answers={quizAnswers}
                onAnswer={(qid, type) => {
                  const next = { ...quizAnswers, [qid]: type };
                  setQuizAnswers(next);
                  const nextIdx = quizIndex + 1;
                  localStorage.setItem('quizProgress', JSON.stringify({ answers: next, index: Math.min(nextIdx, allQuestions.length - 1) }));
                  if (nextIdx < allQuestions.length) setTimeout(() => setQuizIndex(nextIdx), 180);
                }}
                onBack={() => setQuizIndex(Math.max(0, quizIndex - 1))}
                onSubmit={handleSubmitQuiz}
                allAnswered={allAnswered}
                answeredCount={answeredCount}
              />
            ) : quizResult && (
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <ResultView t={t} lang={lang} result={quizResult} getSpecialty={getSpecialty}
                  onSimilarity={(val) => sendToSheet(quizResult, val)}
                  onBack={() => { setIsQuizStarted(false); setQuizResult(null); setQuizAnswers({}); setQuizIndex(0); setCurrentPage('results'); }} />
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
                <Compass className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">{t.noQuizzes}</p>
                <p className="text-gray-400 text-sm">{t.startFirst}</p>
              </div>
            )}
          </div>
        )}

        {/* ============ المجتمع ============ */}
        {currentPage === 'community' && (
          <CommunityPage lang={lang} t={t} />
        )}
      </div>

      {/* ============ الفوتر ============ */}
      <footer className="mt-10" style={{ backgroundColor: '#0A392B', borderTop: '3px solid transparent', borderImage: 'linear-gradient(90deg, #0A392B, #8B5CF6, #34D399) 1' }}>
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Bio Path" className="w-7 object-contain" />
            <div className="leading-tight">
              <p className="font-bold text-white text-sm">Bio Path</p>
              <p className="text-purple-200/70 text-xs">{t.footerMade}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/randa-alwadai-b4baa8359" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg transition hover:opacity-80" style={{ backgroundColor: 'rgba(139,92,246,0.22)' }}>
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href="mailto:s202338470@kfupm.edu.sa" aria-label="Email"
              className="p-2 rounded-lg transition hover:opacity-80" style={{ backgroundColor: 'rgba(52,211,153,0.22)' }}>
              <Mail className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
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

function MiniCard({ title, text, steps, color }) {
  return (
    <div className="rounded-lg p-3" style={{ backgroundColor: color + '0D' }}>
      <p className="font-semibold text-sm mb-1" style={{ color }}>{title}</p>
      {steps ? (
        <ul className="space-y-1">
          {steps.map((st, i) => (
            <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
              <span style={{ color }}>·</span><span>{st}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      )}
    </div>
  );
}

/* ============ صورة عضو هيئة التدريس (مع بديل الأحرف الأولى) ============ */
function Avatar({ f, size = 56 }) {
  const [err, setErr] = useState(false);
  const base = {
    width: size, height: size, borderRadius: Math.round(size * 0.26), background: f.color,
    color: '#fff', fontWeight: 800, fontSize: Math.round(size * 0.34), overflow: 'hidden',
    flexShrink: 0, display: 'grid', placeItems: 'center'
  };
  if (f.img && !err) {
    return (
      <div style={base}>
        <img src={f.img} alt="" onError={() => setErr(true)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  return <div style={base}>{f.initials}</div>;
}

/* ============ خانة توفّر التخصص الدقيق ============ */
function AvailBox({ av, lang, t }) {
  const map = {
    now: { c: '#0a7a54', bg: 'rgba(16,185,129,0.12)', dot: '#10B981' },
    soon: { c: '#a06a06', bg: 'rgba(245,158,11,0.14)', dot: '#F59E0B' },
    none: { c: '#6C6C82', bg: '#F1F1F7', dot: '#c3c3d4' }
  };
  const st = map[av.status] || map.none;
  return (
    <div className="rounded-xl px-3 py-2 flex items-center gap-2.5" style={{ background: st.bg }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: st.dot, flexShrink: 0 }}></span>
      <div className="min-w-0">
        <p className="text-[11px] font-bold" style={{ color: '#6C6C82' }}>{t.cxLabel}</p>
        <p className="text-[13px] font-bold" style={{ color: st.c }} dir="auto">
          {lang === 'ar' ? av.ar : av.en}{av.cx ? ` · ${av.cx}` : ''}
        </p>
      </div>
    </div>
  );
}

/* ============ كرت عضو هيئة التدريس ============ */
function FacultyCard({ f, lang, t }) {
  return (
    <div className="rounded-2xl p-4 bg-white" style={{ border: '1px solid rgba(10,57,43,0.1)' }}>
      <div className="flex items-center gap-3 mb-2">
        <Avatar f={f} size={56} />
        <div className="min-w-0">
          <p className="font-bold text-sm" style={{ color: '#0A392B' }}>{f.ar}</p>
          <p className="text-xs text-gray-500">{lang === 'ar' ? f.role_ar : f.role_en}</p>
        </div>
      </div>
      {f.coord && (
        <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md mb-2"
          style={{ color: '#0a7a54', background: 'rgba(16,185,129,0.12)' }}>
          {t.coordinator} · {specialtyShort[f.coord][lang]}
        </span>
      )}
      {f.fields.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-2">
          {f.fields.map(fid => (
            <span key={fid} className="text-[11px] font-bold px-2 py-0.5 rounded-md"
              style={{ color: '#7C3AED', background: 'rgba(124,58,237,0.10)' }}>
              {specialtyShort[fid][lang]}
            </span>
          ))}
        </div>
      )}
      <div className="text-xs text-gray-500 leading-relaxed">
        <p>📍 {f.room}</p>
        <p>☎ {f.ph}</p>
        <p>✉ <a href={`mailto:${f.em}`} className="font-semibold" style={{ color: '#7C3AED' }} dir="ltr">{f.em}</a></p>
      </div>
    </div>
  );
}

function QuizRunner({ t, lang, questions, forcedStart, index, answers, onAnswer, onBack, onSubmit, allAnswered, answeredCount }) {
  const safeIndex = Math.max(0, Math.min(index, questions.length - 1));
  const q = questions[safeIndex];
  if (!q) return null;
  const isForced = safeIndex >= forcedStart;
  const total = questions.length;
  const progress = Math.round((answeredCount / total) * 100);
  const isLast = safeIndex === total - 1;

  // رسالة تشجيع عند محطات معيّنة
  let encourage = null;
  if (answeredCount === 10) encourage = t.encourage1;
  else if (answeredCount === Math.floor(total / 2)) encourage = t.encourage2;
  else if (answeredCount === total - 5) encourage = t.encourage3;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">
      {/* شريط التقدّم */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-semibold" style={{ color: '#0A392B' }}>{t.questionOf} {safeIndex + 1} / {total}</span>
          <span className="font-bold" style={{ color: '#059669' }}>{progress}%</span>
        </div>
        <div className="w-full rounded-full h-2.5" style={{ backgroundColor: 'rgba(10,57,43,0.08)' }}>
          <div className="h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #0A392B 0%, #10B981 100%)' }} />
        </div>
      </div>

      {encourage && (
        <div className="text-center mb-4 py-2 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#047857' }}>{encourage}</div>
      )}

      {isForced && (
        <div className="rounded-xl p-3 mb-5 text-center" style={{ background: 'linear-gradient(180deg, #0A392B 0%, #065F46 100%)' }}>
          <p className="text-white font-bold text-sm">⚖️ {t.forcedSection}</p>
        </div>
      )}

      {/* نص السؤال */}
      <div key={q.id} className="animate-[fadeIn_0.25s_ease]">
        <p className="text-lg md:text-xl font-bold mb-6 leading-relaxed text-center" style={{ color: '#0A392B' }}>
          {q[lang]}
        </p>

        {/* الخيارات */}
        {isForced ? (
          /* كفّتا ميزان للمفاضلة */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {q.options.map((opt, i) => {
              const sel = answers[q.id] === opt.type;
              return (
                <button key={i} onClick={() => onAnswer(q.id, opt.type)}
                  className="p-6 rounded-2xl text-center font-semibold transition-all duration-200 border-2 hover:scale-[1.02]"
                  style={sel
                    ? { backgroundColor: '#10B981', color: '#04231A', borderColor: '#059669', boxShadow: '0 8px 24px rgba(16,185,129,0.3)' }
                    : { backgroundColor: '#F9FAFB', color: '#374151', borderColor: 'rgba(10,57,43,0.12)' }}>
                  <div className="text-2xl mb-2">{i === 0 ? '⚖️' : '⚖️'}</div>
                  {opt[lang]}
                </button>
              );
            })}
          </div>
        ) : (
          /* بطاقات كبيرة للخيارات الأربعة */
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const sel = answers[q.id] === opt.type;
              const letter = ['أ', 'ب', 'ج', 'د'][i];
              const letterEn = ['A', 'B', 'C', 'D'][i];
              return (
                <button key={i} onClick={() => onAnswer(q.id, opt.type)}
                  className="w-full text-start p-4 rounded-2xl transition-all duration-200 border-2 flex items-start gap-3 hover:scale-[1.01]"
                  style={sel
                    ? { backgroundColor: '#10B981', color: '#04231A', borderColor: '#059669', boxShadow: '0 8px 24px rgba(16,185,129,0.28)' }
                    : { backgroundColor: '#F9FAFB', color: '#374151', borderColor: 'rgba(10,57,43,0.1)' }}>
                  <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                    style={sel ? { backgroundColor: '#04231A', color: '#10B981' } : { backgroundColor: 'rgba(10,57,43,0.08)', color: '#0A392B' }}>
                    {lang === 'ar' ? letter : letterEn}
                  </span>
                  <span className="font-medium leading-relaxed pt-1">{opt[lang]}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* أزرار التنقّل */}
      <div className="flex items-center justify-between mt-7 gap-3">
        <button onClick={onBack} disabled={safeIndex === 0}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold transition disabled:opacity-30"
          style={{ backgroundColor: 'rgba(10,57,43,0.07)', color: '#0A392B' }}>
          ‹ {t.prevQ}
        </button>

        {isLast && (
          <button onClick={onSubmit} disabled={!allAnswered}
            className="flex-1 text-white font-bold py-3 rounded-xl transition disabled:opacity-40"
            style={{ background: allAnswered ? 'linear-gradient(90deg, #0A392B 0%, #10B981 100%)' : '#9CA3AF' }}>
            {t.submitQuiz} ({answeredCount}/{total})
          </button>
        )}
      </div>
    </div>
  );
}



// ============ عجلة الرادار للميول الستة ============
function RadarChart({ typePercents, lang }) {
  const order = ['I', 'R', 'A', 'C', 'S', 'E']; // ترتيب حول السداسية
  const cx = 160, cy = 150, R = 105;
  // زوايا الرؤوس الستة (تبدأ من الأعلى)
  const angleFor = (i) => (-90 + i * 60) * Math.PI / 180;
  const pointAt = (i, radius) => ({
    x: cx + radius * Math.cos(angleFor(i)),
    y: cy + radius * Math.sin(angleFor(i))
  });
  // شبكة (3 حلقات)
  const rings = [1, 0.66, 0.33].map(scale =>
    order.map((_, i) => { const p = pointAt(i, R * scale); return `${p.x},${p.y}`; }).join(' ')
  );
  // مضلع الطالب
  const dataPts = order.map((code, i) => {
    const val = (typePercents[code] || 0) / 100;
    const p = pointAt(i, R * Math.max(val, 0.05));
    return `${p.x},${p.y}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 320 300" className="w-full" style={{ maxWidth: 340, margin: '0 auto', display: 'block' }}>
      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(139,92,246,0.35)" />
          <stop offset="100%" stopColor="rgba(52,211,153,0.15)" />
        </radialGradient>
      </defs>
      {rings.map((pts, i) => (
        <polygon key={i} points={pts} fill="none" stroke="#E5E7EB" strokeWidth="1" />
      ))}
      {order.map((_, i) => {
        const p = pointAt(i, R);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#F1F5F9" strokeWidth="1" />;
      })}
      <polygon points={dataPts} fill="url(#radarFill)" stroke="#8B5CF6" strokeWidth="2.5" />
      {order.map((code, i) => {
        const val = (typePercents[code] || 0) / 100;
        const p = pointAt(i, R * Math.max(val, 0.05));
        return <circle key={i} cx={p.x} cy={p.y} r="4" fill="#8B5CF6" />;
      })}
      {order.map((code, i) => {
        const lp = pointAt(i, R + 26);
        const tp = interestTypes[code];
        const isTop = (typePercents[code] || 0) >= 70;
        return (
          <text key={code} x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="middle"
            fontSize="12" fontWeight={isTop ? 'bold' : 'normal'} fill={isTop ? tp.color : '#9CA3AF'}>
            {code} {lang === 'ar' ? tp.ar : tp.en}
          </text>
        );
      })}
    </svg>
  );
}

function ResultView({ t, lang, result, getSpecialty, onBack, hideBack, onSimilarity }) {
  const [showMore, setShowMore] = useState(false);
  const [simVal, setSimVal] = useState(null);
  const top3 = result.matches.slice(0, 3);
  const topSpecialty = getSpecialty(top3[0].id);
  const nearby = top3[1] ? getSpecialty(top3[1].id) : null;
  const summary = personalitySummary(result.topCode, lang);
  const tp = result.typePercents || {};

  // ليش هذا المسار: نربط أعلى نمطين بالمسار الأول
  const t1 = interestTypes[result.topCode[0]], t2 = interestTypes[result.topCode[1]];
  const whyText = lang === 'ar'
    ? `لأن نمطك ${t1.ar} العالي (${tp[result.topCode[0]]}٪) و${t2.ar} يناسبان طبيعة هذا المسار وأسلوب العمل فيه.`
    : `Because your strong ${t1.en} (${tp[result.topCode[0]]}%) and ${t2.en} tendencies match the nature of this path and how you work in it.`;

  return (
    <div>
      {/* اللوقو + العنوان */}
      <div className="text-center mb-6">
        <div className="inline-flex mb-2">
          <img src="/logo.png" alt="Bio Path" className="w-24 object-contain"
            style={{ filter: 'drop-shadow(0 10px 26px rgba(139,92,246,0.5))' }} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#0A392B' }}>{t.resultTitle}</h2>
      </div>

      {/* ① ملخّص الشخصية */}
      <div className="rounded-xl p-5 mb-5" style={{ backgroundColor: '#F5F3FF', border: '1px solid #DDD6FE' }}>
        <p className="text-xs font-bold mb-1.5" style={{ color: '#7C3AED' }}>{t.personalityLabel}</p>
        <p className="font-bold text-lg mb-1.5" style={{ color: '#6D28D9' }}>{summary.title}</p>
        <p className="text-sm leading-relaxed text-gray-600">{summary.body}</p>
      </div>

      {/* ② رمز الشخصية + شرح كل حرف */}
      <div className="rounded-xl p-5 mb-5 text-center" style={{ background: 'linear-gradient(135deg, #0A392B 0%, #4C1D95 100%)' }}>
        <p className="text-purple-100 text-sm mb-3">{t.yourCode}</p>
        <div className="flex justify-center gap-2 mb-3">
          {result.topCode.map((code, idx) => {
            const bg = ['#8B5CF6', '#A78BFA', '#34D399'][idx];
            const fg = idx === 2 ? '#04231A' : (idx === 1 ? '#1E1B4B' : '#fff');
            return (
              <div key={code} className="flex-1 rounded-xl py-2.5 px-1" style={{ backgroundColor: bg, color: fg }}>
                <span className="block font-bold text-sm">{code} · {interestTypes[code].ar}</span>
                <span className="block text-[10px] opacity-75 mt-0.5">{interestTypes[code].en}</span>
              </div>
            );
          })}
        </div>
        <div className="text-right space-y-0.5">
          {result.topCode.map((code, idx) => (
            <p key={code} className="text-xs" style={{ color: idx === 2 ? '#A7F3D0' : '#E9D5FF' }}>
              {code}: {interestTypes[code][lang === 'ar' ? 'verb_ar' : 'verb_en']}
            </p>
          ))}
        </div>
      </div>

      {/* ③ خريطة ميولك (عجلة الرادار) */}
      <div className="mb-5">
        <h3 className="font-bold mb-0.5" style={{ color: '#0A392B' }}>🧭 {t.interestMap}</h3>
        <p className="text-xs text-gray-400 mb-2">{t.interestMapHint}</p>
        <div className="rounded-xl p-3 border" style={{ borderColor: 'rgba(10,57,43,0.1)' }}>
          <RadarChart typePercents={tp} lang={lang} />
        </div>
      </div>

      {/* أقرب المسارات */}
      <div className="mb-5">
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
                <div className="w-full rounded-full h-2.5" style={{ backgroundColor: '#F1F5F9' }}>
                  <div className="h-2.5 rounded-full transition-all" style={{ width: `${m.percentage}%`, backgroundColor: s.color }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ④ ليش طلع لك هذا المسار */}
      <div className="rounded-xl p-5 mb-5" style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0' }}>
        <p className="font-bold text-sm mb-1.5" style={{ color: '#047857' }}>💡 {topSpecialty.emoji} {topSpecialty[lang].name} {t.whyClosest}</p>
        <p className="text-sm leading-relaxed" style={{ color: '#065F46' }}>{whyText}</p>
      </div>

      {/* ⑤ اعرف أكثر (يفتح الفرق عن المسار القريب) */}
      {nearby && (
        <div className="mb-5">
          <button onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl border transition"
            style={{ backgroundColor: '#F9FAFB', borderColor: '#E5E7EB', color: '#6B7280' }}>
            <span className="text-sm font-bold">{showMore ? t.knowMoreClose : t.knowMore}</span>
            {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {showMore && (
            <div className="mt-2 rounded-xl p-4 border animate-[fadeIn_0.25s_ease]" style={{ backgroundColor: '#fff', borderColor: '#E5E7EB' }}>
              <p className="text-xs font-bold mb-2" style={{ color: '#0A392B' }}>{t.vsNearby}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold" style={{ color: topSpecialty.color }}>{topSpecialty.emoji} {topSpecialty[lang].name}</span>
                <span className="text-gray-400">↔</span>
                <span className="font-semibold" style={{ color: nearby.color }}>{nearby.emoji} {nearby[lang].name}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {lang === 'ar'
                  ? `${topSpecialty.ar.name}: ${topSpecialty.ar.imagine} بينما ${nearby.ar.name}: ${nearby.ar.imagine}`
                  : `${topSpecialty.en.name}: ${topSpecialty.en.imagine} While ${nearby.en.name}: ${nearby.en.imagine}`}
              </p>
            </div>
          )}
        </div>
      )}

      {/* ⑥ كم تشبهك النتيجة؟ (١-١٠) يُرسل لجوجل شيت */}
      <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: '#FAFAFA', border: '1px solid #E5E7EB' }}>
        {simVal === null ? (
          <div>
            <p className="font-bold text-sm mb-1" style={{ color: '#0A392B' }}>{t.simTitle}</p>
            <p className="text-xs text-gray-400 mb-3">{t.simHint}</p>
            <div className="flex gap-1.5 justify-center flex-wrap">
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <button key={n}
                  onClick={() => { setSimVal(n); if (onSimilarity) onSimilarity(n); }}
                  className="w-9 h-9 rounded-lg text-sm font-bold transition hover:scale-110"
                  style={{ backgroundColor: n >= 8 ? '#D1FAE5' : (n >= 5 ? '#EDE9FE' : '#F3F4F6'), color: n >= 8 ? '#047857' : (n >= 5 ? '#6D28D9' : '#6B7280') }}>
                  {n}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-sm font-semibold" style={{ color: '#047857' }}>{t.simThanks}</p>
        )}
      </div>

      {/* تعمّق في مسارك (قريباً) */}
      <div className="mb-5">
        <h3 className="font-bold mb-2" style={{ color: '#0A392B' }}>{t.deepTitle}</h3>
        <div className="rounded-xl p-5 text-center text-white" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #4C1D95 100%)' }}>
          <div className="text-3xl mb-1">🔜</div>
          <p className="font-bold mb-1">{t.deepSoon}</p>
          <p className="text-xs" style={{ color: '#C4B5FD' }}>{t.deepSoonDesc}</p>
        </div>
      </div>

      {/* توصيات */}
      <div className="rounded-xl p-5 mb-5" style={{ backgroundColor: '#F9FAFB' }}>
        <h3 className="font-bold mb-3" style={{ color: '#0A392B' }}>{t.recommendations}: {topSpecialty.emoji} {topSpecialty[lang].name}</h3>
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

      {/* بطاقة التقييم */}
      <div className="rounded-xl p-5 mb-6 text-center" style={{ background: 'linear-gradient(135deg, #0A392B 0%, #4C1D95 100%)' }}>
        <p className="text-white font-bold mb-1">{t.feedbackTitle}</p>
        <p className="text-purple-100 text-sm mb-4">{t.feedbackDesc}</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGiN4Wwg_A17CgNBY6RKXU3poPgpBFZXKiOsDu5EyutGzCeA/viewform"
          target="_blank" rel="noopener noreferrer"
          className="inline-block font-bold px-6 py-2.5 rounded-lg transition hover:opacity-90"
          style={{ backgroundColor: '#34D399', color: '#04231A' }}>
          {t.feedbackBtn}
        </a>
      </div>

      <div className="text-xs text-gray-400 mb-4">{result.date} - {result.time}</div>
      {!hideBack && <button onClick={onBack} className="w-full text-white font-bold py-3 rounded-lg transition hover:opacity-90" style={{ backgroundColor: '#059669' }}>{t.backToMenu}</button>}
    </div>
  );
}
