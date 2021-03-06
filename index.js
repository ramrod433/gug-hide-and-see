const hamburger = document.querySelector('.menu-button');
const menu = document.querySelector('.drop-menu');
const logo = document.querySelector('.logo');
const menuButton = document.querySelector('.menu-button');
navmenu = document.querySelector('.drop-menu ul');

// popup variables
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const popupCloseBtn = document.querySelector('.popup-close');
const projectBtn = document.querySelectorAll('.see-project');

// Validate email
const form = document.querySelector('#contact-form');
const inputEm = document.querySelector('#email');
const inputMs = document.querySelector('#msg');
const inputNm = document.querySelector('#fullname');
const alert = document.querySelector('.error-message');

// Projects
const projects = {
  featureProj: {
    title: 'Multi-post Stories',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'javascript', 'bootstrap', 'ruby on rail'],
    image: 'images/popup/desksnap.png',
    liveDemoLink: '#',
  },
  proj1: {
    title: 'Healthcare System',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'javascript', 'bootstrap', 'ruby on rail'],
    image: 'images/popup/pro1.png',
    liveDemoLink: '#',
    gitLink: '',
  },
  proj2: {
    title: 'School Management System',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'javascript', 'bootstrap', 'ruby on rail'],
    image: 'images/popup/pro2.png',
    liveDemoLink: '#',
    gitLink: '#',
  },
  proj3: {
    title: 'E-commerce Web Application',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'javascript', 'ruby on rail'],
    image: 'images/popup/pro3.png',
    liveDemoLink: '#',
    gitLink: '#',
  },
  proj4: {
    title: 'Hotel Management System',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'javascript', 'ruby on rail', 'bootstrap'],
    image: 'images/popup/pro4.png',
    liveDemoLink: '#',
    gitLink: '',
  },
  proj5: {
    title: 'Cooking and Recipe',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'javascript', 'ruby on rail'],
    image: 'images/popup/pro5.png',
    liveDemoLink: '#',
    gitLink: '#',
  },
  proj6: {
    title: 'Messaging Chat Web',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'javascript', 'ruby on rail'],
    image: 'images/popup/pro6.png',
    liveDemoLink: '#',
    gitLink: '#',
  },
};

// close popup function
const closeModal = () => {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
};
// close popup  set on listener
popupCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// mobile menu events and functions

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  logo.classList.toggle('active');
  menuButton.classList.toggle('active');
});

navmenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  logo.classList.toggle('active');
  menuButton.classList.toggle('active');
});

// project object loop

projectBtn.forEach((button) => {
  button.addEventListener('click', () => {
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // eslint-disable-next-line no-restricted-globals
    const h2 = document.querySelector('.popup h2');
    const p = document.querySelector('.popup p');
    // const liveDemo = document.querySelector('.liveLink');
    // const githubLink = document.querySelector('.gitLink');
    const img = document.querySelector('.image-proj');
    const items = document.querySelectorAll('.popup-list li');
    // eslint-disable-next-line no-restricted-syntax
    for (const project of [...Object.keys(projects)]) {
      if (button.classList.contains(project)) {
        h2.textContent = projects[project].title;
        p.textContent = projects[project].desc;
        img.src = projects[project].image;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < items.length; i += 1) {
          items[i].textContent = projects[project].technologies[i];
        }
      }
    }
  });
});

// form validation
// close popup  if pressed anywhere
document.onclick = (e) => {
  if (e.target.id !== 'id-menu-bar') {
    menu.classList.remove('active');
    logo.classList.remove('active');
    menuButton.classList.remove('active');
  } else if (
    e.target.id === 'email'
    || e.target.id === 'fullname'
    || e.target.id === 'msg'
  ) {
    alert.classList.add('hidden');
  }
};

// error message
function alertMsg(msg) {
  alert.classList.remove('hidden');
  alert.textContent = msg;
}
// preserve local

form.addEventListener('submit', (e) => {
  const lowerCaseReg = /[A-Z]/;
  if (lowerCaseReg.test(inputEm.value) === true) {
    alertMsg('Please use small letters for email address');
    e.preventDefault();
  }
  const msg = {
    email: inputEm.value,
    name: inputNm.value,
    msg: inputMs.value,
  };
  localStorage.setItem('msg', JSON.stringify(msg));
});

if (localStorage.getItem('msg') != null) {
  const userMsg = JSON.parse(localStorage.getItem('msg'));
  inputEm.value = userMsg.email;
  inputNm.value = userMsg.name;
  inputMs.value = userMsg.msg;
}

form.addEventListener('input', () => {
  const msg = {
    email: inputEm.value,
    name: inputNm.value,
    msg: inputMs.value,
  };
  localStorage.setItem('msg', JSON.stringify(msg));
});
