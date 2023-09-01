import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import Lottie from 'react-lottie';
import animationData from './pencil_animation.json';
import RobotPointing from './robot-pointing.avif';
import RobotImage from '../GeneratedImageForm/robot.png';
import errorAnimation from '../Layout/animation_error.json';

function GeneratedResponseForm() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [numTitles, setNumTitles] = useState(5);
  const [numAgendas, setNumAgendas] = useState(5);
  const [numWords, setNumWords] = useState(250);
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseGenerated, setIsResponseGenerated] = useState(false);

  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);

  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  const [typedText, setTypedText] = useState('');
  const [typedNewText, setTypedNewText] = useState('');
  const [showTypingAnimation, setShowTypingAnimation] = useState(false);

  const [fileDownloadUrl, setFileDownloadUrl] = useState('');

  useEffect(() => {
    if (showText1 && typedText.length < "Choose special parameteres: Provide any topic and indicate quantity of titles for the chosen topic. Agenda will be generated for every title and you can choose quantity of items for agenda. A paragraph will be generated for every agenda and you can choose its prefered length in words.".length) {
      setShowTypingAnimation(true);
      const typingInterval = setInterval(() => {
        setTypedText((prevText) => prevText + "Choose special parameteres: Provide any topic and indicate quantity of titles for the chosen topic. Agenda will be generated for every title and you can choose quantity of items for agenda. A paragraph will be generated for every agenda and you can choose its prefered length in words."[prevText.length]);
      }, 50);
      return () => {
        clearInterval(typingInterval);
        setShowTypingAnimation(false);
      };
    }
  }, [showText1, typedText]);

  useEffect(() => {
    if (showText2 && typedNewText.length < "Download generated file. If the result doesn't suit you, just ask me once again and I will do my best to make you happy.".length) {
      setShowTypingAnimation(true);
      const typingInterval = setInterval(() => {
        setTypedNewText((prevText) => prevText + "Download generated file. If the result doesn't suit you, just ask me once again and I will do my best to make you happy."[prevText.length]);
      }, 50);
      return () => {
        clearInterval(typingInterval);
        setShowTypingAnimation(false);
      };
    }
  }, [showText2, typedNewText]);

  useEffect(() => {
    setShowText1(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/response/generated-responses/`, {
        user_input: userInput,
        num_titles: numTitles,
        num_agendas: numAgendas,
        num_symbols: numWords,
      });

      const blob = new Blob([response.data], { type: 'text/html' });
      const fileUrl = URL.createObjectURL(blob);

      setIsResponseGenerated(true);
      setShowImage1(false);
      setShowImage2(true);
      setShowText1(false);
      setShowText2(true);
      setFileDownloadUrl(fileUrl);
    } catch (error) {
      console.error('Error while generating a response:', error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className={`image-form ${error ? 'error-mode' : ''}`}>
        <h2 style={{ marginBottom: '20px' }}>Generate a text according to your requirements:</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="form-control"
              id="userInput"
              placeholder="Enter the topic"
            />
            <label htmlFor="userInput">Enter the topic</label>
          </div>
          <div className="row mb-3">
            <div className="col">
              <div className="form-floating">
                <input
                  type="number"
                  value={numTitles}
                  onChange={(e) => setNumTitles(e.target.value)}
                  className="form-control"
                  id="numTitles"
                  placeholder="Indicate quantity of titles"
                />
                <label htmlFor="numTitles">Quantity of titles</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input
                  type="number"
                  value={numAgendas}
                  onChange={(e) => setNumAgendas(e.target.value)}
                  className="form-control"
                  id="numAgendas"
                  placeholder="Indicate quantity of items in agenda for every title"
                />
                <label htmlFor="numAgendas">Quantity of items in agenda for title</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input
                  type="number"
                  value={numWords}
                  onChange={(e) => setNumWords(e.target.value)}
                  className="form-control"
                  id="numWords"
                  placeholder="Indicate preferred length of paragraph in words"
                />
                <label htmlFor="numWords">Length of paragraph in words</label>
              </div>
            </div>
          </div>
          <button type="submit" disabled={isLoading || userInput.trim() === ''} className="btn btn-primary mt-2">
            {isLoading ? 'Generating...' : 'Generate response'}
          </button>
        </form>
        {isLoading ? (
          <div className="loading-animation">
            <div className="lottie-animation">
              <Lottie options={{ animationData: animationData, loop: true, autoplay: true }} width={200} height={200} />
            </div>
          </div>
        ) : (
          <div>
            {showText1 && (
              <div className="chat-bubble" style={{width: '82%'}}>
                <span className="typed-text">{typedText}</span>
              </div>
            )}
            {showText2 && (
              <div className="chat-bubble" style={{width: '82%'}}>
                <span className="typed-text">{typedNewText}</span>
              </div>
            )}
            {showImage1 && (
              <img 
                src={RobotPointing}
                alt="Image 1"
                style={{ width: '17%', height: '170px', marginLeft: '1000px', marginTop: '-30px', position: 'relative' }}
              />
            )}
            {showImage2 && (
              <img
                src={RobotImage}
                alt="Image 2"
                style={{ width: '10%', height: '140px', marginLeft: '1025px', marginTop: '-10px', position: 'relative' }}
              />
            )}
            {isResponseGenerated && fileDownloadUrl && (
              <div className="mt-3" style={{ display: 'flex', justifyContent: 'right', position: 'relative', marginTop: '-40px'}}>
                <a href={fileDownloadUrl} download className="btn btn-success">
                  Download Generated Response
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      {error ? (
          <div className="error-animation">
            <div className="lottie-animation">
              <Lottie options={{ animationData: errorAnimation, loop: true, autoplay: true }} width={700} height={700} />
            </div>
          </div>
        ) : null}
    </Layout>
  );
}

export default GeneratedResponseForm;
