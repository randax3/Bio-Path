// ============================================================
// بيانات مقياس الميول لتطبيق Bio Path
// الأنماط: R الواقعي · I التحليلي · A الابتكاري · S الاجتماعي · E الريادي · C المنظّم
// ============================================================

export const interestTypes = {
  R: { ar: 'الواقعي', en: 'Realistic', color: '#0A392B', desc_ar: 'عملي، يحب بناء وتشغيل الأشياء بيده', desc_en: 'Practical, likes building and operating things' },
  I: { ar: 'التحليلي', en: 'Investigative', color: '#7C3AED', desc_ar: 'فضولي، يحب البحث والفهم العميق', desc_en: 'Curious, likes research and deep understanding' },
  A: { ar: 'الابتكاري', en: 'Artistic', color: '#8B5CF6', desc_ar: 'مبدع، يحب التصميم والأفكار الجديدة', desc_en: 'Creative, likes design and new ideas' },
  S: { ar: 'الاجتماعي', en: 'Social', color: '#059669', desc_ar: 'متعاون، يحب مساعدة وتعليم الناس', desc_en: 'Cooperative, likes helping and teaching people' },
  E: { ar: 'الريادي', en: 'Enterprising', color: '#A78BFA', desc_ar: 'قيادي، يحب المشاريع والإقناع', desc_en: 'Leader, likes projects and persuasion' },
  C: { ar: 'المنظّم', en: 'Conventional', color: '#10B981', desc_ar: 'دقيق، يحب التنظيم والمعايير', desc_en: 'Precise, likes organization and standards' }
};

