import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from 'axios'
import VodList from './vodList'
import VodStrip from './vodStrip'

import "./style/home.css"

function Home() {
  const [querys] = useSearchParams();
  const [ar, setAr] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    let searchQ = querys.get("s") || "naruto"
    doApi(searchQ)
  }, [querys]);

  const doApi = async (_searchQ) => {
    let myUrl = `http://www.omdbapi.com/?s=${_searchQ}&apikey=7ab0a339`;
    try {
      let resp = await axios.get(myUrl);
      console.log(resp.data);
      setAr(resp.data.Search)
    }
    catch (err) {
      console.log(err)
      alert(err)
    }
  }
  return (
    <React.Fragment>

      <VodStrip />
      <VodList vod_ar={ar} />

    </React.Fragment>
  )
}

export default Home