import './index.scss';

const Footer = () => {
    const socialIcons = ['github','instagram','linkedin','gmail'];
    return(
        <div className="footer__wrap">
             <div className="container footer__container">
            <div className="footer__left">Manohar</div>
            <div className="footer__right">
                {socialIcons.map(item => (
                    <i style={{backgroundImage:`var(--${item}-img)`}}></i>
                ))}
            </div>
            </div>
        </div>
       
    )
}
export default Footer;