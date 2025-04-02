import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { WriteJokeWorkflow } from '@/gensx/workflows/writeJoke'
import { useState } from 'react'
import Spinner from '../Spinner'


const defaultJokeTopic = 'AI and Humans'

const getJoke = createServerFn({ method: 'POST' })
  .validator((d: string) => d)
  .handler(async ({data}) => {
    // console.log('getJoke', {data})
    try {      
      const result = await WriteJokeWorkflow.run({ text: data });
          
      return result.joke;
    } 
    catch (error) {
      // console.error('Error processing workflow request:', error);
      
      return 'joke error'
    }
  }
)

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [shouldShowLoading, setShouldShowLoading] = useState(false)
  const handleGetJoke = async () => {
    setShouldShowLoading(true)
    const aJoke = await getJoke({data: jokeTopic})
    setJoke(aJoke)
    setShouldShowLoading(false)
  }

  const [joke, setJoke] = useState('')
  const [jokeTopic, setJokeTopic] = useState(defaultJokeTopic)
    
  return (
    <main>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '50%',
          margin: '5rem auto',
          height: '80%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor="jokeTopic">Joke Topic:</label>
        <input 
          type="text"
          name="jokeTopic"
          defaultValue={defaultJokeTopic} 
          onBlur={(e) => setJokeTopic(e.target.value)}
        />
        <div style={{height: '1rem'}}/>   
        <button
          type="button"
          onClick={handleGetJoke}
        >
          Get Joke
        </button>
        <div style={{height: '1rem'}}/> 
        <div>
          {
            shouldShowLoading ? 
            <Spinner /> :
            <p>{joke}</p>
          }
        </div>  
      </section>
    </main>
  )
}