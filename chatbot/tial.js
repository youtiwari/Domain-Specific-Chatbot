const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion () {
const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "How are you today?",
});
console.log(completion.data.choices[0].text);
}

runCompletion();

curl -X POST \
  http://localhost:5050/ask \
  -H 'Content-Type: application/json' \
  -d '{ "prompt": "What is the typical weather in Dubai?" }'