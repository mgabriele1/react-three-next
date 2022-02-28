import dynamic from 'next/dynamic'
// dom components
import Title from '@/components/dom/Title'
import Time from '@/components/dom/Time'
import Creators from '@/components/dom/Creators'
// import Shader from '@/components/canvas/Shader/Shader'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  return (
    <div className='grid grid-rows-4 h-full w-full sm:grid-cols-2 sm:grid-rows-3'>
      <Title />
      <Time />
      <Creators />
    </div>
  )
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Shader />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
