type HeaderProps = {
    username: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <span>{props.username}</span>
        </header>
    );
};

export default Header;
