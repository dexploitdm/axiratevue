export default function ({store, redirect}) {
    if (!store.getters['auth/registerState/isStepTwo']) {
      redirect('/registration')
    } 
  }
