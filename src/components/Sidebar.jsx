import { useRef, useEffect } from 'react';

export function SideBar() {
    const btnToggleRef = useRef(null);
    const sidebarRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        const btnToggle = btnToggleRef.current;
        const sidebar = sidebarRef.current;
        const icon = iconRef.current;

        const handleToggle = () => {
            sidebar.classList.toggle('active');

            if (sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        };

        btnToggle.addEventListener('click', handleToggle);

        return () => {
            btnToggle.removeEventListener('click', handleToggle);
        };
    }, []);

    return (
        <div id="sidebar" ref={sidebarRef}>
            <div className="toggle-btn" ref={btnToggleRef}>
                <span><i className="fa-solid fa-bars" ref={iconRef}></i></span>
            </div>
            <ul>
                <li className="menutitle">
                    <p style={{ fontSize: '50px', padding: '0', margin: '0' }}>Menu</p>
                </li>
                <li><a href="#maps">MAPAS</a></li>
                <li><a href="#ghosts">FANTASMAS</a></li>
                <li><a href="#objects">OBJETOS</a></li>
                <li><a href="#cursed_objects">OBJETOS MALDITOS</a></li>
                <li><a href="#tips">CONSEJOS</a></li>
                <li><a href="#guides">VIDEO GUIAS</a></li>
                <li><a href="#requirements">REQUISITOS</a></li>
                <li><a href="#shop">TIENDA</a></li>
            </ul>
        </div>
    );
}