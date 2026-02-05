<script>
const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-list');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
</script>
