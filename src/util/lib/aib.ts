import OpenAI from "openai";

const openai  = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

async function ai() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test in a naive way." }],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion.choices);
  return completion.choices;
}

export default ai;