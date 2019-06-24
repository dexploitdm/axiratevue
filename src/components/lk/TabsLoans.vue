<template>
    <div class="c-tabs">
        <div class="c-tabs__nav-item c-tabs__nav-item_passed">
            <div class="c-tabs__num"
                v-bind:class="{
                    'c-tabs__nav-item_active': currentNumber == 1,
                    'c-tabs__nav-item_passed': currentNumber == 2 || currentNumber ==3,
                    }"
            >
                1
            </div>
            <div class="c-tabs__title">Параметры <br class="c-tabs__br">займа </div>
        </div>

        <div class="c-tabs__nav-item "
            v-bind:class="{
                'c-tabs__nav-item_active': currentNumber == 2,
                'c-tabs__nav-item_passed': currentNumber ==3,
            }"
        >
            <div class="c-tabs__num">
                    2
            </div>
            <div class="c-tabs__title">Способ <br class="c-tabs__br">получения</div>
        </div>

        <div class="c-tabs__nav-item"
            v-bind:class="{
                'c-tabs__nav-item_active': currentNumber == 3,
            }"
        >
            <div class="c-tabs__num">
                        3
            </div>
                <div class="c-tabs__title">Подписание <br class="c-tabs__br">документов
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
       return {
            currentNumber: 1
       }
    },
}
</script>
