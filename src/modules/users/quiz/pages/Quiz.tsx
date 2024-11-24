import { useEffect, useState } from "react";
import { B4CButton } from "@/components/B4CButton";
import { B4CProgressBar } from "@/components/B4CProgressBar";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, IconButton, Typography } from "@mui/material";

import { colorPalette } from "@/style/partials/colorPalette";
import { AnswerBox } from "../components/AnswerBox";
import { IQuestion, questions } from "../questions/questions";

export const QuizPage = () => {
  const [quizQuestions, setQuizQuestions] = useState<IQuestion[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null,
  );
  const [points, setPoints] = useState(0);

  const currentQuestion = questions[currentStep];

  const NUM_QUESTIONS = 8;

  const shuffleArray = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const randomizedQuestions = shuffleArray(questions)
      .slice(0, NUM_QUESTIONS)
      .map((question) => {
        const randomizedAnswers = shuffleArray(question.answers);
        return {
          ...question,
          answers: randomizedAnswers,
        };
      });

    setQuizQuestions(randomizedQuestions as IQuestion[]);
  }, []);

  const handleContinue = () => {
    if (currentStep < quizQuestions.length) {
      setPoints(points + currentQuestion.answers[selectedAnswerIndex!].points);
      setCurrentStep(currentStep + 1);
      setSelectedAnswerIndex(null);
    } else {
      // TODO: ENVIAR RESULTADO DEL QUIZ AL BACKEND
      console.log("Quiz completado");
    }
  };

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{
        background: colorPalette.backgroundLinearGradient,
      }}
    >
      <Box
        width={"90vw"}
        display={"flex"}
        justifyContent={"space-between"}
        padding={24}
        maxHeight={"5vh"}
        alignItems={"center"}
        component={"header"}
      >
        <Typography variant="h4">Test de Habilidades</Typography>

        <IconButton onClick={() => window.history.back()}>
          <ClearIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box
        width={"90vw"}
        display={"flex"}
        flexDirection={"column"}
        mt={"auto"}
        gap={10}
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        component={"main"}
      >
        {currentStep < quizQuestions.length ? (
          <>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Typography variant="h5" gutterBottom textAlign={"center"}>
                {`Pregunta #${currentStep + 1} de ${quizQuestions.length}:`}
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                textAlign={"center"}
                sx={{
                  whiteSpace: "pretty",
                }}
              >
                {currentQuestion.question}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              flex={1}
              maxHeight={"50vh"}
              alignItems={"center"}
              gap={24}
            >
              {currentQuestion.answers.map((answerObj, index) => (
                <AnswerBox
                  key={index}
                  selected={selectedAnswerIndex === index}
                  index={index}
                  answer={answerObj.answer}
                  onClick={() => setSelectedAnswerIndex(index)}
                />
              ))}
            </Box>
          </>
        ) : (
          <Box>
            <Typography variant="h5" gutterBottom>
              ¡Gracias por completar el test!
            </Typography>
            <Typography variant="h6" gutterBottom>
              Tus puntos: {points} (Borrar luego)
            </Typography>
            <B4CButton
              label="Volver al inicio"
              onClick={() => window.location.reload()} //TODO: Cambiar por redirección a la página de inicio
            />
          </Box>
        )}
      </Box>

      <Box
        width={"70vw"}
        display={"flex"}
        padding={24}
        mt={"auto"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={24}
        component={"footer"}
      >
        <B4CProgressBar value={currentStep} limit={quizQuestions.length} />
        <B4CButton
          label="Continuar"
          onClick={handleContinue}
          disabled={selectedAnswerIndex === null}
        />
      </Box>
    </Box>
  );
};
