import React, { useEffect, useState } from "react";
import sma from "./Assets/sma.jpg";
import { useNavigate } from "react-router-dom";

function CreatePost() {
	const navigate = useNavigate()
  const [item, setItem] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/posts`, {
        method:"GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setItem(data); 
      navigate("/")
      // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Make sure to pass an empty dependency array to run the effect only once

  return (
    <div className="bg-white h-screen p-5 pt-8 w-full overflow-scroll">
      {item.length === 0 ? (
        <p>Loading...</p>
      ) : (item?.map((obj) => (
        <div key={obj.id}>
          <div className="flex ml-4">
            <img
              src={sma}
              alt="image"
              className="h-12 w-12 rounded-full overflow-hidden object-cover"
            />
            <div className="flex flex-col ml-4">
              <h1 className="font-semibold mb-0">{obj.name}</h1>
              <span className="text-grey">{obj.email}</span>
            </div>
          </div>
          <div>
            {/* upload a photo */}
            <div>
              <form method="post" encType="multipart/form-data" className=" ">
                <input name="file" type="file" multiple />
                <textarea
                  name=""
                  placeholder="Write a message here"
                  className="border-2 rounded-md my-4 flex items-center justify-center w-56 h-12"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-white hover:text-blue-500 transition-all duration-500 md:text-sm"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      )))}
    </div>
  );
}

export default CreatePost;
