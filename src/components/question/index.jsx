import React from 'react';

import RadioButton from '../radioButton';

const Question = ({question, answers, currentQuestion, onChange}) => {
  const formatName = (name) => name.replace(/\s/g, '').toLowerCase();

  return (
    <section>
      <h2>{question}</h2>
      <ol>
        {answers.map((answer, index) => <li><RadioButton groupName={formatName(question)} answer={answer} index={index} key={index} onChange={e => onChange(e)} /></li>)}
      </ol>
    </section>
  )
}

export default Question