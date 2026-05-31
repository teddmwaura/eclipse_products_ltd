export function updateUserName() {
    // Get the current user (object, not array)
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const updateUser = document.querySelector('.update-username');

    // If no user logged in or no element, do nothing
    if (!currentUser || !updateUser) return;

    // Update DOM
    updateUser.innerHTML = `
        <p class="text-gray-400 text-sm whitespace-nowrap">${currentUser.userName}</p>
    `;
}
