const elements=document.querySelectorAll("a.tag-list-link");elements.forEach((e=>{e.innerHTML==="#"+pageTagName&&e.classList.add("tag-list-link-selected")}));