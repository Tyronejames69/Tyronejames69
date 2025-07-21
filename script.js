let chatCount = 0, codeCount = 0, imageCount = 0;
const chatOutput = document.getElementById('chat-output');
const codeOutput = document.getElementById('code-output');
const imageOutput = document.getElementById('image-output');

// Mock real-world data for responses
const chatResponses = {
  'what is ai': 'Artificial Intelligence (AI) mimics human thinking, like problem-solving or learning. Think of me, Baked AI, as your chill AI buddy! 🌿',
  'code a website': 'I can generate code for you! Try describing a specific website, like "a portfolio with a navbar".',
  'make an image': 'Describe an image, like "a neon weed leaf at sunset", and I’ll simulate an AI-generated image for you!',
  'default': 'Yo, that’s a dope question: "{input}"! I’m a mock AI, so I’ll give you a chill response. Try something specific! 🌿'
};
const codeTemplates = {
  'portfolio': `<!-- Portfolio Website -->
