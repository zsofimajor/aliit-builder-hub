document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("sideNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});

var sprintBanner = document.getElementById('sprintBanner');
var sprintBannerClose = document.getElementById('sprintBannerClose');
if (sprintBanner && sprintBannerClose) {
  if (localStorage.getItem('sprintBannerDismissed') === '1') {
    sprintBanner.style.display = 'none';
    document.body.classList.remove('has-banner');
  }
  sprintBannerClose.addEventListener('click', function () {
    sprintBanner.style.display = 'none';
    document.body.classList.remove('has-banner');
    localStorage.setItem('sprintBannerDismissed', '1');
  });
}
