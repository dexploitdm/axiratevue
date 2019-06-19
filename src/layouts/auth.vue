<template>
  <div class="auth">

      <div class="navAll" @click="e => e.target.classList.toggle('active')" >
          menu
            <div class="navigate-tools">
                <div class="fixed-menu">
                <p>identification layout</p>
                <router-link active-class="is-active" to="/login" exact>Вход</router-link>
                <router-link active-class="is-active" to="/register" exact>Регистрация</router-link>

                <router-link active-class="is-active" to="/register/passport-data" exact>Паспорт дан.</router-link>
                <router-link active-class="is-active" to="/register/reg-address" exact>Адрес регистрации</router-link>
              </div>
            </div>
        </div>


    <div class="pltz-header pltz-header_t1 js-header">
        <div class="pltz-grid pltz-grid_wide">
            <div class="pltz-header__inner">
                <a href="#" class="o-pltz-logo">Platiza</a>

                <nav class="pltz-header__menu c-top-menu js-top-menu">
                    <ul class="c-top-menu__list">
                        <li class="c-top-menu__item">
                            <a href="#" class="c-top-menu__link">Войти</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    </div>



    <router-view/>
    <!-- content -->

    
    <div class="pltz-footer-t1 pltz-footer-t1_x-huge">
        <div class="pltz-grid pltz-grid_wide">
            <div class="pltz-footer-t1__inner">

                <div class="pltz-footer-t1__line-min">

                    <div class="pltz-footer-t1__info">
                        © 2011-2018 Микрофинансовая компания «Платиза.ру» <br>
                        (общество с ограниченной ответственностью). <br>
                        Все авторские права защищены
                    </div>
                    <div class="pltz-footer-t1__info">
                        Служба поддержки: 8 800 200 38 39 <br>с 6.00 до 00.00 Мск, без выходных
                    </div>

                    <div class="pltz-footer-t1__info">
                        <a href="mail-reg.php" class="o-pltz-btn o-pltz-btn_t3">Написать сообщение</a>
                        <a href="order-call-reg.php" class="o-pltz-btn o-pltz-btn_t3">Заказать звонок</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
    <div class="pltz-footer-t1">
          <div class="pltz-grid">
              <div class="pltz-footer-t1__inner">

                  <div class="pltz-footer-t1__line-min">

                      <div class="pltz-footer-t1__info">
                          © 2011-2018 Микрофинансовая компания «Платиза.ру» <br>
                          (общество с ограниченной ответственностью). <br>
                          Все авторские права защищены
                      </div>

                      <div class="pltz-footer-t1__info">
                          Служба поддержки: 8 800 200 38 39 <br>с 6.00 до 00.00 Мск, без выходных
                      </div>

                  </div>

                  <div class="pltz-footer-t1__line-min">

                      <div class="pltz-footer-t1__info">
                          <a href="mail-reg.php" class="o-pltz-btn o-pltz-btn_t3">Написать сообщение</a>
                      </div>

                      <div class="pltz-footer-t1__info">
                          <a href="order-call-reg.php" class="o-pltz-btn o-pltz-btn_t3">Заказать звонок</a>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  </div>
</template> 

<script>
import '../assets/css/vendors_registration.css'
import '../assets/css/registration.css'
export default { 
    
}
</script>


<style lang="scss" scoped>
 .auth {
        padding: 0;
        position: relative;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
  }
  .navigate-tools {
      display: none;
      position: fixed;
      left: 0;
      text-align: center;
      z-index: 9999;
      cursor: default;
    .fixed-menu {
        max-width: 300px;
        margin: 0 auto;
        background-color: white;
        border-top-right-radius: 30px;
        cursor: default;
        border: 2px solid #4caf50;
        a {
          color: #333;
          text-decoration: none;
          cursor: pointer;
          display: block;
          padding: 3px 23px;
        }
    }
  }
  .navAll {
    z-index: 99999;
    position: absolute;
    color: #000;
    padding: 5px 7px;
    cursor: pointer;
    background-color: white;
    transition: 0.5s;
  }
  .navAll.active {
      border-bottom-right-radius: 10px;
  }
  .navAll.active .navigate-tools {
    display: block;
  }
</style>



