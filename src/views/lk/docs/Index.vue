<template>
<div class="pltz-layout">
    <SideBarLK 
        navTitle1="Внести платёж" 
        navLink1="#" 
        navTitle2="Получить деньги" 
        navLink2="params/apply-loan" />

    <div class="pltz-layout__content">

        <h1 class="o-content-title">Персональные документы</h1>

                <div class="c-card-cabinet c-card-cabinet_t1">

                    <div class="pltz-content pltz-content_t1">

                        <div class="pltz-content__block c-user-docs">

                            <ul class="c-user-docs__list">
                                <li class="c-user-docs__item">
                                    <a href="#" class="c-user-docs__link">Информация об обработке персональных данных</a>
                                </li>
                                <li class="c-user-docs__item">
                                    <a href="#" class="c-user-docs__link">Согласие на КИ</a>
                                </li>
                                <li class="c-user-docs__item">
                                    <a href="#" class="c-user-docs__link">Подтверждение согласия</a>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

                <h2 class="o-content-title">Документы по займам</h2>

                <div class="c-card-cabinet">

                    <div class="pltz-content pltz-content_t1">

                        <div class="o-content-h2 o-content-h2_feat o-content-h2_info">
                            <span>Заём «До зарплаты»</span>
                            <span class="o-content-h2__descr">
                                № 9483111
                            </span>
                        </div>

                        <div class="pltz-content__block">

                            <div class="c-user-docs">
                                <ul class="c-user-docs__list">
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Справка об исполнении договора.pdf</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Согласие на КИ</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Подтверждение согласия</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Подтверждение согласия</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="c-card-cabinet">

                    <div class="pltz-content pltz-content_t1">

                        <div class="o-content-h2 o-content-h2_feat o-content-h2_info">
                            <span>Заём «До зарплаты2»</span>
                            <span class="o-content-h2__descr">
                                № 9483112
                            </span>
                        </div>

                        <div class="pltz-content__block">

                            <div class="c-user-docs">
                                <ul class="c-user-docs__list">
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Справка об исполнении договора.pdf</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Согласие на КИ</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Подтверждение согласия</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Подтверждение согласия</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="c-card-cabinet c-card-cabinet_t1">

                    <div class="pltz-content pltz-content_t1">

                        <div class="o-content-h2 o-content-h2_feat o-content-h2_info">
                            <span>Заём «До зарплаты3»</span>
                            <span class="o-content-h2__descr">
                                № 9483113
                            </span>
                        </div>

                        <div class="pltz-content__block">

                            <div class="c-user-docs">
                                <ul class="c-user-docs__list">
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Справка об исполнении договора.pdf</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Согласие на КИ</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Подтверждение согласия</a>
                                    </li>
                                    <li class="c-user-docs__item">
                                        <a href="#" class="c-user-docs__link">Подтверждение согласия</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
    </div>
</div>
</template>
<script>
import SideBarLK from '@/components/lk/SideBarLK'
export default {
    data() {
        return {
            errors: [],
        }
    },
    components: {
        SideBarLK
    },
    created() {
        window.document.title = "Axirate | LK | Документы";
    }
}
</script>
