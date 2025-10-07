// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
} else {
  document.documentElement.classList.remove('dark');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', function () {
  themeIcon.classList.toggle('fa-moon');
  themeIcon.classList.toggle('fa-sun');
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
});

// Active Navigation Highlighter
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index';
  const allNavItems = document.querySelectorAll('nav a');

  allNavItems.forEach(item => {
    item.classList.remove('text-primary', 'dark:text-secondary', 'font-semibold');
    item.classList.add(
      'text-gray-600',
      'dark:text-gray-300',
      'hover:text-primary',
      'dark:hover:text-secondary'
    );
  });

  function applyActiveStyles(element) {
    element.classList.remove(
      'text-gray-600',
      'dark:text-gray-300',
      'hover:text-primary',
      'dark:hover:text-secondary'
    );
    element.classList.add('text-primary', 'dark:text-secondary', 'font-semibold');
  }

  allNavItems.forEach(item => {
    const href = item.getAttribute('href');
    // Extract page name from href (handle both .html and clean URLs)
    const hrefPage = href ? href.replace('.html', '') : '';

    if (
      (currentPage === 'index' || currentPage === '' || currentPage === '/') &&
      (hrefPage === 'index' || hrefPage === '')
    ) {
      applyActiveStyles(item);
      return;
    }
    if (hrefPage === currentPage) {
      applyActiveStyles(item);
    }
  });
}

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
}

