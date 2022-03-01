import Background from '@/components/dom/Background'

export default function Time() {
    return (
      <div className='grid place-items-center row-start-3 sm:row-start-2 sm:ml-10'>
        <div className="absolute z-10 p-5 w-4/5 h-1/5 flex flex-col justify-center items-center max-w-md max-h-52 min-h-125 sm:w-1/2">
          <p className="font-krona text-blue-accent uppercase text-xs pb-3 w-4/5 md:text-sm">one night only</p>
          <p className="font-krona text-text-transparent uppercase text-xs leading-5 w-4/5 md:text-sm md:leading-8">May 7th<br></br>
          urbn center Lobby<br></br>
          5:00pm - 6:30pm</p>
        </div>
        <div className="absolute z-0 w-4/5 h-1/5 max-w-md max-h-52 min-h-105 sm:w-1/2">
          <Background />
        </div>
      </div>
    )
  }
  