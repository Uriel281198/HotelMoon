export const normalizeTemplates = (formData) => {
  let data = {
    category: {
      __type: "Pointer",
      className: "Categories",
      objectId: formData.area,
    },
    namevideo: formData.interviewname,
    instructionsuser: formData.instructions,
    questions: formData.instructions,
    questions:
      formData.questionsList.length === 0 ? [] : formData.questionsList,
    tottimevideo: formData.totalvideotime,
  };

  return data;
};

export const normalizeQuestions = (formData) => {
  let data = {
    namevideo: formData.interviewname,
    questions:
      formData.questionsList.length === 0 ? [] : formData.questionsList,
    instructionsuser: formData.instructions,
    questions:
      formData.questionsList.length === 0 ? [] : formData.questionsList,
    tottimevideo: formData.totalvideotime,
    vacancie: {
      __type: "Pointer",
      className: "Vacancies",
      objectId: "w88F9BYeCe",
    },
    category: {
      __type: "Pointer",
      className: "Categories",
      objectId: formData.area,
    },
  };

  return data;
};

export const normalizeCreateCompany = (formData) => {
  let data = {
    user: {
      __type: "Pointer",
      className: "_User",
      objectId: formData.objectId,
    },
    company: formData.company_name,
    rfc: formData.rfc,
    businessname: formData.business_name,
    name: formData.name,
    lastname: formData.lastname,
    username: formData.username,
    phone: formData.phone,
  };

  return data;
};

export const normalizeUserCompany = (formData) => ({
  username: formData.username,
  password: formData.password,
  email: formData.email,
  phone: formData.phone,
  name: formData.name,
  lastname: formData.lastname,
  type: "company",
});

export const normalizeProfileCompany = (formData) => {
  let data = {
    objectId: formData.objectId,
    name: formData.name,
    last_name: formData.last_name,
    phone: formData.phone,
    phonenumber2: formData.phonenumber2,
    postalcode: formData.postal_code,
    photo: formData.photo,
    email: formData.email,
    state: {
      __type: "Pointer",
      className: "States",
      objectId: formData.state,
    },
    city: {
      __type: "Pointer",
      className: "Cities",
      objectId: formData.city,
    },
  };

  return data;
};

export const normalizeUpdateUser = (formData) => {
  let data = {
    username: formData.username,
    email: formData.email,
    phone: formData.phone,
    name: formData.name,
    lastname: formData.lastname,
  };

  return data;
};

export const normalizeInfoCompany = (formData) => {
  let data = {
    objectId: formData.objectId,
    businessname: formData.business_name,
    name: formData.name,
    lastname: formData.last_name,
    rfc: formData.rfc,
    phone: formData.phoneCompany,
    company: formData.company_name,
    username: formData.username,
    entity: {
      __type: "Pointer",
      className: "Entities",
      objectId: formData.state,
    },
    city: {
      __type: "Pointer",
      className: "Cities",
      objectId: formData.city,
    },
  };

  return data;
};

export const normalize = (formData) => {
  let titleUrl = formData.title_job.replace(/\s+/g, "-");
  titleUrl = titleUrl.replace(/\./g, "");
  titleUrl = titleUrl.replace(/\,/g, "");

  let data = {
    title: formData.title_job,
    titleUrl: titleUrl,
    images: formData.image,
    requirements: formData.requirements,
    show_salary: formData.show_salary,
    maxsalary: formData.show_salary
      ? parseFloat(formData.max_salary.replace(/,/g, ""))
      : parseInt(0),
    minsalary: formData.show_salary
      ? parseFloat(formData.min_salary.replace(/,/g, ""))
      : parseInt(0),
    show_company_data: formData.show_company_data,
    description: formData.description,
    about_company: formData.about_company,
    requirements: formData.requirements_position,
    responsibilities: formData.responsibilities_position,
    additional_benefits: formData.additional_benefits,
    version_vacancy: parseInt(1),
    visits: parseInt(0),
    category: {
      __type: "Pointer",
      className: "Categories",
      objectId: formData.area,
    },
    street: formData.street,
    entity: {
      __type: "Pointer",
      className: "Entities",
      objectId: formData.stateform,
    },
    city: {
      __type: "Pointer",
      className: "Cities",
      objectId: formData.city,
    },
    grade: {
      __type: "Pointer",
      className: "Education",
      objectId: formData.grade,
    },
    experience: {
      __type: "Pointer",
      className: "Experience",
      objectId: formData.experience,
    },
    typeofcontract: {
      __type: "Pointer",
      className: "TypesContracts",
      objectId: formData.typeofjob,
    },
    workday: {
      __type: "Pointer",
      className: "WorkDay",
      objectId: formData.workday,
    },
    company: {
      __type: "Pointer",
      className: "Companies",
      objectId: formData.id_company,
    },
  };

  return data;
};

