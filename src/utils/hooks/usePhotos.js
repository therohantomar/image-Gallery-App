import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const usePhotos = (page) => {

    //destructuring Process
  const text = useSelector((store) => store.text.text);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


//for sideEffect Handling useEffect is used
  useEffect(() => {
    if (text === "") {
      getPhotos();
    } else {
      QueryByText();
    }
  }, [text,page]);

//functions for getting all new Photos
  async function getPhotos() {
    try{

        const response = await fetch(
            `https://api.unsplash.com/photos?page=${page}&per_page=20&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`  
          );
          const PhotosData = await response.json();
          setPhotos(PhotosData);
          setLoading(false);
    }
    catch{
        setError(true)
    }
    
  }

//functions for getting photos by query category
  async function QueryByText() {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${text}&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`
      );
      const PhotosData = await response.json();
      setPhotos(prev=>[...PhotosData.results,...prev]);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }
  //returning the states in structured format
  return { loading, error, photos };
};
