<script>
  export default {}
</script>

<template>
  <header class="header">
    <div class="container header__container">

      <div class="burger-wrap">
        <button class="btn-reset burger" aria-label="Открыть меню">
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </div>

      <nav class="nav header__nav" title="Главное меню">
        <button class="btn-reset nav__close" aria-label="Закрыть меню"></button>

        <ul class="list-reset nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link">О&nbsp;студии</a>
          </li>

          <li class="nav__item">
            <a href="#" class="nav__link">О&nbsp;студии2</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
