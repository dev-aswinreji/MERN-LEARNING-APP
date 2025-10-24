import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <h1>Lesson Variable Declaration</h1>
    <Link to={"/variables"}>Variables</Link> <br />
    <Link to={"/functions"}>Functions</Link>
    </>
  )
}

export default Home