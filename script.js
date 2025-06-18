function showResponse(feeling) {
  const messages = {
    happy: "🌼 That's beautiful. What’s something that made you smile today?",
    sad: "💧 It’s okay to feel this way. Write down what’s weighing on your heart.",
    anxious: "🌿 Breathe. You're safe. What thoughts are racing through your mind?",
  };
  document.getElementById('response').innerText = messages[feeling];
}