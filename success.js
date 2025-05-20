function getCookie(name) {
      const decoded = decodeURIComponent(document.cookie);
      const parts = decoded.split('; ');
      for (let part of parts) {
        if (part.startsWith(name + "=")) {
          return part.split('=')[1];
        }
      }
      return "";
    }

    document.getElementById("fullName").textContent =
      getCookie("firstName") + " " + getCookie("lastName");
    document.getElementById("sex").textContent = getCookie("sex");
    document.getElementById("reason").textContent = getCookie("reason");
