import{d as u,h as k,_ as w,e as f,o as i,c as r,a as t,u as d,F as b,r as g,i as y,n as _,t as l,p as S,b as v}from"./index-4ade5b9e.js";import{d as L}from"./Diplom-Frontend-Chasovnikov-7e0fac62.js";const m="education",c="work",x=u("experience",()=>{const n=k([{id:1,isOpen:!1,type:m,timeInterval:"Сентябрь 2003 — июль 2008 [УЧЁБА]",position:"Студент",company:" в Воронежском государственном техническом университете",companyLink:"https://cchgeu.ru/",description:`Получил высшее образование на факультете "Автоматика и
          электромеханика" по специальности "Электропривод и автоматика
          ПУ и ТК"`},{id:2,isOpen:!1,type:c,timeInterval:"Июнь 2017 — февраль 2018 (8 месяцев)",position:"PHP Developer",company:' в веб-студии "Dymov.TECH" (Fingineers)',companyLink:"https://fingineers.ru/",description:`Разработка серверной части приложения
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.teamkraft.net">
            Teamkraft
          </a>.
          Тех. стек: PHP, Laravel, PostgreSQL, Swagger, REST API, Eloquent
          `},{id:3,isOpen:!1,type:c,timeInterval:"Февраль 2018 — август 2019 (1 год 7 месяцев)",position:"Программист PHP",company:' в "ООО ОФИСМАГ"',companyLink:"https://www.officemag.ru/",description:`
        Доработка сайтов:
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.officemag.ru/">
            officemag.ru
          </a>,
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.samsonopt.ru/">
            samsonopt.ru
          </a>,
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.brauberg.com/">
            brauberg.com
          </a>,
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.laima.info/">
            laima.info/
          </a>,
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.sonnen.me/">
            sonnen.me/
          </a> и другие.
          <br>
        Тех. стек: PHP, Laravel, 1C-Битрикс, MySQL, SQL, JavaScript, jQuery, HTML, CSS, unit-тесты`},{id:4,isOpen:!1,type:m,timeInterval:"Декабрь 2022 — август 2023 [УЧЁБА]",position:"Обучающийся",company:' в "Skillbox"',companyLink:"https://skillbox.ru/",description:`Прохождение курса "Frontend-разработчик".
          <br>Тех. стек: VueJS 2/3, JavaScript, HTML, CSS, SCSS, Jest, Cypress
          <br>
          <br>
          <a class="btn-reset btn download-link"
            href="${L}" download>Скачать диплом</a>`},{id:5,isOpen:!0,type:c,timeInterval:"Октябрь 2023 — Июнь 2026 (2 года 9 месяцев)",position:"Веб-разработчик",company:' в ООО "Элком"',companyLink:"https://www.elcomspb.ru/",description:`
        Доработка внутреннего портала
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://portal.elcomspb.ru/">
            portal.elcomspb.ru/
          </a> и основного сайта кампании
          <a class="btn-reset link download-link"
            target="_blank"
            href="https://www.elcomspb.ru">
            elcomspb.ru
          </a>.
          <br>
        Тех. стек: PHP, Laravel, OpenCart, MySQL, PostgreSQL, VueJS2, JavaScript, HTML, CSS
        `}].reverse());function a(s){s.isOpen=!s.isOpen,n.forEach(o=>{o.id!==s.id&&(o.isOpen=!1)})}return{works:n,toggleWork:a}});const h=n=>(S("data-v-41847962"),n=n(),v(),n),P={class:"experience"},C={class:"container experience__container"},I=h(()=>t("h1",{class:"section-title experience__title typewriter"}," Опыт/Образование ",-1)),O=h(()=>t("p",null,"Коммерческий опыт веб‑разработки: 5 лет",-1)),H={class:"timeline-container"},E={key:0,class:"list-reset experience__list"},T=["aria-expanded","aria-controls","onClick"],M=["id"],V={class:"work__title"},J={class:"work__position"},Q=["href"],F=["innerHTML"],N={__name:"ExperienceView",setup(n){const a=x(),{works:s}=f(a);function o(p){a.toggleWork(p)}return(p,R)=>(i(),r("section",P,[t("div",C,[I,O,t("div",H,[d(s).length>0?(i(),r("ul",E,[(i(!0),r(b,null,g(d(s),e=>(i(),r("li",{class:"work",key:e.id},[t("div",{class:_(["timeline-dot",e.type+"-icon"])},null,2),t("button",{type:"button",class:"work__time-interval gradient-text","aria-expanded":e.isOpen,"aria-controls":"work-content-"+e.id,onClick:B=>o(e)},[t("time",null,l(e.timeInterval),1)],8,T),t("div",{class:_(["work__content",{open:e.isOpen}]),id:"work-content-"+e.id},[t("h2",V,[t("span",J,l(e.position),1),t("a",{target:"_blank",href:e.companyLink,class:"work__company"},l(e.company),9,Q)]),t("p",{class:"work__desc",innerHTML:e.description},null,8,F)],10,M)]))),128))])):y("",!0)])])]))}},W=w(N,[["__scopeId","data-v-41847962"]]);export{W as default};
