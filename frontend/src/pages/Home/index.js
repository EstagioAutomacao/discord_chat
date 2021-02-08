import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";

function Home(props) {
  const history = useHistory();
  const { user } = props;
  useEffect(() => {
    if (!user.userName) {
      history.push("/");
    }
  }, []);
  return <Layout {...props} />;
}

export default Home;
