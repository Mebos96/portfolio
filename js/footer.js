const insertFooterText = () => {
    const span = document.querySelector('footer #year');
    const year = new Date().getFullYear();
    span.textContent = `Copyright ${year}, Bartosz Adamczuk`;
}