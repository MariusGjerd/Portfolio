import { Html, useProgress } from '@react-three/drei'

//prosent loeader

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 14, 
        color: '#0d3b4a', 
        fontWeight: 800, 
        marginTop: 40
        }}>
      {progress.toFixed(2)}%</p>
    </Html>

  )
}

export default Loader