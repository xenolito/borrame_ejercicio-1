import signature from './modules/signature.js'
// signature()

let darkMode = JSON.parse(localStorage.getItem('darkmode')) || false

const getdarkMode = () => {

    if (localStorage.getItem('darkmode')){
        darkMode = JSON.parse(localStorage.getItem('darkmode'))
    }
    else {
        localStorage.setItem('darkmode', JSON.stringify(darkMode))
    }
    return darkMode
}

const toggleDarkMode = () => {
    localStorage.setItem('darkmode',JSON.stringify(!getdarkMode()))
    setDarkModeCssClass()
    // getdarkMode() ? document.querySelector('body').classList.add('darkmode') : document.querySelector('body').classList.remove('darkmode')
}

const setDarkModeCssClass = () => {
    getdarkMode() ? document.querySelector('body').classList.add('darkmode') : document.querySelector('body').classList.remove('darkmode')
}

const setDarkModeSwitcher = () => {
    document.querySelectorAll('.darkModeToggle').forEach((el)=>{
        el.addEventListener('click', (e)=>{
            e.preventDefault()
            toggleDarkMode()
        })
    })
    // console.log('DARKMODE', getdarkMode());
}


setDarkModeSwitcher()
//auto set darkmode on load
setDarkModeCssClass()