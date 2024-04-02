import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <MainLayout>
      <div
        style={{
          position: "absolute",
        }}
      >
        <Sidebar />
      </div>
    </MainLayout>
  );
};

export default Home;
