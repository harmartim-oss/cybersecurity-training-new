import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, CheckCircle, XCircle } from 'lucide-react';

interface CaseStudyQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface CaseStudyProps {
  title: string;
  scenario: string;
  questions: CaseStudyQuestion[];
  learnings: string[];
}

export default function CaseStudy({ title, scenario, questions, learnings }: CaseStudyProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];
  const isCorrect = selected === question.correct;

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
        <div className="flex gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-indigo-600 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600 mt-1">Real-world case study</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{scenario}</p>
      </Card>

      {!completed ? (
        <Card className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Question {currentQuestion + 1} of {questions.length}
              </h3>
              <div className="text-sm text-gray-600">
                Score: {score}/{questions.length}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-4">{question.question}</h4>

          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !submitted && setSelected(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition ${
                  selected === index
                    ? 'border-indigo-500 bg-indigo-100'
                    : 'border-gray-200 bg-white hover:border-indigo-300'
                } ${submitted ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
                disabled={submitted}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selected === index ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'
                    }`}
                  >
                    {selected === index && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {!submitted && (
            <Button
              onClick={handleSubmit}
              disabled={selected === null}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Submit Answer
            </Button>
          )}

          {submitted && (
            <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex gap-3 mb-3">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h5 className="font-semibold text-green-800">Correct!</h5>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <h5 className="font-semibold text-red-800">Incorrect</h5>
                  </>
                )}
              </div>
              <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {question.explanation}
              </p>
            </div>
          )}

          {submitted && (
            <Button
              onClick={handleNext}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          )}
        </Card>
      ) : (
        <Card className="p-6">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-indigo-600 mb-2">
              {Math.round((score / questions.length) * 100)}%
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {score}/{questions.length} Correct
            </h3>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-800 mb-4">Key Learnings</h4>
            <ul className="space-y-2">
              {learnings.map((learning, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            onClick={() => {
              setCurrentQuestion(0);
              setSelected(null);
              setSubmitted(false);
              setScore(0);
              setCompleted(false);
            }}
            variant="outline"
            className="w-full"
          >
            Retake Case Study
          </Button>
        </Card>
      )}
    </div>
  );
}
