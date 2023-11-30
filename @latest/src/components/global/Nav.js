// export const expandAndShowMenu = (toggleId, navId) => {
//     try {
//         const toggle = document.getElementById(toggleId);
//         const nav = document.getElementById(navId);

//         if (toggle && nav) {
//             toggle.addEventListener('click', () => {
//                 nav.classList.toggle('show');
//                 toggle.classList.toggle('bx-x');
//             });
//         }
//     } catch (error) {
//         console.error('Error en expandAndShowMenu:', error);
//     }
// };

// export const handleNavLinkClick = () => {
//     try {
//         const navLink = document.querySelectorAll('.nav__link');

//         function linkAction() {
//             // Active link
//             navLink.forEach(n => n.classList.remove('active'));
//             this.classList.add('active');
//         }

//         navLink.forEach(n => n.addEventListener('click', linkAction));
//     } catch (error) {
//         console.error('Error en handleNavLinkClick:', error);
//     }
// };