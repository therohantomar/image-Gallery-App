import ImageCard from "./ImageCard";
import { usePhotos } from "../utils/hooks/usePhotos";
import useScroll from "../utils/hooks/useScroll";

function ImageGrid() {
  //custom hook made
  //destructing  process
  const page=useScroll()
  const { loading, error, photos } = usePhotos(page);

  //early return
  if (error) {
    return <div>error</div>;
  }
  //early return
  if (loading) {
    return (
      <section className="grid_container">
        {Array(10)
          .fill(0)
          .map((item, Index) => {
            return <div key={Index} className="item"></div>;
          })}
      </section>
    );
  }

  return (<>  <h1>{page}</h1>  <main className="grid_container">
    
      {/* map method used to populate data to cards */}
      {photos?.map((photo) => {
        return <ImageCard key={photo?.id} {...photo} />;
      })}
    </main>
    </>

  );
}

export default ImageGrid;