// ============================================================
// التخصصات السبعة مع رموز الميول والمحتوى التعريفي
// (المحتوى التعريفي مبدئي، يُحدّث لاحقاً)
// ============================================================
export const specialties = [
  {
    id: 'genetic', codes: ['I', 'A', 'R'], emoji: '🧬', color: '#8B5CF6',
    ar: { name: 'الهندسة الوراثية والتخليقية', field: 'أحياء جزيئية', model: 'بكتيريا تنتج الأنسولين',
      imagine: 'أنت مُبرمِج، لكن لغتك ليست بايثون بل الحمض النووي، وجهازك ليس حاسوباً بل خليّة حيّة.',
      yourDay: ['تصمّم مقطعاً جينياً على الحاسب', 'تُدخله في بكتيريا', 'تزرعها في حاضنة', 'تقيس: هل أنتجت ما أردت؟'],
      around: 'الأنسولين المصنّع، المحاصيل المعدّلة وراثياً.',
      fact: 'العلماء برمجوا بكتيريا لإنتاج الأنسولين البشري بدل استخراجه من الحيوانات!',
      career: 'شركات الأدوية الحيوية، مختبرات الأبحاث الجينية.' },
    en: { name: 'Genetic & Synthetic Engineering', field: 'Molecular Biology', model: 'Bacteria producing insulin',
      imagine: "You're a programmer, but your language isn't Python, it's DNA, and your machine isn't a computer, it's a living cell.",
      yourDay: ['You design a genetic sequence on a computer', 'insert it into bacteria', 'grow them in an incubator', 'measure: did it produce what you wanted?'],
      around: 'Synthetic insulin, genetically modified crops.',
      fact: 'Scientists programmed bacteria to produce human insulin instead of extracting it from animals!',
      career: 'Biopharmaceutical companies, genetic research labs.' }
  },
  {
    id: 'tissue', codes: ['I', 'S', 'R'], emoji: '🧪', color: '#F43F5E',
    ar: { name: 'هندسة الأنسجة والطب التجديدي', field: 'أحياء خلوية / طب', model: 'جلد صناعي للحروق',
      imagine: 'أنت بُستانيّ يبني تعريشة تذوب مع الوقت، وتترك خلايا المريض تتسلّقها حتى تنمو بالشكل الذي رسمته.',
      yourDay: ['تعزل خلايا المريض', 'تصنع دعامة مسامية', 'تزرع الخلايا عليها', 'تراقب نموّها تحت المجهر أسابيع'],
      around: 'الجلد الصناعي لضحايا الحروق، زراعة الغضاريف.',
      fact: 'صار ممكن طباعة أنسجة حية بطابعات ثلاثية الأبعاد!',
      career: 'مستشفيات، مراكز الطب التجديدي، شركات التقنية الحيوية.' },
    en: { name: 'Tissue Engineering & Regenerative Medicine', field: 'Cell Biology / Medicine', model: 'Artificial skin for burns',
      imagine: "You're a gardener who builds a trellis that dissolves over time, letting the patient's cells climb it until they grow into the shape you drew.",
      yourDay: ["You isolate the patient's cells", 'fabricate a porous scaffold', 'seed the cells onto it', 'monitor their growth under a microscope for weeks'],
      around: 'Artificial skin for burn victims, cartilage growth.',
      fact: 'It is now possible to 3D-print living tissues!',
      career: 'Hospitals, regenerative medicine centers, biotech companies.' }
  },
  {
    id: 'biomat', codes: ['R', 'I', 'C'], emoji: '🔩', color: '#F59E0B',
    ar: { name: 'المواد الحيوية', field: 'كيمياء / مواد', model: 'غرسة لا يرفضها الجسم',
      imagine: 'أنت دبلوماسي مهمتك أن يقبل الجسمُ غريباً، لا بالقوّة بل بتصميم يجعله يبدو من أهل البيت.',
      yourDay: ['تختبر موادّ مرشّحة', 'تقيس كيف تلتصق بها الخلايا', 'تعدّل سطحها كيميائياً', 'تفحص: هل تتآكل بعد سنوات؟'],
      around: 'مفاصل صناعية، غرز جراحية قابلة للذوبان.',
      fact: 'فيه مواد حديثة تلتحم مع العظم وتختفي بعد الشفاء تلقائياً!',
      career: 'شركات المستلزمات الطبية، مختبرات المواد المتقدمة.' },
    en: { name: 'Biomaterials', field: 'Chemistry / Materials', model: "An implant the body won't reject",
      imagine: "You're a diplomat whose job is to make the body accept a stranger, not by force but through a design that makes it look like family.",
      yourDay: ['You test candidate materials', 'measure how cells adhere to them', 'chemically modify their surface', 'check: will it corrode after years?'],
      around: 'Artificial joints, dissolvable surgical stitches.',
      fact: 'Some modern materials bond with bone and disappear automatically after healing!',
      career: 'Medical supply companies, advanced materials labs.' }
  },
  {
    id: 'process', codes: ['R', 'C', 'E'], emoji: '⚙️', color: '#2563EB',
    ar: { name: 'هندسة العمليات والتصنيع الحيوي', field: 'صناعة حيوية', model: 'مفاعل ينتج لقاحاً',
      imagine: 'أنت مدير مصنع، لكن عمّالك كائنات حيّة: تضبط لهم الحرارة والغذاء والأكسجين، وإن أخطأت في درجة واحدة توقّف الخط.',
      yourDay: ['تضبط ظروف المفاعل الحيوي', 'تسحب عيّنات وتقيسها', 'ترفع الإنتاجية دون قتل الخلايا', 'تنقّي المنتج النهائي'],
      around: 'مصانع اللقاحات، إنتاج الأدوية الحيوية.',
      fact: 'مفاعل حيوي واحد ينتج ملايين جرعات اللقاح في وقت قصير!',
      career: 'مصانع الأدوية، منشآت الإنتاج الحيوي.' },
    en: { name: 'Bioprocess & Biomanufacturing', field: 'Bio-industry', model: 'A reactor producing vaccines',
      imagine: "You're a factory manager, except your workers are living organisms: you control their heat, food, and oxygen, and one degree off shuts the line down.",
      yourDay: ['You control bioreactor conditions', 'draw and test samples', 'raise yield without killing the cells', 'purify the final product'],
      around: 'Vaccine factories, biopharmaceutical production.',
      fact: 'A single bioreactor can produce millions of vaccine doses in a short time!',
      career: 'Pharmaceutical plants, bio-production facilities.' }
  },
  {
    id: 'bioinfo', codes: ['I', 'C', 'A'], emoji: '💻', color: '#06B6D4',
    ar: { name: 'المعلوماتية الحيوية والبيولوجيا الحاسوبية', field: 'حوسبة', model: 'تحليل DNA لاكتشاف طفرة',
      imagine: 'أنت مُحقّق، أمامك كتاب من ثلاثة مليارات حرف، وتبحث عن خطأ مطبعي واحد. عينك لن تكفي، تحتاج خوارزمية.',
      yourDay: ['تكتب كوداً لتحليل التسلسلات', 'تقارنها بقواعد بيانات عالمية', 'تستخرج النمط المتكرر', 'تفسّر علاقته بالمرض'],
      around: 'فحوصات النسب الجينية، اكتشاف الأمراض الوراثية.',
      fact: 'الذكاء الاصطناعي صار يتنبأ بشكل البروتينات خلال ثواني بدل سنوات بحث!',
      career: 'شركات التقنية، مراكز الجينوم، أبحاث الأدوية.' },
    en: { name: 'Bioinformatics & Computational Biology', field: 'Computing', model: 'Analyzing DNA to detect a mutation',
      imagine: "You're a detective. In front of you is a book of three billion letters, and you're hunting a single typo. Your eyes won't do it; you need an algorithm.",
      yourDay: ['You write code to analyze sequences', 'compare them against global databases', 'extract the recurring pattern', 'explain its link to disease'],
      around: 'Ancestry DNA tests, genetic disease discovery.',
      fact: 'AI can now predict protein shapes in seconds instead of years of research!',
      career: 'Tech companies, genome centers, drug research.' }
  },
  {
    id: 'biomech', codes: ['R', 'I', 'A'], emoji: '🦾', color: '#EA580C',
    ar: { name: 'الميكانيكا الحيوية', field: 'فيزياء / حركة', model: 'طرف اصطناعي',
      imagine: 'أنت مهندس ميكانيكا، لكن الآلة التي تدرسها جسمُ إنسان: العظام روافع، والمفاصل مفصّلات، والعضلات محرّكات.',
      yourDay: ['تصوّر الحركة بكاميرات وحسّاسات', 'تحسب القوى على كل مفصل', 'تصمّم الطرف أو الجهاز', 'تختبره على أرض الواقع'],
      around: 'الأطراف الصناعية، تحليل حركة الرياضيين.',
      fact: 'بعض الأطراف الصناعية الحديثة تتحرك بإشارات مباشرة من الدماغ!',
      career: 'مراكز التأهيل، شركات الأطراف الصناعية والروبوتات الطبية.' },
    en: { name: 'Biomechanics', field: 'Physics / Motion', model: 'A prosthetic limb',
      imagine: "You're a mechanical engineer, but the machine you study is a human body: bones are levers, joints are hinges, muscles are motors.",
      yourDay: ['You capture motion with cameras and sensors', 'calculate the forces on each joint', 'design the limb or device', 'test it in the real world'],
      around: 'Prosthetic limbs, athlete movement analysis.',
      fact: 'Some modern prosthetics move directly from brain signals!',
      career: 'Rehab centers, prosthetics and medical robotics companies.' }
  },
  {
    id: 'environ', codes: ['R', 'I', 'E'], emoji: '🌱', color: '#10B981',
    ar: { name: 'الهندسة الحيوية البيئية والزراعية', field: 'بيئة / زراعة', model: 'ميكروبات تنقّي المياه',
      imagine: 'أنت تُوظّف عمال نظافة، لكنهم كائنات دقيقة: تأكل التلوّث وتترك ماءً أنظف، وأجرها الوجبة نفسها.',
      yourDay: ['تعزل ميكروبات من البيئة', 'تختبر ما تستطيع هضمه', 'تصمّم النظام حولها', 'تقيس أداءه في الميدان لا في المختبر'],
      around: 'محطات معالجة المياه، الأسمدة الحيوية.',
      fact: 'فيه ميكروبات تأكل الملوثات وتنظّف المياه والتربة طبيعياً!',
      career: 'شركات البيئة، محطات المعالجة، مشاريع الزراعة الحيوية.' },
    en: { name: 'Environmental & Agricultural Bioengineering', field: 'Environment / Agriculture', model: 'Microbes purifying water',
      imagine: "You're hiring a cleaning crew, except they're microbes: they eat pollution and leave cleaner water, and their wage is the meal itself.",
      yourDay: ['You isolate microbes from the environment', 'test what they can digest', 'design the system around them', 'measure performance in the field, not the lab'],
      around: 'Water treatment plants, bio-fertilizers.',
      fact: 'Some microbes eat pollutants and clean water and soil naturally!',
      career: 'Environmental companies, treatment plants, bio-agriculture projects.' }
  }
];

