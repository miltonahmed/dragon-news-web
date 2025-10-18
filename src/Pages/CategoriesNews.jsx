import { useParams } from "react-router";

const CategoriesNews = () => {
  const {id} = useParams();
  return (
    <div>CategoriesNews -{id}</div>
  )
}

export default CategoriesNews