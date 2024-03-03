import api from "./api/unsplash";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/search";

function getData() {
    return api.getPhotos().then((images) => {
      return images;
    });
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <div className="wrapper">
        <Search data={data}/>
      </div>
    </>
  );
}