// ============================================================
// أسئلة الاختبار: 30 سؤال عادي + 3 أسئلة مفاضلة إجبارية (وزن +2)
// كل خيار يعطي نقطة لنمط معيّن
// ============================================================
export const quizQuestions = [
  // القسم 1: المستهدف: الواقعي (R)
  { id: 1, ar: 'في مشروع لبناء نموذج جهاز مساعد، أي دور تختار؟', en: 'In a project to build a prototype assistive device, which role do you choose?',
    options: [
      { ar: 'أجمّع القطع وأبني النموذج بيدي حتى يعمل', en: 'I assemble the parts and build the prototype by hand until it works', type: 'R' },
      { ar: 'أتواصل مع المستفيدين لأفهم ما يحتاجونه منه', en: 'I talk to users to understand what they need from it', type: 'S' },
      { ar: 'أضع الخطة وأوزّع المهام وأتابع التسليم', en: 'I set the plan, assign tasks, and track delivery', type: 'E' },
      { ar: 'أوثّق الخطوات وأتأكد من مطابقة القطع للمواصفات', en: 'I document the steps and verify parts meet specs', type: 'C' } ] },
  { id: 2, ar: 'تجربة تتطلّب تحضير عيّنات والتعامل مع أنسجة يدويًا. ما يشدّك؟', en: 'An experiment requires preparing samples and handling tissue manually. What appeals to you?',
    options: [
      { ar: 'العمل اليدوي الدقيق مع العيّنات', en: 'The precise hands-on work with samples', type: 'R' },
      { ar: 'ابتكار طريقة أصلية لتصميم خطوات التجربة', en: 'Inventing an original way to design the experiment steps', type: 'A' },
      { ar: 'شرح التجربة لزملائي ومساعدتهم على إتقانها', en: 'Explaining the experiment to peers and helping them master it', type: 'S' },
      { ar: 'توثيق كل خطوة وترتيب البيانات بدقّة', en: 'Documenting each step and organizing data precisely', type: 'C' } ] },
  { id: 3, ar: 'زيارة ميدانية لمحطة معالجة مياه أو مزرعة تقنية. أكثر ما يجذبك؟', en: 'A field visit to a water treatment plant or tech farm. What attracts you most?',
    options: [
      { ar: 'تشغيل المعدّات وأخذ القياسات في الموقع', en: 'Operating equipment and taking measurements on site', type: 'R' },
      { ar: 'تحليل العيّنات لفهم مصدر المشكلة', en: 'Analyzing samples to understand the source of the problem', type: 'I' },
      { ar: 'فرصة تطوير المحطة إلى مشروع أوسع', en: 'The opportunity to develop the plant into a bigger project', type: 'E' },
      { ar: 'التأكد من مطابقة العمل لمعايير الأمان', en: 'Ensuring the work meets safety standards', type: 'C' } ] },
  { id: 4, ar: 'أُتيح لك إتقان مهارة عملية جديدة. أيّها تختار؟', en: 'You can master a new practical skill. Which do you choose?',
    options: [
      { ar: 'تشغيل جهاز يصنع أنسجة أو أجزاء عمليًا', en: 'Operating a machine that makes tissue or parts', type: 'R' },
      { ar: 'تحليل بيانات حيوية لاستخلاص نتيجة', en: 'Analyzing biological data to reach a conclusion', type: 'I' },
      { ar: 'عرض الأفكار التقنية وتبسيطها لغير المختصين', en: 'Presenting technical ideas and simplifying them for non-experts', type: 'S' },
      { ar: 'تحويل فكرة إلى خطة مشروع قابلة للتنفيذ', en: 'Turning an idea into an actionable project plan', type: 'E' } ] },
  { id: 5, ar: 'في مشروع مبتكر، أين تجد نفسك أكثر؟', en: 'In an innovative project, where do you find yourself most?',
    options: [
      { ar: 'بناء النموذج الفعلي الذي يُلمس ويُجرّب', en: 'Building the actual prototype that can be touched and tested', type: 'R' },
      { ar: 'التحقق من أن الحل مبني على أساس علمي', en: 'Verifying the solution is built on scientific grounds', type: 'I' },
      { ar: 'تصوّر الفكرة وتصميم شكلها', en: 'Envisioning the idea and designing its form', type: 'A' },
      { ar: 'عرض المشروع وإقناع الآخرين بقيمته', en: 'Presenting the project and convincing others of its value', type: 'E' } ] },

  // القسم 2: المستهدف: التحليلي (I)
  { id: 6, ar: 'ظهرت نتيجة غير متوقّعة في تجربة فريقك. أول ما تفعل؟', en: 'An unexpected result appeared in your team\'s experiment. What do you do first?',
    options: [
      { ar: 'أبحث عن السبب وأصمّم تجربة لاختبار احتمالاتي', en: 'I look for the cause and design an experiment to test my hypotheses', type: 'I' },
      { ar: 'أناقشها مع الفريق للاستفادة من ملاحظاتهم', en: 'I discuss it with the team to benefit from their input', type: 'S' },
      { ar: 'أتساءل إن كانت فرصة لشيء جديد يستحق الاستثمار', en: 'I wonder if it\'s an opportunity for something new worth investing in', type: 'E' },
      { ar: 'أراجع السجلّات بدقّة بحثًا عن خطأ منهجي', en: 'I review the records carefully for a systematic error', type: 'C' } ] },
  { id: 7, ar: 'خُيّرت بين مهام في مشروع التخرّج. أيّها تفضّل؟', en: 'You choose among graduation project tasks. Which do you prefer?',
    options: [
      { ar: 'نموذج حاسوبي يتوقّع كيف يتصرّف دواء في الجسم', en: 'A computer model predicting how a drug behaves in the body', type: 'I' },
      { ar: 'ابتكار طريقة عرض جديدة تُظهر النتائج بوضوح', en: 'Inventing a new way to present results clearly', type: 'A' },
      { ar: 'خطة لتحويل المشروع إلى مشروع ناشئ', en: 'A plan to turn the project into a startup', type: 'E' },
      { ar: 'تنظيم بيانات المشروع وضبط دقّتها', en: 'Organizing the project data and ensuring its accuracy', type: 'C' } ] },
  { id: 8, ar: 'أي طريقة لقضاء وقتك في المشروع أمتع؟', en: 'Which way of spending your project time is most enjoyable?',
    options: [
      { ar: 'فهم كيف تعمل الخلايا والأنظمة الحيّة', en: 'Understanding how cells and living systems work', type: 'I' },
      { ar: 'ابتكار فكرة أو تصميم لم يخطر لأحد', en: 'Inventing an idea or design no one thought of', type: 'A' },
      { ar: 'تبسيط ما تعلّمته وتوصيله للآخرين', en: 'Simplifying what you learned and conveying it to others', type: 'S' },
      { ar: 'التفكير كيف تتحوّل الفكرة إلى منتج', en: 'Thinking how the idea turns into a product', type: 'E' } ] },
  { id: 9, ar: 'أي نوع من الأسئلة تستمتع بحلّه أكثر؟', en: 'Which type of question do you enjoy solving most?',
    options: [
      { ar: '«لماذا يحدث هذا وكيف يعمل من الداخل؟»', en: '"Why does this happen and how does it work inside?"', type: 'I' },
      { ar: '«كيف أبنيه فعليًا حتى يعمل؟»', en: '"How do I actually build it so it works?"', type: 'R' },
      { ar: '«كيف أجعله أبسط وأذكى في التصميم؟»', en: '"How do I make it simpler and smarter in design?"', type: 'A' },
      { ar: '«هل يطابق القواعد والمعايير المطلوبة؟»', en: '"Does it match the required rules and standards?"', type: 'C' } ] },
  { id: 10, ar: 'لاحظت مشكلة صحية متكرّرة في مجتمعك. كيف تتعامل معها؟', en: 'You noticed a recurring health problem in your community. How do you address it?',
    options: [
      { ar: 'أدرس أسبابها وأحلّل بياناتها لفهمها', en: 'I study its causes and analyze its data to understand it', type: 'I' },
      { ar: 'أصنع أداة أو جهازًا بسيطًا يخفّفها', en: 'I make a simple tool or device to ease it', type: 'R' },
      { ar: 'أصمّم حلًّا جديدًا مبتكرًا لها', en: 'I design a new innovative solution for it', type: 'A' },
      { ar: 'أنظّم حملة توعية وأدرّب الناس', en: 'I organize an awareness campaign and train people', type: 'S' } ] },

  // القسم 3: المستهدف: الابتكاري (A)
  { id: 11, ar: 'طُلب منك تحسين طرف اصطناعي مستخدَم. من أين تبدأ؟', en: 'You\'re asked to improve a prosthetic limb in use. Where do you start?',
    options: [
      { ar: 'أعيد تصميم شكله ليكون أسهل وأكثر راحة', en: 'I redesign its form to be easier and more comfortable', type: 'A' },
      { ar: 'أسأل مستخدميه عن معاناتهم', en: 'I ask its users about their struggles', type: 'S' },
      { ar: 'أرى فيه فرصة لنسخة محسّنة تُطرح للجميع', en: 'I see an opportunity for an improved version for everyone', type: 'E' },
      { ar: 'أراجع مطابقته لمواصفات السلامة أولًا', en: 'I review its compliance with safety specs first', type: 'C' } ] },
  { id: 12, ar: 'أمامك حلٌّ فعّال لكنه معقّد الاستخدام. ما يستهويك؟', en: 'You have an effective but complex-to-use solution. What appeals to you?',
    options: [
      { ar: 'إعادة تصميم تجربة استخدامه لتصبح بسيطة', en: 'Redesigning its user experience to be simple', type: 'A' },
      { ar: 'فهم الأسباب العميقة التي تجعله معقّدًا', en: 'Understanding the deep reasons that make it complex', type: 'I' },
      { ar: 'تدريب الناس على استخدامه بثقة', en: 'Training people to use it confidently', type: 'S' },
      { ar: 'كتابة دليل استخدام منظّم', en: 'Writing an organized user manual', type: 'C' } ] },
  { id: 13, ar: 'في مبادرة صحية، أي إسهام يحمّسك أكثر؟', en: 'In a health initiative, which contribution excites you most?',
    options: [
      { ar: 'تصميم حل أو حملة بشكل مبتكر', en: 'Designing a solution or campaign creatively', type: 'A' },
      { ar: 'بناء أجهزة مساعدة بسيطة بيدك', en: 'Building simple assistive devices by hand', type: 'R' },
      { ar: 'التعامل المباشر مع الناس ومساعدتهم', en: 'Directly dealing with and helping people', type: 'S' },
      { ar: 'تنظيم المبادرة وجمع الدعم وقيادتها', en: 'Organizing the initiative, gathering support, and leading it', type: 'E' } ] },
  { id: 14, ar: 'في عملية إنتاج قائمة، ما الذي تحبّ العمل عليه؟', en: 'In an existing production process, what do you like to work on?',
    options: [
      { ar: 'إعادة تصميم مرحلة لتصبح أذكى وأبسط', en: 'Redesigning a stage to be smarter and simpler', type: 'A' },
      { ar: 'تشغيل الخط والمعدّات عمليًا', en: 'Operating the line and equipment hands-on', type: 'R' },
      { ar: 'دراسة العملية لرفع كفاءتها علميًا', en: 'Studying the process to raise its efficiency scientifically', type: 'I' },
      { ar: 'ضبط الجودة ومطابقة كل مرحلة للمعايير', en: 'Quality control and matching each stage to standards', type: 'C' } ] },
  { id: 15, ar: 'أُطلقت تقنية جديدة. ما أكثر ما يستهويك فيها؟', en: 'A new technology launched. What appeals to you most about it?',
    options: [
      { ar: 'كيف أطوّرها إلى شيء أجمل وأذكى', en: 'How to develop it into something nicer and smarter', type: 'A' },
      { ar: 'كيف صُنعت وكيف أبني مثلها', en: 'How it was made and how to build like it', type: 'R' },
      { ar: 'كيف تعمل علميًا وما المبدأ خلفها', en: 'How it works scientifically and the principle behind it', type: 'I' },
      { ar: 'ما الفرصة التجارية فيها', en: 'What the commercial opportunity in it is', type: 'E' } ] },

  // القسم 4: المستهدف: الاجتماعي (S)
  { id: 16, ar: 'شخص يستخدم حلًّا صمّمه فريقك ويجد صعوبة. ردّة فعلك؟', en: 'Someone using your team\'s solution struggles. Your reaction?',
    options: [
      { ar: 'أجلس معه وأدرّبه وأطمئنه', en: 'I sit with them, train them, and reassure them', type: 'S' },
      { ar: 'أحلّل أين يخطئ الاستخدام ولماذا', en: 'I analyze where the usage goes wrong and why', type: 'I' },
      { ar: 'أرى فرصة لنسخة أفضل للجميع', en: 'I see an opportunity for a better version for everyone', type: 'E' },
      { ar: 'أحدّث دليل الإرشادات وإجراءات السلامة', en: 'I update the guidance manual and safety procedures', type: 'C' } ] },
  { id: 17, ar: 'ما الذي يمنحك أكبر شعور بالإنجاز؟', en: 'What gives you the greatest sense of accomplishment?',
    options: [
      { ar: 'أن يتحسّن حال إنسان بسببي', en: 'That a person\'s condition improves because of me', type: 'S' },
      { ar: 'أن أصل إلى تفسير يحلّ لغزًا', en: 'That I reach an explanation that solves a puzzle', type: 'I' },
      { ar: 'أن أرى تصميمًا ابتكرته يُستخدم', en: 'That I see a design I created being used', type: 'A' },
      { ar: 'أن أُنجز عملًا دقيقًا بلا أخطاء', en: 'That I complete precise work with no errors', type: 'C' } ] },
  { id: 18, ar: 'أي عمل تطوّعي يجذبك أكثر؟', en: 'Which volunteer work attracts you most?',
    options: [
      { ar: 'تعليم طلاب أصغر أساسيات المجال', en: 'Teaching younger students the basics of the field', type: 'S' },
      { ar: 'صناعة أجهزة مساعدة لذوي الاحتياجات', en: 'Making assistive devices for people with needs', type: 'R' },
      { ar: 'تصميم مواد توعية مبتكرة', en: 'Designing creative awareness materials', type: 'A' },
      { ar: 'تنظيم بيانات مبادرة صحية', en: 'Organizing data for a health initiative', type: 'C' } ] },
  { id: 19, ar: 'في فريق يجمع أطباء ومهندسين، ما دورك الطبيعي؟', en: 'In a team of doctors and engineers, what\'s your natural role?',
    options: [
      { ar: 'حلقة الوصل التي تفهم الجميع', en: 'The link that understands everyone', type: 'S' },
      { ar: 'من يحوّل الأفكار إلى نموذج ملموس', en: 'The one who turns ideas into a tangible prototype', type: 'R' },
      { ar: 'من يجيب عن الأسئلة العلمية الدقيقة', en: 'The one who answers precise scientific questions', type: 'I' },
      { ar: 'من ينظّم الملفات والمهام والمواعيد', en: 'The one who organizes files, tasks, and schedules', type: 'C' } ] },
  { id: 20, ar: 'عند تصميم جهاز طبي، ما نقطة انطلاقك؟', en: 'When designing a medical device, what\'s your starting point?',
    options: [
      { ar: 'احتياج المريض ومعاناته اليومية', en: 'The patient\'s need and daily struggle', type: 'S' },
      { ar: 'كيف أبنيه ليعمل بشكل موثوق', en: 'How to build it to work reliably', type: 'R' },
      { ar: 'المبدأ العلمي الذي يقوم عليه', en: 'The scientific principle it\'s based on', type: 'I' },
      { ar: 'شكل يجعله بديهيًا وسهلًا', en: 'A form that makes it intuitive and easy', type: 'A' } ] },

  // القسم 5: المستهدف: الريادي (E)
  { id: 21, ar: 'في عرض مشروع أمام داعمين، أي مهمة تفضّل؟', en: 'In a project pitch to sponsors, which task do you prefer?',
    options: [
      { ar: 'تقديم العرض وإقناع الحضور', en: 'Delivering the pitch and convincing the audience', type: 'E' },
      { ar: 'الإجابة عن الأسئلة العلمية الدقيقة', en: 'Answering the precise scientific questions', type: 'I' },
      { ar: 'تصميم العرض ليكون مؤثّرًا', en: 'Designing the presentation to be impactful', type: 'A' },
      { ar: 'تجهيز الأرقام والبيانات بدقّة', en: 'Preparing the numbers and data precisely', type: 'C' } ] },
  { id: 22, ar: 'تسمع عن تقنية جديدة. ما أول ما يخطر لك؟', en: 'You hear about a new technology. What comes to mind first?',
    options: [
      { ar: 'ما الفرصة فيها وكيف أستفيد منها؟', en: 'What\'s the opportunity in it and how do I benefit?', type: 'E' },
      { ar: 'كيف تعمل علميًا وما مبدؤها؟', en: 'How does it work scientifically and what\'s its principle?', type: 'I' },
      { ar: 'كيف أطوّرها إلى شيء أذكى؟', en: 'How do I develop it into something smarter?', type: 'A' },
      { ar: 'من ستفيد وكيف ستغيّر حياته؟', en: 'Who will it benefit and how will it change their life?', type: 'S' } ] },
  { id: 23, ar: 'في شركة تقنية حيوية، أي دور يغريك أكثر؟', en: 'In a biotech company, which role tempts you most?',
    options: [
      { ar: 'قيادة تطوير منتج جديد إلى السوق', en: 'Leading the development of a new product to market', type: 'E' },
      { ar: 'تشغيل الإنتاج والتعامل مع المعدّات', en: 'Running production and handling equipment', type: 'R' },
      { ar: 'تصميم المنتج وتجربة استخدامه', en: 'Designing the product and its user experience', type: 'A' },
      { ar: 'الإشراف على الجودة والالتزام بالأنظمة', en: 'Overseeing quality and regulatory compliance', type: 'C' } ] },
  { id: 24, ar: 'لديك فكرة منتج حيوي واعد. ما خطوتك الأولى؟', en: 'You have a promising bioproduct idea. What\'s your first step?',
    options: [
      { ar: 'أبني خطة عمل وأبحث عن شركاء وتمويل', en: 'I build a business plan and seek partners and funding', type: 'E' },
      { ar: 'أصنع نموذجًا أوليًا لأجرّبه', en: 'I make an initial prototype to test it', type: 'R' },
      { ar: 'أطوّر تصوّر المنتج وشكله', en: 'I develop the product concept and its form', type: 'A' },
      { ar: 'أتحدّث مع المستفيدين لأتأكد أنه يحلّ مشكلتهم', en: 'I talk to users to confirm it solves their problem', type: 'S' } ] },
  { id: 25, ar: 'تظهر حاجة غير ملبّاة في السوق الصحي. ما تصرّفك؟', en: 'An unmet need appears in the health market. What do you do?',
    options: [
      { ar: 'أرى فرصة وأخطّط لمشروع يسدّها', en: 'I see an opportunity and plan a project to fill it', type: 'E' },
      { ar: 'أبدأ ببناء حل عملي ملموس', en: 'I start building a tangible practical solution', type: 'R' },
      { ar: 'أدرس المشكلة علميًا قبل أي شيء', en: 'I study the problem scientifically before anything', type: 'I' },
      { ar: 'أستمع للمتأثّرين بها لأفهمها', en: 'I listen to those affected to understand it', type: 'S' } ] },

  // القسم 6: المستهدف: المنظّم (C)
  { id: 26, ar: 'أمامك كمية كبيرة من بيانات تجربة. ما ميلك الأول؟', en: 'You have a large amount of experiment data. What\'s your first inclination?',
    options: [
      { ar: 'تنظيمها في جداول دقيقة ومراجعتها', en: 'Organizing it into precise tables and reviewing it', type: 'C' },
      { ar: 'تحويلها إلى رسم بصري مبتكر', en: 'Turning it into a creative visualization', type: 'A' },
      { ar: 'تلخيصها ببساطة لمن لا يفهم الأرقام', en: 'Summarizing it simply for those who don\'t understand numbers', type: 'S' },
      { ar: 'استخدامها لدعم قرار أو فرصة عمل', en: 'Using it to support a decision or business opportunity', type: 'E' } ] },
  { id: 27, ar: 'في منشأة تُنتج دواءً بكميات كبيرة، أي مهمة تؤدّيها بارتياح؟', en: 'In a facility mass-producing a drug, which task do you do comfortably?',
    options: [
      { ar: 'التأكد من مطابقة كل دفعة للمعايير', en: 'Ensuring each batch matches the standards', type: 'C' },
      { ar: 'تشغيل خط الإنتاج والمعدّات', en: 'Operating the production line and equipment', type: 'R' },
      { ar: 'تدريب العاملين الجدد على الإجراءات', en: 'Training new workers on the procedures', type: 'S' },
      { ar: 'إدارة سلسلة الإنتاج ومواعيد التسليم', en: 'Managing the production chain and delivery schedules', type: 'E' } ] },
  { id: 28, ar: 'أي بيئة عمل تشعر فيها بأكبر ارتياح؟', en: 'Which work environment do you feel most comfortable in?',
    options: [
      { ar: 'عمل بإجراءات وقواعد واضحة', en: 'Work with clear procedures and rules', type: 'C' },
      { ar: 'عمل ميداني وعملي متغيّر', en: 'Changing field and hands-on work', type: 'R' },
      { ar: 'عمل مفتوح يترك مساحة للتجريب', en: 'Open work that leaves room for experimentation', type: 'A' },
      { ar: 'عمل ديناميكي فيه قرارات ومخاطرة', en: 'Dynamic work with decisions and risk', type: 'E' } ] },
  { id: 29, ar: 'تراجع ملف مشروع قبل اعتماده. ما أول ما تتحقّق منه؟', en: 'You review a project file before approval. What do you check first?',
    options: [
      { ar: 'اكتمال التوثيق ومطابقته للأنظمة والأخلاقيات', en: 'Completeness of documentation and compliance with regulations and ethics', type: 'C' },
      { ar: 'أن الجهاز مصنوع فعلًا ويعمل', en: 'That the device is actually made and works', type: 'R' },
      { ar: 'أن النتائج مدعومة علميًا', en: 'That the results are scientifically supported', type: 'I' },
      { ar: 'أن له قيمة عملية تستحق المضيّ', en: 'That it has practical value worth pursuing', type: 'E' } ] },
  { id: 30, ar: 'عند إنهاء تجربة، أي مهمة ترتاح لها؟', en: 'When finishing an experiment, which task do you find comforting?',
    options: [
      { ar: 'ترتيب النتائج وتوثيقها بدقّة', en: 'Organizing and documenting results precisely', type: 'C' },
      { ar: 'إعداد الأدوات للتجربة التالية', en: 'Preparing tools for the next experiment', type: 'R' },
      { ar: 'تحليل النتائج لاستخلاص خلاصة', en: 'Analyzing results to draw a conclusion', type: 'I' },
      { ar: 'عرض الخلاصة وشرحها للفريق', en: 'Presenting and explaining the conclusion to the team', type: 'S' } ] }
];

