import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/Home/NewsCard";

const CategoriesNews = () => {

  const { id } = useParams();
  const data = useLoaderData();
  const [categoriesNews, setCategoriesNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoriesNews(data);
      return;
    } else if (id == '1') {
      const filterData = data.filter(news => news.others.is_today_pick == true);
      setCategoriesNews(filterData)
    }
    else {
      const filterData = data.filter(news => news.category_id == id);
      setCategoriesNews(filterData);
    }
    
    
  }, [data,id]);
 
  return (
    <div>
      <h2 className="font-bold mb-5">
        Total
        <span className="text-secondary"> {categoriesNews.length}</span> News Found
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoriesNews.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesNews