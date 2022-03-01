import Background from '@/components/dom/Background'
import Link from '@/components/dom/Link'

export default function Creators() {
    return (
      <div className='grid place-items-center row-start-4 sm:row-start-3 sm:ml-10'>
        <div className="absolute z-10 p-5 w-4/5 h-1/5 flex flex-col justify-center items-center max-w-md max-h-52 min-h-125 sm:w-1/2">
          <p className="font-space text-text-transparent font-medium uppercase text-xs pb-1 tracking-widest w-2/3">Created By:</p>
          <div className= "h-4/5 flex flex-col justify-between w-2/3">
            <Link link="https://www.charleswollochdesigns.com/" name="Charles Wolloch" />
            <Link link="https://jamescliff.com/" name="James Zangari" />
            <Link link="https://themgdesign.com/" name="Melissa Gabriele" />
            <Link link="https://reiddumont.com/" name="Reid Dumont" />
          </div>
        </div>
        <div className="absolute z-0 w-4/5 h-1/5 max-w-md max-h-52 min-h-105 sm:w-1/2">
          <Background />
        </div>
    </div>
    )
  }
  