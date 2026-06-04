function Footer({textColor="white", bgColor=""}) {

    return (
        <footer className={`text-center text-${textColor} p-3 bg-${bgColor}`} >
            <small>&copy; {new Date().getFullYear()} - Fatia Mágica Pizzarias</small>
        </footer>
    );
}

export default Footer;