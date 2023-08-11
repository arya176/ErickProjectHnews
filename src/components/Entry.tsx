import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const Entry = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (quantity !== "") {
      navigate(`/home?quantity=${quantity}`); // Use navigate function
    } else {
      navigate(`/home?quantity`);
    }
  };

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center  bg-[#F0F0F0]">
        <div>
          <h1 className="w-2/3 bg-[#00B8FC] p-5 mb-8">
            very welcome to our{" "}
            <span className="text-[#F0F0F0] text-lg">Functionality</span> ,this
            project is developing base on fetching Api from Hacker-news website.
          </h1>
        </div>
        <div className="  ">
          <h2 className="bold text-6xl ">
            Insert amount of stories you would like to see:{" "}
          </h2>
          <div className="mt-[60px] text-center">
            <form onSubmit={handleSubmit}>
              <input
                className="px-[25px] py-[12px] "
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div>
                <button type="submit" className="text-2xl mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
