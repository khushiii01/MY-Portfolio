import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi , I am <span className="purple">Khushi Sharma </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am pursuing a bachelors degree in Computer Science
            Engineering at NSUT,Delhi.
            <br />
            I am Dedicated and self-motivated engineering student with the
            ability to multitask, learn fast, and effectively self-manage during
            independent projects.
            <br />
            <br />
          </p>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Khushi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
