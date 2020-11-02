import useStore from '@/helpers/store'
import MyBox from '@/components/canvas/MyBox/MyBox'
import { Helmet } from 'react-helmet'

const BoxesDom = () => {
  return <h1>R3F Starter - Click on a box to navigate</h1>
}

const Dom = () => {
  useStore.setState({ loading: false })

  return (
    <>
      <Helmet title={'Welcome'} />
      <BoxesDom />
    </>
  )
}

const Canvas = () => {
  return (
    <group position={[0, 0, -20]}>
      <MyBox position={[10, 0, -5]} />
      <MyBox position={[-10, 0, -5]} />
      <MyBox position={[0, 10, 0]} />
      <MyBox position={[0, -5, 5]} />
    </group>
  )
}

// canvas is required and dom is optional
const Page = () => {
  useStore.setState({ loading: false })
  return (
    <>
      <Canvas />
      <Dom />
    </>
  )
}

export default Page