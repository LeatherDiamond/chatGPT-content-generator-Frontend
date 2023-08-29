import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import { useTrail, animated } from 'react-spring';
import './StartPage.css';

function StartPage() {
  const buttons = [
    { text: 'Get Started with Text Generation', color: 'primary' },
    { text: 'Get Started with Image Generation', color: 'secondary' },
  ];

  const trail = useTrail(buttons.length, {
    config: { mass: 1, tension: 500, friction: 20 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: -50 },
  });

  return (
    <Layout>
      <div className="start-page-container d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="start-page-title mb-3">Ready for the miracle</h1>
        <p className="start-page-subtitle">Welcome to our amazing world of generation</p>
        <div className="start-page-button-container">
          {trail.map((props, index) => (
            <animated.div key={index} style={props}>
              <Link to={`/${buttons[index].color}`} className={`btn start-page-button start-page-button-${buttons[index].color}`}>
                {buttons[index].text}
              </Link>
            </animated.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default StartPage;
