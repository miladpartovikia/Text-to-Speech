const textInput = document.getElementById("textInput");
const speakButton = document.getElementById("speakButton");

speakButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text === "") {
    alert("Please enter some text.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US"; // Adjust language if needed
  utterance.rate = 1; // Speed of speech
  utterance.pitch = 1; // Pitch of the voice

  speechSynthesis.speak(utterance);
});
