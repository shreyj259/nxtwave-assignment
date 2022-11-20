import React, { useEffect, useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import Seach from "../components/Seach";
import { getData } from "../Api/index";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [selectedTag, setSelectedTag] = useState("resources");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;

  const handleBtnClick = (tag) => {
    if (tag === selectedTag) return;
    setSelectedTag(tag);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handlePagination = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    setLoading(true);

    getData()
      .then((response) => {
        setData(response.data);
        setDisplayData(response.data);
        setLoading(false);
        toast.success("The data has been fetched");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Error! Can't fetch Data");
      });
  }, []);

  useEffect(() => {
    let temp = data;

    temp = temp
      .filter((item) => {
        if (selectedTag === "resources") return true;
        else {
          if (selectedTag === item.tag) return true;
          else
          return false
        }
      })
      .filter((item) =>{
        return item.title.toLowerCase().includes(searchQuery.toLowerCase())}
      );

    setDisplayData(temp);
  }, [selectedTag, searchQuery]);

  return (
      <div className="outer-container">
        <ButtonGroup
          selectedTag={selectedTag}
          handleBtnClick={handleBtnClick}
        />
        <Seach searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
       
        {loading ? (
          <Loader />
        ) : (
          <CardContainer
            data={displayData}
            indexOfLastPost={indexOfLastPost}
            indexOfFirstPost={indexOfFirstPost}
          />
        )}

        <Pagination
          totalPosts={displayData.length}
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
        
         <ToastContainer 
         position="bottom-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="colored"
         />
      </div>
  );
};

export default Homepage;
