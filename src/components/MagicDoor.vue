<template>
  <div class="magic-door">
    magic-door
  </div>
</template>

<script>
  export default {
    name: 'MagicDoor',

    mounted: function () {
      window.addEventListener("message", function (event) {
        if (event.origin != "http://localhost:8080") {
          // something from an unknown domain, let's ignore it
          return;
        }

        localStorage.setItem("token", JSON.stringify(event.data));
      });
    }
  }
</script>

<style></style>