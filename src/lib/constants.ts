/** Toutes les informations modifiables du site, centralisées ici. */
import acupuncture from "@/assets/acupuncture.jpg";
import herbs from "@/assets/herbs.jpg";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";

export const SITE = {
  name: "[NOM DE LA PRATICIENNE]",
  tagline: "Médecine chinoise · Santé au féminin",
  slogan: "Du symptôme à la cause",
  phone: "[TÉLÉPHONE À COMPLÉTER]",
  phoneHref: "tel:+33600000000",
  whatsapp: "33600000000", // format international sans + ni espaces
  email: "contact@exemple.fr",
  address: "[ADRESSE DU CABINET À COMPLÉTER]",
  hours: ["Lundi – Vendredi : 9h – 19h [À COMPLÉTER]", "Samedi : 9h – 13h [À COMPLÉTER]"],
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  mapEmbed: "https://www.google.com/maps?q=Paris&output=embed",
};

export const whatsappLink = (text = "Bonjour, je souhaite prendre rendez-vous") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/prestations", label: "Mes prestations" },
  { to: "/contact", label: "Contact" },
] as const;

export const IMAGES = { hero, portrait, acupuncture, herbs };

export const SPECIALITES = [
  { icon: "Moon", title: "Santé hormonale", text: "SOPK, endométriose, SPM, cycles irréguliers." },
  { icon: "Activity", title: "Santé métabolique", text: "Soutien de l'équilibre glycémique." },
  { icon: "Leaf", title: "Santé digestive", text: "Troubles gastriques et inconfort digestif." },
  { icon: "Feather", title: "Douleurs chroniques et fatigue", text: "Fibromyalgie, tensions et stress." },
  { icon: "Droplets", title: "Drainage lymphatique", text: "Favoriser la circulation et la légèreté." },
  { icon: "Baby", title: "Grossesse et post-partum", text: "Un accompagnement doux à chaque étape." },
] as const;

export const OUTILS = ["Acupuncture", "Ventouses", "Tuina", "Phytothérapie", "Nutrition", "Coaching en hygiène de vie"];

export const METHODE = [
  { title: "Écoute et bilan complet", text: "Un temps d'échange approfondi sur votre histoire, votre mode de vie et vos symptômes." },
  { title: "Compréhension de la cause", text: "Identifier l'origine du déséquilibre selon la lecture de la médecine chinoise." },
  { title: "Protocole personnalisé", text: "Des soins et conseils choisis pour vous, adaptés à votre rythme." },
  { title: "Suivi et ajustements", text: "Nous faisons évoluer l'accompagnement au fil de vos ressentis." },
];

export const TEMOIGNAGES = [
  { name: "Claire, 34 ans", text: "[TÉMOIGNAGE À REMPLACER] Une écoute rare et des séances qui m'ont aidée à retrouver un cycle plus serein." },
  { name: "Sophie, 41 ans", text: "[TÉMOIGNAGE À REMPLACER] J'ai enfin compris mon corps. Je me sens plus énergique et apaisée." },
  { name: "Inès, 29 ans", text: "[TÉMOIGNAGE À REMPLACER] Un accompagnement précieux pendant ma grossesse, tout en douceur." },
];

export const PRESTATIONS = [
  { title: "Acupuncture", image: acupuncture, desc: "Par la pose de fines aiguilles stériles sur des points précis, l'acupuncture vise à rétablir la libre circulation de l'énergie et à soutenir l'équilibre global du corps.", ideal: "troubles du cycle, stress, sommeil, douleurs." },
  { title: "Ventouses", image: hero, desc: "Posées sur la peau, les ventouses créent une légère aspiration qui favorise la circulation et aide à relâcher les tensions musculaires profondes.", ideal: "tensions dorsales, fatigue, récupération." },
  { title: "Tuina (massage thérapeutique chinois)", image: hero, desc: "Un massage énergétique profond qui travaille sur les méridiens pour soulager les tensions et accompagner le corps vers plus de détente.", ideal: "douleurs chroniques, stress, raideurs." },
  { title: "Phytothérapie", image: herbs, desc: "Des formules de plantes issues de la pharmacopée chinoise, choisies selon votre terrain, pour prolonger les bienfaits des séances au quotidien.", ideal: "équilibre hormonal, digestion, vitalité." },
  { title: "Nutrition", image: herbs, desc: "Des conseils alimentaires inspirés de la diététique chinoise, simples et adaptés à vos goûts, pour nourrir votre énergie en profondeur.", ideal: "digestion, glycémie, fatigue." },
  { title: "Coaching en hygiène de vie", image: portrait, desc: "Sommeil, rythme, mouvement, gestion du stress : nous construisons ensemble des habitudes durables et réalistes.", ideal: "stress, sommeil, envie de changement." },
  { title: "Drainage lymphatique", image: hero, desc: "Des manœuvres douces et rythmées pour soutenir la circulation lymphatique et favoriser une sensation de légèreté.", ideal: "jambes lourdes, rétention d'eau." },
  { title: "Accompagnement grossesse et post-partum", image: portrait, desc: "Un suivi bienveillant pour soutenir votre bien-être pendant la grossesse puis accompagner la récupération après l'accouchement.", ideal: "nausées, fatigue, récupération post-natale." },
];

export const FAQ = [
  { q: "Comment se déroule une première séance ?", a: "La première séance dure environ 1h30. Elle commence par un bilan approfondi (antécédents, mode de vie, observation du pouls et de la langue), suivi d'un premier soin adapté." },
  { q: "L'acupuncture fait-elle mal ?", a: "Les aiguilles sont très fines. Vous pouvez ressentir un léger picotement ou une sensation de chaleur, généralement bien tolérés et rapidement oubliés." },
  { q: "Combien de séances faut-il ?", a: "Cela dépend de votre situation. Un premier bilan est souvent fait après 3 à 4 séances, puis le rythme est ajusté ensemble." },
  { q: "Est-ce compatible avec un suivi médical ?", a: "Oui. La médecine chinoise est complémentaire et ne remplace jamais un avis ou un traitement médical. Je vous encourage à poursuivre votre suivi." },
  { q: "Peut-on consulter enceinte ?", a: "Oui, avec des protocoles spécifiques et adaptés à chaque trimestre, dans le respect de votre suivi obstétrical." },
  { q: "Comment fonctionne la consultation à distance ?", a: "Par visioconférence, pour les bilans, la nutrition, la phytothérapie et le coaching. Les soins manuels se font au cabinet." },
];

export const MOTIFS = ["Première consultation", "Acupuncture", "Tuina", "Nutrition / phytothérapie", "Grossesse / post-partum", "Consultation à distance", "Autre"];
