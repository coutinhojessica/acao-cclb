export function iniciarHeader() {
    const btnMobile = document.querySelector('.iconMobile');
    let navBar = document.querySelector('.navBar');
    btnMobile.addEventListener('click', () => {
        navBar.classList.toggle('activeMenu');
    })
}
