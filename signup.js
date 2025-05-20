function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days*24*60*60*1000));
      document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
    }

    document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const fname = document.getElementById("fname").value;
      const lname = document.getElementById("lname").value;
      const sex = document.querySelector('input[name="sex"]:checked').value;
      const reason = document.getElementById("reason").value;

      setCookie("firstName", fname, 1);
      setCookie("lastName", lname, 1);
      setCookie("sex", sex, 1);
      setCookie("reason", reason, 1);

      window.location.href = "success.html";
