import Background from '@/components/dom/Background'

export default function Time() {
    return (
      <div className='grid place-items-center row-start-3 sm:row-start-2'>
        <div className="absolute z-10 p-5 w-4/5 h-1/5 flex flex-col justify-center items-center max-w-md">
          <p className="font-krona text-blue-accent uppercase text-xs pb-3 w-4/5">one night only</p>
          <p className="font-krona text-text-transparent uppercase text-xs leading-5 w-4/5">May 7th<br></br>
          urbn center Lobby<br></br>
          5:00pm - 6:30pm</p>
        </div>
        <div className="absolute z-0 w-4/5 h-1/5 max-w-md">
          <Background />
        </div>
      </div>
    )
  }
  