export const normalizeUser = (formData) => ({
  username: formData.username,
  name: formData.name,
  lastname: formData.lastname,
  email: formData.email,
  password: formData.password,
  type: "candidate",
});

export const normalizeInfoUser = (formData) => ({
  day: Number(formData.day),
  month: Number(formData.month),
  postalcode: formData.postalcode,
  year: Number(formData.year),
  entity: {
    __type: "Pointer",
    className: "Entities",
    objectId: formData.state,
  },
  city: {
    __type: "Pointer",
    className: "Cities",
    objectId: formData.city,
  },
});

export const fillMonths = () => [
  {
    number: 1,
    name: "Enero",
  },
  {
    number: 2,
    name: "Febrero",
  },
  {
    number: 3,
    name: "Marzo",
  },
  {
    number: 4,
    name: "Abril",
  },
  {
    number: 5,
    name: "Mayo",
  },
  {
    number: 6,
    name: "Junio",
  },
  {
    number: 7,
    name: "Julio",
  },
  {
    number: 8,
    name: "agosto",
  },
  {
    number: 9,
    name: "septiembre",
  },
  {
    number: 10,
    name: "octubre",
  },
  {
    number: 11,
    name: "noviembre",
  },
  {
    number: 12,
    name: "dicienmbre",
  },
];

export const Grades = [
  "Bachillerato",
  "Técnico",
  "Universidad",
  "Universidad Trunca",
  "Maestria",
  "Doctorado",
];

