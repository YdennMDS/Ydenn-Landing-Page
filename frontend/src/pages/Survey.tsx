import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import Icons from "../constants/Icons";
import Images from "../constants/Images";
import questionsData from "../data/questions.json";

interface Question {
  text: string;
  options: string[];
}

interface QuestionsData {
  questions: Question[];
}

export default function Survey() {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const data: QuestionsData = questionsData as QuestionsData;

  const currentQuestion = data.questions[currentQuestionIndex];

  const buttonCondition = !answers;

  if (!currentQuestion) {
    return <div>Loading questions...</div>;
  }

  const handleSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/yourcontact", {
        state: { profile: calculateProfile(answers) },
      });
    }
  };

  const calculateProfile = (answers: string[]): string => {
    const counts = { Discret: 0, Initiateur: 0, Curieux: 0, Médiateur: 0 };
    answers.forEach((answer) => {
      switch (answer.charAt(0)) {
        case "A":
          counts.Discret += 1;
          break;
        case "B":
          counts.Initiateur += 1;
          break;
        case "C":
          counts.Curieux += 1;
          break;
        case "D":
          counts.Médiateur += 1;
          break;
        default:
          break;
      }
    });

    return Object.keys(counts).reduce((a, b) =>
      counts[a as keyof typeof counts] > counts[b as keyof typeof counts]
        ? a
        : b
    );
  };

  return (
    <div className="h-auto min-h-screen w-full bg-slate-100 flex flex-col items-center">
      <div className="flex flex-row h-[100px] w-full bg-white mb-12">
        <div className="flex flex-row items-center">
          <a
            href="/"
            className="flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[#F8F8F8] cursor-pointer ml-4 sm:ml-20"
          >
            <img
              src={Icons.LeftArrow}
              alt="left arrow"
              className="w-4 h-[14px]"
            />
          </a>
          <h3 className="font-medium text-xs sm:text-base ml-2 sm:ml-8">
            Créer votre avatar
          </h3>
        </div>
        <div className="sm:w-2/3 flex items-center justify-center ml-8">
          <img
            src={Images.YdennLogoFull}
            alt="logo ydenn"
            className="w-[88px] h-[68px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center gap-2 -mr-8">
            <span className="border-2 border-[#A1AEBE] rounded-full w-8 h-8 flex items-center justify-center text-xs sm:text-base font-medium text-[#242E39] bg-white relative">
              01
            </span>
            <h3 className="text-[#465668] font-medium text-sm sm:text-xl font-inter">
              Questionnaire
            </h3>
          </div>
          <span className="h-0.5 w-[100px] sm:w-[200px] bg-[#A1AEBE] flex mb-8"></span>
          <div className="flex flex-col items-center gap-2 -mx-12">
            <span className="border-2 border-[#A1AEBE] rounded-full w-8 h-8 flex items-center justify-center text-xs sm:text-base font-medium text-[#242E39] bg-white relative">
              02
            </span>
            <h3 className="text-[#465668] font-medium text-sm sm:text-xl font-inter">
              Vos coordonnées
            </h3>
          </div>
          <span className="h-0.5 w-[100px] sm:w-[200px] bg-[#A1AEBE] flex mb-8"></span>
          <div className="flex flex-col items-center gap-2 -ml-6">
            <span className="border-2 border-[#A1AEBE] rounded-full w-8 h-8 flex items-center justify-center text-xs sm:text-base font-medium text-[#242E39] bg-white relative">
              03
            </span>
            <h3 className="text-[#465668] font-medium text-sm sm:text-xl font-inter">
              Votre avatar
            </h3>
          </div>
        </div>
        <div className="flex items-center my-14">
          <h2 className="text-black font-bold text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-inter text-center mx-1">
            {currentQuestion.text}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center w-full">
        {currentQuestion.options ? (
          currentQuestion.options.map((option, index) => (
            <CustomInput
              key={index}
              text={option}
              onSelect={() => handleSelect(option)}
              isSelected={answers[currentQuestionIndex] === option}
            />
          ))
        ) : (
          <p>Aucune option disponible.</p>
        )}
      </div>
      <div className="flex flex-row w-full items-center justify-center my-20">
        <button
          onClick={handleNextQuestion}
          className={`font-bold md:text-sm ${
            buttonCondition
              ? "bg-[#E5E5E5] text-[#00000026]"
              : "bg-[#211BB2] text-white"
          } w-[301px] lg:w-[471px] h-[64px] text-xl flex items-center justify-center rounded-[30px] font-inter`}
        >
          {currentQuestionIndex < data.questions.length - 1
            ? "Suivant"
            : "Voir le profil"}
        </button>
      </div>
    </div>
  );
}
