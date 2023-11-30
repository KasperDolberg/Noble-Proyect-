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

<<<<<<< HEAD
//         navLink.forEach(n => n.addEventListener('click', linkAction));
//     } catch (error) {
//         console.error('Error en handleNavLinkClick:', error);
//     }
// };
=======
        navLink.forEach(n => n.addEventListener('click', linkAction));
    } catch (error) {
        console.error('Error en handleNavLinkClick:', error);
    }
};
>>>>>>> e4986bf6ced4b4131cc7f5d4a38b6371a12f0ce3
