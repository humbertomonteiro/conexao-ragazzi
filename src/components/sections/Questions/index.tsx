import styles from "./questions.module.css";
import Section from "../../shared/Section";
import Title from "../../shared/Title";

import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import ButtonPrimary from "../../shared/ButtonPrimary";

import { useState } from "react";

const questions = [
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing safdsaha ah a gdsfag sdf.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export default function Questions() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <Section>
      <Title>Perguntas Frequentes</Title>
      <div
        className={styles.container}
        data-background="transparent-primary"
        data-aos="zoom-in"
      >
        <div className={styles.whatsapp} data-background="transparent-tertiary">
          <FaWhatsapp />
          <h2>Prefere falar conosco?</h2>
          <p>Nos envie uma mensagem no WhatsApp</p>
          <ButtonPrimary data-button-color="secondary" icon={<FaWhatsapp />}>
            Falar com o time
          </ButtonPrimary>
        </div>
        <div
          className={styles.questions}
          data-background="transparent-tertiary"
        >
          {questions.map((question, index) => (
            <div
              className={styles.question}
              onClick={() => handleQuestionClick(index)}
              data-active={activeQuestion === index}
            >
              <div className={styles.questionHeader}>
                <h3>{question.question}</h3>
                <FaChevronDown />
              </div>
              <p>{question.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
