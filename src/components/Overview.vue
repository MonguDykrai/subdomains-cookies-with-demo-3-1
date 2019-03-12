<template>
  <div class="overview">overview</div>
</template>
  
<script>
import Cookies from "cookies-js";

export default {
  name: "overview",

  beforeRouteEnter(to, from, next) {
    // if (Cookies.get("token")) {
    //   next();
    // } else {
    //   location.href = "http://localhost:8080";
    // }

    const locationHref = "http://localhost:8080";

    const URL = "http://localhost:3000/login-verify";

    fetch(URL, {
      method: "POST",
      credentials: "include",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        const { statusMsg, statusCode } = data;

        if (statusCode == 401) {
          location.href = locationHref;
        } else if (statusCode == 200) {
          next();
        }
      })
      .catch(err => {
        if (err) {
          location.href = locationHref;
        }
      });
  },

  created: function() {}
};
</script>
  
  <style></style>