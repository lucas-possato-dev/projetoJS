function initMenuTransition() {

  const sections = document.querySelectorAll('.sidemenu a[href^="#"]');
  const sectionsContent = document.querySelectorAll('.main section');
  
  for (let i = 1; i < sectionsContent.length; i++) {
    sectionsContent[i].classList.add('inativo');
  }

  console.log(sectionsContent.length);

  function showContent(event) {
    sectionsContent.forEach((sectionC) => {
      sectionC.classList.add('inativo');
    })
    event.preventDefault();
    const sideHref = event.currentTarget.getAttribute('href');
    const section = document.querySelector(sideHref);
    section.classList.toggle('inativo');
  }

  sections.forEach((section) => {
    section.addEventListener('click', showContent);
  })
}
initMenuTransition();
