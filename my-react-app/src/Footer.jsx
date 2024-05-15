function Footer(){
    // we can combine both the html elements and JS codes
    return(
        <footer>
            <p>
                &copy; {new Date().getFullYear()} Rose's website
            </p>
        </footer>
    );
}

export default Footer;