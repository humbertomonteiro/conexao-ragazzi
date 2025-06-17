import styles from "./questions.module.css";
import Section from "../../shared/Section";
import Title from "../../shared/Title";

import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import ButtonPrimary from "../../shared/ButtonPrimary";

import { useState } from "react";

const questions = [
  {
    question: "Existe diferença na categoria dos ingressos?",
    answer: `Não! Todos os ingressos darão direito aos mesmos benefícios. 
    O LOTE PROMOCIONAL, será vendido até o dia 27/06/2025.`,
  },
  {
    question: "Como faço para adquirir o ingresso com 40% de desconto? ",
    answer: `É necessário ser parceiro da RAGAZZI PROMOTORA, caso não seja, 
    entre em contato e faça seu cadastro. Além disso, também é necessário 
    ter uma digitação aprovada durante o mês de junho/2025 na fintech QUALIBANKING. 
    Após esses dois pré requisitos, basta solicitar através de algum gerente 
    comercial da RAGAZZI, o seu cupom de desconto. `,
  },
  {
    question: "O que está incluso no meu ingresso?",
    answer: `Seu ingresso da direito a um coffee break no início do evento, 
      um kit de boas vindas, sorteio de brindes e também a assistir todas 
      as palestras durante o dia.`,
  },
  {
    question: "Quais as formas de pagamento da inscrição?",
    answer: `Na plataforma SYMPLA, seu ingresso pode ser pago via pix ou no cartão 
      de crédito parcelado em até 12x.
`,
  },
  {
    question: "No horário de almoço, existe local próximo?",
    answer: `Lembrando que o almoço NÃO está incluso no valor no ingresso, porém, no 
      próprio hotel existe um bom restaurante, além de diversas barracas de praia 
      localizadas próximas ao hotel.`,
  },
  {
    question:
      "Sou dono (a) de um escritório de crédito consignado, posso levar minha equipe?",
    answer: `Sim, nesse evento iremos abordar vários temas relacionados ao 
     setor e NÃO falaremos sobre percentuais de comissões.`,
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
        <div
          className={styles.whatsapp}
          data-background="transparent-tertiary"
          data-aos="zoom-in"
        >
          <FaWhatsapp />
          <h2>Prefere falar conosco?</h2>
          <p>Nos envie uma mensagem no WhatsApp</p>
          <ButtonPrimary
            data-button-color="secondary"
            icon={<FaWhatsapp />}
            link="https://wa.me/558582218050?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Conex%C3%A3o%20Ragazzi."
            target={true}
          >
            Falar com o time
          </ButtonPrimary>
        </div>
        <div
          className={styles.questions}
          data-background="transparent-tertiary"
          data-aos="zoom-in"
        >
          {questions.map((question, index) => (
            <div
              className={styles.question}
              onClick={() => handleQuestionClick(index)}
              data-active={activeQuestion === index}
            >
              <div className={styles.questionHeader}>
                <h3>{question.question}</h3>
                <div className={styles.questionIcon}>
                  <FaChevronDown />
                </div>
              </div>
              <p>{question.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
