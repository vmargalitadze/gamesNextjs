import Image from "next/image"
import Loader from '@/assets/loader.gif'
function loading() {
  return (
    <div style={{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        width:"100vw"
    }}>
    <Image src={Loader} alt="loader" height={150} width={150} />
    </div>
  )
}

export default loading