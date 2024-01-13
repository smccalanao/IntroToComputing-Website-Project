const skillItems = document.querySelectorAll('.skills .skill-col .skill-item .skill');

skillItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the active class from all items
    skillItems.forEach(skillItem => skillItem.classList.remove('active'));

    // Add the active class to the clicked item
    item.classList.add('active');
  });
});
document.getElementById('menu-icon').addEventListener('click', function() {
  var navList = document.querySelector('.navlist');
  navList.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.querySelector('.navlist');

  menuIcon.addEventListener('click', function () {
      navList.classList.toggle('open');
  });
});
