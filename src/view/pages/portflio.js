import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { LangContext } from "../../context/langContext";
import PagesHeader from "../layout/PagesHeader";

export default function Portflio() {
  let lang = useSelector((state) => {
    return state.lang;
  });
  const { langg, setLang } = useContext(LangContext);
  return (
    <>
      <PagesHeader />
      <div>lang from redux {lang.lang}</div>
      <div>lang from context {langg}</div>
      <button
        className="btn btn-primary"
        onClick={() => setLang(langg == "en" ? "ar" : "en")}
      >
        change Lang
      </button>
    </>
  );
}