// ============================================================
// أسئلة المفاضلة الإجبارية (وزن +2) على الأقطاب المتقابلة
// ============================================================
export const forcedChoiceQuestions = [
  { id: 31, ar: 'لو أُجبرت على اختيار واحد فقط:', en: 'If forced to choose only one:',
    options: [
      { ar: 'أن أبني وأشغّل الأشياء بيديّ', en: 'To build and operate things with my hands', type: 'R' },
      { ar: 'أن أخدم الناس وأحسّن حياتهم مباشرة', en: 'To serve people and improve their lives directly', type: 'S' } ] },
  { id: 32, ar: 'لو أُجبرت على اختيار واحد فقط:', en: 'If forced to choose only one:',
    options: [
      { ar: 'أن أفهم وأبحث في أعماق كيف تعمل الأشياء', en: 'To understand and research the depths of how things work', type: 'I' },
      { ar: 'أن أقود وأحوّل الأفكار إلى مشاريع ناجحة', en: 'To lead and turn ideas into successful projects', type: 'E' } ] },
  { id: 33, ar: 'لو أُجبرت على اختيار واحد فقط:', en: 'If forced to choose only one:',
    options: [
      { ar: 'أن أبتكر وأصمّم بحرية دون قيود', en: 'To innovate and design freely without constraints', type: 'A' },
      { ar: 'أن أنظّم وأضبط بدقّة وفق معايير', en: 'To organize and control precisely according to standards', type: 'C' } ] }
];

