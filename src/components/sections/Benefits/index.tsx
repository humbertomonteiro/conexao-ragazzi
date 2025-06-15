import CaroselCoverFlow from "../../shared/CaroselCoverFlow";
import Section from "../../shared/Section";
import Title from "../../shared/Title";
import styles from "./benefits.module.css";
import Benefit from "../../templates/Benefit";
import { FaCheck } from "react-icons/fa";
import ButtonPrimary from "../../shared/ButtonPrimary";

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
    icon: <FaCheck />,
    title: "Benefício 1",
    content: (
      <Benefit
        icon={<FaCheck />}
        title="Benefício 1"
        description="Descrição do benefício 1"
      />
    ),
  },
  {
    icon: <FaCheck />,
    title: "Benefício 1",
    content: (
      <Benefit
        icon={<FaCheck />}
        title="Benefício 1"
        description="Descrição do benefício 1"
      />
    ),
  },
  {
    icon: <FaCheck />,
    title: "Benefício 1",
    content: (
      <Benefit
        icon={<FaCheck />}
        title="Benefício 1"
        description="Descrição do benefício 1"
      />
    ),
  },
  {
    icon: <FaCheck />,
    title: "Benefício 1",
    content: (
      <Benefit
        icon={<FaCheck />}
        title="Benefício 1"
        description="Descrição do benefício 1"
      />
    ),
  },
];

export default function Benefits() {
  return (
    <Section sectionSecondary={true}>
      <Title>Benefícios</Title>
      <div className={styles.container}>
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