export const LenguajesArray = [
  "Español",
  "Inglés",
  "Portugués",
  "Ruso",
  "Árabe",
  "Chino",
  "Francés",
  "Alemán",
  "Abjaso",
  "Afar",
  "Afrikaans",
  "Aimara",
  "Akano",
  "Albanés",
  "Amárico",
  "Aragonés",
  "Armenio",
  "Asamés",
  "Avar",
  "Avéstico",
  "Azerí",
  "Bambara",
  "Baskir",
  "Bengalí",
  "Bhojpurí",
  "Bielorruso",
  "Birmano",
  "Bislama",
  "Bosnio",
  "Bretón",
  "Búlgaro",
  "Cachemiro",
  "Camboyano",
  "Canarés",
  "Catalán",
  "Chamorro",
  "Checheno",
  "Checo",
  "Chichewa",
  "Chuan",
  "Chuvasio",
  "Cingalés",
  "Coreano",
  "Corso",
  "Cree",
  "Croata",
  "Córnico",
  "Danés",
  "Dzongkha",
  "Eslavo",
  "Eslovaco",
  "Esloveno",
  "Esperanto",
  "Estonio",
  "Euskera",
  "Ewe",
  "Feroés",
  "Finés",
  "Fiyiano",
  "Frisón",
  "Fula",
  "Gallego",
  "Galés",
  "Gaélico",
  "Gaélico Escocés",
  "Georgiano",
  "Griego",
  "Groenlandés",
  "Guaraní",
  "Guyaratí",
  "Haitiano",
  "Hausa",
  "Hebreo",
  "Herero",
  "Hindú",
  "Hiri Motu",
  "Húngaro",
  "Ido",
  "Igbo",
  "Indonesio",
  "Interlingua",
  "Inuktitut",
  "Inupiaq",
  "Islandés",
  "Italiano",
  "Japonés",
  "Javanés",
  "Kanuri",
  "Kazajo",
  "Kikuyu",
  "Kirguís",
  "Kirundi",
  "Komi",
  "Kongo",
  "Kuanyama",
  "Kurdo",
  "Lao",
  "Latín",
  "Letón",

  "Limburgués",
  "Lingala",
  "Lituano",
  "Luba-Katanga",
  "Luganda",
  "Luxemburgués",
  "Macedonio",
  "Malayalam",
  "Malayo",
  "Maldivo",
  "Malgache",
  "Maltés",
  "Manés",
  "Maorí",
  "Mapugundun",
  "Maratí",
  "Marshalés",
  "Mongol",
  "Nauruano",
  "Navajo",
  "Ndebele Del Norte",
  "Ndebele Del Sur",
  "Ndonga",
  "Neerlandés",
  "Nepalí",
  "Noruego",
  "Noruego Bokmål",
  "Nynorsk",
  "Occidental",
  "Occitano",
  "Ojibwa",
  "Oriya",
  "Oromo",
  "Osético",
  "Pali",
  "Panyabí",
  "Pastú",
  "Persa",
  "Polaco",
  "Quechua",
  "Romanche",
  "Ruandés",
  "Rumano",
  "Sami Septentrional",
  "Samoano",
  "Sango",
  "Sardo",
  "Serbio",
  "Sesotho",
  "Setsuana",
  "Shona",
  "Sindhi",
  "Somalí",
  "Suajili",
  "Suazi",
  "Sueco",
  "Sundanés",
  "Sánscrito",
  "Tagalo",
  "Tahitiano",
  "Tailandés",
  "Tamil",
  "Tayiko",
  "Telugú",
  "Tibetano",
  "Tigriña",
  "Tongano",
  "Tsonga",
  "Turco",
  "Turcomano",
  "Twi",
  "Tártaro",
  "Ucraniano",
  "Uigur",
  "Urdu",
  "Uzbeko",
  "Valón",
  "Venda",
  "Vietnamita",
  "Volapük",
  "Wolof",
  "Xhosa",
  "Yi De Sichuán",
  "Yoruba",
  "Yídish",
  "Zulú",
];

export const categories = [
  "Administración / Oficina",
  "Almacén / Logística / Transporte",
  "Atención a clientes",
  "CallCenter / Telemercadeo",
  "Compras / Comercio Exterior",
  "Construccion y obra",
  "Contabilidad / Finanzas",
  "Dirección / Gerencia",
  "Diseño / Artes gráficas",
  "Docencia",
  "Hostelería / Turismo",
  "Informática / Telecomunicaciones",
  "Ingeniería",
  "Investigación y Calidad",
  "Legal / Asesoría",
  "Mantenimiento y Reparaciones Técnicas",
  "Medicina / Salud",
  "Mercadotécnia / Publicidad / Comunicación",
  "Producción / Operarios / Manufactura",
  "Recursos Humanos",
  "Servicios Generales, Aseo y Seguridad ",
  "Ventas",
];

export const giros = [
  "Agricultura / Pesca / Ganadería",
  "Construcción / obras",
  "Educación",
  "Energía",
  "Entretenimiento / Deportes",
  "Fabricación",
  "Finanzas / Banca",
  "Gobierno / No Lucro",
  "Hostelería / Turismo",
  "Informática / Hardware",
  "Informática / Software",
  "Internet",
  "Legal / Asesoría",
  "Materias Primas",
  "Medios de Comunicación",
  "Publicidad / RRPP",
  "RRHH / Personal",
  "Salud / Medicina",
  "Servicios Profesionales",
  "Telecomunicaciones",
  "Transporte",
  "Venta al consumidor",
  "Venta al por mayor",
];