// ALL TRANSLATIONS HARDCODED - NO JSON FILES NEEDED
const ALL_TRANSLATIONS = {
  common: {
    en: {
      'nav-title': 'The Great Debaters',
      'nav-home': 'Home',
      'nav-about': 'About Us',
      'nav-team': 'Our Team',
      'nav-events': 'Latest Events',
      'footer-title': 'The Great Debaters',
      'footer-description':
        'Faculty of Sciences and Techniques Errachidia<br />Developing critical thinkers and eloquent speakers since 2018.',
      'contact-title': 'Contact Us',
      address: 'FST Errachidia, BP 509, Boutalamine, Errachidia',
      email: 'debaters@fst-errachidia.ac.ma',
      'meeting-time': 'Meeting: Every Thursday, 6 PM',
      'connect-title': 'Connect With Us',
      copyright: '© 2026 The Great Debaters - FST Errachidia. All rights reserved.',
    },
    fr: {
      'nav-title': 'Les Grands Débatteurs',
      'nav-home': 'Accueil',
      'nav-about': 'À propos',
      'nav-team': 'Notre Équipe',
      'nav-events': 'Événements Récents',
      'footer-title': 'Les Grands Débatteurs',
      'footer-description':
        "Faculté des Sciences et Techniques Errachidia<br />Développement de penseurs critiques et d'orateurs éloquents depuis 2018.",
      'contact-title': 'Contactez-Nous',
      address: 'FST Errachidia, BP 509, Boutalamine, Errachidia',
      email: 'debaters@fst-errachidia.ac.ma',
      'meeting-time': 'Réunion : Tous les jeudis, 18h',
      'connect-title': 'Connectez-Vous Avec Nous',
      copyright: '© 2026 Les Grands Débatteurs - FST Errachidia. Tous droits réservés.',
    },
    ar: {
      'nav-title': 'المتناظرون العظماء',
      'nav-home': 'الرئيسية',
      'nav-about': 'من نحن',
      'nav-team': 'فريقنا',
      'nav-events': 'أحداث ',
      'footer-title': 'المتناظرون العظماء',
      'footer-description':
        'كلية العلوم والتقنيات الرشيدية<br />تطوير مفكرين نقديين ومتحدثين بليغين منذ 2018.',
      'contact-title': 'اتصل بنا',
      address: 'كلية العلوم والتقنيات الرشيدية، ص.ب 509، بوتعلامين، الرشيدية',
      email: 'debaters@fst-errachidia.ac.ma',
      'meeting-time': 'الاجتماع: كل خميس، الساعة 6 مساءً',
      'connect-title': 'تواصل معنا',
      copyright: '© 2026 المتناظرون العظماء- كلية العلوم والتقنيات الرشيدية. جميع الحقوق محفوظة.',
    },
  },
  home: {
    en: {
      'hero-title': 'Master the Art of Persuasion',
      'hero-desc':
        'Join our community of critical thinkers and eloquent speakers. Develop your debating skills, engage in intellectual discourse, and make your voice heard.',
      'join-btn': 'Join now',
      'learn-btn': 'Learn more',
      'what-we-do': 'What We Do',
      'training-title': 'Comprehensive Training',
      'training-desc-1':
        'We provide structured training sessions that cover argument construction, rebuttal techniques, public speaking, and critical thinking. Our curriculum is designed for debaters of all skill levels.',
      'training-desc-2':
        'Our experienced coaches work with you to develop your unique voice and style while mastering the fundamentals of persuasive communication.',
      'competition-title': 'Competitive Experience',
      'competition-desc-1':
        'We participate in regional, national, and international debate tournaments, giving our members opportunities to test their skills against the best.',
      'competition-desc-2':
        'Our teams have consistently placed in top positions, earning recognition and building a legacy of excellence in competitive debating.',
      'community-title': 'Community Engagement',
      'community-desc-1':
        'We organize public debates, workshops, and community discussions on important contemporary issues, fostering dialogue and civic engagement.',
      'community-desc-2':
        'Our outreach programs introduce debating skills to schools and community centers, empowering more people to engage in constructive discourse.',
      testimonials: 'What Our Members Say',
      'team-captain': 'Team Captain, 2022',
      'english-student': 'Current English Student',
      'member-since': 'Member since 2021',
      'testimonial-1':
        '"Joining The Great Debaters transformed my ability to articulate complex ideas. The supportive community and expert coaching helped me win my first regional tournament."',
      'testimonial-2':
        '"The skills I developed with The Great Debaters have been invaluable in law school. Learning to construct persuasive arguments and think critically gave me a significant advantage."',
      'testimonial-3':
        '"I was nervous about public speaking when I joined, but the welcoming environment and structured approach helped me build confidence quickly. Now I love presenting arguments!"',
      'active-members': 'Active Members',
      'tournaments-won': 'Tournaments Won',
      'years-excellence': 'Years of Excellence',
    },
    fr: {
      'hero-title': "Maîtrisez l'Art de la Persuasion",
      'hero-desc':
        "Rejoignez notre communauté de penseurs critiques et d'orateurs éloquents. Développez vos compétences en débat, engagez-vous dans un discours intellectuel et faites entendre votre voix.",
      'join-btn': 'Rejoindre maintenant',
      'learn-btn': 'En savoir plus',
      'what-we-do': 'Ce Que Nous Faisons',
      'training-title': 'Formation Complète',
      'training-desc-1':
        "Nous proposons des sessions de formation structurées couvrant la construction d'arguments, les techniques de réplique, la prise de parole en public et la pensée critique. Notre programme est conçu pour les débatteurs de tous niveaux.",
      'training-desc-2':
        'Nos coachs expérimentés travaillent avec vous pour développer votre voix et style uniques tout en maîtrisant les fondamentaux de la communication persuasive.',
      'competition-title': 'Expérience Compétitive',
      'competition-desc-1':
        "Nous participons à des tournois de débat régionaux, nationaux et internationaux, offrant à nos membres l'opportunité de tester leurs compétences contre les meilleurs.",
      'competition-desc-2':
        "Nos équipes se sont régulièrement classées dans les premières positions, gagnant une reconnaissance et construisant un héritage d'excellence dans le débat compétitif.",
      'community-title': 'Engagement Communautaire',
      'community-desc-1':
        "Nous organisons des débats publics, des ateliers et des discussions communautaires sur des questions contemporaines importantes, favorisant le dialogue et l'engagement civique.",
      'community-desc-2':
        "Nos programmes de sensibilisation introduisent les compétences de débat dans les écoles et les centres communautaires, permettant à plus de personnes de s'engager dans un discours constructif.",
      testimonials: 'Ce Que Disent Nos Membres',
      'team-captain': "Capitaine d'Équipe, 2022",
      'english-student': 'Étudiant en Anglais Actuel',
      'member-since': 'Membre depuis 2021',
      'testimonial-1':
        '"Rejoindre Les Grands Débatteurs a transformé ma capacité à articuler des idées complexes. La communauté solidaire et le coaching expert m\'ont aidé à gagner mon premier tournoi régional."',
      'testimonial-2':
        '"Les compétences que j\'ai développées avec Les Grands Débatteurs ont été inestimables en école de droit. Apprendre à construire des arguments persuasifs et à penser de manière critique m\'a donné un avantage significatif."',
      'testimonial-3':
        "\"J'étais nerveux à l'idée de parler en public quand j'ai rejoint, mais l'environnement accueillant et l'approche structurée m'ont aidé à développer rapidement ma confiance. Maintenant, j'adore présenter des arguments !\"",
      'active-members': 'Membres Actifs',
      'tournaments-won': 'Tournois Gagnés',
      'years-excellence': "Années d'Excellence",
    },
    ar: {
      'hero-title': 'أتقن فن الإقناع',
      'hero-desc':
        'انضم إلى مجتمعنا من المفكرين النقديين والمتحدثين البليغين. طور مهاراتك في النقاش، شارك في الخطاب الفكري، واجعل صوتك مسموعًا.',
      'join-btn': 'انضم الآن',
      'learn-btn': 'اعرف المزيد',
      'what-we-do': 'ما نقوم به',
      'training-title': 'تدريب شامل',
      'training-desc-1':
        'نقدم جلسات تدريبية منظمة تغطي بناء الحجج، تقنيات الرد، الخطاب العام، والتفكير النقدي. منهجنا مصمم للمتحدثين بجميع المستويات.',
      'training-desc-2':
        'يعمل مدربونا ذوو الخبرة معك لتطوير صوتك وأسلوبك الفريد مع إتقان أساسيات التواصل المقنع.',
      'competition-title': 'خبرة تنافسية',
      'competition-desc-1':
        'نشارك في بطولات النقاش الإقليمية والوطنية والدولية، مما يمنح أعضائنا فرصًا لاختبار مهاراتهم ضد الأفضل.',
      'competition-desc-2':
        'احتلت فرقنا باستمرار مراكز متقدمة، مما أكسبنا الاعتراف وبناء إرث من التميز في النقاش التنافسي.',
      'community-title': 'مشاركة مجتمعية',
      'community-desc-1':
        'ننظم مناقشات عامة وورش عمل وجلسات حوار مجتمعية حول القضايا المعاصرة المهمة، مما يعزز الحوار والمشاركة المدنية.',
      'community-desc-2':
        'تقدم برامجنا التوعوية مهارات النقاش للمدارس ومراكز المجتمع، مما يمكن المزيد من الأشخاص من المشاركة في الخطاب البناء.',
      testimonials: 'ما يقوله أعضاؤنا',
      'team-captain': 'رئيس النادي , 2022',
      'english-student': 'طالب إنجليزي حالي',
      'member-since': 'عضو منذ 2021',
      'testimonial-1':
        '"انضمامي إلى المتحدثين الكبار غير قدرتي على التعبير عن الأفكار المعقدة. ساعدني المجتمع الداعم والتدريب الخبير في الفوز بأول بطولة إقليمية لي."',
      'testimonial-2':
        '"كانت المهارات التي طورتها مع المتحدثين الكبار لا تقدر بثمن في كلية الحقوق. تعلم بناء الحجج المقنعة والتفكير النقدي أعطاني ميزة كبيرة."',
      'testimonial-3':
        '"كنت متوترًا من التحدث أمام الجمهور عندما انضممت، لكن البيئة الترحيبية والنهج المنظم ساعداني في بناء الثقة بسرعة. الآن أحب تقديم الحجج!"',
      'active-members': 'أعضاء نشطين',
      'tournaments-won': 'البطولات التي فزنا بها',
      'years-excellence': 'سنوات من التميز',
    },
  },
  about: {
    en: {
      'about-hero-title': 'About The Great Debaters',
      'about-hero-desc':
        'The premier debating society at FST Errachidia, fostering critical thinking, eloquent expression, and intellectual discourse since 2018.',
      'who-we-are-title': 'Who We Are',
      'who-we-are-desc-1':
        'The Great Debaters is the official debating club of the Faculty of Sciences and Techniques (FST) in Errachidia, established to cultivate a culture of intellectual discourse and critical thinking among students.',
      'who-we-are-desc-2':
        "As part of FST Errachidia's vibrant student life, we provide a platform for students to develop their communication skills, engage with diverse perspectives, and build confidence in public speaking.",
      'who-we-are-desc-3':
        'Our club brings together students from various scientific and technical backgrounds, creating a unique interdisciplinary environment where different viewpoints converge and intellectual growth flourishes.',
      'mission-title': 'Our Mission',
      'mission-desc-1':
        'To empower FST Errachidia students with the skills of critical thinking, articulate expression, and confident public speaking through structured debate training and competitive experiences.',
      'mission-desc-2':
        'We aim to create an inclusive environment where every student feels comfortable expressing their ideas and engaging in intellectual discourse on important contemporary issues.',
      'vision-title': 'Our Vision',
      'vision-desc-1':
        'To establish FST Errachidia as a regional hub for intellectual discourse and debate excellence, producing graduates who are not only technically proficient but also exceptional communicators and critical thinkers.',
      'vision-desc-2':
        'We envision a campus culture where respectful debate and intellectual curiosity are celebrated as essential components of scientific and technical education.',
      'activities-title': 'What We Do as a Debating Club',
      'activity-1-title': 'Weekly Training Sessions',
      'activity-1-desc':
        'We conduct regular workshops covering argument construction, rebuttal techniques, speech delivery, and research methodology. These sessions are designed for debaters of all experience levels.',
      'activity-2-title': 'Competitive Debates',
      'activity-2-desc':
        'We organize internal tournaments and participate in inter-university competitions, providing members with opportunities to test their skills against debaters from other institutions.',
      'activity-3-title': 'Public Speaking Events',
      'activity-3-desc':
        'We host public debates on current issues, inviting the wider FST community to engage with important topics and witness the power of structured argumentation.',
      'activity-4-title': 'Collaborative Discussions',
      'activity-4-desc':
        'We facilitate panel discussions and forums where members can explore complex topics in depth, learning to appreciate diverse perspectives and build consensus.',
      'activity-5-title': 'Skill Development',
      'activity-5-desc':
        'Beyond debating, we focus on developing transferable skills including critical analysis, research proficiency, teamwork, and leadership abilities.',
      'activity-6-title': 'Community Outreach',
      'activity-6-desc':
        'We extend our activities beyond campus, organizing debate workshops for local schools and community organizations to promote the culture of constructive discourse.',
      'why-debate-title': 'Why Debate Matters at FST Errachidia',
      'science-students-title': 'For Science and Technology Students',
      'science-students-desc-1':
        'In the fields of science and technology, the ability to clearly articulate complex ideas, defend research methodologies, and engage in scholarly discourse is invaluable. Debate training enhances these essential professional skills.',
      'science-students-desc-2':
        'Our members learn to present technical information persuasively, critically evaluate scientific claims, and engage in evidence-based argumentation - skills that directly complement their academic studies.',
      'academic-benefits': 'Academic Benefits',
      'academic-benefit-1': 'Enhanced critical thinking abilities',
      'academic-benefit-2': 'Improved research and analysis skills',
      'academic-benefit-3': 'Better academic presentation skills',
      'academic-benefit-4': 'Stronger ability to defend scientific positions',
      'career-advantages': 'Career Advantages',
      'career-advantage-1': 'Confidence in professional presentations',
      'career-advantage-2': 'Effective communication with diverse audiences',
      'career-advantage-3': 'Strong negotiation and persuasion skills',
      'career-advantage-4': 'Leadership and teamwork capabilities',
      'join-cta-title': 'Join The Great Debaters Today',
      'join-cta-desc':
        "Become part of FST Errachidia's premier intellectual community. Develop skills that will benefit you throughout your academic journey and professional career.",
      'attend-meeting-btn': 'Attend Our Next Meeting',
      'contact-team-btn': 'Contact our team',
    },
    fr: {
      'about-hero-title': 'À propos des Grands Débatteurs',
      'about-hero-desc':
        "La principale société de débat de la FST Errachidia, favorisant la pensée critique, l'expression éloquente et le discours intellectuel depuis 2018.",
      'who-we-are-title': 'Qui Nous Sommes',
      'who-we-are-desc-1':
        "Les Grands Débatteurs est le club de débat officiel de la Faculté des Sciences et Techniques (FST) d'Errachidia, créé pour cultiver une culture de discours intellectuel et de pensée critique parmi les étudiants.",
      'who-we-are-desc-2':
        "Dans le cadre de la vie étudiante dynamique de la FST Errachidia, nous offrons une plateforme aux étudiants pour développer leurs compétences en communication, s'engager avec des perspectives diverses et renforcer leur confiance en prise de parole en public.",
      'who-we-are-desc-3':
        "Notre club rassemble des étudiants de divers horizons scientifiques et techniques, créant un environnement interdisciplinaire unique où différentes perspectives convergent et la croissance intellectuelle s'épanouit.",
      'mission-title': 'Notre Mission',
      'mission-desc-1':
        "Donner aux étudiants de la FST Errachidia les compétences de pensée critique, d'expression articulée et de prise de parole en public confiante grâce à une formation structurée au débat et des expériences compétitives.",
      'mission-desc-2':
        "Nous visons à créer un environnement inclusif où chaque étudiant se sent à l'aise pour exprimer ses idées et s'engager dans un discours intellectuel sur des questions contemporaines importantes.",
      'vision-title': 'Notre Vision',
      'vision-desc-1':
        "Établir la FST Errachidia comme un centre régional d'excellence en discours intellectuel et en débat, produisant des diplômés qui sont non seulement techniquement compétents mais aussi des communicateurs exceptionnels et des penseurs critiques.",
      'vision-desc-2':
        "Nous envisageons une culture universitaire où le débat respectueux et la curiosité intellectuelle sont célébrés comme des composantes essentielles de l'éducation scientifique et technique.",
      'activities-title': 'Ce Que Nous Faisons en Tant Que Club de Débat',
      'activity-1-title': 'Sessions de Formation Hebdomadaires',
      'activity-1-desc':
        "Nous organisons des ateliers réguliers couvrant la construction d'arguments, les techniques de réplique, la délivrance de discours et la méthodologie de recherche. Ces sessions sont conçues pour les débatteurs de tous niveaux d'expérience.",
      'activity-2-title': 'Débats Compétitifs',
      'activity-2-desc':
        "Nous organisons des tournois internes et participons à des compétitions interuniversitaires, offrant aux membres l'opportunité de tester leurs compétences contre des débatteurs d'autres institutions.",
      'activity-3-title': 'Événements de Prise de Parole',
      'activity-3-desc':
        "Nous organisons des débats publics sur des questions actuelles, invitant la communauté élargie de la FST à s'engager sur des sujets importants et à témoigner de la puissance de l'argumentation structurée.",
      'activity-4-title': 'Discussions Collaboratives',
      'activity-4-desc':
        'Nous facilitons des discussions de groupe et des forums où les membres peuvent explorer des sujets complexes en profondeur, apprenant à apprécier des perspectives diverses et à construire un consensus.',
      'activity-5-title': 'Développement des Compétences',
      'activity-5-desc':
        "Au-delà du débat, nous nous concentrons sur le développement de compétences transférables incluant l'analyse critique, la maîtrise de la recherche, le travail d'équipe et les capacités de leadership.",
      'activity-6-title': 'Rayonnement Communautaire',
      'activity-6-desc':
        'Nous étendons nos activités au-delà du campus, organisant des ateliers de débat pour les écoles locales et les organisations communautaires pour promouvoir la culture du discours constructif.',
      'why-debate-title': 'Pourquoi le Débat Compte à la FST Errachidia',
      'science-students-title': 'Pour les Étudiants en Sciences et Technologies',
      'science-students-desc-1':
        "Dans les domaines des sciences et technologies, la capacité à articuler clairement des idées complexes, à défendre des méthodologies de recherche et à s'engager dans un discours savant est inestimable. La formation au débat améliore ces compétences professionnelles essentielles.",
      'science-students-desc-2':
        "Nos membres apprennent à présenter des informations techniques de manière persuasive, à évaluer de manière critique les affirmations scientifiques et à s'engager dans une argumentation fondée sur des preuves - des compétences qui complètent directement leurs études académiques.",
      'academic-benefits': 'Avantages Académiques',
      'academic-benefit-1': 'Capacités de pensée critique améliorées',
      'academic-benefit-2': 'Compétences en recherche et analyse améliorées',
      'academic-benefit-3': 'Meilleures compétences en présentation académique',
      'academic-benefit-4': 'Capacité renforcée à défendre des positions scientifiques',
      'career-advantages': 'Avantages Professionnels',
      'career-advantage-1': 'Confiance dans les présentations professionnelles',
      'career-advantage-2': 'Communication efficace avec des publics divers',
      'career-advantage-3': 'Solides compétences en négociation et persuasion',
      'career-advantage-4': "Capacités de leadership et de travail d'équipe",
      'join-cta-title': "Rejoignez les Grands Débatteurs Aujourd'hui",
      'join-cta-desc':
        'Devenez membre de la principale communauté intellectuelle de la FST Errachidia. Développez des compétences qui vous seront utiles tout au long de votre parcours académique et de votre carrière professionnelle.',
      'attend-meeting-btn': 'Assister à Notre Prochaine Réunion',
      'contact-team-btn': 'Contactez notre équipe',
    },
    ar: {
      'about-hero-title': 'المتناظرون العظماء',
      'about-hero-desc':
        'أهم نادي مناظرة في كلية العلوم والتقنيات الرشيدية، تعزز التفكير النقدي والتعبير البليغ والحوار الفكري منذ 2018.',
      'who-we-are-title': 'من نحن',
      'who-we-are-desc-1':
        'المتحدثون الكبار هو النادي الرسمي للمناظرات في كلية العلوم والتقنيات بالرشيدية، تأسس لتعزيز ثقافة الحوار الفكري والتفكير النقدي بين الطلاب.',
      'who-we-are-desc-2':
        'كجزء من الحياة الطلابية النشطة في كلية العلوم والتقنيات الرشيدية، نقدم منصة للطلاب لتطوير مهارات التواصل والانخراط مع وجهات نظر متنوعة وبناء الثقة في التحدث أمام الجمهور.',
      'who-we-are-desc-3':
        'يجمع نادينا طلاباً من خلفيات علمية وتقنية متنوعة، مما يخلق بيئة متعددة التخصصات فريدة تلتقي فيها وجهات النظر المختلفة وتزدهر فيها النمو الفكري.',
      'mission-title': 'مهمتنا',
      'mission-desc-1':
        'تمكين طلاب كلية العلوم والتقنيات الرشيدية بمهارات التفكير النقدي والتعبير الواضح والتحدث أمام الجمهور بثقة من خلال التدريب المنظم على المناظرات والخبرات التنافسية.',
      'mission-desc-2':
        'نهدف إلى خلق بيئة شاملة حيث يشعر كل طالب بالراحة في التعبير عن أفكاره والانخراط في الحوار الفكري حول القضايا المعاصرة المهمة.',
      'vision-title': 'رؤيتنا',
      'vision-desc-1':
        'إرساء كلية العلوم والتقنيات الرشيدية كمركز إقليمي للحوار الفكري والتميز في المناظرات، وإنتاج خريجين ليسوا متميزين تقنياً فحسب، بل أيضاً متواصلين استثنائيين ومفكرين نقديين.',
      'vision-desc-2':
        'نتصور ثقافة حرم جامعي حيث يتم الاحتفاء بالمناظرة المحترمة والفضول الفكري كمكونات أساسية للتعليم العلمي والتقني.',
      'activities-title': 'ما نقوم به كنادي مناظرات',
      'activity-1-title': 'جلسات تدريب أسبوعية',
      'activity-1-desc':
        'نقوم بإجراء ورش عمل منتظمة تغطي بناء الحجج وتقنيات الرد وإلقاء الخطاب ومنهجية البحث. هذه الجلسات مصممة للمتحدثين بجميع مستويات الخبرة.',
      'activity-2-title': 'مناظرات تنافسية',
      'activity-2-desc':
        'ننظم بطولات داخلية ونشارك في المسابقات بين الجامعات، مما يوفر للأعضاء فرصاً لاختبار مهاراتهم ضد متحدثين من مؤسسات أخرى.',
      'activity-3-title': 'فعاليات الخطاب العام',
      'activity-3-desc':
        'نستضيف مناظرات عامة حول القضايا الحالية، وندعو مجتمع الكلية الأوسع للانخراط في مواضيع مهمة وشهد قوة الجدال المنظم.',
      'activity-4-title': 'مناقشات تعاونية',
      'activity-4-desc':
        'نسهل المناقشات الجماعية والمنتديات حيث يمكن للأعضاء استكشاف مواضيع معقدة بعمق، وتعلم تقدير وجهات النظر المتنوعة وبناء الإجماع.',
      'activity-5-title': 'تطوير المهارات',
      'activity-5-desc':
        'بeyond المناظرات، نركز على تطوير المهارات القابلة للتحويل بما في ذلك التحليل النقدي والكفاءة في البحث والعمل الجماعي وقدرات القيادة.',
      'activity-6-title': 'التواصل المجتمعي',
      'activity-6-desc':
        'نوسع أنشطتنا beyond الحرم الجامعي، بتنظيم ورش عمل للمناظرات للمدارس المحلية والمنظمات المجتمعية لتعزيز ثقافة الخطاب البناء.',
      'why-debate-title': 'لماذا تهم المناظرات في كلية العلوم والتقنيات الرشيدية',
      'science-students-title': 'لطلاب العلوم والتكنولوجيا',
      'science-students-desc-1':
        'في مجالات العلوم والتكنولوجيا، فإن القدرة على التعبير بوضوح عن الأفكار المعقدة والدفاع عن منهجيات البحث والانخراط في الخطاب العلمي لا تقدر بثمن. يعزز التدريب على المناظرة هذه المهارات المهنية الأساسية.',
      'science-students-desc-2':
        'يتعلم أعضاؤنا تقديم المعلومات التقنية بشكل مقنع، وتقييم الادعاءات العلمية بشكل نقدي، والانخراط في الجدال القائم على الأدلة - مهارات تكمل مباشرة دراساتهم الأكاديمية.',
      'academic-benefits': 'الفوائد الأكاديمية',
      'academic-benefit-1': 'قدرات التفكير النقدي المحسنة',
      'academic-benefit-2': 'مهارات البحث والتحليل المحسنة',
      'academic-benefit-3': 'مهارات العرض الأكاديمي الأفضل',
      'academic-benefit-4': 'قدرة أقوى على الدفاع عن المواقف العلمية',
      'career-advantages': 'المزايا المهنية',
      'career-advantage-1': 'الثقة في العروض التقديمية المهنية',
      'career-advantage-2': 'تواصل فعال مع جماهير متنوعة',
      'career-advantage-3': 'مهارات تفاوض وإقناع قوية',
      'career-advantage-4': 'قدرات القيادة والعمل الجماعي',
      'join-cta-title': 'انضم إلى المتحدثين الكبار اليوم',
      'join-cta-desc':
        'كن جزءاً من المجتمع الفكري الرائد في كلية العلوم والتقنيات الرشيدية. طور مهارات ستستفيد منها طوال رحلتك الأكاديمية ومهنتك المهنية.',
      'attend-meeting-btn': 'حضر اجتماعنا القادم',
      'contact-team-btn': 'اتصل بفريقنا',
    },
  },
  team: {
    en: {
      'team-hero-title': 'Meet Our Team',
      'team-hero-desc':
        'The passionate students behind The Great Debaters FST Errachidia - dedicated to fostering intellectual discourse and critical thinking on campus.',
      'executive-board-title': 'Executive Board',
      'executive-board-desc':
        'Our leadership team oversees the strategic direction and operations of the club.',
      'president-name': 'El mouhaddine Fatima ezzahra',
      'president-role': 'President',
      'president-desc':
        "Engineering student in Chemistry with a passion for political discourse. Leads the club's strategic vision and represents The Great Debaters at university events.",
      'vice-president-name': 'Zoubine Soulaimane',
      'vice-president-role': 'Vice President',
      'vice-president-desc':
        'Software Engineering bachelor student. Coordinates club activities and supports the president in strategic planning and decision-making.',
      'secretary-name': 'Hibatoulah moumni',
      'secretary-role': 'Secretary General',
      'secretary-desc':
        'Biology student with exceptional organizational skills. Manages club documentation, meeting minutes, and internal communications between team members.',
      'management-team-title': 'Management Team',
      'management-team-desc':
        'Our dedicated managers who handle the day-to-day operations and specialized functions of the club.',
      'hr-manager-name': 'Karim Idrissi',
      'hr-manager-role': 'HR Manager',
      'hr-manager-desc':
        'Mathematics student focused on member recruitment, retention, and organizing team-building activities to maintain club cohesion.',
      'event-manager-name': 'Nouhaila Sghiri',
      'event-manager-role': 'Event Manager',
      'event-manager-desc':
        'Finance Engineering student with exceptional planning skills. Coordinates all club events, from weekly meetings to major tournaments and inter-university competitions.',
      'media-manager-name': 'Sara Mourad',
      'media-manager-role': 'Media Manager',
      'media-manager-desc':
        'Computer Science student managing our social media presence, content creation, and promotional materials to increase club visibility.',
      'designer-name': 'Yahya ennayri',
      'designer-role': 'Designer',
      'designer-desc':
        "Physics student with a creative flair. Develops visual materials, event decorations, and maintains the club's aesthetic identity across all platforms.",
      'language-cells-title': 'Language Cells Chiefs',
      'language-cells-desc':
        'Our language specialists who ensure excellence in multilingual debates and help members develop proficiency in different languages.',
      'english-chief-name': 'Fassali Aymane',
      'english-chief-role': 'English Cell Chief',
      'english-chief-desc':
        'Finance Engineering student with near-native English proficiency. Leads English debate sessions and helps members improve their argumentation skills in English.',
      'english-cert': 'TOEFL: 115/120',
      'arabic-chief-name': 'Mohamed aouzalen',
      'arabic-chief-role': 'Arabic Cell Chief',
      'arabic-chief-desc':
        'Software Engineering student with exceptional Arabic eloquence. Specializes in classical Arabic rhetoric and modern debate techniques in Arabic.',
      'arabic-cert': 'Arabic Competition Winner',
      'french-chief-name': 'Abdel ali rejdali',
      'french-chief-role': 'French Cell Chief',
      'french-chief-desc':
        'Industrial Engineering student fluent in French. Organizes French debate sessions and helps members master the nuances of argumentation in French.',
      'french-cert': 'DALF C1 Certified',
      'join-team-title': 'Want to Join Our Team?',
      'join-team-desc':
        "We're always looking for passionate students to help us grow The Great Debaters community at FST Errachidia.",
      'apply-position-btn': 'Apply for a Position',
    },
    fr: {
      'team-hero-title': 'Rencontrez Notre Équipe',
      'team-hero-desc':
        'Les étudiants passionnés derrière Les Grands Débatteurs FST Errachidia - dédiés à favoriser le discours intellectuel et la pensée critique sur le campus.',
      'executive-board-title': 'Bureau Exécutif',
      'executive-board-desc':
        "Notre équipe de direction supervise l'orientation stratégique et les opérations du club.",
      'president-name': 'El mouhaddine Fatima ezzahra',
      'president-role': 'Présidente',
      'president-desc':
        'Étudiante en génie chimique passionnée par le discours social. Dirige la vision stratégique du club et représente Les Grands Débatteurs lors des événements universitaires.',
      'vice-president-name': 'Zoubine Soulaimane',
      'vice-president-role': 'Vice-Président',
      'vice-president-desc':
        'Étudiant en licence de génie logiciel. Coordonne les activités du club et soutient la présidente dans la planification stratégique et la prise de décision.',
      'secretary-name': 'Hibatoulah moumni',
      'secretary-role': 'Secrétaire Général',
      'secretary-desc':
        "Étudiante en biologie avec des compétences organisationnelles exceptionnelles. Gère la documentation du club, les procès-verbaux des réunions et les communications internes entre les membres de l'équipe.",
      'management-team-title': 'Équipe de Gestion',
      'management-team-desc':
        'Nos gestionnaires dévoués qui gèrent les opérations quotidiennes et les fonctions spécialisées du club.',
      'hr-manager-name': 'Karim Idrissi',
      'hr-manager-role': 'Responsable RH',
      'hr-manager-desc':
        "Étudiant en mathématiques axé sur le recrutement des membres, la fidélisation et l'organisation d'activités de renforcement d'équipe pour maintenir la cohésion du club.",
      'event-manager-name': 'Nouhaila Sghiri',
      'event-manager-role': 'Responsable Événements',
      'event-manager-desc':
        'Étudiante en génie financier avec des compétences exceptionnelles en planification. Coordonne tous les événements du club, des réunions hebdomadaires aux tournois majeurs et compétitions interuniversitaires.',
      'media-manager-name': 'Sara Mourad',
      'media-manager-role': 'Responsable Médias',
      'media-manager-desc':
        'Étudiante en informatique gérant notre présence sur les réseaux sociaux, la création de contenu et les supports promotionnels pour augmenter la visibilité du club.',
      'designer-name': 'Yahya ennayri',
      'designer-role': 'Designer',
      'designer-desc':
        "Étudiant en physique avec un flair créatif. Développe des supports visuels, des décorations d'événements et maintient l'identité esthétique du club sur toutes les plateformes.",
      'language-cells-title': 'Chefs des Cellules Linguistiques',
      'language-cells-desc':
        "Nos spécialistes linguistiques qui assurent l'excellence dans les débats multilingues et aident les membres à développer leur maîtrise de différentes langues.",
      'english-chief-name': 'Fassali Aymane',
      'english-chief-role': 'Chef de Cellule Anglaise',
      'english-chief-desc':
        "Étudiant en génie financier avec une maîtrise quasi-native de l'anglais. Anime les sessions de débat en anglais et aide les membres à améliorer leurs compétences d'argumentation en anglais.",
      'english-cert': 'TOEFL : 115/120',
      'arabic-chief-name': 'Mohamed aouzalen',
      'arabic-chief-role': 'Chef de Cellule Arabe',
      'arabic-chief-desc':
        'Étudiant en génie logiciel avec une éloquence arabe exceptionnelle. Spécialisé dans la rhétorique arabe classique et les techniques de débat modernes en arabe.',
      'arabic-cert': 'Vainqueur de Compétition Arabe',
      'french-chief-name': 'Abdel ali rejdali',
      'french-chief-role': 'Chef de Cellule Française',
      'french-chief-desc':
        "Étudiant en génie industriel fluent en français. Organise les sessions de débat en français et aide les membres à maîtriser les nuances de l'argumentation en français.",
      'french-cert': 'Certifié DALF C1',
      'join-team-title': 'Voulez-vous Rejoindre Notre Équipe?',
      'join-team-desc':
        'Nous recherchons toujours des étudiants passionnés pour nous aider à développer la communauté des Grands Débatteurs à la FST Errachidia.',
      'apply-position-btn': 'Postuler pour un Poste',
    },
    ar: {
      'team-hero-title': 'تعرف على فريقنا',
      'team-hero-desc':
        'الطلاب المتحمسون وراء المتحدثين الكبار في كلية العلوم والتقنيات الرشيدية - مكرسون لتعزيز الحوار الفكري والتفكير النقدي في الحرم الجامعي.',
      'executive-board-title': 'المجلس التنفيذي',
      'executive-board-desc': 'فريق القيادة لدينا يشرف على التوجه الاستراتيجي وعمليات النادي.',
      'president-name': 'المهدين فاطمة الزهراء',
      'president-role': 'الرئيسة',
      'president-desc':
        'طالبة هندسة كيمياء شغوفة بالخطاب الاجتماعي . تقود الرؤية الاستراتيجية للنادي وتمثل المتحدثين الكبار في الفعاليات الجامعية.',
      'vice-president-name': 'زبين سليمان',
      'vice-president-role': 'نائب الرئيس',
      'vice-president-desc':
        'طالب بكالوريوس هندسة برمجيات. ينسق أنشطة النادي ويدعم الرئيسة في التخطيط الاستراتيجي واتخاذ القرارات.',
      'secretary-name': 'هبة الله مومني',
      'secretary-role': 'الأمين العام',
      'secretary-desc':
        'طالبة بيولوجيا ذات مهارات تنظيمية استثنائية. تدير وثائق النادي ومحاضر الاجتماعات والاتصالات الداخلية بين أعضاء الفريق.',
      'management-team-title': 'فريق الإدارة',
      'management-team-desc':
        'مديرونا المتفانون الذين يتعاملون مع العمليات اليومية والوظائف المتخصصة للنادي.',
      'hr-manager-name': 'كريم الإدريسي',
      'hr-manager-role': 'مدير الموارد البشرية',
      'hr-manager-desc':
        'طالب رياضيات يركز على تجنيد الأعضاء والاحتفاظ بهم وتنظيم أنشطة بناء الفريق للحفاظ على تماسك النادي.',
      'event-manager-name': 'نهيلة الصغيري',
      'event-manager-role': 'مدير الفعاليات',
      'event-manager-desc':
        'طالبة هندسة مالية ذات مهارات تخطيط استثنائية. تنسق جميع فعاليات النادي، من الاجتماعات الأسبوعية إلى البطولات الكبرى والمسابقات بين الجامعات.',
      'media-manager-name': 'سارة مراد',
      'media-manager-role': 'مدير الإعلام',
      'media-manager-desc':
        'طالبة علوم حاسوب تدير وجودنا على وسائل التواصل الاجتماعي وإنشاء المحتوى والمواد الترويجية لزيادة ظهور النادي.',
      'designer-name': 'يحيى النييري',
      'designer-role': 'المصمم',
      'designer-desc':
        'طالب فيزياء يتمتع بروح إبداعية. يطور المواد البصرية وديكورات الفعاليات ويحافظ على الهوية الجمالية للنادي عبر جميع المنصات.',
      'language-cells-title': 'رؤساء الخلايا اللغوية',
      'language-cells-desc':
        'متخصصونا اللغويون الذين يضمنون التميز في المناظرات متعددة اللغات ويساعدون الأعضاء على تطوير الكفاءة في لغات مختلفة.',
      'english-chief-name': 'فسالي أيمن',
      'english-chief-role': 'رئيس الخلية الإنجليزية',
      'english-chief-desc':
        'طالب هندسة مالية يجيد الإنجليزية بمستوى قريب من اللغة الأم. يقود جلسات المناظرة باللغة الإنجليزية ويساعد الأعضاء على تحسين مهاراتهم في الجدال باللغة الإنجليزية.',
      'english-cert': 'توفل: 115/120',
      'arabic-chief-name': 'محمد أوزالن',
      'arabic-chief-role': 'رئيس الخلية العربية',
      'arabic-chief-desc':
        'طالب هندسة برمجيات يتمتع بفصاحة عربية استثنائية. متخصص في البلاغة العربية الكلاسيكية وتقنيات المناظرة الحديثة باللغة العربية.',
      'arabic-cert': 'فائز في مسابقة العربية',
      'french-chief-name': 'عبد العالي رجالي',
      'french-chief-role': 'رئيس الخلية الفرنسية',
      'french-chief-desc':
        'طالب هندسة صناعية يجيد الفرنسية بطلاقة. ينظم جلسات المناظرة باللغة الفرنسية ويساعد الأعضاء على إتقان دقائق الجدال باللغة الفرنسية.',
      'french-cert': 'حاصل على شهادة DALF C1',
      'join-team-title': 'هل تريد الانضمام إلى فريقنا؟',
      'join-team-desc':
        'نحن نبحث دائماً عن طلاب متحمسين لمساعدتنا في تنمية مجتمع المتحدثين الكبار في كلية العلوم والتقنيات الرشيدية.',
      'apply-position-btn': 'تقدم لوظيفة',
    },
  },
  latestEvents: {
    en: {
      'events-hero-title': 'Latest Events',
      'events-hero-desc': 'Stay tuned for our upcoming debates, workshops, and tournaments',
      'coming-soon-title': 'Exciting Events Coming Soon!',
      'coming-soon-desc':
        "We're preparing something special for our debating community. New events, tournaments, and workshops will be announced shortly.",
      'stay-connected': 'Stay Connected for Updates',
      'english-events': 'English',
      'english-coming': 'Coming Soon',
      'english-desc': 'Exciting English debate events and workshops are in preparation',
      'arabic-events': 'العربية',
      'arabic-coming': 'قريباً',
      'arabic-desc': 'نحن نعد أحداث ومنافسات نقاشية باللغة العربية قريباً',
      'french-events': 'Français',
      'french-coming': 'Bientôt',
      'french-desc': 'Des événements de débat passionnants en français arrivent bientôt',
      'expect-title': 'What to Expect',
      'expect-1': 'Inter-university debate tournaments',
      'expect-2': 'Public speaking workshops',
      'expect-3': 'Multilingual debate sessions',
      'expect-4': 'Expert-led training sessions',
      'expect-5': 'Community engagement events',
      'notify-title': 'Get Notified First',
      'notify-desc': 'Be the first to know when we announce our upcoming events',
      'email-placeholder': 'Enter your email',
      'notify-btn': 'Notify Me',
      'privacy-text': 'We respect your privacy. Unsubscribe at any time.',
      'success-title': 'Thank You!',
      'success-desc': "We'll notify you when events are announced.",
      'activities-title': 'While You Wait...',
      'past-events-title': 'Past Events',
      'past-events-desc':
        'Check out photos and highlights from our previous successful events and tournaments',
      'resources-title': 'Resources',
      'resources-desc':
        'Access our debate training materials and improve your skills while waiting',
      'join-sessions-title': 'Join Sessions',
      'join-sessions-desc':
        'Participate in our weekly practice sessions to stay sharp and connected',
    },
    fr: {
      'events-hero-title': 'Événements Récents',
      'events-hero-desc': "Restez à l'écoute pour nos prochains débats, ateliers et tournois",
      'coming-soon-title': 'Événements Passionnants à Venir!',
      'coming-soon-desc':
        'Nous préparons quelque chose de spécial pour notre communauté de débat. De nouveaux événements, tournois et ateliers seront annoncés prochainement.',
      'stay-connected': 'Restez Connecté pour les Mises à Jour',
      'english-events': 'Anglais',
      'english-coming': 'Bientôt',
      'english-desc':
        'Des événements et ateliers de débat en anglais passionnants sont en préparation',
      'arabic-events': 'العربية',
      'arabic-coming': 'قريباً',
      'arabic-desc': 'نحن نعد أحداث ومنافسات نقاشية باللغة العربية قريباً',
      'french-events': 'Français',
      'french-coming': 'Bientôt',
      'french-desc': 'Des événements de débat passionnants en français arrivent bientôt',
      'expect-title': "À Quoi S'Attendre",
      'expect-1': 'Tournois de débat interuniversitaires',
      'expect-2': 'Ateliers de prise de parole en public',
      'expect-3': 'Sessions de débat multilingues',
      'expect-4': 'Sessions de formation dirigées par des experts',
      'expect-5': "Événements d'engagement communautaire",
      'notify-title': 'Soyez Notifié en Premier',
      'notify-desc': 'Soyez le premier à savoir quand nous annonçons nos prochains événements',
      'email-placeholder': 'Entrez votre email',
      'notify-btn': 'Notifiez-moi',
      'privacy-text': 'Nous respectons votre vie privée. Désabonnez-vous à tout moment.',
      'success-title': 'Merci!',
      'success-desc': 'Nous vous notifierons lorsque les événements seront annoncés.',
      'activities-title': 'En Attendant...',
      'past-events-title': 'Événements Passés',
      'past-events-desc':
        'Découvrez les photos et les temps forts de nos précédents événements et tournois réussis',
      'resources-title': 'Ressources',
      'resources-desc':
        'Accédez à nos matériels de formation au débat et améliorez vos compétences en attendant',
      'join-sessions-title': 'Rejoignez les Sessions',
      'join-sessions-desc':
        'Participez à nos sessions de pratique hebdomadaires pour rester affûté et connecté',
    },
    ar: {
      'events-hero-title': 'أحداث حديثة',
      'events-hero-desc': 'ترقبوا مناظراتنا وورش العمل والبطولات القادمة',
      'coming-soon-title': 'أحداث مثيرة قريباً!',
      'coming-soon-desc':
        'نحن نعد شيئاً خاصاً لمجتمع المناظرات لدينا. سيتم الإعلان عن أحداث وبطولات وورش عمل جديدة قريباً.',
      'stay-connected': 'ابق متصلاً للتحديثات',
      'english-events': 'English',
      'english-coming': 'قريباً',
      'english-desc': 'أحداث وورش عمل مناظرة مثيرة باللغة الإنجليزية قيد الإعداد',
      'arabic-events': 'العربية',
      'arabic-coming': 'قريباً',
      'arabic-desc': 'نحن نعد أحداث ومنافسات نقاشية باللغة العربية قريباً',
      'french-events': 'Français',
      'french-coming': 'قريباً',
      'french-desc': 'أحداث مناظرة مثيرة باللغة الفرنسية قادمة قريباً',
      'expect-title': 'ما يمكن توقعه',
      'expect-1': 'بطولات مناظرات بين الجامعات',
      'expect-2': 'ورش عمل الخطاب العام',
      'expect-3': 'جلسات مناظرات متعددة اللغات',
      'expect-4': 'جلسات تدريبية بقيادة خبراء',
      'expect-5': 'فعاليات المشاركة المجتمعية',
      'notify-title': 'كن أول من يعلم',
      'notify-desc': 'كن أول من يعرف عندما نعلن عن أحداثنا القادمة',
      'email-placeholder': 'أدخل بريدك الإلكتروني',
      'notify-btn': 'أعلمني',
      'privacy-text': 'نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.',
      'success-title': 'شكراً لك!',
      'success-desc': 'سنخطرك عندما يتم الإعلان عن الأحداث.',
      'activities-title': 'في أثناء الانتظار...',
      'past-events-title': 'أحداث سابقة',
      'past-events-desc': 'اطلع على الصور وأبرز الأحداث من فعالياتنا وبطولاتنا الناجحة السابقة',
      'resources-title': 'الموارد',
      'resources-desc': 'الوصول إلى مواد التدريب على المناظرات لدينا وحسن مهاراتك أثناء الانتظار',
      'join-sessions-title': 'انضم إلى الجلسات',
      'join-sessions-desc': 'شارك في جلسات التدريب الأسبوعية لدينا للبقاء متقداً ومتصلًا',
    },
  },
};

