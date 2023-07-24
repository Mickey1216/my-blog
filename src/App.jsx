import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import JavaScript from "./views/JavaScript";
import TypeScript from "./views/TypeScript";
import ReactPage from "./views/React";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home/javascript/data-type" />}></Route>
        <Route path="/home" element={<Home />}>
          {/* 配置index，相当于vue-router中的重定向功能，/home的时候主动触发二级路由 */}
          <Route index element={<JavaScript />} />
          <Route path="/home/javascript" element={<JavaScript />}>
            <Route index element={<JavaScript />} />
            <Route path="/home/javascript/data-type" element={<JavaScript />} />
            <Route path="/home/javascript/prototype" element={<JavaScript />} />
          </Route>
          <Route path="/home/typescript" element={<TypeScript />} />
          <Route path="/home/react" element={<ReactPage />} />
        </Route>
      </Routes>
    </div>
    
  );
};

export default App;
