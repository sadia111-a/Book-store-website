import Banner from "../../components/Banner";
import FavBook from "./FavBook";
import FavoriteBooks from "./FavoriteBooks";
import OtherBook from "./OtherBook";
import PromoBanner from "./PromoBanner";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FavoriteBooks></FavoriteBooks>
      <FavBook></FavBook>
      <PromoBanner></PromoBanner>
      <OtherBook></OtherBook>
      <Review></Review>
    </div>
  );
};

export default Home;