// Enhanced Language Manager with Hardcoded Translations
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('preferred-language') || 'en';
    this.translations = {
      en: {},
      fr: {},
      ar: {},
    };
    this.init();
  }

  async init() {
    this.loadTranslations();
    this.setupEventListeners();
    this.applyLanguage(this.currentLang);
  }

  loadTranslations() {
    const currentPage = this.getCurrentPage();
    console.log('🔄 Loading translations for:', currentPage);

    // Load common translations
    this.addTranslations(ALL_TRANSLATIONS.common);

    // Load page-specific translations
    if (ALL_TRANSLATIONS[currentPage]) {
      this.addTranslations(ALL_TRANSLATIONS[currentPage]);
      console.log('✅ Page translations loaded for:', currentPage);
    } else {
      console.warn('⚠️ No translations found for page:', currentPage);
    }
  }

  getCurrentPage() {
    const fullPath = window.location.pathname;
    const page = fullPath.split('/').pop() || 'index';

    console.log('🔍 Current path analysis:');
    console.log('- Full path:', fullPath);
    console.log('- Extracted page:', page);

    // Handle clean URLs (without .html extension)
    if (page === 'index' || page === '' || page === '/') {
      console.log('✅ Detected: Home page');
      return 'home';
    }
    if (page === 'about') {
      console.log('✅ Detected: About page');
      return 'about';
    }
    if (page === 'team') {
      console.log('✅ Detected: Team page');
      return 'team';
    }
    if (page === 'latestevent' || page === 'latestEvents') {
      console.log('✅ Detected: Latest Events page');
      return 'latestEvents';
    }

    console.warn('❓ Unknown page, defaulting to home:', page);
    return 'home';
  }

  setupEventListeners() {
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langToggle && langDropdown) {
      langToggle.addEventListener('click', e => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
      });
    }

    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        this.switchLanguage(lang);
        if (langDropdown) langDropdown.classList.remove('show');
      });
    });

    document.addEventListener('click', () => {
      if (langDropdown) langDropdown.classList.remove('show');
    });
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    this.loadTranslations();
    this.applyLanguage(lang);
    this.updateActiveState();
    this.showLanguageFeedback(lang);
  }

  applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
      const key = element.dataset.translate;
      if (this.translations[lang] && this.translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = this.translations[lang][key];
        } else {
          element.textContent = this.translations[lang][key];
        }
      }
    });

    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
      currentLangElement.textContent = lang.toUpperCase();
    }

    this.updateDocumentDirection(lang);
  }

  updateDocumentDirection(lang) {
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  updateActiveState() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      option.classList.remove('active');
      if (option.dataset.lang === this.currentLang) {
        option.classList.add('active');
      }
    });
  }

  showLanguageFeedback(lang) {
    const feedback = document.createElement('div');
    feedback.className =
      'fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300';
    feedback.textContent = `Language changed to ${this.getLanguageName(lang)}`;
    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => document.body.removeChild(feedback), 300);
    }, 2000);
  }

  getLanguageName(lang) {
    const names = { en: 'English', fr: 'Français', ar: 'العربية' };
    return names[lang] || lang;
  }

  addTranslations(newTranslations) {
    Object.keys(newTranslations).forEach(lang => {
      if (!this.translations[lang]) {
        this.translations[lang] = {};
      }
      Object.assign(this.translations[lang], newTranslations[lang]);
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  window.languageManager = new LanguageManager();
});
