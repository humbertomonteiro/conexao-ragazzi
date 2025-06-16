import CaroselCoverFlow from "../../shared/CaroselCoverFlow";
import Section from "../../shared/Section";
import Title from "../../shared/Title";
import styles from "./benefits.module.css";
import Benefit from "../../templates/Benefit";

import ButtonPrimary from "../../shared/ButtonPrimary";

import { BsGraphUp } from "react-icons/bs";
import { IoRocketOutline, IoBarChartOutline } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";

// const listBenefits = [
//   {
//     icon: <FaCheck />,
//     title: "Benefício 1",
//     description: "Descrição do benefício 1"
//   },
//   {
//     icon: <FaCheck />,
//     title: "Benefício 1",
//     description: "Descrição do benefício 1",

//   },
//   {
//     icon: <FaCheck />,
//     title: "Benefício 1",
//     description: "Descrição do benefício 1",
//   },
//   {
//     icon: <FaCheck />,
//     title: "Benefício 1",
//     description: "Descrição do benefício 1",

//   },
// ];

const listBenefits = [
  {
    icon: <BsGraphUp />,
    title: "Oportunidades Reais de Negócios",
    content: (
      <Benefit
        icon={<BsGraphUp />}
        title="Oportunidades Reais de Negócios"
        description="Descubra o Mapa de Oportunidades com Governos e Prefeituras e como atuar com vendas no SIAPE, explorando mercados que poucos conhecem.

"
      />
    ),
  },
  {
    icon: <IoRocketOutline />,
    title: "Ferramentas e Estratégias que Vendem",
    content: (
      <Benefit
        icon={<IoRocketOutline />}
        title="Ferramentas e Estratégias que Vendem"
        description="Aprenda quais são as melhores ferramentas para o seu negócio: Discadoras, URA reversa, disparos ou tráfego pago. Vamos te mostrar o que realmente gera resultado!

"
      />
    ),
  },
  {
    icon: <AiOutlineOpenAI />,
    title: "Inteligência Artificial ao Seu Favor",
    content: (
      <Benefit
        icon={<AiOutlineOpenAI />}
        title="Inteligência Artificial ao Seu Favor"
        description="Entenda de forma prática como usar a IA para potencializar suas vendas, melhorar sua gestão de leads e criar campanhas mais assertivas."
      />
    ),
  },
  {
    icon: <IoBarChartOutline />,
    title: "Gestão e Performance em um Só Lugar",
    content: (
      <Benefit
        icon={<IoBarChartOutline />}
        title="Gestão e Performance em um Só Lugar"
        description="Conheça o New Corban e o Qualibanking, soluções que vão te ajudar a gerenciar contratos, otimizar suas finanças e organizar seu negócio com mais inteligência."
      />
    ),
  },
];

export default function Benefits() {
  return (
    <Section sectionSecondary={true}>
      <Title>Benefícios</Title>
      <div className={styles.container} data-aos="zoom-in">
        <CaroselCoverFlow listSlides={listBenefits} />
      </div>
      <div className={styles.button}>
        <ButtonPrimary>Comprar agora</ButtonPrimary>
      </div>
    </Section>
  );
}

// export default function Benefits() {
//   return (
//     <Section>
//       <Title>Benefícios</Title>
//       <div className={styles.container} data-background="transparent-primary">
//         {listBenefits.map((benefit, index) => (
//           <div
//             key={index}
//             className={styles.box}
//             data-background="transparent-tertiary"
//           >
//             <div className={styles.icon}>{benefit.icon}</div>
//             <h3>{benefit.title}</h3>
//             <p>{benefit.description}</p>
//           </div>
//         ))}
//         <div className={styles.button}>
//           <ButtonPrimary>Ver todos</ButtonPrimary>
//         </div>
//       </div>
//     </Section>
//   );
// }
