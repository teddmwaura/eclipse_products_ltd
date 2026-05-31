export function logoutJs(){
    const logoutBtn = document.querySelector('.logout-btn')

    if(!logoutBtn) return;

    logoutBtn.addEventListener('click', () =>{
        localStorage.removeItem('currentUser')
        localStorage.removeItem('isAdmin');

        localStorage.clear();

        window.location.href='signup.html';
    })
}