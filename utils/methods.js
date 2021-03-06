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
  "T??cnico",
  "Universidad",
  "Universidad Trunca",
  "Maestria",
  "Doctorado",
];

export const LenguajesArray = [
  "Espa??ol",
  "Ingl??s",
  "Portugu??s",
  "Ruso",
  "??rabe",
  "Chino",
  "Franc??s",
  "Alem??n",
  "Abjaso",
  "Afar",
  "Afrikaans",
  "Aimara",
  "Akano",
  "Alban??s",
  "Am??rico",
  "Aragon??s",
  "Armenio",
  "Asam??s",
  "Avar",
  "Av??stico",
  "Azer??",
  "Bambara",
  "Baskir",
  "Bengal??",
  "Bhojpur??",
  "Bielorruso",
  "Birmano",
  "Bislama",
  "Bosnio",
  "Bret??n",
  "B??lgaro",
  "Cachemiro",
  "Camboyano",
  "Canar??s",
  "Catal??n",
  "Chamorro",
  "Checheno",
  "Checo",
  "Chichewa",
  "Chuan",
  "Chuvasio",
  "Cingal??s",
  "Coreano",
  "Corso",
  "Cree",
  "Croata",
  "C??rnico",
  "Dan??s",
  "Dzongkha",
  "Eslavo",
  "Eslovaco",
  "Esloveno",
  "Esperanto",
  "Estonio",
  "Euskera",
  "Ewe",
  "Fero??s",
  "Fin??s",
  "Fiyiano",
  "Fris??n",
  "Fula",
  "Gallego",
  "Gal??s",
  "Ga??lico",
  "Ga??lico Escoc??s",
  "Georgiano",
  "Griego",
  "Groenland??s",
  "Guaran??",
  "Guyarat??",
  "Haitiano",
  "Hausa",
  "Hebreo",
  "Herero",
  "Hind??",
  "Hiri Motu",
  "H??ngaro",
  "Ido",
  "Igbo",
  "Indonesio",
  "Interlingua",
  "Inuktitut",
  "Inupiaq",
  "Island??s",
  "Italiano",
  "Japon??s",
  "Javan??s",
  "Kanuri",
  "Kazajo",
  "Kikuyu",
  "Kirgu??s",
  "Kirundi",
  "Komi",
  "Kongo",
  "Kuanyama",
  "Kurdo",
  "Lao",
  "Lat??n",
  "Let??n",

  "Limburgu??s",
  "Lingala",
  "Lituano",
  "Luba-Katanga",
  "Luganda",
  "Luxemburgu??s",
  "Macedonio",
  "Malayalam",
  "Malayo",
  "Maldivo",
  "Malgache",
  "Malt??s",
  "Man??s",
  "Maor??",
  "Mapugundun",
  "Marat??",
  "Marshal??s",
  "Mongol",
  "Nauruano",
  "Navajo",
  "Ndebele Del Norte",
  "Ndebele Del Sur",
  "Ndonga",
  "Neerland??s",
  "Nepal??",
  "Noruego",
  "Noruego Bokm??l",
  "Nynorsk",
  "Occidental",
  "Occitano",
  "Ojibwa",
  "Oriya",
  "Oromo",
  "Os??tico",
  "Pali",
  "Panyab??",
  "Past??",
  "Persa",
  "Polaco",
  "Quechua",
  "Romanche",
  "Ruand??s",
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
  "Somal??",
  "Suajili",
  "Suazi",
  "Sueco",
  "Sundan??s",
  "S??nscrito",
  "Tagalo",
  "Tahitiano",
  "Tailand??s",
  "Tamil",
  "Tayiko",
  "Telug??",
  "Tibetano",
  "Tigri??a",
  "Tongano",
  "Tsonga",
  "Turco",
  "Turcomano",
  "Twi",
  "T??rtaro",
  "Ucraniano",
  "Uigur",
  "Urdu",
  "Uzbeko",
  "Val??n",
  "Venda",
  "Vietnamita",
  "Volap??k",
  "Wolof",
  "Xhosa",
  "Yi De Sichu??n",
  "Yoruba",
  "Y??dish",
  "Zul??",
];

export const categories = [
  "Administraci??n / Oficina",
  "Almac??n / Log??stica / Transporte",
  "Atenci??n a clientes",
  "CallCenter / Telemercadeo",
  "Compras / Comercio Exterior",
  "Construccion y obra",
  "Contabilidad / Finanzas",
  "Direcci??n / Gerencia",
  "Dise??o / Artes gr??ficas",
  "Docencia",
  "Hosteler??a / Turismo",
  "Inform??tica / Telecomunicaciones",
  "Ingenier??a",
  "Investigaci??n y Calidad",
  "Legal / Asesor??a",
  "Mantenimiento y Reparaciones T??cnicas",
  "Medicina / Salud",
  "Mercadot??cnia / Publicidad / Comunicaci??n",
  "Producci??n / Operarios / Manufactura",
  "Recursos Humanos",
  "Servicios Generales, Aseo y Seguridad ",
  "Ventas",
];

export const giros = [
  "Agricultura / Pesca / Ganader??a",
  "Construcci??n / obras",
  "Educaci??n",
  "Energ??a",
  "Entretenimiento / Deportes",
  "Fabricaci??n",
  "Finanzas / Banca",
  "Gobierno / No Lucro",
  "Hosteler??a / Turismo",
  "Inform??tica / Hardware",
  "Inform??tica / Software",
  "Internet",
  "Legal / Asesor??a",
  "Materias Primas",
  "Medios de Comunicaci??n",
  "Publicidad / RRPP",
  "RRHH / Personal",
  "Salud / Medicina",
  "Servicios Profesionales",
  "Telecomunicaciones",
  "Transporte",
  "Venta al consumidor",
  "Venta al por mayor",
];
