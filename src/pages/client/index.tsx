import { useStore } from "../../store/useStore"
import { useEffect } from 'react';
import { HttpActions } from '../../dummy/data';

const mapStateToProps = ((state: any) => {
  const { http: { status = '' } = {} } = state
  return { status }
})
const Client = () => {
  const [{ status }, dispatch ] = useStore(mapStateToProps, null)
  useEffect(() => {
    setInterval(() => {
      const index = `${Math.floor(Math.random() * 1000) % 4}`
      // @ts-ignore
      dispatch(HttpActions[index])
    }, 1000)
  }, [dispatch])
  return (
    <div>
      <p>CLIENT</p>
      <p>Http status: {status}</p>
    </div>
  )
}
export default Client