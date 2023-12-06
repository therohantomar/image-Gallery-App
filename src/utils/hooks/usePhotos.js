import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { QUERY_PHOTOS, NEW_PHOTOS_LINK } from "../constants";

export const usePhotos = () => {
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
  }, [text]);

//functions for getting all new Photos
  async function getPhotos() {
    try{
        const response = await fetch(
            NEW_PHOTOS_LINK + import.meta.env.VITE_APP_ACCESS_KEY
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
        QUERY_PHOTOS +
          text +
          `&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`
      );
      const PhotosData = await response.json();
      setPhotos(PhotosData.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }
  //returning the states in structured format
  return { loading, error, photos };
};
