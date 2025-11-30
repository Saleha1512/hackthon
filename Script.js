function login() {
  let user = document.getElementById("userType").value;
  if (user === "teacher") {
    window.location.href = "teacher.html";
  } else {
    window.location.href = "student.html";
  }
}