// ============================================================
// دالة حساب النتيجة: تحترم ترتيب أحرف نمط الميول
// المنطق: الحرف الأول (العائلة) له أعلى وزن، ثم الثاني، ثم الثالث.
// نطابق كود الطالب المرتّب مع كود كل تخصص بحسب موقع كل حرف.
// أسئلة المفاضلة (وزن +2) ترجّح الكفّة عند تقارب العائلة.
// ============================================================
export function computeResult(answers) {
  // 1) جمع نقاط كل نمط
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  quizQuestions.forEach(q => {
    const ans = answers[q.id];
    if (ans) scores[ans] += 1; // وزن 1
  });
  forcedChoiceQuestions.forEach(q => {
    const ans = answers[q.id];
    if (ans) scores[ans] += 2; // وزن 2 (ترجيح)
  });

  // 2) ترتيب أنماط الطالب تنازلياً حسب النقاط (كسر التعادل بترتيب ثابت)
  const tieBreak = ['R', 'I', 'A', 'S', 'E', 'C'];
  const sortedTypes = Object.keys(scores).sort((a, b) => {
    if (scores[b] !== scores[a]) return scores[b] - scores[a];
    return tieBreak.indexOf(a) - tieBreak.indexOf(b);
  });
  const topCode = sortedTypes.slice(0, 3); // رمز الطالب: 3 أحرف مرتّبة

  // 3) رتبة كل نمط عند الطالب (0 = الأعلى) لاستخدامها بالمطابقة الترتيبية
  const rankOf = {};
  sortedTypes.forEach((type, idx) => { rankOf[type] = idx; });

  // 4) مطابقة ترتيبية: نقارن كود التخصص (3 أحرف مرتّبة) مع كود الطالب
  //    - تطابق الحرف في نفس الموقع  => نقاط كاملة (وزن الموقع)
  //    - وجود حرف التخصص ضمن كود الطالب بموقع مختلف => نقاط جزئية
  //    أوزان المواقع: الأول 5، الثاني 3، الثالث 2 (العائلة أهم)
  const positionWeights = [5, 3, 2];

  const specialtyMatches = specialties.map(s => {
    let matchScore = 0;
    s.codes.forEach((code, pos) => {
      const w = positionWeights[pos];
      if (topCode[pos] === code) {
        // نفس الحرف بنفس الموقع: أقوى تطابق
        matchScore += w;
      } else if (topCode.includes(code)) {
        // الحرف موجود بكود الطالب لكن بموقع مختلف: تطابق جزئي
        // كل ما قرب موقعه عند الطالب من موقعه بالتخصص، زادت النقاط
        const studentPos = topCode.indexOf(code);
        const distance = Math.abs(studentPos - pos);
        matchScore += w * (distance === 1 ? 0.6 : 0.35);
      } else {
        // الحرف من ضمن الستة لكن خارج أعلى 3 عند الطالب: نقاط ضئيلة حسب رتبته
        const r = rankOf[code]; // 3,4,5
        matchScore += w * (r <= 3 ? 0.2 : 0.08);
      }
    });
    return { id: s.id, score: matchScore };
  });

  // 5) تطبيع النسب (أعلى تخصص = 100%)
  const maxScore = Math.max(...specialtyMatches.map(m => m.score), 0.0001);
  const matches = specialtyMatches
    .map(m => ({ id: m.id, percentage: Math.round((m.score / maxScore) * 100) }))
    .sort((a, b) => b.percentage - a.percentage);

  return { scores, topCode, matches };
}
