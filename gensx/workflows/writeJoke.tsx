/** @jsxRuntime automatic */
/** @jsxImportSource @gensx/core */

import * as gensx from '@gensx/core';
import { OpenAIChatCompletion, OpenAIProvider } from '@gensx/openai';

interface WriteJokeProps {  
  text: string;
}

interface WriteJokeResult {
  joke: string;
}

function WriteJoke(props: WriteJokeProps) {
  const apiKey = process.env.OPENAI_API_KEY
  // console.log('WriteJoke', {apiKey, props})
  return (
    <OpenAIProvider apiKey={apiKey}>
      <OpenAIChatCompletion
        model="gpt-4o-mini"
        messages={[
        { role: "system", content: "You are a helpful assistant who writes jokes which are fun and friendly." },
        { role: "user", content: `Write a joke related to the following text: "${props.text}"` }
        ]}
      >
        {(result: any) => {
          const joke = result.choices[0].message.content || "No joke generated"
          // console.log('WriteJoke', joke)
          return { joke };
        }}
      </OpenAIChatCompletion>
    </OpenAIProvider>
  )
}

const WriteJokeComponent = gensx.Component<WriteJokeProps, WriteJokeResult>(
  "WriteJoke", 
  WriteJoke
);

export const WriteJokeWorkflow = gensx.Workflow(
  "WriteJoke",
  WriteJokeComponent
); 