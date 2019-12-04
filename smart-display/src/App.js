import './App.css';

import {
  Components
} from 'botframework-webchat';

import { createAdapters } from 'botframework-directlinespeech-sdk';
import React, { useEffect, useState } from 'react';

import fetchCredentials from './fetchSpeechServicesCredentials';
import SmartDisplay from './SmartDisplay';

const { ComposerWithAdaptiveCards } = Components;

console.warn(Components);

const App = () => {
  const [adapters, setAdapters] = useState();

  useEffect(() => {
    (async () => {
      setAdapters(await createAdapters({ fetchCredentials }));
    })();
  }, []);

  return (
    !!adapters && (
      <ComposerWithAdaptiveCards {...adapters}>
        <SmartDisplay />
      </ComposerWithAdaptiveCards>
    )
  );
};

export default App;
