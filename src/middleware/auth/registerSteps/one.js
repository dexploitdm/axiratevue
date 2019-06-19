export default function({ store, redirect }) {
    console.log('идет проверка')
    if (!store.getters['auth/registerState/isStepOne']) {
        redirect('/register')
    }
}