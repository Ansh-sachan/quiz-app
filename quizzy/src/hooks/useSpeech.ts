import { useState } from "react";

// hooks/useSpeech.ts
export const useSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text: string, lang = "en-US") => {
    if (!window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1;
    utterance.pitch = 1;

    // Set state on start
    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    // Reset state when finished
    utterance.onend = () => {
      setIsSpeaking(false);
    };

    // Reset on error
    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    // Cancel any ongoing speech before starting new
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return { speak, stop, isSpeaking };
};
