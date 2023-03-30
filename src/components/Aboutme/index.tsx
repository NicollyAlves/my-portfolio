import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";


import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";
import { AboutmeCard, AboutmeCardContent, AboutmeCards, AboutmeSection, AboutmeSectionContent, AboutmeSectionText, ImgBook, ImgCom, ImgPaint, TextBox, TextDiv } from "./style";

import laptop from "../../public/static/img/aboutme/com-laptop-code-svgrepo-com.svg"
import paint from "../../public/static/img/aboutme/paint-svgrepo-com.svg"
import book from "../../public/static/img/aboutme/book-svgrepo-com.svg"

export const Aboutme = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.8]);

  return (
    <AboutmeSection id="aboutme">
      <Container>
        <AboutmeSectionContent ref={ref}>
          <motion.div style={{ scale }}>
          </motion.div>            
            <AboutmeCard>
              <AboutmeCardContent>
            <Text as="h1" type="heading1" color="grey5">
              A little bit 
              <Text as="span" type="heading1" color="brand1">
                {" "}about me
                </Text>
            </Text>
            <TextDiv>
              <TextBox>
                <div>
                  <ImgCom src={laptop} alt="imagem de um laptop"></ImgCom>
                </div>
                {userData.general}
              </TextBox>
              <TextBox>
                <div>
                  <ImgPaint src={paint} alt="imagem de um pincel de pintura"></ImgPaint>
                </div>
                {userData.hobby}
              </TextBox>
              <TextBox>
                <div>
                  <ImgBook src={book} alt="imagem de um livro de estudos"></ImgBook>
                </div>
                {userData.future}
              </TextBox>
            </TextDiv>
              </AboutmeCardContent>
            </AboutmeCard>
        </AboutmeSectionContent>
      </Container>
    </AboutmeSection>
  );
};
